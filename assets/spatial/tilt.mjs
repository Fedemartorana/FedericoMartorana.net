const delta=(v,o)=>((v-o+540)%360)-180;
export function tiltOffset(beta,gamma,origin,angle){
  const x=delta(gamma,origin.gamma),y=-delta(beta,origin.beta),r=angle*Math.PI/180;
  return [-(x*Math.cos(r)+y*Math.sin(r)),y*Math.cos(r)-x*Math.sin(r)].map(v=>Math.max(-1,Math.min(1,v/22)) || 0);
}
export function createTilt({onPose,onReady,onUnavailable}){
  let generation=0,origin=null,timer=0;
  function stop(){generation++;clearTimeout(timer);window.removeEventListener('deviceorientation',move);origin=null;}
  function move(e){
    if(document.hidden || !Number.isFinite(e.beta) || !Number.isFinite(e.gamma))return;
    const angle=screen.orientation?.angle ?? window.orientation ?? 0;
    if(!origin || origin.angle!==angle){origin={beta:e.beta,gamma:e.gamma,angle};clearTimeout(timer);onReady();}
    onPose(tiltOffset(e.beta,e.gamma,origin,angle));
  }
  async function start(){
    stop();const id=generation;
    try{
      const api=window.DeviceOrientationEvent;
      if(!isSecureContext || !api)throw new Error('Unavailable');
      // Keep the permission request in the original click gesture on iOS.
      if(typeof api.requestPermission==='function' && await api.requestPermission()!=='granted')throw new Error('Denied');
      if(id!==generation)return;
      window.addEventListener('deviceorientation',move,{passive:true});
      timer=setTimeout(()=>{if(id===generation){stop();onUnavailable();}},3500);
    }catch(error){if(id===generation){stop();onUnavailable();}}
  }
  return {start,stop};
}
