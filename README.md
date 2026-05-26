# Research Coding Community Fair website

This repository contains a simple static website for the Research Coding
Community Fair, held on Tuesday 19 May 2026 in Forum, Exploration Lab 2.

The site is intentionally plain HTML, CSS, and JavaScript so it can be hosted
directly on GitHub Pages without a build step.

## Files

- `index.html` - single-page event website.
- `styles.css` - RCC-inspired styling using the colours from the event resources.
- `app.js` - small script that highlights the active navigation section and runs the photo carousel.
- `site-assets/` - web-ready copies of the poster, gallery image, People Bingo, and token.
- `Resources/` - original event artwork, grouped into posters, games, and tokens.
- `Gallery/` - original event photography.
- `.github/workflows/deploy.yml` - GitHub Pages deployment workflow.

## Sections

The page is organised as:

- Overview
- Schedule for the day
- Speakers
- Stands
- Photos
- Event materials
- Review and lessons learnt

The navigation buttons at the top link to each section of the same page. The
Photos section uses a small looping carousel: clicking Next on the final image
returns to the first image.

## Resource folders

The original generated filenames have been replaced with more meaningful names
and grouped into:

- `Resources/posters/` - stand signs and event posters.
- `Resources/games/` - People Bingo and stamp-card printouts.
- `Resources/tokens/` - numbered fair tokens.
- `Gallery/` - original gallery images.
- `site-assets/` - smaller web-ready image versions used by the site.

All grouped resources are linked as downloads from the Event Materials section
of the website. The GitHub repository link is currently a placeholder:
`<GitHub Link>`.

## Viewing locally

Open `index.html` in a browser, or run a small local server:

```bash
python3 -m http.server 8123
```

Then open:

```text
http://localhost:8123/
```

## GitHub Pages deployment

The included workflow publishes the static site directly to GitHub Pages.

In the GitHub repository settings:

1. Open **Settings > Pages**.
2. Set **Build and deployment** to **GitHub Actions**.
3. Push changes to `main`, or run the workflow manually from the Actions tab.

No Node install, package build, or generated `dist/` folder is required.

## Updating content

Edit `index.html` for schedule text, speakers, stand descriptions, photo
carousel entries, resource links, and review notes. Edit `styles.css` for visual
changes.

When adding more gallery images:

1. Add the original image to `Gallery/`.
2. Create a smaller web-ready copy in `site-assets/`.
3. Add a new carousel `<figure>` in the Photos section of `index.html`.
4. Include descriptive alt text and a concise caption.
