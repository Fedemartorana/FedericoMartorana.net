import test from 'node:test';
import assert from 'node:assert/strict';
import {createPointField} from '../point-field.mjs';
test('toolbar height changes do not clear or reframe a stable canvas; rotation does resize it',()=>{
  let clears=0,rect={width:390,height:844},width=300,height=150,lastViewport;
  globalThis.devicePixelRatio=1;globalThis.innerWidth=390;globalThis.innerHeight=700;
  globalThis.document={hidden:false};globalThis.requestAnimationFrame=()=>1;globalThis.cancelAnimationFrame=()=>{};
  const gl=new Proxy({
    getShaderParameter:()=>true,getProgramParameter:()=>true,
    uniform2f:(key,w,h)=>{if(key==='viewport')lastViewport=[w,h];},
    getUniformLocation:(program,name)=>name
  },{get:(target,key)=>key in target?target[key]:(()=>({}))});
  const canvas={getContext:()=>gl,getBoundingClientRect:()=>rect,addEventListener(){},removeEventListener(){},
    get width(){return width;},set width(v){clears++;width=v;},
    get height(){return height;},set height(v){clears++;height=v;}};
  const field=createPointField(canvas,{meta:{aspect:1.5,count:1},bytes:new ArrayBuffer(8)},{onFailure(){}});
  assert.deepEqual(lastViewport,[390,844]);
  const initialClears=clears;
  for(const visibleHeight of [750,800,720,844]){globalThis.innerHeight=visibleHeight;field.resize();}
  assert.equal(clears,initialClears,'toolbar animation must not reset the buffer');
  rect={width:844,height:390};field.resize();assert.deepEqual(lastViewport,[844,390]);
  assert.ok(clears>initialClears);field.dispose();
});
