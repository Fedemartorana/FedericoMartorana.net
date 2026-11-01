/* Classic worker: inference stays off the rendering thread. All assets are local. */
let detector,segmenter,samplePortrait,surface,pixels,maxPoints=12000;
self.onmessage = async ({data}) => {
  try {
    if (data.type === 'init') {
      const {FaceLandmarker, ImageSegmenter, FilesetResolver} = await import('./vendor/mediapipe/vision_bundle.mjs');
      const files = await FilesetResolver.forVisionTasks(new URL('./vendor/mediapipe/wasm', self.location.href).href);
      detector = await FaceLandmarker.createFromOptions(files, {
        baseOptions: {modelAssetPath: new URL('./vendor/mediapipe/face_landmarker.task', self.location.href).href, delegate: 'CPU'},
        runningMode: 'VIDEO', numFaces: 1,
        minFaceDetectionConfidence: .5, minFacePresenceConfidence: .5, minTrackingConfidence: .5
      });
      try{
        ({samplePortrait}=await import('./portrait-points.mjs'));
        if(typeof OffscreenCanvas==='undefined')throw new Error('OffscreenCanvas unavailable');
        surface=new OffscreenCanvas(224,168);pixels=surface.getContext('2d',{willReadFrequently:true});
        maxPoints=data.maxPoints || 12000;
        segmenter=await ImageSegmenter.createFromOptions(files,{
          baseOptions:{modelAssetPath:new URL('./vendor/mediapipe/selfie_multiclass_256x256.tflite',self.location.href).href,delegate:'CPU'},
          runningMode:'VIDEO',outputCategoryMask:true,outputConfidenceMasks:false
        });
      }catch(error){console.warn('Detailed portrait unavailable; retaining face mesh:',error.message);}
      self.postMessage({type: 'ready', detailed:!!segmenter, connections: FaceLandmarker.FACE_LANDMARKS_TESSELATION});
    } else if (data.type === 'frame') {
      try {
        const result = detector.detectForVideo(data.bitmap, data.time);
        const points=result.faceLandmarks[0] || null;
        let portrait=null;
        if(points && segmenter){
          try{
            const width=224,height=Math.round(width*data.bitmap.height/data.bitmap.width);
            if(surface.height!==height)surface.height=height;
            pixels.drawImage(data.bitmap,0,0,width,height);
            const rgba=pixels.getImageData(0,0,width,height).data;
            segmenter.segmentForVideo(data.bitmap,data.time,result=>{
              const mask=result.categoryMask;
              portrait=samplePortrait(rgba,width,height,mask.getAsUint8Array(),mask.width,mask.height,points,maxPoints);
            });
          }catch(error){segmenter.close();segmenter=null;console.warn('Portrait fallback:',error.message);}
        }
        self.postMessage({type:'face',points,portrait},portrait?[portrait.points.buffer]:[]);
      } finally { data.bitmap.close(); }
    }
  } catch (error) {
    self.postMessage({type: 'error', message: String(error.message || error)});
  }
};
