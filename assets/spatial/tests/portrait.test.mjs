import test from 'node:test';
import assert from 'node:assert/strict';
import {samplePortrait} from '../portrait-points.mjs';
import {drawPortrait} from '../portrait-draw.mjs';
test('portrait retains dark hair and neck, excludes background and obeys point budget',()=>{
  const width=100,height=100,rgba=new Uint8ClampedArray(width*height*4),mask=new Uint8Array(width*height);
  const landmarks=[{x:.4,y:.3},{x:.6,y:.6}];
  mask[20*width+50]=1; // Hair above the tracked face; black pixels must survive.
  mask[70*width+50]=2; // Neck below the chin.
  mask[45*width+50]=3;
  const portrait=samplePortrait(rgba,width,height,mask,width,height,landmarks);
  assert.equal(portrait.points.length/4,3);
  assert.ok(portrait.bounds.top<.3 && portrait.bounds.bottom>.6);
  assert.equal(portrait.points[2],0);
  assert.equal(samplePortrait(rgba,width,height,new Uint8Array(10000),100,100,landmarks),null);
  const budgeted=samplePortrait(rgba,width,height,mask,100,100,landmarks,2);
  assert.equal(budgeted.points.length,8);
  const dots=[];
  const context={clearRect(){},fillRect(...args){dots.push(args);}};
  drawPortrait(context,600,720,portrait,null);
  assert.equal(dots.length,3);assert.ok(dots.every(dot=>dot.every(Number.isFinite)));
});
