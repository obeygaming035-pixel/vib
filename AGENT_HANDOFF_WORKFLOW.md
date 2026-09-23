# VIB ESPORTS PLATFORM — AGENT HANDOFF & WORKFLOW GUIDE

> **ATTENTION INCOMING AGENT (Gemini / Claude / Any Model):**  
> Read this entire document carefully before touching any code. This document outlines the **exact requirements, asset locations, architecture, and visual design rules** demanded by the user for the VIB website.

---

## 1. CORE MISSION & WHAT THE USER ACTUALLY WANTS

### ❌ What the User HATES (Do NOT Do This):
1. **DO NOT crop images into tiny thumbnails and paste them as small stickers inside cards.**
2. **DO NOT add harsh box outlines, rectangular gray/white card borders, or high-contrast borders on dark surfaces.**
3. **DO NOT break existing functionality**: The auction countdown timer **must tick every second**, bidding inputs must work, cart items must be addable, modals must open, and top navigation must navigate to dedicated pages.
4. **DO NOT remove or ruin the 5 Handpicked Featured Profiles** on the Home page (Immortal, Ascendant, Radiant, Diamond, Ascendant).

### ✅ What the User DEMANDS (Strict Requirements):
1. **USE ASSETS AS PROPER BACKGROUNDS**:
   - The 28 images in `public/assets/reference_parts/` are high-resolution widescreen artworks extracted from the design mockups.
   - They **MUST** be used as the **full background / backdrop** of their respective sections or cards (using `absolute inset-0 w-full h-full object-cover` with smooth dark edge feathering).
   - Place all functional text, headings, badges, bullet points, CTA buttons, and interactive inputs **LAYERED DIRECTLY ON TOP** of these atmospheric backgrounds.
2. **ULTRA-DARK CYBERPUNK AESTHETIC**:
   - Deep background: `#05040a`, `#0a0717`, `#120826`.
   - Rich ambient visual density ("more vib more visual noise dark theme").
   - Edge feathering: Always blend edges using CSS `maskImage` (e.g., `maskImage: 'linear-gradient(to right, black 60%, transparent 100%)'` or `maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 95%)'`).
3. **HOME PAGE IS THE MASTER SHOWCASE**:
   - The Home page (`src/components/client/ClientHomePage.tsx`) contains the entire master experience flowing through all 4 reference mockups.
4. **DEDICATED PAGES IN TOP NAV**:
   - When clicking top nav items, each feature also has its own standalone dedicated page:
     - `Home` &rarr; `ClientHomePage.tsx`
     - `Profiles` &rarr; `ClientProfilesPage.tsx`
     - `VP Packs` &rarr; `ClientVPOverviewPage.tsx` / `ClientIndianVPPage.tsx`
     - `Rankup` &rarr; `ClientRankupPage.tsx`
     - `Rentals` &rarr; `ClientRentalsPage.tsx`
     - `Coaching` &rarr; `ClientCoachingPage.tsx`
     - `Auctions` &rarr; `ClientAuctionsPage.tsx`
     - `Services` &rarr; `ClientServicesPage.tsx`

---

## 2. REFERENCE IMAGES DIRECTORY & MAPPINGS

The user provided 4 primary reference mockups located in the workspace artifacts / uploads:
- **Reference 1 (Home Top)**: `C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\.user_uploaded\media_1790095363501.jpg`
  - Featured Profiles &rarr; Social Conversion Banners (Instagram & WhatsApp) &rarr; Sell Your Account ("Turn Your Profile Into Profit").
- **Reference 2 (VP & Urgent Sale & Rentals)**: `C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\.user_uploaded\media_1790095371529.jpg`
  - VIB Urgent Sale Offer &rarr; Regional VP Packs (Indian & PHP) &rarr; Skin Rentals.
- **Reference 3 (Rankup & Skins Exchange & Region Change)**: `C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\.user_uploaded\media_1790095383028.jpg`
  - Rankup & Derank Services &rarr; The Rank Journey (9-tier rank staircase) &rarr; Same Game Higher You &rarr; Valo Skins Exchange &rarr; Stats Row &rarr; Change Region from IND to PHP.
- **Reference 4 (Fresh PHP & Coaching & Auctions)**: `C:\Users\Death\.gemini\antigravity\brain\8d86143e-3841-40b7-8797-2f8f73ba34ec\.user_uploaded\media_1790095391491.jpg`
  - Create a Fresh PHP Profile &rarr; How It Works (1-2-3-4) &rarr; Coaching Program &rarr; VIB Auctions (Bid. Win. Own.) &rarr; Exclusive Deals &rarr; Team VIB Community Podium.

