# 🚀 Deployment Guide — Ayushi Sawant's Portfolio

This guide provides step-by-step instructions for deploying your portfolio to **GitHub Pages** (free, recommended) and **Netlify**, as well as setting up your **Formspree** contact form endpoint.

---

## 🌐 Final Live URLs

Once published following the steps below, your live portfolio website will be accessible worldwide at:

- **Primary GitHub Pages URL**:  
  `https://ayushisawant19.github.io/portfolio/`  
  *(or `https://ayushisawant19.github.io/` if you name the repository `ayushisawant19.github.io`)*

- **Netlify Free URL**:  
  `https://ayushi-sawant.netlify.app` *(or custom subdomain of your choice)*

- **Local File URL (Instant access on your computer right now)**:  
  Open `index.html` directly in your browser or visit `http://localhost:8080/index.html` with a local server.

---

## Option 1: Deploying to GitHub Pages (Recommended)

GitHub Pages hosts static websites directly from your GitHub repository for free, with automatic HTTPS and global CDN distribution.

### Step 1: Create a GitHub Repository
1. Log in to your GitHub account: [github.com/ayushisawant19](https://github.com/ayushisawant19).
2. Click the **`+`** icon in the top right corner and choose **"New repository"**.
3. Choose a repository name:
   - **Option A (Custom subpath)**: Name it `portfolio`. (Your final URL will be `https://ayushisawant19.github.io/portfolio/`).
   - **Option B (User site root)**: Name it `ayushisawant19.github.io`. (Your final URL will be `https://ayushisawant19.github.io/`).
4. Set visibility to **Public**.
5. Do **NOT** initialize with a README, .gitignore, or license (we already have all these prepared).
6. Click **"Create repository"**.

### Step 2: Push Your Code
Open PowerShell or your terminal in this workspace folder (`c:\Users\USER\Downloads\internship`) and run:

```bash
# Initialize git if not already present
git init

# Stage portfolio files (ignoring test artifacts)
git add index.html css/ js/ assets/ sitemap.xml robots.txt README.md DEPLOYMENT.md EXPLAIN.md .gitignore

# Commit
git commit -m "feat: complete single-page personal portfolio for Ayushi Sawant"

# Rename default branch to main
git branch -M main

# Link your GitHub repository (replace with your chosen repository name)
git remote add origin https://github.com/ayushisawant19/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub: `https://github.com/ayushisawant19/portfolio`.
2. Click **Settings** (gear icon) in the top tabs.
3. In the left navigation sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment > Source**, select **"Deploy from a branch"**.
5. Under **Branch**, select `main` and folder `/(root)`.
6. Click **Save**.
7. Wait 1 to 2 minutes. GitHub will display a banner:  
   *`Your site is live at https://ayushisawant19.github.io/portfolio/`*

---

## Option 2: Deploying to Netlify (Drag-and-Drop or Git)

Netlify offers blazing-fast deployments, instant cache invalidation, and custom domain SSL.

### Method A: Drag-and-Drop (Instant, No Git Required)
1. Go to [app.netlify.com](https://app.netlify.com/) and sign up or log in.
2. Go to the **"Sites"** tab.
3. Drag and drop the `internship` folder (containing `index.html`, `css/`, `js/`, and `assets/`) into the designated drag-and-drop box.
4. Netlify will publish your site in seconds and assign a live URL (e.g. `https://peaceful-blossom-12345.netlify.app`).
5. Go to **Site configuration > Change site name** and rename it to `ayushi-sawant` to get `https://ayushi-sawant.netlify.app`.

### Method B: Continuous Deployment via GitHub
1. In Netlify, click **"Add new site" > "Import an existing project"**.
2. Select **GitHub** and authorize Netlify.
3. Select the `portfolio` repository.
4. Leave build settings blank (Build command: *None*, Publish directory: *.*).
5. Click **"Deploy site"**. Every time you push changes to GitHub, Netlify will automatically update your live site!

---

## 💌 Formspree Setup (Contact Form)

Your contact form is pre-configured to submit via Formspree without requiring any backend server.

1. Go to [formspree.io](https://formspree.io/) and create a free account with your email (`ayushisawant19@gmail.com`).
2. Click **"+ New Form"**.
3. Name the form: `Ayushi Sawant Portfolio Inquiries`.
4. Enter your email (`ayushisawant19@gmail.com`) as the destination.
5. Formspree will provide a custom endpoint URL formatted like:
   `https://formspree.io/f/mqkvrpqw`
6. Open `index.html` and `js/data.js`:
   - In `index.html` line 440:
     ```html
     <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form" novalidate>
     ```
   - In `js/data.js` line 25:
     ```javascript
     formspreeUrl: "https://formspree.io/f/YOUR_FORM_ID",
     ```
7. Test by submitting a message on your site. Check your email inbox to confirm receipt.

---

## 🔍 Post-Deployment Verification Checklist

After deploying to GitHub Pages or Netlify, verify the following:
- [ ] Site loads over HTTPS without mixed-content warnings.
- [ ] Theme toggle switches between Light Blush and Cozy Night.
- [ ] Hero photo, About polaroid, and Meet Me poster load crisply.
- [ ] Watermark patch `.poster-cover` neatly conceals the AI badge on desktop, tablet, and mobile.
- [ ] Typing animation cycles smoothly through titles.
- [ ] Project filter tabs filter correctly; clicking a project opens the detail modal.
- [ ] Test submitting the contact form or clicking the email link.
- [ ] Verify mobile responsiveness on your phone.
