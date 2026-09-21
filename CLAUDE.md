# CLAUDE.md — Pelumi's Portfolio

Guidance for any Claude session working in this repo. Read this first.

## What this is

Pelumi Adewara's personal portfolio — an editorial, single-page site whose job is to
convert **both** freelance clients and remote-role recruiters (US / UK / EU markets).
Craft is the whole point: this must never read like a template or generic "AI slop."

**Live:** https://pelumi-adewara.vercel.app (no custom domain yet).

## Stack & commands

- Next.js 15 (App Router) · React 19 · TypeScript · Tailwind v4 · Three.js (react-three-fiber) · Motion · Lenis smooth-scroll.
- Fonts: Instrument Serif (display) + Geist / Geist Mono.
- `npm run dev` → http://localhost:3939 (Turbopack)
- `npm run build` · `npm run start` · `npx tsc --noEmit` (typecheck)

Always run **build + typecheck** before deploying.

## Architecture

- **`lib/content.ts` is the single source of truth for ALL copy** — case studies, services,
  testimonials, stack, about, contact, nav, the résumé flag. Edit content here, not in JSX.
- **`lib/site.ts`** — canonical site URL. Change it in ONE place when a custom domain lands.
- `app/page.tsx` — section order. Sections are numbered (00 Hero → 08 Contact); if you insert
  a section, renumber the `index` props downstream.
- `components/` — one component per section, plus shared `cta.tsx`, `reveal.tsx`, `section-header.tsx`.
- `app/opengraph-image.tsx` / `twitter-image.tsx` / `icon.svg` / `apple-icon.tsx` / `sitemap.ts` /
  `robots.ts` / `manifest.ts` — social/SEO. OG card fetches Instrument Serif at build time.
- Match the existing house style: editorial, restrained motion, `eyebrow`/`anchor-line` utilities,
  mono uppercase micro-labels, serif display headings, generous spacing.

### Content rules
- **Never invent metrics or testimonials.** Only real, verifiable outcomes and real client words.
- Case-study copy follows Problem → Process → Solution → Outcome.
- Résumé is gated: `resume.available` in `content.ts` + PDF at `public/pelumi-adewara-cv.pdf`.

## Workflow — commit & deploy (IMPORTANT)

This project deploys via the **Vercel CLI**, NOT git integration. Pushing to GitHub does NOT
deploy. The standard cycle is:

1. **Branch off `main`** — never commit straight to the default branch. Reuse `portfolio-upgrade`
   or make a feature branch.
2. Make changes, then **`npm run build` + `npx tsc --noEmit`** to verify.
3. **Commit** with a descriptive multi-line message (what + why). End every commit with the
   Co-Authored-By and Claude-Session trailer lines.
4. **Merge to `main`**: `git checkout main && git merge <branch> --ff-only`.
5. **Deploy**: `vercel --prod --yes` (authenticated as `dave1604`; project is linked via
   `.vercel/project.json`, aliases to pelumi-adewara.vercel.app).
6. **Back up code**: `git push origin main` (remote: github.com/Dave1604/pelumi-portfolio).
7. **Sanity-check the LIVE site** after deploy: résumé downloads, OG image returns 200, no
   placeholder/`REPLACE` strings visible.

- **Only commit / push / deploy when Pelumi asks.** Confirm before publishing anything outward.
- Stage files intentionally (avoid `git add -A` sweeping up stray root files like CV exports).

## How Pelumi operates

- **Ship fast, then market.** Prefers a live, imperfect site over an invisible perfect one.
  Don't over-polish; the real bottleneck is outreach, not pixels.
- **Hates generic AI output.** Wants distinctive, high-craft, editorial work. Push for taste.
- Often works in **parallel Claude sessions** (e.g. built the CV in another session) — keep
  `docs/HANDOFF.md` current so sessions stay aligned.
- Wants decisive recommendations, not option dumps. Make the call, explain the why, move.
- Financially motivated / time-poor — optimize for what gets clients and roles.

## State (2026-07-22)

**Done & live:** Phase 0 (OG/SEO/icons), Phase 1 (Services, Testimonials, hero dual-CTA),
CV published (résumé downloadable), all `// REPLACE` placeholders cleared, Truekey testimonial
published by name (Nina, permission confirmed).

**Case studies (5):** QwamPay · Motoka · Ronsho · Study Buddy · Who's Cuh.
**Testimonial-only (real, live):** Truekey Realty (candidate for a 6th case study).

**Left:** screenshots for Ronsho + Study Buddy (currently text-only); Who's Cuh mobile view
(build a desktop+mobile paired layout); add Truekey Realty case study; optional real photo;
Phase 2 = individual `/work/[slug]` routes. Full plan in `docs/STRATEGY.md`; status in `docs/HANDOFF.md`.