---

## 3. COMPLETE ASSETS CATALOG (`public/assets/reference_parts/`)

| File Name | Resolution | Description | Where It Must Be Used As Background / Backdrop |
| :--- | :--- | :--- | :--- |
| `part_01.png` | 1774 &times; 887 | WhatsApp emerald luminous stage with 3D phone & ribbons | Background for **Join Our WhatsApp Channel** card |
| `part_01_phone.png` | Cropped phone | Clean 3D emerald WhatsApp phone with ribbons | Hero element on right side of WhatsApp card |
| `part_02.png` | 1983 &times; 793 | Full Instagram horizontal banner with neon typography | Backdrop for Instagram promotion |
| `part_03.png` | 1254 &times; 1254 | Instagram vertical poster with 3D phone & hearts | Instagram banner backdrop |
| `part_03_phone.png` | Cropped phone | Clean 3D Instagram smartphone with floating hearts | Hero element on right side of Instagram card |
| `part_04.png` | 1536 &times; 1024 | Instagram 3D logo stage with anime girl | Alternative social community background |
| `part_05.png` | 1536 &times; 1024 | Instagram 3D logo podium "FOLLOW" | Alternative social community background |
| `part_06.png` | 1774 &times; 887 | Cyberpunk girl, VIB jacket, "LIST. SELL. EARN." signs, Rupee coins | **FULL BACKGROUND** for **Sell Your Account With VIB ("Turn Your Profile Into Profit")** |
| `part_07.png` | 1672 &times; 941 | Red hooded assassin, glowing cards, "FAST. SECURE. REAL VALUE." | **FULL BACKGROUND** for **VIB Urgent Sale Offer** |
| `part_08.png` | 1536 &times; 1024 | Giant 3D glowing VIB coins, "VP PACKS", cybernetic pillars | **FULL BACKGROUND** for **VP Packs Hero Hub** |
| `part_09.png` | 1536 &times; 1024 | Indian agent in jacket, Indian flag, glowing India Gate | **FULL BACKGROUND** for **Indian Region VP Card** |
| `part_10.png` | 1983 &times; 793 | Floating weapon cases, neon sniper rifles, "PLAY EXPERIENCE EXPLORE" | **FULL BACKGROUND** for **Skin Rentals Program** |
| `part_11.png` | 1536 &times; 1024 | Agent sitting, Manila skyline at dusk, Philippines flag | **FULL BACKGROUND** for **PHP Region VP Card** |
| `part_12.png` | 2051 &times; 767 | 9-tier glowing rank staircase Iron &rarr; Radiant with lighting | **BACKGROUND / ART** for **The Rank Journey** |
| `part_13.png` | 1536 &times; 1024 | 9 rank emblems hanging on cybernetic banners | Rankup section background element |
| `part_14.png` | 1672 &times; 941 | Champion holding trophy in VIB jacket, "HIGHER SKILLS BIGGER POSSIBILITIES" | **FULL BACKGROUND** for **Rankup & Derank Services Hero** |
| `part_15.png` | 2048 &times; 768 | Circular hologram weapon stage, "TRADE EXCHANGE UPGRADE" | **FULL BACKGROUND** for **Valo Skins Exchange** |
| `part_16.png` | 1983 &times; 793 | Cyberpunk agent on rooftop overlooking neon Manila skyscraper skyline | **FULL BACKGROUND** for **Create a Fresh PHP Profile** |
| `part_17.png` | 1983 &times; 793 | Champion holding trophy with purple haze | Divider background for "SAME GAME. HIGHER YOU." |
| `part_18.png` | 2048 &times; 768 | Twin portal archways (Taj Mahal India left, Manila Philippines right) | **FULL BACKGROUND** for **Change Region: IND to PHP Gateway** |
| `part_19.png` | 1983 &times; 793 | Agent at glowing battle station desk | Alternative Fresh Profile / Account Setup background |
| `part_20.png` | 1983 &times; 793 | Floating holographic weapon case in museum glass | Featured lot showcase inside **VIB Live Auctions** |
| `part_21.png` | 2048 &times; 768 | Esports coaching battle station, "ANALYZE ADAPT IMPROVE" screens | **FULL BACKGROUND** for **Coaching Program** |
| `part_22.png` | 1983 &times; 793 | Live auction auditorium stage with crowd & countdown screen | **FULL BACKGROUND** for **VIB Auctions: Bid. Win. Own.** |
| `part_23.png` | 2048 &times; 768 | Team VIB championship squad with trophy in dark auditorium | Alternative community background |
| `part_24.png` | 1983 &times; 793 | Live auction stage with red spotlights and audience | Alternative auctions stage background |
| `part_25.png` | 1774 &times; 887 | Team VIB champions squad on podium with glowing logo | Alternative community background |
| `part_26.png` | 1672 &times; 941 | Team VIB championship podium with crowd, trophy, and Indian flags | **FULL BACKGROUND** for **Join The VIB Community** banner |
| `part_27.png` | 1983 &times; 793 | 3D metallic golden VIB cybernetic monolith stage | Hero background for **Digital Services Hub** |
| `part_28.png` | 1983 &times; 793 | 3D metallic purple VIB cybernetic monolith stage | Alternative services hero background |

