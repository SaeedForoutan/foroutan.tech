# foroutan.tech

Personal site for [foroutan.tech](https://foroutan.tech), built with [Astro](https://astro.build)
on the [astro-palette](https://github.com/joshruggles/astro-palette) theme.

Static output, no client frameworks, 32 switchable terminal colour palettes,
client-side search via [Pagefind](https://pagefind.app).

## Local development

Node 22 is required. If it isn't on your `PATH`, load it from nvm first:

```bash
source ~/.nvm/nvm.sh && nvm use 22
```

Then:

```bash
npm install
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:4321 |
| `npm run build` | Static build into `dist/`, then the Pagefind search index |
| `npm run preview` | Serve the production build |
| `npm run check` | Astro/TypeScript diagnostics |

Search only works after at least one `npm run build`, because the Pagefind
index lives in the build output.

## Editing the site

Everything personal is in **[`src/lib/site.ts`](src/lib/site.ts)** — name, tagline,
email, social links, per-page taglines. Change it there and it propagates to the
header, footer, `<title>`s, OG tags, RSS feed and schema.org metadata.

The rest:

| What | Where |
| --- | --- |
| Projects list | `src/lib/projects.ts` |
| Skills marquee / tag universe | `src/lib/tags.ts` |
| Bio and sidebar | `src/pages/about.astro` |
| Default palettes (light/dark) | `src/lib/palette.ts` |
| Palette definitions | `public/css/style.css` |
| Social preview image (1200×630) | `public/assets/og.png` |
| Security contact | `public/.well-known/security.txt` |

### Writing a post

Add a markdown file to `src/content/blog/`:

```markdown
---
title: "Post title"
description: "One-line summary, used in listings and meta tags."
date: 2026-08-22
tags:
  - Astro
draft: false
---
```

`draft: true` keeps a post out of the build. `src/content/blog/example-post.md`
is kept as a draft for reference.

## Deployment

Cloudflare Pages, building from this repo:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** set `NODE_VERSION` to `22` in the project's environment variables

## Licence

The theme is AGPL-3.0-or-later, and so is this site. Publishing a modified
version over a network triggers the AGPL's source-offer requirement, so this
repo should stay public — or you should be ready to provide the source to
visitors on request.
