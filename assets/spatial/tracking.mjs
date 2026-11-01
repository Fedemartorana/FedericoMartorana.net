import {measureHead, headOffset} from './head-pose.mjs';
import {drawPortrait} from './portrait-draw.mjs';

export function createHeadTracker({video, mesh, onState, onPose}) {
  const context = mesh.getContext('2d');
  let generation = 0, session = null, origin = null, portraitFrame=null;

  function clearMesh() { context.clearRect(0, 0, mesh.width, mesh.height); }
  function stop(message = 'Camera off · use the mouse') {
    generation++;
    if (session) {
      clearTimeout(session.timeout);
      cancelAnimationFrame(session.raf);
      session.worker.terminate();
      session.stream?.getTracks().forEach(track => track.stop());
    }
    session = null; origin = null; portraitFrame=null;
    video.pause(); video.srcObject = null;
    clearMesh(); onPose(null); onState('off', message);
  }
  function draw(points, connections) {
    clearMesh();
    // Frame the face itself, rather than shrinking the whole webcam image.
    // Restore the video's aspect ratio before fitting to keep facial proportions.
    const ratio = video.videoWidth / video.videoHeight;
    const xs = points.map(p => (1-p.x)*ratio), ys = points.map(p => p.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const scale = .88*Math.min(mesh.width/Math.max(maxX-minX,.01), mesh.height/Math.max(maxY-minY,.01));
    const centerX = (minX+maxX)/2, centerY = (minY+maxY)/2;
    const point = p => [mesh.width/2+((1-p.x)*ratio-centerX)*scale, mesh.height/2+(p.y-centerY)*scale];
    context.strokeStyle = '#aaaaa6'; context.lineWidth = 1.1;
    context.beginPath();
    for (const {start, end} of connections) {
      context.moveTo(...point(points[start])); context.lineTo(...point(points[end]));
    }
    context.stroke(); context.fillStyle = '#eeeeea';
    for (const p of points) { const [x,y] = point(p); context.fillRect(x-1.1,y-1.1,2.2,2.2); }
  }
  async function start() {
    stop();
    const id = generation;
    if (!isSecureContext || !navigator.mediaDevices?.getUserMedia || !window.Worker || !window.createImageBitmap) {
      onState('off', 'Camera unavailable here · open in Safari or Chrome via HTTPS / localhost'); return;
    }
    onState('loading', 'Allow camera access in your browser…');
    try {
      // Start permission request from the explicit activation, before loading the model.
      const stream = await navigator.mediaDevices.getUserMedia({audio: false, video: {
        facingMode: 'user', width: {ideal: 640}, height: {ideal: 480}, frameRate: {ideal: 24, max: 30}
      }});
      if (id !== generation) { stream.getTracks().forEach(track => track.stop()); return; }
      let worker;
      try { worker = new Worker(new URL('./face-worker.js?v=20261101-portrait', import.meta.url)); }
      catch (error) { stream.getTracks().forEach(track => track.stop()); throw error; }
      const current = session = {worker, stream, raf: 0, timeout: 0, busy: false, lastTime: -Infinity, videoTime: -1, tracked: false, misses: 0};
      video.srcObject = stream;
      for (const track of stream.getVideoTracks()) track.addEventListener('ended', () => {
        if (session === current) stop('Camera disconnected · use the mouse');
      });
      await video.play();
      if (id !== generation) return;
      onState('loading', 'Loading local face tracking…');
      current.timeout = setTimeout(() => { if (session === current) stop('Tracking took too long · try Enable camera again'); }, 45000);
      worker.onerror = () => { if (session === current) stop('Tracking unavailable · use the mouse or retry'); };
      worker.onmessage = ({data}) => {
        if (session !== current) return;
        if (data.type === 'error') { console.error('Local face tracking:', data.message); stop('Tracking unavailable · use the mouse or retry'); return; }
        if (data.type === 'ready') {
          current.interval=data.detailed ? (innerWidth<600 ? 140 : 100) : 66;
          clearTimeout(current.timeout); current.connections = data.connections;
          onState('searching', 'Look at the screen · finding your face');
          current.raf = requestAnimationFrame(tick);
        } else if (data.type === 'face') {
          clearTimeout(current.timeout); current.busy = false;
          const pose = data.points && measureHead(data.points);
          if (pose) {
            current.misses = 0;
            origin ||= pose;
            if(data.portrait)portraitFrame=drawPortrait(context,mesh.width,mesh.height,data.portrait,portraitFrame);
            else {portraitFrame=null;draw(data.points, current.connections);}
            onPose(headOffset(pose, origin));
            if (!current.tracked) onState('tracking', 'Head tracking live · Recenter to calibrate');
            current.tracked = true;
          } else {
            // Brief gaps during a quick turn should not reset calibration or flicker.
            if (++current.misses < 3) return;
            clearMesh(); onPose(null); origin = null;portraitFrame=null;
            if (current.tracked) onState('searching', 'Face not visible · mouse available');
            current.tracked = false;
          }
        }
      };
      async function tick(time) {
        if (session !== current) return;
        current.raf = requestAnimationFrame(tick);
        if (document.hidden || current.busy || time-current.lastTime < current.interval || video.readyState < 2 || video.currentTime === current.videoTime) return;
        current.busy = true; current.lastTime = time; current.videoTime = video.currentTime;
        try {
          const bitmap = await createImageBitmap(video);
          if (session !== current) { bitmap.close(); return; }
          current.timeout = setTimeout(() => { if (session === current) stop('Tracking interrupted · try Enable camera again'); }, 10000);
          worker.postMessage({type: 'frame', bitmap, time}, [bitmap]);
        } catch (error) { if (session === current) stop('Camera frame unavailable · use the mouse or retry'); }
      }
      worker.postMessage({type: 'init',maxPoints:innerWidth<600 ? 6500 : 12000});
    } catch (error) {
      if (id !== generation) return;
      const messages = {
        NotAllowedError: 'Camera blocked · allow access in browser settings, then retry',
        NotFoundError: 'No camera found · use the mouse',
        NotReadableError: 'Camera busy or unavailable · close other camera apps, then retry'
      };
      stop(messages[error.name] || 'Camera unavailable · use the mouse or retry');
    }
  }
  return {start, stop, recenter() { origin = null; onPose(null); }};
}
