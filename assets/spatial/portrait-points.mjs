// Visible camera samples only. Depth outside the tracked face is an approximation.
export function samplePortrait(rgba,width,height,mask,maskWidth,maskHeight,landmarks,maxPoints=12000){
  const xs=landmarks.map(p=>p.x),ys=landmarks.map(p=>p.y);
  const left=Math.min(...xs),right=Math.max(...xs),top=Math.min(...ys),bottom=Math.max(...ys);
  const fw=right-left,fh=bottom-top,cx=(left+right)/2;
  const crop={left:Math.max(0,cx-fw*1.05),right:Math.min(1,cx+fw*1.05),top:Math.max(0,top-fh*.48),bottom:Math.min(1,bottom+fh*.9)};
  const samples=[];
  for(let y=Math.floor(crop.top*height);y<Math.ceil(crop.bottom*height);y++){
    for(let x=Math.floor(crop.left*width);x<Math.ceil(crop.right*width);x++){
      const mx=Math.min(maskWidth-1,Math.floor((x+.5)/width*maskWidth));
      const my=Math.min(maskHeight-1,Math.floor((y+.5)/height*maskHeight));
      const category=mask[my*maskWidth+mx];
      if(!category)continue;
      const i=(y*width+x)*4,u=(x+.5)/width,v=(y+.5)/height;
      const luminance=(rgba[i]*.299+rgba[i+1]*.587+rgba[i+2]*.114)/255;
      const nx=(u-cx)/Math.max(fw*.65,.01),ny=(v-(top+bottom)/2)/Math.max(fh*.7,.01);
      const depth=Math.sqrt(Math.max(0,1-nx*nx-ny*ny));
      samples.push(u,v,luminance,depth);
    }
  }
  // Uniform deterministic subsampling preserves dark hair and skin equally.
  const count=Math.min(Math.floor(samples.length/4),maxPoints),points=new Float32Array(count*4);
  for(let n=0;n<count;n++){
    const index=Math.floor(n*(samples.length/4)/count)*4;
    points.set(samples.slice(index,index+4),n*4);
  }
  if(!count)return null;
  const us=[],vs=[];for(let i=0;i<points.length;i+=4){us.push(points[i]);vs.push(points[i+1]);}
  return {points,aspect:width/height,bounds:{left:Math.min(...us),right:Math.max(...us),top:Math.min(...vs),bottom:Math.max(...vs)}};
}
