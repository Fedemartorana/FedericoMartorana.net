# Nave — spatial prototype

Standalone experiment; production home and analytics are untouched. Optional local head tracking is available after explicit camera consent.

Run from the repository root:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/prototypes/nave/ (fetch requires HTTP, not file://).
Move the pointer, drag on touch, or focus the scene and use arrow keys. Perspective adjusts displacement; Pause freezes the view; Recenter resets it; Source image toggles the reference photograph.

Choose **Attiva webcam** in the opening dialog, then grant browser permission. Keep your face visible until the mesh appears. The first detected position becomes the origin; **Recenter** recalibrates it. **Disable camera** releases the stream. Changing tabs or leaving the page also turns the camera off. Camera errors and sustained face loss allow mouse control; three missed frames are tolerated to avoid flickering during turns. This tracks relative head position and orientation, not precise gaze or identity.

## Data

`build_cloud.py` runs Depth Anything V2 Small locally using torch/transformers; first run downloads weights from https://huggingface.co/depth-anything/Depth-Anything-V2-Small-hf (Apache-2.0). It does not upload the image. This depth model is a build-time dependency only. The scene uses native WebGL. Camera tracking loads the locally bundled MediaPipe assets only after consent and camera permission; there are no external runtime requests.

`nave.bin`: 270,720 points, 8 bytes each (normalized uint16 u, v, relative inverse-depth, luminance), 2,165,760 bytes. Deterministic shuffled ordering permits lower density on narrow screens. `nave.json` contains dimensions and provenance. Original input is the existing Erma Tene WebP, identical to the supplied Desktop file.

This is a 2.5D visible-surface reconstruction from estimated depth, not a measured scan or complete building model. Obscured surfaces cannot be recovered; displacement is intentionally bounded. The shader reprojects points using an off-axis viewpoint and a fixed convergence plane.

## Runtime safeguards

- No analytics, cookies, microphone, recordings, uploads or external runtime requests. Camera frames and landmarks remain in transient device memory.
- No scene animation loop when settled, paused or hidden; reduced-motion starts paused.
- Optional face inference runs in a worker, capped at about 15 frames/second with only one frame in flight. Pause freezes the scene; Disable camera stops inference and capture.
- Camera/model failures, cancellation during permission requests, disconnected cameras and late worker results are handled. Retry is explicit.
- Pixel ratio capped at 1.75; narrow screens render 65% of points.
- Image fallback for absent WebGL, missing data, initialization errors or lost context.
- Keyboard controls, native labeled controls, touch drag and noindex metadata.

## Verification

Earlier scene checks covered narrow and desktop widths: GPU initialization, image comparison, pause, perspective slider, recenter, keyboard displacement, console errors.

Head-tracking checks: `node --test prototypes/nave/tests/tracking.test.mjs` validates movement direction/range, calibration, transient/sustained face loss, stream release, permission denial, cancellation and late results. Open `tests/worker-smoke.html` to exercise the actual local model/WASM/worker with a synthetic blank frame, without accessing any camera. Both passed in the local in-app browser/runtime. An additional temporary test using Google's public MediaPipe portrait fixture detected 478 landmarks and changed the viewpoint after translating the image; its fixture and page were removed after testing.

The consent UI (including 390 px width), mouse/keyboard fallback and absence of console errors were checked. The larger transparent face overlay and complete video-to-worker-to-mesh path were also visually checked using a synthetic canvas video stream of the public sample portrait, without accessing a device. Face proportions are preserved and the face bounds fill the overlay independently of webcam framing. Actual live capture with the user's webcam and a cross-browser Safari/Chrome or physical-phone performance check remain to be verified. No Lighthouse score is claimed. Production home integration remains separate.

## Bundled tracking dependencies

`../../assets/spatial/vendor/mediapipe/` contains the shared `@mediapipe/tasks-vision` **1.2.0** from the npm registry and the official Face Landmarker float16 model, version 1. Package source: https://www.npmjs.com/package/@mediapipe/tasks-vision/v/1.2.0 . Model source: https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task . Apache-2.0 license is included. The browser loads one WASM variant and the model (approximately 18 MB combined for the SIMD version) only for camera mode. Serve WASM as `application/wasm`, modules as JavaScript, and use HTTPS outside localhost. Model/browser compatibility should be rechecked before production integration.
