# Obsidian Capital Research

Independent equity research portfolio — [obsidian-capital-research.com](https://obsidian-capital-research.com)

---

## File Structure

```
obsidian-capital-research/
├── index.html                  ← Main one-pager
├── embassy-reit.html           ← Embassy REIT research page
├── style.css                   ← Shared styles
├── company.css                 ← Company/research page styles
├── CNAME                       ← Custom domain for GitHub Pages
├── js/
│   └── main.js                 ← Navigation, scroll reveal, interactions
└── assets/
    ├── reports/
    │   └── embassy-reit-research-report.pdf   ← UPLOAD YOUR PDF HERE
    └── models/
        └── embassy-reit-financial-model.xlsx  ← UPLOAD YOUR EXCEL HERE
```

---

## Before Going Live — Checklist

- [ ] Upload your PDF report to `assets/reports/` with filename `embassy-reit-research-report.pdf`
- [ ] Upload your Excel model to `assets/models/` with filename `embassy-reit-financial-model.xlsx`
- [ ] Update your email address in `index.html` (search `<!-- UPDATE EMAIL -->`)
- [ ] Verify your LinkedIn URL slug in `index.html`
- [ ] Update the key metrics in `embassy-reit.html` (FFO, NOI margin, NAV) once final
- [ ] Update the copyright year if needed (currently 2025)

---

## Deployment: GitHub Pages + Squarespace Domain

### Step 1 — Push to GitHub

```bash
cd obsidian-capital-research
git init
git add .
git commit -m "Initial deploy"
git branch -M main
git remote add origin https://github.com/Shashwat-Kakkar/obsidian-capital-research.git
git push -u origin main
```

### Step 2 — Enable GitHub Pages

1. Go to your repo on GitHub → Settings → Pages
2. Under "Source", select `Deploy from a branch`
3. Branch: `main` / Folder: `/ (root)`
4. Click Save
5. Under "Custom domain", type: `obsidian-capital-research.com`
6. Check "Enforce HTTPS" once it appears (may take a few minutes)

### Step 3 — Configure DNS in Squarespace

1. Log in to Squarespace → Domains → `obsidian-capital-research.com` → DNS Settings
2. Delete any existing A records pointing elsewhere
3. Add these 4 A records (GitHub Pages IPs):

   | Type | Host | Value           |
   |------|------|-----------------|
   | A    | @    | 185.199.108.153 |
   | A    | @    | 185.199.109.153 |
   | A    | @    | 185.199.110.153 |
   | A    | @    | 185.199.111.153 |

4. Add a CNAME record:

   | Type  | Host | Value                                    |
   |-------|------|------------------------------------------|
   | CNAME | www  | shashwat-kakkar.github.io                |

5. DNS propagation typically takes 15 min – 48 hours.

---

## Adding Future Reports

1. Create a new HTML file, e.g. `brookfield-reit.html`, copying `embassy-reit.html` as a template
2. Add the new company's PDF and Excel to `assets/`
3. Add a new card in the `research-grid` section of `index.html`

---

## Adding Blog Posts

When ready, the simplest approach is to create individual HTML files in a `perspectives/` folder
and link them from the blog section in `index.html`. Alternatively, GitHub Pages supports
Jekyll for a full blog with RSS — worth setting up when you have 2–3 posts ready.
