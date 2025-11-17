# Portfolio — Nitin Bansal

A modern, academic-style portfolio website inspired by clean single-page designs. Built with pure HTML, CSS, and vanilla JavaScript.

## Features

- **Single-page layout** with smooth scrolling navigation
- **Profile header** with image and contact links
- **Welcome hero** section ("Welcome to Bansal-Verse")
- **About Me** with detailed background bullets
- **News carousel** with auto-advance and manual controls
- **Education table** showcasing academic credentials
- **Background story** and personal journey
- **Skills showcase** with categorized technical skills
- **Projects page** with detailed project cards and results
- **Responsive design** for mobile, tablet, and desktop
- **Clean footer** with quote and social links

## Quick Start

### Run Locally

Open PowerShell and navigate to the project folder:

```powershell
cd "c:/Users/nitin/OneDrive - iitgn.ac.in/Desktop/Portfolio web"
python -m http.server 8000
```

Then open your browser to: http://localhost:8000

### Project Structure

```
Portfolio web/
├── index.html          # Main homepage (single-page layout)
├── projects.html       # Dedicated projects listing page
├── css/
│   └── styles.css      # All styling
├── js/
│   └── main.js         # Carousel & smooth scroll
├── images/
│   └── profile.jpg     # Your profile picture (add this!)
├── projects/
│   ├── 3d-bioprinting.html
│   ├── ci-cd-breast-cancer.html
│   ├── augmentation-impact.html
│   └── iitgn-research-park.html
└── README.md
```

## Setup Checklist

Setup completed! ✅

- [x] **Profile picture added** – Generated placeholder with your initials (replace with your photo anytime)
- [x] **Social links updated** – LinkedIn and GitHub URLs from your resume
- [x] **All 6 projects added** with working links:
  - 3D-Bioprinting (SharePoint link)
  - CI/CD Pipeline (GitHub)
  - Image Augmentation (GitHub)
  - FinGuard AI (Live Dashboard)
  - Research Park Website (Live + GitHub)
  - Chess Club Website (Interface + GitHub)

Optional customizations:
- [ ] Replace `images/profile.jpg` with your actual professional photo
- [ ] Add project screenshots to detail pages
- [ ] Customize colors in CSS if desired
- [ ] Add Google Analytics tracking

## Deploy to GitHub Pages

### Option 1: Manual Deploy

1. Create a new GitHub repository (e.g., `yourusername.github.io` for user site)
2. Initialize git and push:

```powershell
cd "c:/Users/nitin/OneDrive - iitgn.ac.in/Desktop/Portfolio web"
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

3. Enable GitHub Pages in repo settings (Settings → Pages → Source: main branch)

### Option 2: GitHub Desktop

1. Open GitHub Desktop
2. Add this folder as a repository
3. Publish to GitHub
4. Enable Pages in repository settings

## Customization Tips

### Change Color Scheme

Edit CSS variables in `css/styles.css`:

```css
:root {
  --primary: #2c3e50;     /* Dark blue-gray */
  --accent: #3498db;      /* Bright blue */
  --text: #333;           /* Text color */
  --muted: #7f8c8d;       /* Muted text */
  --light-bg: #f8f9fa;    /* Section backgrounds */
  --border: #e1e8ed;      /* Borders */
}
```

### Add More Projects

Add new cards in `projects.html` following this template:

```html
<article class="project-card">
  <h3>Project Title</h3>
  <p class="meta">Tech Stack | Date Range</p>
  <p>Description...</p>
  <div class="result">
    <strong>Result:</strong> Your achievement
  </div>
  <div class="project-links">
    <a href="projects/your-project.html">Learn More</a>
    <a href="https://github.com/..." class="secondary">GitHub</a>
  </div>
</article>
```

Then create a detail page in `projects/your-project.html`.

## Next Steps

- Replace placeholder links with real URLs
- Add screenshots/images to project detail pages
- Consider adding a blog section
- Add Google Analytics for visitor tracking
- Set up a custom domain (optional)

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, CSS Variables)
- Vanilla JavaScript (ES6+)
- No frameworks or dependencies required!

---

**© 2025 Nitin Bansal** — IIT Gandhinagar

Need help? Update this README or contact me at 23110223@iitgn.ac.in

