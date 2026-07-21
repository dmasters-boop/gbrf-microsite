# Deploy — StatiCrypt + GitHub Pages (private repo)

Encrypted static build of the GBRF executive briefing, password-gated with a
branded StatiCrypt page, published to GitHub Pages.

- **Access password:** `GBRF-Reef-2031`  (change it — see "Changing the password")
- **Live URL (after deploy):** `https://<your-github-username>.github.io/gbrf-microsite/`
- **Repo name:** `gbrf-microsite` — this **must** match `BASE_PATH` in the build
  (`/gbrf-microsite`). If you use a different repo name, rebuild with
  `BASE_PATH=/<repo> STATICRYPT_PASSWORD=… ./build-static.sh`.

---

## ⚠️ Read before you ship

1. **Private repo + Pages needs a paid plan.** GitHub Pages can only publish from a
   **private** repo on **Team/Enterprise**. On **Free/Pro**, either the repo must be
   **public** (StatiCrypt is then your only gate — which is the intended design here),
   or upgrade the plan. Steps below note where this bites.
2. **StatiCrypt encrypts HTML only — the pricing is still in the JS.** This is a
   Next.js app; `data/account.ts` (all AUD figures, quote line items, renewal terms)
   is compiled into `site/_next/static/*.js`, which ships **unencrypted and public**.
   Anyone who opens those chunk URLs can read the pricing **without** the password.
   Confirmed: `grep -r "583,354" site/_next` returns a match. Treat this as
   obfuscation, not real protection. (For real protection, front it with edge auth —
   see the prior recommendation.)

---

## 0. One-time: authenticate the GitHub CLI

The current token is invalid — refresh it (interactive):

```bash
gh auth refresh -h github.com -s repo,workflow   # or: gh auth login
```

## 1. Build the encrypted bundle

From the project root:

```bash
STATICRYPT_PASSWORD='GBRF-Reef-2031' ./build-static.sh
```

This produces **`./site`** — the flat, encrypted, deployable site (includes
`.nojekyll`). Verify locally with any static server, e.g.:

```bash
npx http-server site -p 3001 -c-1   # open http://localhost:3001
```

## 2. Create the private repo and push the source

```bash
git init                      # if it complains about hook templates in a restricted
                              # shell: GIT_TEMPLATE_DIR=/dev/null git init
git add -A
git commit -m "GBRF executive briefing microsite"
gh repo create gbrf-microsite --private --source=. --remote=origin --push
```

`.gitignore` already excludes `node_modules`, `.next`, `out`, `out_enc`, `site`, and
`.env*.local`. The salt file **`.staticrypt.json` is committed on purpose** — it keeps
re-encryption reproducible.

## 3. Publish the encrypted `site/` to a `gh-pages` branch

Push only the contents of `site/` to a dedicated branch:

```bash
npx gh-pages -d site -b gh-pages --dotfiles -m "Encrypted build"
```

- `-d site` publishes the encrypted folder; `-b gh-pages` is the target branch.
- **`--dotfiles` is required** — without it `.nojekyll` is dropped and GitHub Pages
  strips the `_next/` folder (blank site).
- This is idempotent: it uses its own temp checkout, so it never puts a `.git`
  inside `site/` and won't conflict with rebuilds. Run it again for every redeploy.

> Do **not** `git init` inside `site/` — each rebuild wipes `site/`, so an in-folder
> repo just gets recreated every time. `gh-pages` avoids that entirely.

## 4. Enable GitHub Pages (source = `gh-pages` branch, root)

Via the CLI:

```bash
gh api -X POST repos/<your-github-username>/gbrf-microsite/pages \
  -f 'source[branch]=gh-pages' -f 'source[path]=/'
```

…or in the browser: **repo → Settings → Pages → Build and deployment → Source:
"Deploy from a branch" → Branch: `gh-pages` / `(root)` → Save.**

> If the repo is **private** and your plan doesn't allow private Pages, either make it
> public (**Settings → General → Change visibility**) or upgrade. The published Pages
> site is public regardless.

Give it a minute, then open:
**`https://<your-github-username>.github.io/gbrf-microsite/`**
→ branded password page → enter `GBRF-Reef-2031` → the briefing.

---

## Re-deploying after content changes

```bash
STATICRYPT_PASSWORD='GBRF-Reef-2031' ./build-static.sh
npx gh-pages -d site -b gh-pages --dotfiles -m "Update"
```

## Changing the password

Just rebuild with a different value — no code change needed:

```bash
STATICRYPT_PASSWORD='new-password' ./build-static.sh
```

Then re-push `site/` (step 3). The salt in `.staticrypt.json` stays; only the password
changes.

## What's in this setup

- `next.config.mjs` — `output: "export"`, `images.unoptimized`, `trailingSlash`, and
  `basePath`/`assetPrefix` = `/gbrf-microsite`.
- `app/fonts/DMSans.ttf` + `app/layout.tsx` — DM Sans self-hosted (no Google Fonts
  network dependency at build).
- `staticrypt-template.html` — the branded password page (navy `#04263B`, Salesforce
  blue `#00A1E0` button, DM Sans, GBRF × Salesforce logo lockup).
- `build-static.sh` — build → encrypt → flatten to `site/`.
- Server-only pieces removed for static export: `middleware.ts`, `app/api/`,
  `app/og-image/`, `app/gate/` (StatiCrypt replaces the gate).
