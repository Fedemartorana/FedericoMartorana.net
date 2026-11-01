/* Classic worker: inference stays off the rendering thread. All assets are local. */
let detector;
self.onmessage = async ({data}) => {
  try {
    if (data.type === 'init') {
      const {FaceLandmarker, FilesetResolver} = await import('./vendor/mediapipe/vision_bundle.mjs');
      const files = await FilesetResolver.forVisionTasks(new URL('./vendor/mediapipe/wasm', self.location.href).href);
      detector = await FaceLandmarker.createFromOptions(files, {
        baseOptions: {modelAssetPath: new URL('./vendor/mediapipe/face_landmarker.task', self.location.href).href, delegate: 'CPU'},
        runningMode: 'VIDEO', numFaces: 1,
        minFaceDetectionConfidence: .5, minFacePresenceConfidence: .5, minTrackingConfidence: .5
      });
      self.postMessage({type: 'ready', connections: FaceLandmarker.FACE_LANDMARKS_TESSELATION});
    } else if (data.type === 'frame') {
      try {
        const result = detector.detectForVideo(data.bitmap, data.time);
        self.postMessage({type: 'face', points: result.faceLandmarks[0] || null});
      } finally { data.bitmap.close(); }
    }
  } catch (error) {
    self.postMessage({type: 'error', message: String(error.message || error)});
  }
};
