# Home spatial background — development integration

The production home markup (`index.html`) mounts a fixed, decorative grayscale point field behind its existing content. Nine render-derived clouds from the supplied `point-clouds.zip` are integrated. No prototype titles, status labels, sliders or view controls are added to the home. This development commit is prepared for the owner to push; preparation is not deployment.

The active background uses a near-black page, denser grayscale points and white typography, as requested after reviewing the first integration. Large type sits directly over the points; small labels use a flat dark backing for legibility. Pointer/head parallax is bounded. The face is a transparent 120 × 128 px overlay (84 × 90 px on narrow screens), preferring the upper right and moving to another clear corner or hiding when foreground content would overlap. It never blocks navigation or scrolling. Existing UNIT00 remains part of the existing site.

## Camera

The initial dialog offers camera or mouse, with no microphone, identity inference, recording, upload or persistent face data. Camera code and locally hosted model/WASM load only after opt-in. The tracking worker is shared with the earlier prototype through its small re-export modules.

Escape, clicking the face, hiding the tab or leaving the page releases the camera stream. Returning to the tab uses the mouse; reload to request camera mode again. Camera errors are displayed only in the initial dialog; runtime failure quietly falls back to mouse. No camera/landmark data is passed to analytics. Localhost analytics are disabled so QA does not contaminate production GA4.

Reduced-motion users receive a static field and no camera prompt. Touch scrolling is not intercepted. A missing/corrupt asset, WebGL failure or context loss leaves the original white page usable.

## Data and future imports

1. Inspect ZIP entries before extraction (reject traversal, absolute paths and symlinks); extract into a separate staging folder. Preserve uploaded sources.
2. Validate every cloud: metadata schema, width × height = count, exactly count × 8 bytes, four little-endian uint16 channels (u,v,inverse-depth,luminance). Inspect depth/preview quality and orientation. Do not execute uploaded scripts automatically.
3. Copy runtime `.bin` and `.json` files into `assets/point-clouds/`; maintain correct relative `source` paths for provenance, or copy sources to an appropriate separate source directory. Preview PNGs and build dependencies are not required by the runtime.
4. Update `assets/point-clouds/manifest.json`: version 1, `default` cloud ID, `clouds` entries with unique `id`, `metadata`, `binary`, paths relative to the manifest. The incoming package manifest is an inventory, not assumed to be this runtime schema: convert explicitly.
5. `selection: "random-per-visit"` loads one cloud on each home entry, avoiding an immediate repeat when session storage is available. There is no automatic slideshow or eager download of all nine clouds. `?cloud=<known-id>` allows deterministic review without visible controls. Per-cloud `motionScale` limits displacement; Overpass uses 0.35 because the supplied depth estimate flattens the glass facade.
6. Check the real home at desktop/tablet/mobile widths and scroll positions, with permission denied, no face, head tracking, camera off, reduced motion and unavailable WebGL. Check existing links, console, accessibility and measured performance before publication. No Lighthouse score is assumed.

## Development checks

`node --test assets/spatial/tests/cloud-data.test.mjs prototypes/nave/tests/tracking.test.mjs`

`/prototypes/nave/tests/worker-smoke.html` tests the relocated actual worker and local model without a camera. Current automated lifecycle checks use mocked camera/worker objects; they do not prove real camera permissions on every browser.

The uploaded ZIP was inspected before extraction and preserved. All nine binary checksums, source checksums, dimensions, UV orientation/coverage and luminance samples were independently checked. Depth maps were nonconstant and the source/depth/point preview contact sheet was visually reviewed. `assets/point-clouds/provenance.json` records the package checksum and limitations. The nave source reuses the existing identical site image; other source copies are retained for provenance and never loaded by the background runtime. Imported scripts were not executed.

Automated data and camera-lifecycle checks pass. Browser checks cover the actual home rendering, foreground links and consent flow; webcam inference uses a synthetic video fixture rather than the owner's camera. No Lighthouse score or universal browser compatibility is claimed. Before pushing, the development branch must contain upstream changes; the owner performs the push in GitHub Desktop.
