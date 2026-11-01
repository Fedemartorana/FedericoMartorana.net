import test from 'node:test';
import assert from 'node:assert/strict';
import {measureHead, headOffset} from '../head-pose.mjs';
import {createHeadTracker} from '../tracking.mjs';

function landmarks(dx = 0, dy = 0) {
  const points = Array.from({length:478}, () => ({x:.5+dx,y:.5+dy,z:0}));
  points[33] = {x:.4+dx,y:.4+dy,z:0}; points[263] = {x:.6+dx,y:.4+dy,z:0};
  return points;
}
test('relative movement is mirrored, bounded, and neutral after calibration', () => {
  const origin = measureHead(landmarks());
  assert.ok(headOffset(origin, origin).every(value => value === 0));
  const offset = headOffset(measureHead(landmarks(.05,-.05)), origin);
  assert.ok(offset[0] < -.4 && offset[1] > .4);
  assert.deepEqual(headOffset(measureHead(landmarks(2,-2)), origin), [-1,1]);
  const invalid = landmarks(); invalid[263] = invalid[33];
  assert.equal(measureHead(invalid), null);
});

test('camera lifecycle: detection, face loss, recenter, stop, denial and cancelled permission', async () => {
  const workers = [], rafs = new Map(); let rafId = 0;
  class FakeWorker {
    constructor() {workers.push(this);}
    postMessage(message) {this.lastMessage = message;}
    terminate() {this.terminated = true;}
    emit(data) {this.onmessage({data});}
  }
  Object.assign(globalThis, {isSecureContext:true, Worker:FakeWorker,
    window:{Worker:FakeWorker,createImageBitmap:true}, document:{hidden:false},
    requestAnimationFrame:callback => {rafs.set(++rafId,callback); return rafId;},
    cancelAnimationFrame:id => rafs.delete(id),
    createImageBitmap:async () => ({close(){}})
  });
  let acquire;
  Object.defineProperty(globalThis, 'navigator', {configurable:true,value:{mediaDevices:{getUserMedia:options => {
    assert.equal(options.audio,false); return acquire();
  }}}});
  function stream() {
    const track = {stopped:false,stop(){this.stopped=true;},addEventListener(event,callback){this[event]=callback;}};
    return {track,getTracks:()=>[track],getVideoTracks:()=>[track]};
  }
  const video = {pause(){},play:async()=>{},videoWidth:640,videoHeight:480,readyState:4,currentTime:1};
  const context = {clearRect(){},beginPath(){},moveTo(){},lineTo(){},stroke(){},fillRect(){}};
  const mesh = {width:320,height:240,getContext:()=>context};
  const states = [], poses = [];
  const tracker = createHeadTracker({video,mesh,onState:(...state)=>states.push(state),onPose:pose=>poses.push(pose)});
  const first = stream(); acquire = async()=>first;
  await tracker.start();
  const worker = workers.at(-1);
  assert.equal(worker.lastMessage.type,'init');
  worker.emit({type:'ready',connections:[]});
  worker.emit({type:'face',points:landmarks()});
  assert.ok(poses.at(-1).every(value=>value===0));
  worker.emit({type:'face',points:landmarks(.05,0)});
  assert.ok(poses.at(-1)[0]<-.4);
  tracker.recenter(); worker.emit({type:'face',points:landmarks(.05,0)});
  assert.ok(poses.at(-1).every(value=>value===0));
  worker.emit({type:'face',points:null});
  assert.notEqual(poses.at(-1),null,'one missed frame retains tracking');
  worker.emit({type:'face',points:null}); worker.emit({type:'face',points:null});
  assert.equal(poses.at(-1),null); assert.equal(states.at(-1)[0],'searching');
  tracker.stop();
  assert.ok(first.track.stopped && worker.terminated); assert.equal(video.srcObject,null);
  assert.equal(rafs.size,0);
  const before = poses.length; worker.emit({type:'face',points:landmarks()});
  assert.equal(poses.length,before,'late worker results ignored');
  acquire = async()=>{throw Object.assign(new Error('denied'),{name:'NotAllowedError'});};
  await tracker.start(); assert.match(states.at(-1)[1],/blocked/);
  let resolve; acquire = ()=>new Promise(r=>{resolve=r;});
  const pending = tracker.start(); tracker.stop();
  const late = stream(); resolve(late); await pending;
  assert.ok(late.track.stopped,'stream returned after cancellation must be stopped');
  assert.equal(video.srcObject,null);
  const second = stream(); acquire = async()=>second; await tracker.start();
  second.track.ended(); assert.ok(second.track.stopped); assert.equal(states.at(-1)[0],'off');
});
