# 🌸 Ayushi Sawant — Personal Portfolio Website

> **A soft, cozy, girly, and competent single-page portfolio crafted with pure HTML5, CSS3, and vanilla JavaScript.**  
> Built to make recruiters and Future Interns reviewers stop scrolling, showcasing real engineering rigor, AI/ML research, campus leadership, and competitive chess achievements.

---

## ✨ Overview

This repository contains the complete source code for **Ayushi Sawant's** personal portfolio website. Designed with a warm aesthetic—soft blush pinks, warm cream, gentle lavender glows, delicate inline SVG decorations (ribbon bows, butterflies, blossoms, hearts, and sparkles)—while maintaining high contrast, accessibility standards (WCAG AA), and deep technical substance.

No frameworks. No build steps. No npm dependencies. Pure modern web standards that run directly in any browser.

---

## 🎀 Key Features

1. **Recruiter-Stopping Hero Section**:
   - Split-column layout with a friendly greeting pill (`"Hi, I'm"` with a twinkling star).
   - Display typography in **Fraunces** with a soft highlighter rose underline under `"Ayushi"`.
   - **Accessible Typing Animation**: Cycles through `"Aspiring Developer"`, `"AI + Web Builder"`, `"Engineering Student"`, `"Student Leader"`, and `"Chess Player"` with a blinking caret (includes static screen-reader fallback and respects `prefers-reduced-motion`).
   - **Arch Photo Frame**: 4:5 portrait frame with a pastel gradient ring, soft ambient glow, and 3 floating sticker badges:
     - `99.9% accurate crack-detection AI`
     - `3rd place: Mumbai University Chess`
     - `Chess player`
   - Glass stats strip: 4 Projects Built | 40,000 AI Dataset Images Trained | 2x Univ. Chess Representative | 3 Leadership Roles.

2. **Wide Polaroid About Frame**:
   - Landscape portrait (`about.jpg`, max-width 420px, `object-fit: contain`) in a polaroid frame with a thick bottom margin, a soft pink CSS washi-tape accent at the top, a slight -3deg tilt that straightens on hover, and a handwritten `"just me :)"` cursive caption.
   - Verified image fallback showing a soft `"AS"` monogram if the photo is ever missing or fails to load.
   - Bio card, comprehensive education timeline with competitive entrance percentiles, and spoken/written languages.

3. **"Meet Me" Poster Section**:
   - Displays Ayushi's 9:16 portrait poster (`assets/photos/ayushi-intro-poster.jpg`) uncropped in a rounded glass card.
   - **Custom Watermark Cover (`.poster-cover`)**: An absolute positioning patch matching the poster's plum background (`#3F1D3F`) with a tiny cream sparkle SVG that seamlessly conceals the corner AI badge across mobile, tablet, and desktop viewports (360px, 768px, 1280px).
   - Accompanying 3-point summary card and personality sticker pills: `"Creative"`, `"Chess player"`, `"Curious"`, `"Woman in STEM"`.

4. **Honest, Uninflated Skills Grid**:
   - Zero fake percentage bars.
   - Grouped into:
     - **Core Skills**: HTML, CSS, JavaScript, Python, SQL (SQLite, MySQL), MongoDB, Figma, Git & GitHub.
     - **Applied AI/ML & Embedded**: YOLOv8 classifier training on 40,000 images via Google Colab; ESP32 firmware (Arduino C/C++).
     - **Exposure Through Projects**: Node.js, Express.js, PostgreSQL, REST APIs, JWT authentication, React (marked with a `"still learning"` badge).
     - **Soft Skills**: Leadership, Outreach, Team coordination, Strategic thinking.

