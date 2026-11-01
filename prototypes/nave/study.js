/* Standalone WebGL prototype. Optional local camera tracking; no analytics or uploads. */
'use strict';
const canvas = document.querySelector('#scene');
const statusLine = document.querySelector('#status');
const pauseButton = document.querySelector('#pause');
const photoButton = document.querySelector('#photo');
const depthInput = document.querySelector('#depth');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let gl, program, count = 0, aspect = 1, frame = 0, paused = reducedMotion.matches;
let photo = false, lost = false, ready = false;
let target = [0, 0], eye = [0, 0], strength = Number(depthInput.value)/100, lastTime = 0;
let uniforms = {}, buffer;
let tracker, cameraActive = false, headTracked = false, cameraRequest = 0;
const cameraButton = document.querySelector('#camera');
const consent = document.querySelector('#camera-consent');
const hint = document.querySelector('#hint');
function cameraState(state, message){
  cameraActive = state !== 'off';
  cameraButton.textContent = cameraActive ? 'Disable camera' : 'Enable camera';
  cameraButton.setAttribute('aria-pressed', String(cameraActive));
  document.querySelector('#face-panel').hidden = !cameraActive;
  document.querySelector('#face-status').textContent = message;
  hint.textContent = message;
}
function stopCamera(message){
  cameraRequest++;
  if(tracker) tracker.stop(message);
  else cameraState('off', message || 'Camera off · use the mouse');
}
cameraButton.addEventListener('click',()=>{
  if(cameraActive) stopCamera(); else consent.showModal();
});
document.querySelector('#camera-dismiss').addEventListener('click',()=>consent.close());
document.querySelector('#camera-accept').addEventListener('click',async()=>{
  consent.close();
  const request = ++cameraRequest;
  cameraState('loading', 'Preparing camera…');
  try{
    const {createHeadTracker} = await import('./tracking.mjs');
    if(request !== cameraRequest || document.hidden) return;
    tracker ||= createHeadTracker({
      video: document.querySelector('#tracking-video'), mesh: document.querySelector('#face-mesh'),
      onState: cameraState,
      onPose: pose => {
        const wasTracked = headTracked;
        headTracked = Boolean(pose);
        if(pose){if(!paused && !photo){target=pose;wake();}}
        else if(wasTracked){target=[0,0];wake();}
      }
    });
    await tracker.start();
  }catch(error){if(request === cameraRequest) stopCamera('Tracking could not load · use the mouse or retry');}
});

const vertex = `
attribute vec4 point;
uniform vec2 viewport;
uniform vec2 eye;
uniform float aspect;
uniform float strength;
uniform float pixelRatio;
varying float tone;
void main(){
  vec2 uv = vec2(point.x * 2.0 - 1.0, 1.0 - point.y * 2.0);
  // Larger inferred inverse-depth means a nearer surface.
  float distance = 1.0 + (1.0 - point.z) * 3.5;
  vec2 world = uv * vec2(aspect, 1.0) * distance;
  vec2 camera = eye * strength * 1.65;
  vec2 projected = (world - camera) / distance + camera / 2.8;
  float screenAspect = viewport.x / viewport.y;
  float cover = max(1.0, screenAspect / aspect) * 1.06;
  vec2 position = projected * vec2(cover / screenAspect, cover);
  gl_Position = vec4(position, (distance-1.0)/6.0, 1.0);
  gl_PointSize = pixelRatio * (1.05 + point.z * .6);
  tone = pow(point.w, .8);
}`;
const fragment = `
precision mediump float;
varying float tone;
void main(){
  float r = length(gl_PointCoord - .5);
  if(r > .5) discard;
  float edge = 1.0 - smoothstep(.28, .5, r);
  gl_FragColor = vec4(vec3(.13 + tone * .87), edge * .9);
}`;

