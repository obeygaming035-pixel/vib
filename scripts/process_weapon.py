import numpy as np
from PIL import Image

def isolate_weapon(src_path, dst_path):
    img = Image.open(src_path).convert("RGBA")
    arr = np.array(img)
    
    # Background is black
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    # Pixels where total brightness is very dark
    brightness = np.maximum(np.maximum(r, g), b)
    
    # Smooth alpha threshold
    alpha = np.clip((brightness.astype(np.float32) - 15.0) / 25.0 * 255.0, 0, 255).astype(np.uint8)
    arr[:, :, 3] = alpha
    
    res = Image.fromarray(arr)
    # Crop to non-transparent bounding box
    bbox = res.getbbox()
    if bbox:
        res = res.crop(bbox)
    res.save(dst_path)
    print(f"Saved weapon -> {dst_path}")

if __name__ == "__main__":
    src = r"C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\prime_vandal_weapon_1789736233487.jpg"
    dst = "public/assets/items/vandal-prime.png"
    isolate_weapon(src, dst)
