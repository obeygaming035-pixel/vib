import os
from PIL import Image, ImageEnhance

def make_avatar(agent_src, output_path, bg_color, crop_box, tint_color=None):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img = Image.open(agent_src).convert("RGBA")
    w, h = img.size
    
    # Crop to head/bust
    x1 = int(w * crop_box[0])
    y1 = int(h * crop_box[1])
    x2 = int(w * crop_box[2])
    y2 = int(h * crop_box[3])
    cropped = img.crop((x1, y1, x2, y2))
    
    # Target size: 400x300 (4:3 aspect)
    target_w, target_h = 400, 300
    
    # Create background with rich gradient
    bg = Image.new("RGBA", (target_w, target_h), bg_color)
    
    # Scale cropped character to fit nicely
    cw, ch = cropped.size
    scale = (target_h * 1.05) / ch
    new_cw = int(cw * scale)
    new_ch = int(ch * scale)
    resized_char = cropped.resize((new_cw, new_ch), Image.Resampling.LANCZOS)
    
    # Paste centered
    paste_x = (target_w - new_cw) // 2
    paste_y = (target_h - new_ch) // 2 + 10
    bg.paste(resized_char, (paste_x, paste_y), resized_char)
    
    bg.convert("RGB").save(output_path, quality=95)
    print(f"Created avatar: {output_path}")

if __name__ == "__main__":
    out_dir = "public/assets/hires/profiles"
    os.makedirs(out_dir, exist_ok=True)
    
    # Card 1: Omen (Purple)
    make_avatar(
        "public/assets/agents/omen.png",
        os.path.join(out_dir, "card1_omen.jpg"),
        bg_color=(25, 12, 45, 255),
        crop_box=(0.15, 0.05, 0.85, 0.45)
    )
    
    # Card 2: Reyna (Blue-Violet)
    make_avatar(
        "public/assets/agents/reyna.png",
        os.path.join(out_dir, "card2_reyna.jpg"),
        bg_color=(15, 20, 50, 255),
        crop_box=(0.2, 0.02, 0.8, 0.45)
    )
    
    # Card 3: Phoenix (Radiant Red/Gold)
    make_avatar(
        "public/assets/agents/phoenix.png",
        os.path.join(out_dir, "card3_phoenix.jpg"),
        bg_color=(55, 12, 18, 255),
        crop_box=(0.18, 0.02, 0.82, 0.42)
    )
    
    # Card 4: Viper (Green/Emerald)
    make_avatar(
        "public/assets/agents/viper.png",
        os.path.join(out_dir, "card4_viper.jpg"),
        bg_color=(10, 35, 25, 255),
        crop_box=(0.2, 0.02, 0.8, 0.45)
    )
    
    # Card 5: Yoru (Cyan/Blue)
    make_avatar(
        "public/assets/agents/yoru.png",
        os.path.join(out_dir, "card5_yoru.jpg"),
        bg_color=(12, 28, 48, 255),
        crop_box=(0.15, 0.05, 0.85, 0.45)
    )