function compile(type, source){
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source); gl.compileShader(shader);
  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
  return shader;
}
function fail(error){
  stopCamera();
  ready = false; cancelAnimationFrame(frame); frame = 0;
  document.body.classList.remove('ready'); document.body.classList.add('failed');
  statusLine.textContent = 'Point field unavailable · original image shown';
  document.querySelector('#hint').textContent = 'Your browser could not load the 3D study.';
  console.error('Nave prototype:', error);
}
function resize(){
  const ratio = Math.min(devicePixelRatio || 1, 1.75);
  canvas.width = Math.round(innerWidth * ratio); canvas.height = Math.round(innerHeight * ratio);
  if(gl && !lost){gl.viewport(0,0,canvas.width,canvas.height); gl.uniform2f(uniforms.viewport,innerWidth,innerHeight);gl.uniform1f(uniforms.pixelRatio,ratio);}
  wake();
}
function render(time){
  frame = 0;
  if(!ready || lost || photo || document.hidden) return;
  const dt = Math.min((time-lastTime)/1000 || .016, .05); lastTime = time;
  const lerp = 1-Math.exp(-dt*7);
  if(!paused){eye[0] += (target[0]-eye[0])*lerp; eye[1] += (target[1]-eye[1])*lerp;}
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.uniform2f(uniforms.eye,...eye); gl.uniform1f(uniforms.strength,strength);
  gl.drawArrays(gl.POINTS,0,innerWidth<600 ? Math.floor(count*.65) : count);
  document.querySelector('#position').textContent = `X ${eye[0].toFixed(2)} / Y ${eye[1].toFixed(2)}`;
  if(!paused && Math.abs(target[0]-eye[0])+Math.abs(target[1]-eye[1])>.0002) wake();
}
function wake(){if(ready && !frame && !document.hidden && !photo && !lost) frame=requestAnimationFrame(render);}
function move(event){
  if(headTracked || consent.open || paused || photo || (event.pointerType==='touch' && !event.buttons)) return;
  target=[Math.max(-1,Math.min(1,event.clientX/innerWidth*2-1)),Math.max(-1,Math.min(1,1-event.clientY/innerHeight*2))]; wake();
}
function syncPause(){pauseButton.setAttribute('aria-pressed',String(paused));pauseButton.textContent=paused?'Resume':'Pause';}
window.addEventListener('pointermove',event=>{if(!event.target.closest('.controls'))move(event);});
canvas.addEventListener('pointerdown',event=>{canvas.setPointerCapture(event.pointerId);move(event);});
canvas.addEventListener('pointerup',event=>{if(event.pointerType==='touch'){target=[0,0];wake();}});
canvas.addEventListener('pointercancel',()=>{target=[0,0];wake();});
canvas.addEventListener('keydown',event=>{
  const direction={ArrowLeft:[-.2,0],ArrowRight:[.2,0],ArrowUp:[0,.2],ArrowDown:[0,-.2]}[event.key];
  if(!direction || paused || photo)return;
  event.preventDefault();target=target.map((value,index)=>Math.max(-1,Math.min(1,value+direction[index])));wake();
});
document.documentElement.addEventListener('pointerleave',()=>{if(!headTracked){target=[0,0];wake();}});
pauseButton.addEventListener('click',()=>{paused=!paused;syncPause();wake();});
photoButton.addEventListener('click',()=>{photo=!photo;document.body.classList.toggle('photo',photo);photoButton.setAttribute('aria-pressed',String(photo));photoButton.textContent=photo?'Point field':'Source image';wake();});
depthInput.addEventListener('input',()=>{strength=Number(depthInput.value)/100;document.querySelector('#depth-value').textContent=`${depthInput.value}%`;wake();});
document.querySelector('#reset').addEventListener('click',()=>{tracker?.recenter();target=[0,0];eye=[0,0];wake();});
window.addEventListener('resize',resize);
document.addEventListener('visibilitychange',()=>{if(document.hidden){if(cameraActive)stopCamera('Camera off while away · Enable camera to resume');cancelAnimationFrame(frame);frame=0;}else{lastTime=0;wake();}});
reducedMotion.addEventListener('change',event=>{paused=event.matches;syncPause();wake();});
canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();lost=true;fail('WebGL context lost');});
canvas.addEventListener('webglcontextrestored',()=>location.reload());
window.addEventListener('pagehide',()=>{stopCamera();cancelAnimationFrame(frame);frame=0;});
window.addEventListener('pageshow',()=>wake());
syncPause();
consent.showModal();

async function init(){
  try{
    gl=canvas.getContext('webgl',{alpha:false,antialias:false,powerPreference:'low-power'});
    if(!gl)throw new Error('WebGL unavailable');
    const responses=await Promise.all([fetch('nave.json'),fetch('nave.bin')]);
    if(responses.some(r=>!r.ok))throw new Error('Point data unavailable');
    const [meta,bytes]=await Promise.all([responses[0].json(),responses[1].arrayBuffer()]);
    if(bytes.byteLength!==meta.count*8)throw new Error('Invalid point data');
    aspect=meta.aspect;count=meta.count;
    program=gl.createProgram();
    const shaders=[compile(gl.VERTEX_SHADER,vertex),compile(gl.FRAGMENT_SHADER,fragment)];
    shaders.forEach(shader=>gl.attachShader(program,shader));gl.linkProgram(program);
    if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));
    shaders.forEach(shader=>gl.deleteShader(shader));gl.useProgram(program);
    buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Uint16Array(bytes),gl.STATIC_DRAW);
    const attribute=gl.getAttribLocation(program,'point');gl.enableVertexAttribArray(attribute);gl.vertexAttribPointer(attribute,4,gl.UNSIGNED_SHORT,true,8,0);
    for(const name of ['viewport','eye','aspect','strength','pixelRatio'])uniforms[name]=gl.getUniformLocation(program,name);
    gl.uniform1f(uniforms.aspect,aspect);gl.clearColor(.025,.025,.025,1);
    gl.enable(gl.DEPTH_TEST);gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
    ready=true;resize();document.body.classList.add('ready');
    statusLine.textContent=`${(count/1000).toFixed(0)}K points · estimated depth`;
    if(paused)document.querySelector('#hint').textContent='Reduced motion · select Resume to explore';
    wake();
  }catch(error){fail(error);}
}
init();
