import os
import sys
import time
from playwright.sync_api import sync_playwright
from PIL import Image

def capture(url, output_path, width=1440, height=900, wait_time=2):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": width, "height": height},
            device_scale_factor=1
        )
        page = context.new_page()
        page.goto(url, wait_until="networkidle")
        time.sleep(wait_time)
        page.screenshot(path=output_path, full_page=True)
        browser.close()
    print(f"Captured {url} -> {output_path}")

def make_comparison(ref_path, current_path, output_top, output_bottom=None):
    ref_img = Image.open(ref_path)
    cur_img = Image.open(current_path)

    # Standardize width to 1440
    ref_w, ref_h = ref_img.size
    cur_w, cur_h = cur_img.size
    
    target_w = 1440
    ref_scaled_h = int(ref_h * (target_w / ref_w))
    cur_scaled_h = int(cur_h * (target_w / cur_w))
    
    ref_resized = ref_img.resize((target_w, ref_scaled_h), Image.Resampling.LANCZOS)
    cur_resized = cur_img.resize((target_w, cur_scaled_h), Image.Resampling.LANCZOS)

    # Top half comparison (first 1600px of height or max)
    slice_h = min(1600, ref_scaled_h, cur_scaled_h)
    
    top_ref = ref_resized.crop((0, 0, target_w, slice_h))
    top_cur = cur_resized.crop((0, 0, target_w, slice_h))
    
    comp_top = Image.new("RGB", (target_w * 2, slice_h))
    comp_top.paste(top_ref, (0, 0))
    comp_top.paste(top_cur, (target_w, 0))
    comp_top.save(output_top)
    print(f"Saved comparison top to {output_top}")

    if output_bottom and cur_scaled_h > slice_h:
        bot_ref = ref_resized.crop((0, slice_h, target_w, min(slice_h * 2, ref_scaled_h)))
        bot_cur = cur_resized.crop((0, slice_h, target_w, min(slice_h * 2, cur_scaled_h)))
        rem_h = max(bot_ref.size[1], bot_cur.size[1])
        comp_bot = Image.new("RGB", (target_w * 2, rem_h), color=(10, 10, 15))
        comp_bot.paste(bot_ref, (0, 0))
        comp_bot.paste(bot_cur, (target_w, 0))
        comp_bot.save(output_bottom)
        print(f"Saved comparison bottom to {output_bottom}")

if __name__ == "__main__":
    page_name = sys.argv[1] if len(sys.argv) > 1 else "home"
    
    urls = {
        "home": "http://localhost:3000/",
        "profiles": "http://localhost:3000/?page=profiles",
        "vp-catalog": "http://localhost:3000/?page=vp-catalog",
        "vp": "http://localhost:3000/?page=vp",
        "rankup": "http://localhost:3000/?page=rankup",
        "rentals": "http://localhost:3000/?page=rentals",
        "coaching": "http://localhost:3000/?page=coaching",
        "auctions": "http://localhost:3000/?page=auctions",
        "services": "http://localhost:3000/?page=services",
    }
    
    refs = {
        "home": r"C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\.user_uploaded\media_1790095363501.jpg",
        "vp": r"C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\.user_uploaded\media_1790095371529.jpg",
        "rankup": r"C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\.user_uploaded\media_1790095383028.jpg",
        "services": r"C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\.user_uploaded\media_1790095391491.jpg",
        "profiles": r"C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\.user_uploaded\media_1789733196998.jpg",
        "vp-catalog": r"C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\.user_uploaded\media_1789733196988.jpg",
    }
    
    target_url = urls.get(page_name, "http://localhost:3000/")
    out_capture = f"current_{page_name}.png"
    out_mobile = f"current_{page_name}_mobile.png"
    out_top = f"comp_{page_name}_top.png"
    out_bottom = f"comp_{page_name}_bottom.png"
    
    # Capture Desktop 1440px
    capture(target_url, out_capture, width=1440, height=900)
    # Capture Mobile 390px
    capture(target_url, out_mobile, width=390, height=844)
    
    ref_file = refs.get(page_name)
    if ref_file and os.path.exists(ref_file):
        make_comparison(ref_file, out_capture, out_top, out_bottom)

    # Copy to artifacts directory
    import shutil
    art_dir = r"C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec"
    for f in [out_capture, out_mobile, out_top, out_bottom]:
        if os.path.exists(f):
            shutil.copy2(f, os.path.join(art_dir, f))
    print("Copied images to artifacts directory")
