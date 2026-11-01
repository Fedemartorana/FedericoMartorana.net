import {loadCloud} from './cloud-data.mjs';
import {createPointField} from './point-field.mjs';

const canvas = document.querySelector('#fm-point-background');
const face = document.querySelector('#fm-face');
const dialog = document.querySelector('#fm-camera-choice');
const accept = document.querySelector('#fm-camera-yes');
const decline = document.querySelector('#fm-camera-no');
const message = document.querySelector('#fm-camera-message');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let field, tracker, tracked = false, camera = false, request = 0, positioning = 0, lastPlacement = 0;

function positionFace() {
  positioning = 0;
  if (!tracked) {face.hidden = true; return;}
  // Prefer the upper right, then another clear corner; never cover existing content.
  face.hidden = false;
  const rect = face.getBoundingClientRect();
  const blockers = Array.from(document.querySelectorAll('.top,.name,.nav-link,.essay,.footer,.archive-title,#unit00-system .unit00-stage')).flatMap(element => {
    const style = getComputedStyle(element);
    if (style.visibility === 'hidden' || style.display === 'none' || Number(style.opacity) === 0) return [];
    const box = element.getBoundingClientRect();
    return box.width && box.height ? [box] : [];
  });
  const narrow = innerWidth <= 860, margin = narrow ? 12 : 18, top = narrow ? 74 : 68;
  const right = innerWidth-margin-rect.width, bottom = innerHeight-margin-rect.height;
  const corner = [[right,top],[margin,top],[right,bottom],[margin,bottom]].find(([x,y]) =>
    y >= margin && !blockers.some(box => x < box.right+8 && x+rect.width > box.left-8 && y < box.bottom+8 && y+rect.height > box.top-8));
  face.hidden = !corner;
  if (corner) {face.style.left=corner[0]+'px';face.style.top=corner[1]+'px';face.style.right='auto';}
}
function schedulePosition() {if (!positioning) positioning = requestAnimationFrame(positionFace);}
function stopCamera() {
  request++; camera = false; tracked = false; face.hidden = true;
  accept.disabled = false;
  tracker?.stop(); field?.neutral();
}
function fail() {
  stopCamera(); field?.dispose(); field = null;
  document.body.classList.remove('fm-points-ready');
  if (dialog.open) dialog.close();
}
function dismiss() {stopCamera(); if (dialog.open) dialog.close();}
decline.addEventListener('click', dismiss);
dialog.addEventListener('cancel', dismiss);
face.addEventListener('click', stopCamera);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') stopCamera();
});
accept.addEventListener('click', async () => {
  const id = ++request;
  camera = true; accept.disabled = true; message.hidden = false;
  message.textContent = 'Consenti l’accesso alla webcam nella richiesta del browser.';
  try {
    const {createHeadTracker} = await import('./tracking.mjs');
    if (id !== request || document.hidden) return;
    tracker ||= createHeadTracker({
      video: document.querySelector('#fm-camera-video'), mesh: face.querySelector('canvas'),
      onPose: pose => {
        const previous = tracked; tracked = Boolean(pose);
        if (pose && !reducedMotion.matches) field?.move(pose);
        else if (previous && !pose) field?.neutral();
        if (tracked !== previous || (tracked && performance.now()-lastPlacement > 250)) {
          lastPlacement = performance.now(); schedulePosition();
        }
      },
      onState: (state, detail) => {
        document.querySelector('#fm-camera-video').dataset.trackingState = state;
        document.querySelector('#fm-camera-video').dataset.trackingStatus = detail;
        if (state === 'off') {
          tracked = false; face.hidden = true;
          // start() first clears any earlier session. Only errors are shown in the existing dialog.
          if (dialog.open && detail !== 'Camera off · use the mouse') {
            camera = false; message.hidden = false;
            message.textContent = 'Webcam non disponibile. Controlla il permesso nel browser, riprova oppure continua senza webcam.';
            accept.disabled = false;
          }
        } else if (state === 'loading') {
          message.textContent = 'Preparazione del riconoscimento sul dispositivo…';
        } else {
          accept.disabled = false; if (dialog.open) dialog.close();
        }
      }
    });
    await tracker.start();
  } catch (error) {
    if (id !== request) return;
    stopCamera(); message.hidden = false;
    message.textContent = 'Webcam non disponibile. Puoi continuare senza webcam.';
  } finally {if (id === request) accept.disabled = false;}
});
window.addEventListener('pointermove', event => {
  if (!field || tracked || reducedMotion.matches || dialog.open || event.pointerType === 'touch') return;
  field.move([event.clientX/innerWidth*2-1,1-event.clientY/innerHeight*2]);
}, {passive:true});
document.documentElement.addEventListener('pointerleave', () => {if (!tracked) field?.move([0,0]);});
window.addEventListener('resize', () => {field?.resize(); schedulePosition();});
window.addEventListener('scroll', schedulePosition, {passive:true});
document.addEventListener('visibilitychange', () => {
  if (document.hidden && camera) stopCamera();
  field?.visibility();
});
window.addEventListener('pagehide', () => {stopCamera(); field?.visibility(); cancelAnimationFrame(positioning); positioning=0;});
window.addEventListener('pageshow', () => field?.visibility());
reducedMotion.addEventListener('change', () => {if(reducedMotion.matches){stopCamera();field?.neutral();}});

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
