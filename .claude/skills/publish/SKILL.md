---
name: publish
description: Commit and deploy the website live. Stages changes, commits with a plain message (no AI attribution), and pushes to main so GitHub Pages redeploys. Use when the user wants to publish/go live/deploy the site.
disable-model-invocation: true
---

# Publish the website

Deploys the static site live. Pushing to `main` triggers `.github/workflows/static.yml`,
which deploys to GitHub Pages on the custom domain **psycholog-krynska.pl** (behind Fastly CDN).

## Steps

1. **Show what will ship.** Run `git status --short` and `git --no-pager diff --stat` so the
   user sees exactly what's changing before anything goes live.

2. **Verify cache-busting.** If `style.css` or `script.js` changed in this commit, confirm the
   matching `?v=N` query in `index.html` was bumped. The PostToolUse `cache-bust` hook does this
   automatically when those files are edited through Claude — but if they were edited by hand,
   bump the version manually (`style.css?v=N` / `script.js?v=N`), otherwise the CDN serves a
   stale file and the page renders unstyled.

3. **Commit.** Stage everything (`git add -A`) and commit with a concise, plain message describing
   the change. **Never** add `Co-Authored-By` or any "Generated with Claude" / AI-attribution
   lines (project rule).

4. **Push.** `git push origin main`.

5. **Report.** Tell the user the deploy is running (GitHub Actions), it takes ~1–2 minutes, and
   they should **hard-refresh** psycholog-krynska.pl to confirm. Offer to capture mobile/desktop
   screenshots with Playwright to verify the live result.
