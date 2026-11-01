"""Build the browser's compact point data locally; no image upload.

Requires torch, transformers, numpy, Pillow. Model weights are downloaded once.
Usage: python3 prototypes/nave/build_cloud.py
"""
from pathlib import Path
import json
import numpy as np
import torch
from PIL import Image
from transformers import AutoImageProcessor, AutoModelForDepthEstimation

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT.parent.parent / 'img/ermatene/01_Hero_nave.webp'
MODEL = 'depth-anything/Depth-Anything-V2-Small-hf'

def main():
    image = Image.open(SOURCE).convert('RGB')
    processor = AutoImageProcessor.from_pretrained(MODEL)
    model = AutoModelForDepthEstimation.from_pretrained(MODEL)
    device = 'mps' if torch.backends.mps.is_available() else 'cpu'
    model.to(device).eval()
    inputs = processor(images=image, return_tensors='pt').to(device)
    with torch.inference_mode():
        depth = model(**inputs).predicted_depth.cpu()
    width = 640
    height = round(width * image.height / image.width)
    depth = torch.nn.functional.interpolate(depth.unsqueeze(1), size=(height, width), mode='bicubic', align_corners=False)[0, 0].numpy()
    lo, hi = np.percentile(depth, [1, 99])
    depth = np.clip((depth - lo) / (hi - lo), 0, 1)
    gray = np.asarray(image.resize((width, height), Image.Resampling.LANCZOS).convert('L'), dtype=np.float32) / 255
    y, x = np.mgrid[0:height, 0:width]
    rng = np.random.default_rng(42)
    x = (x + .5 + rng.uniform(-.3, .3, x.shape)) / width
    y = (y + .5 + rng.uniform(-.3, .3, y.shape)) / height
    points = np.stack([x, y, depth, gray], axis=-1).reshape(-1, 4)
    # Shuffling allows uniform lower-density rendering on small screens.
    rng.shuffle(points)
    (np.clip(points, 0, 1) * 65535).astype('<u2').tofile(ROOT / 'nave.bin')
    meta = dict(count=len(points), aspect=image.width/image.height, width=width, height=height,
                model=MODEL, method='Estimated relative inverse depth; not a metric survey',
                source='../../img/ermatene/01_Hero_nave.webp', format='uint16 little-endian normalized: u,v,inverse-depth,luminance')
    (ROOT / 'nave.json').write_text(json.dumps(meta, indent=2) + '\n')
    print(json.dumps(meta), flush=True)

if __name__ == '__main__':
    main()
