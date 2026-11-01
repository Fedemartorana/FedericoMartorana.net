export function drawPortrait(context,width,height,portrait,frame){
  const {points,aspect,bounds}=portrait;
  // Smooth framing independently of the texture to avoid silhouette jitter.
  if(!frame)frame={...bounds};
  else for(const key of ['left','right','top','bottom'])frame[key]+=(bounds[key]-frame[key])*.22;
  const spanX=Math.max((frame.right-frame.left)*aspect,.01),spanY=Math.max(frame.bottom-frame.top,.01);
  const scale=.9*Math.min(width/spanX,height/spanY);
  const cx=(frame.left+frame.right)/2,cy=(frame.top+frame.bottom)/2;
  context.clearRect(0,0,width,height);
  for(let bucket=0;bucket<12;bucket++){
    const shade=Math.round(255*(.28+.72*Math.sqrt((bucket+.5)/12)));
    context.fillStyle=`rgb(${shade},${shade},${shade})`;
    for(let i=0;i<points.length;i+=4){
      if(Math.min(11,Math.floor(points[i+2]*12))!==bucket)continue;
      const x=width/2-(points[i]-cx)*aspect*scale,y=height/2+(points[i+1]-cy)*scale;
      const size=2.1+points[i+3]*1.2;
      context.fillRect(x-size/2,y-size/2,size,size);
    }
  }
  return frame;
}
