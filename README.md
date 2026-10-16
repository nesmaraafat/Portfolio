# Nesma Ra'fat — Portfolio

One-page portfolio in plain HTML, CSS and JavaScript. No build step.

## Run it
Open `index.html` in a browser, or serve the folder (`npx serve .` / VS Code Live Server).

## Replace before publishing
1. **GitHub link** — in `index.html` search `YOUR-USERNAME` and put your profile URL.
2. **Projects** — the three cards in `#work` already point to the live sites. To change a card edit its `href`, the image in `assets/projects/` (ratio ≈ 16:11, at least 800px wide) with its `alt`, the project name, and the tech line.
3. **Optional** — add a social preview image and an `og:image` meta tag.

## Publish on GitHub Pages
1. Create a repository and push these files to the `main` branch.
2. Repository → *Settings* → *Pages* → *Deploy from a branch* → `main` / `/ (root)` → Save.
3. Your site appears at `https://<username>.github.io/<repo>/` after a minute.

(Vercel: import the repo, framework preset *Other*, no build command, output directory `.`.)

## Files
- `index.html` — structure, copy, icon sprite
- `css/style.css` — all tokens and layout (see variables at the top)
- `js/main.js` — hero typing, section fade-in, nav underline (all respect reduced motion)
- `SPEC.md` — the approved final design (single source of truth)
