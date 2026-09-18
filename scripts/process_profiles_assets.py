import os
import numpy as np
from PIL import Image

def fade_heroine(src_path, dst_path):
    img = Image.open(src_path).convert("RGBA")
    w, h = img.size
    
    # Create alpha gradient mask:
    # Left 40% fades out smoothly so text doesn't clash
    # Bottom 20% fades out smoothly
    # Right and Top have subtle fade
    arr = np.array(img, dtype=np.float32)
    
    # X mask
    x_fade_start = int(w * 0.40)
    alpha_x = np.ones((h, w), dtype=np.float32)
    for x in range(x_fade_start):
        factor = (x / x_fade_start) ** 1.5
        alpha_x[:, x] *= factor
        
    # Y mask (bottom fade)
    y_fade_start = int(h * 0.75)
    for y in range(y_fade_start, h):
        factor = 1.0 - ((y - y_fade_start) / (h - y_fade_start)) ** 1.2
        alpha_x[y, :] *= factor
        
    # Top fade subtle
    top_fade = int(h * 0.15)
    for y in range(top_fade):
        factor = (y / top_fade) ** 1.5
        alpha_x[y, :] *= factor

    # Apply to existing alpha
    arr[:, :, 3] = arr[:, :, 3] * alpha_x
    arr = np.clip(arr, 0, 255).astype(np.uint8)
    
    res = Image.fromarray(arr)
    res.save(dst_path)
    print(f"Saved processed heroine -> {dst_path}")

def fade_agent_corner(src_path, dst_path, fade_dir="right", crop_box=None):
    img = Image.open(src_path).convert("RGBA")
    if crop_box:
        img = img.crop(crop_box)
    w, h = img.size
    arr = np.array(img, dtype=np.float32)
    
    mask = np.ones((h, w), dtype=np.float32)
    if fade_dir == "right":
        fade_start = int(w * 0.3)
        for x in range(fade_start, w):
            mask[:, x] *= 1.0 - ((x - fade_start) / (w - fade_start)) ** 1.3
    elif fade_dir == "left":
        fade_start = int(w * 0.7)
        for x in range(fade_start):
            mask[:, x] *= (x / fade_start) ** 1.3
            
    # Bottom fade
    y_bot = int(h * 0.6)
    for y in range(y_bot, h):
        mask[y, :] *= 1.0 - ((y - y_bot) / (h - y_bot)) ** 1.3

    # Top fade
    y_top = int(h * 0.3)
    for y in range(y_top):
        mask[y, :] *= (y / y_top) ** 1.3

    arr[:, :, 3] = arr[:, :, 3] * mask
    arr = np.clip(arr, 0, 255).astype(np.uint8)
    res = Image.fromarray(arr)
    res.save(dst_path)
    print(f"Saved processed agent -> {dst_path}")

if __name__ == "__main__":
    os.makedirs("public/assets/hires", exist_ok=True)
    
    hero_src = r"C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\profiles_crystal_heroine_1789735417272.jpg"
    hero_dst = "public/assets/hires/profiles_heroine.png"
    fade_heroine(hero_src, hero_dst)
    
    # Hooded assassin (zoom to chest and head)
    hooded_src = r"C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\card_guaranteed_hooded_1789735507446.jpg"
    hooded_dst = "public/assets/hires/card_guaranteed_agent.png"
    # Crop to top 65%
    h_img = Image.open(hooded_src)
    hw, hh = h_img.size
    fade_agent_corner(hooded_src, hooded_dst, fade_dir="right", crop_box=(int(hw*0.1), 0, int(hw*0.9), int(hh*0.65)))
    
    # Cyber blue agent
    cyber_src = r"C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\card_public_cyber_1789735556853.jpg"
    cyber_dst = "public/assets/hires/card_public_agent.png"
    cw, ch = Image.open(cyber_src).size
    fade_agent_corner(cyber_src, cyber_dst, fade_dir="left", crop_box=(int(cw*0.05), 0, int(cw*0.95), int(ch*0.85)))