5. **Flagship & Filterable Projects**:
   - Category filtering tabs: *All*, *AI & Embedded*, *Web & Full-Stack*, *Hackathon & Research*.
   - **Rover Crack Inspector** (Flagship, Team of 4): AI-powered pipeline inspection rover with YOLOv8 crack classifier (99.9% val accuracy on 40,000 Kaggle images), FastAPI backend, WebSocket stream, SQLite image log, and ESP32 firmware. Hardware clearly attributed to 3 teammates.
   - **The Pinboard: Campus Lost & Found** (Team Project): UI design & semantic HTML/CSS frontend. Backend and database clearly attributed to teammates.
   - **Mini CRM: Client Lead Management System** (AI-Assisted Task): Guided by AI pairing tools for Future Interns; lead pipeline, JWT auth, contact form ingestion.
   - **Viraasat (Team MINDMESH)**: SIH 2026 Internal Hackathon cultural exploration prototype. Clean text card with custom SVG banner and private repository indicator.
   - **Interactive Project Modal**: Accessible dialog with keyboard trapping, `Escape` key close, and outside click dismissal.

6. **Dual Theme Engine (Blush Light & Cozy Night Dark)**:
   - Light Theme: Baby pink `#FFD6E7` &rarr; Cream `#FFF3E6` &rarr; Lavender `#E4D7FA` with deep plum `#3E1A36` text.
   - Cozy Night Theme: Warm nocturnal background `#2A1626` with soft rose `#F28DB5` and lavender `#B79CE8` glows, cream `#FFF1E6` text, never harsh black.
   - Automatically detects system preference (`prefers-color-scheme`) and persists user selection in `localStorage`.

7. **Interactive Sparkle Cursor Trail**:
   - Lightweight DOM particle pool spawning delicate pastel sparkles and tiny hearts behind cursor movements on desktop.
   - Throttled using `requestAnimationFrame`, auto-disabled on touch devices (`pointer: coarse`) and when `prefers-reduced-motion` is enabled.
   - Includes a toggle button in the footer to turn sparkles ON/OFF anytime.

8. **Validated Contact Form**:
   - Name, Email, Subject, and Message fields with friendly inline error messaging and `aria-invalid` accessibility tags.
   - Anti-spam hidden honeypot field (`_gotcha`).
   - Configured for Formspree with direct mailto fallback link (`mailto:ayushisawant19@gmail.com`).

---

## 📁 Folder Structure

```
internship/
├── index.html              # Main single-page HTML document (semantic, accessible, SEO optimized)
├── css/
│   └── style.css           # Design system, CSS variables, glassmorphism, responsive grid & themes
├── js/
│   ├── data.js             # Single source of truth for all content, links, scores & texts
│   └── main.js             # Vanilla JS: typing, theme toggle, modal, cursor trail & validation
├── assets/
│   ├── photos/
│   │   ├── hero.jpg        # Portrait 4:5 photo (1200x1500)
│   │   ├── about.jpg       # Landscape 3:2 illustrated portrait (1200x814)
│   │   └── ayushi-intro-poster.jpg # Portrait 9:16 poster (1080x1920)
│   └── projects/           # Optional screenshots or diagrams (.gitkeep)
├── sitemap.xml             # Search engine sitemap
├── robots.txt              # Search engine crawler instructions
├── README.md               # Project documentation & editing manual
├── DEPLOYMENT.md           # Step-by-step deployment guide for GitHub Pages & Netlify
└── EXPLAIN.md              # Technical explanation & 12 interview answer scripts
```

---

## 🚀 How to Run Locally

Because this project uses 100% vanilla web technologies with zero dependencies or compilation steps, running it is instantaneous:

### Method 1: Double-Click
Simply double-click `index.html` in your file explorer. It opens directly in Google Chrome, Microsoft Edge, Safari, or Firefox using the `file:///` protocol.

### Method 2: Python Local Server (Recommended for testing)
Open PowerShell or your terminal in the project directory:
```bash
python -m http.server 8080
```
Then navigate to `http://localhost:8080` in your web browser.

### Method 3: VS Code Live Server
If you use VS Code, install the **Live Server** extension, right-click `index.html`, and choose **"Open with Live Server"**.

---

## 🎨 How to Edit Content & Customize

