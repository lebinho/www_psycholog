# CLAUDE.md

Project guidance for Claude Code working in this repository.

## What this is

A small **static brochure website** for psychologist **mgr Katarzyna Kryńska** (Polish-language).
Three files at the repo root are the live site:

- `index.html` — structure + content (also holds SEO meta, JSON-LD, and the Meta Pixel)
- `style.css` — all styling; light/dark theme via CSS variables and a `.dark` class on `<html>`
- `script.js` — dark-mode toggle, nav scroll effect, and the offer-list rendering

There is **no build step, no framework, no `package.json`**. Edit the files directly.

## Deploying (going live)

- Hosting is **GitHub Pages**, deployed by `.github/workflows/static.yml` on every **push to `main`**.
- The live custom domain is **psycholog-krynska.pl**, served through **Fastly CDN**.
- Going live = commit + `git push origin main`; the Action redeploys in ~1–2 minutes.
- Prefer the `/publish` skill for the deploy ritual.

## ⚠️ CDN cache-busting (important)

Fastly caches `style.css` / `script.js` for hours. After changing either file you **must** bump its
version query in `index.html` (`style.css?v=N`, `script.js?v=N`) or the live site serves a stale
file and can render unstyled.

- A **PostToolUse hook** (`.claude/hooks/cache-bust.sh`) bumps the version automatically when these
  files are edited through Claude.
- If you edit them by hand, bump the `?v=N` yourself.

## Conventions

- **Commit messages:** plain and concise. **Never** add `Co-Authored-By` or any "Generated with
  Claude" / AI-attribution lines.
- **Content is Polish** — keep copy in Polish and mind Polish typography (e.g. don't end a line with a
  lone "i"/"w"/"z").
- **`archive/`** holds the previous site (`old-site/`) and design drafts (`drafts/`, `draft-claude/`).
  It is **not** live — don't treat it as current code, but it's useful for reference/inspiration.

## Verifying changes

A headless browser (Playwright) is available — use it to screenshot the site at iPhone (~390px) and
Android (~412px) widths, toggle dark mode, and check links before/after deploy.

## Key references

- Booking (ZnanyLekarz): https://www.znanylekarz.pl/katarzyna-krynska/psycholog/straszyn
- Google Maps (office): https://maps.app.goo.gl/E1KZ6GKsgfTTVg4C6 — ul. Jana Pawła II 5, 83-010 Straszyn
- Facebook: https://www.facebook.com/profile.php?id=61570755837761
- Instagram: https://www.instagram.com/katarzyna.krynska.psycholog/
- Meta Pixel ID: 4147541748906734
