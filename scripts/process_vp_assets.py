import os
import numpy as np
from PIL import Image

def process_crate(src_path, dst_path):
    img = Image.open(src_path).convert("RGBA")
    w, h = img.size
    arr = np.array(img, dtype=np.float32)
    
    # Left edge fade so text integrates seamlessly
    fade_x = int(w * 0.35)
    mask_x = np.ones((h, w), dtype=np.float32)
    for x in range(fade_x):
        mask_x[:, x] *= (x / fade_x) ** 1.4
        
    # Bottom edge fade
    fade_y = int(h * 0.8)
    mask_y = np.ones((h, w), dtype=np.float32)
    for y in range(fade_y, h):
        mask_y[y, :] *= 1.0 - ((y - fade_y) / (h - fade_y)) ** 1.3
        
    # Top edge fade
    fade_top = int(h * 0.15)
    for y in range(fade_top):
        mask_y[y, :] *= (y / fade_top) ** 1.4
        
    arr[:, :, 3] = arr[:, :, 3] * mask_x * mask_y
    arr = np.clip(arr, 0, 255).astype(np.uint8)
    res = Image.fromarray(arr)
    res.save(dst_path)
    print(f"Saved hero crate -> {dst_path}")

def isolate_coins(src_path, dst_path):
    img = Image.open(src_path).convert("RGBA")
    arr = np.array(img)
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    brightness = np.maximum(np.maximum(r, g), b)
    
    # Background is black
    alpha = np.clip((brightness.astype(np.float32) - 10.0) / 25.0 * 255.0, 0, 255).astype(np.uint8)
    arr[:, :, 3] = alpha
    res = Image.fromarray(arr)
    bbox = res.getbbox()
    if bbox:
        res = res.crop(bbox)
    res.save(dst_path)
    print(f"Saved isolated coins -> {dst_path}")

if __name__ == "__main__":
    crate_src = r"C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\vp_hero_supply_crate_1789736845034.jpg"
    crate_dst = "public/assets/hires/vp_hero_crate.png"
    process_crate(crate_src, crate_dst)
    
    coins_src = r"C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\vp_coins_stack_1789736896668.jpg"
    coins_dst = "public/assets/hires/vp_coins_stack.png"
    isolate_coins(coins_src, coins_dst)