### 1. Editing Portfolio Text, Projects & Scores (`js/data.js`)
All content is centralized in [js/data.js](js/data.js):
- **Hero pitch & chips**: Modify `portfolioData.hero.heroPitch` or `portfolioData.hero.chips`.
- **Typing animation titles**: Edit `portfolioData.hero.typedTitles` array.
- **Projects**: Add or edit objects in the `portfolioData.projects` array. Update `repoUrl`, `liveUrl`, or `honestStatus`.
- **Education & entrance exam percentiles**: Update objects in `portfolioData.education`.
- **Languages**: Add or remove entries in `portfolioData.about.languages`.

### 2. Changing the Color Palette (`css/style.css`)
Open [css/style.css](css/style.css). The entire design system is driven by CSS variables at the top of the file:
```css
:root {
  --bg-gradient: linear-gradient(135deg, #FFD6E7 0%, #FFF3E6 50%, #E4D7FA 100%);
  --accent-primary: #C2477F;   /* Rose buttons and highlights */
  --accent-soft: #F28DB5;      /* Blossom pink */
  --accent-lavender: #9B7FE0;  /* Lavender accent */
  --accent-peach: #FFB89A;     /* Peach accent */
  --text-main: #3E1A36;        /* Deep plum headings & body text */
}

[data-theme="dark"] {
  --bg-gradient: linear-gradient(135deg, #241221 0%, #2A1626 50%, #1F142B 100%);
  --text-main: #FFF1E6;        /* Cream text for WCAG AA contrast */
  --accent-primary: #E05A97;   /* Accessible rose for dark mode */
}
```

### 3. Adding Your Resume Later
1. Place your resume PDF in the `assets/` folder (for example: `assets/Ayushi_Sawant_Resume.pdf`).
2. Open `js/data.js` and set:
   ```javascript
   resumeUrl: "assets/Ayushi_Sawant_Resume.pdf",
   ```
3. The site will **automatically render** the `"Download Resume"` button in both the Hero action area and the Contact section! When `resumeUrl` is `""`, the button stays hidden.

### 4. Replacing Photos or the Poster
- **Hero Photo**: Place your new portrait 4:5 image in `assets/photos/hero.jpg`.
- **About Polaroid**: Place your new 3:2 landscape image in `assets/photos/about.jpg`.
- **Meet Me Poster**: Place your new 9:16 poster in `assets/photos/ayushi-intro-poster.jpg`.
  - *Note on `.poster-cover`*: If you ever upload a clean poster without the top-right AI watermark, simply remove or hide the `.poster-cover` element in `index.html` or set `.poster-cover { display: none; }` in `css/style.css`.

---

## 📋 List of `[ADD]` Placeholders to Fill In

Before public launch, replace the following placeholders:

| File | Location / Placeholder | Action Required |
|---|---|---|
| `js/data.js` & `index.html` | `[ADD FORMSPREE URL]` | Create a free form at [formspree.io](https://formspree.io), copy your form ID (e.g. `https://formspree.io/f/mqkvrpqw`), and replace `[ADD FORMSPREE URL]`. |
| `js/data.js` | `resumeUrl: ""` | Once your resume PDF is ready, place it in `assets/` and paste its path here. |
| `sitemap.xml` & `index.html` | `https://ayushisawant19.github.io/` | If you connect a custom domain (e.g. `ayushisawant.dev`), update canonical links and sitemap URL. |

---

## 📦 Exact Git Commands to Push to GitHub

To push your portfolio to a public GitHub repository under your username **ayushisawant19**:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Stage all portfolio files
git add index.html css/ js/ assets/ sitemap.xml robots.txt README.md DEPLOYMENT.md EXPLAIN.md .gitignore

# 3. Create your initial commit
git commit -m "feat: launch personal portfolio for Ayushi Sawant"

# 4. Set the default branch to main
git branch -M main

# 5. Add your GitHub remote repository (replace with your repo name, e.g., 'portfolio' or 'ayushisawant19.github.io')
git remote add origin https://github.com/ayushisawant19/portfolio.git

# 6. Push to GitHub
git push -u origin main
```

---

## 🛡️ License & Attribution

Designed and developed by **Ayushi Sawant**. Open-sourced for learning and personal portfolio adaptation.