---

## 4. HOW TO PROPERLY LAYER CONTENT OVER BACKGROUNDS

To make sections look majestic like the references (and NOT like small cropped stickers):
```tsx
{/* SECTION CONTAINER */}
<div className="relative rounded-2xl overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center bg-[#070510] border border-purple-500/20 shadow-2xl">
  {/* 1. FULL-BLEED BACKGROUND ARTWORK */}
  <img
    src="/assets/reference_parts/part_06.png"
    alt="Section Background Art"
    className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0 opacity-90"
  />

  {/* 2. GRADIENT OVERLAY TO GUARANTEE TEXT READABILITY */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#070510] via-[#070510]/80 sm:via-[#070510]/50 to-transparent z-[1]" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#070510] via-transparent to-transparent z-[1]" />

  {/* 3. FUNCTIONAL CONTENT LAYERED ON TOP */}
  <div className="relative z-10 p-6 sm:p-10 max-w-2xl space-y-4">
    {/* Micro badge */}
    <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 font-bold uppercase tracking-widest">
      <Sparkles className="w-3.5 h-3.5" />
      <span>SELL YOUR ACCOUNT WITH VIB</span>
    </div>

    {/* Section Headline */}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white font-rajdhani tracking-tight leading-none">
      Turn Your Profile Into Profit
    </h2>

    {/* Description */}
    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-lg">
      Looking to sell your account? List it with VIB and reach thousands of verified buyers...
    </p>

    {/* Buttons & Checklist */}
    <div className="flex flex-wrap items-center gap-4 pt-2">
      <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30 hover:scale-105 transition-all">
        View Advertisement Plans &rarr;
      </button>
      {/* Trust checkmarks */}
    </div>
  </div>
</div>
```

---

## 5. REPOSITORY ARCHITECTURE & KEY FILES

- `src/components/client/ClientHomePage.tsx`:
  The main landing page containing the full sequence of sections from Reference 1 &rarr; 2 &rarr; 3 &rarr; 4.
- `src/components/client/ClientProfilesPage.tsx`:
  Standalone page for browsing and filtering accounts.
- `src/components/client/ClientVPOverviewPage.tsx`:
  Standalone page for Indian & PHP VP packs, regional pricing, and EMI options.
- `src/components/client/ClientRankupPage.tsx`:
  Standalone page for Rankup & Derank boosting, MMR calculator, and Valo Skins Exchange.
- `src/components/client/ClientAuctionsPage.tsx`:
  Standalone page for live timed auctions with ticking timer `02:14:36`, interactive bidding, and flash lots.
- `src/components/client/ClientRentalsPage.tsx`:
  Standalone page for skin rentals and daily/weekly duration switcher.
- `src/components/client/ClientCoachingPage.tsx`:
  Standalone page for 1-on-1 coaching, VOD reviews, and training bootcamps.
- `src/components/client/ClientServicesPage.tsx`:
  Standalone page for all digital services.
- `src/components/client/Header.tsx`:
  Sticky navbar with VIB logo, nav buttons, cart, and authentication triggers.

---

## 6. VERIFICATION SCRIPTS & COMMANDS

Before finishing any task, the agent **MUST** run:
1. `npx tsc --noEmit` &mdash; Must output 0 errors.
2. `npm run build` &mdash; Must build production bundle cleanly without errors.
3. `python scripts/capture_page.py home` &mdash; Captures desktop & mobile screenshots and produces comparison images with the reference mockups (`comp_home_top.png`, `comp_home_bottom.png`).
4. `git status`, `git add .`, `git commit -m "..."`, `git push origin main` &mdash; Synchronize all changes to GitHub.
