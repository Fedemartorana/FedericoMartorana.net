import {loadCloud} from './cloud-data.mjs';
import {createPointField} from './point-field.mjs?v=20261101-4';
import {createTilt} from './tilt.mjs';

const canvas = document.querySelector('#fm-point-background');
const face = document.querySelector('#fm-face');
const dialog = document.querySelector('#fm-camera-choice');
const accept = document.querySelector('#fm-camera-yes');
const decline = document.querySelector('#fm-camera-no');
const message = document.querySelector('#fm-camera-message');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let field, tracker, tracked = false, camera = false, request = 0, positioning = 0;
const mobileInput=matchMedia('(max-width: 600px), (pointer: coarse)').matches;
let stillFallback=false;
const tilt=createTilt({
  onPose:pose=>{if(!reducedMotion.matches && !camera)field?.move(pose);},
  onReady:()=>{if(dialog.open)dialog.close();decline.disabled=false;},
  onUnavailable:()=>{
    decline.disabled=false;stillFallback=true;decline.textContent='Keep it still';
    message.hidden=false;message.textContent='Tilt unavailable. Check motion permissions, or keep it still.';
  }
});
if(mobileInput){
  decline.textContent="I'll tilt the device";
  document.querySelector('#fm-camera-description').textContent='Move your head. Or tilt your device. Camera and motion processing stay on your device. No recording. No uploads. No microphone.';
  document.querySelector('#fm-camera-help').textContent='Tap your face to stop the camera. Leaving this tab stops camera and tilt. Reload to restart. Tilt may ask for motion access.';
}

function positionFace() {
  positioning = 0;
  if (!tracked) {face.hidden = true; return;}
  // Persistent foreground portrait; only loss of tracking or camera-off hides it.
  face.hidden = false;
  face.style.left='max(18px, env(safe-area-inset-left))';
  face.style.right='auto';
  face.style.top='max(74px, calc(env(safe-area-inset-top) + 54px))';
}
function schedulePosition() {if (!positioning) positioning = requestAnimationFrame(positionFace);}
function stopCamera() {
  request++; camera = false; tracked = false; face.hidden = true;
  accept.disabled = false;
  tracker?.stop(); field?.neutral();
}
function fail() {
  tilt.stop();
  stopCamera(); field?.dispose(); field = null;
  document.body.classList.remove('fm-points-ready');
  if (dialog.open) dialog.close();
}
function dismiss() {tilt.stop();stopCamera(); if (dialog.open) dialog.close();}
decline.addEventListener('click',()=>{
  if(!mobileInput || stillFallback){dismiss();return;}
  stopCamera();decline.disabled=true;message.hidden=false;
  message.textContent='Allow motion access. Then tilt gently.';
  tilt.start();
});
dialog.addEventListener('cancel', dismiss);
face.addEventListener('click', stopCamera);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {tilt.stop();stopCamera();}
});
accept.addEventListener('click', async () => {
  tilt.stop();decline.disabled=false;
  const id = ++request;
  camera = true; accept.disabled = true; message.hidden = false;
  message.textContent = 'Allow camera access in your browser. Your move.';
  try {
    const {createHeadTracker} = await import('./tracking.mjs?v=20261101-portrait');
    if (id !== request || document.hidden) return;
    tracker ||= createHeadTracker({
      video: document.querySelector('#fm-camera-video'), mesh: face.querySelector('canvas'),
      onPose: pose => {
        const previous = tracked; tracked = Boolean(pose);
        if (pose && !reducedMotion.matches) field?.move(pose);
        else if (previous && !pose) field?.neutral();
        if (tracked !== previous) schedulePosition();
      },
      onState: (state, detail) => {
        document.querySelector('#fm-camera-video').dataset.trackingState = state;
        document.querySelector('#fm-camera-video').dataset.trackingStatus = detail;
        if (state === 'off') {
          tracked = false; face.hidden = true;
          // start() first clears any earlier session. Only errors are shown in the existing dialog.
          if (dialog.open && detail !== 'Camera off · use the mouse') {
            camera = false; message.hidden = false;
            message.textContent = mobileInput ? 'Camera unavailable. Try tilting your device instead.' : 'Camera unavailable. Check browser permissions, retry, or use the mouse.';
            accept.disabled = false;
          }
        } else if (state === 'loading') {
          message.textContent = 'Setting up head tracking…';
        } else {
          accept.disabled = false; if (dialog.open) dialog.close();
        }
      }
    });
    await tracker.start();
  } catch (error) {
    if (id !== request) return;
    stopCamera(); message.hidden = false;
    message.textContent = mobileInput ? 'Camera unavailable. Try tilting your device instead.' : 'Camera unavailable. The mouse still works.';
  } finally {if (id === request) accept.disabled = false;}
});
window.addEventListener('pointermove', event => {
  if (mobileInput || !field || tracked || reducedMotion.matches || dialog.open || event.pointerType === 'touch') return;
  field.move([event.clientX/innerWidth*2-1,1-event.clientY/innerHeight*2]);
}, {passive:true});
document.documentElement.addEventListener('pointerleave', () => {if (!mobileInput && !tracked) field?.move([0,0]);});
window.addEventListener('resize', () => {field?.resize(); schedulePosition();});
document.addEventListener('visibilitychange', () => {
  if(document.hidden){tilt.stop();decline.disabled=false;field?.neutral();}
  if (document.hidden && camera) stopCamera();
  field?.visibility();
});
window.addEventListener('pagehide', () => {tilt.stop();stopCamera(); field?.visibility(); cancelAnimationFrame(positioning); positioning=0;});
window.addEventListener('pageshow', () => field?.visibility());
reducedMotion.addEventListener('change', () => {if(reducedMotion.matches){tilt.stop();stopCamera();field?.neutral();}});

async function init() {
  const controller = new AbortController();
  const timeout = setTimeout(()=>controller.abort(),15000);
  try {
    let previous;
    try {previous=sessionStorage.getItem('fm-last-cloud');} catch {} // Optional, no personal data.
    const data = await loadCloud(new URL('../point-clouds/manifest.json',import.meta.url),controller.signal,{
      requested:new URLSearchParams(location.search).get('cloud'), previous
    });
    field = createPointField(canvas,data,{onFailure:fail});
    canvas.dataset.cloud = data.id;
    try {sessionStorage.setItem('fm-last-cloud',data.id);} catch {}
    document.body.classList.add('fm-points-ready');
    // Respect system motion preferences: the background remains static and no camera is requested.
    if (!reducedMotion.matches) dialog.showModal();
  } catch (error) {fail(); console.warn('Spatial background unavailable:',error.message);}
  finally {clearTimeout(timeout);}
}
init();
