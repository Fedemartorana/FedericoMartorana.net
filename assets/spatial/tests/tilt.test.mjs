import test from 'node:test';
import assert from 'node:assert/strict';
import {tiltOffset,createTilt} from '../tilt.mjs';
test('tilt is relative, bounded and follows screen rotation',()=>{
  const origin={beta:60,gamma:0};
  assert.ok(tiltOffset(60,0,origin,0).every(v=>v===0));
  assert.deepEqual(tiltOffset(60,22,origin,0),[1,0]);
  const landscape=tiltOffset(60,22,origin,90);
  assert.ok(Math.abs(landscape[0])<1e-10);assert.equal(landscape[1],-1);
  assert.deepEqual(tiltOffset(160,80,origin,0),[1,-1]);
  assert.ok(Math.abs(tiltOffset(-179,0,{beta:179,gamma:0},0)[1])<.1);
});
test('permission is requested immediately; stop removes listeners and cancels late grants',async()=>{
  let listener,resolve,asked=false,ready=0,unavailable=0;const poses=[];
  globalThis.window={DeviceOrientationEvent:{requestPermission(){asked=true;return new Promise(r=>resolve=r);}},
    addEventListener(type,fn){listener=fn;},removeEventListener(){listener=null;}};
  globalThis.document={hidden:false};globalThis.screen={orientation:{angle:0}};globalThis.isSecureContext=true;
  const tilt=createTilt({onPose:p=>poses.push(p),onReady:()=>ready++,onUnavailable:()=>unavailable++});
  let pending=tilt.start();assert.ok(asked);tilt.stop();resolve('granted');await pending;assert.equal(listener,null);
  pending=tilt.start();resolve('granted');await pending;
  listener({beta:60,gamma:0});listener({beta:60,gamma:11});
  assert.equal(ready,1);assert.equal(poses.at(-1)[0],.5);
  screen.orientation.angle=90;listener({beta:60,gamma:11});assert.equal(ready,2);
  tilt.stop();assert.equal(listener,null);
  pending=tilt.start();resolve('denied');await pending;assert.equal(unavailable,1);assert.equal(listener,null);
});
