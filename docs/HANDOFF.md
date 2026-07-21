# Project Handoff & Status — Pelumi's Portfolio + Brand

> **Purpose:** single source of truth so any collaborator (including a parallel
> Claude session building the CV) is on the same page. If you're building the
> **CV**, read §1, §5, §6, §7 — they define the positioning, projects, and
> stack the résumé must match word-for-word so portfolio and CV agree.
>
> **Last updated:** 2026-07-21

---

## 1. Who this is for / positioning

**Name:** Pelumi Adewara
**Title:** **Product Engineer** — always paired with a plain-English line, never alone.
**Tagline:** *I design and build web & mobile products — from the first wireframe to the App Store.*
**One-liner (bios / cover letters):** *I help businesses launch software — websites, web apps, and mobile apps — end to end.*

**The differentiator to lead with everywhere (CV included):** Pelumi ships **real, live, production products** that strangers use — not tutorials or toy repos. Say "in production" wherever it's true.

**Goal:** earn internationally (US / UK / EU) via freelance clients *and* remote roles. Financially urgent. Both audiences matter equally.

**Voice:** clear, specific, human. No hype, no "excited to announce," no AI-slop filler. Nigerian-direct is fine and distinctive.

---

## 2. What the portfolio is (tech)

- **Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind v4 · Three.js (react-three-fiber ambient hero) · Motion · Lenis smooth-scroll · custom cursor.
- **Aesthetic:** editorial, warm-dark. Instrument Serif (display) + Geist (sans) + Geist Mono. Single-page site; **all copy lives in `lib/content.ts`** (source of truth).
- **Hosting:** Vercel. **Live URL: `pelumi-adewara.vercel.app`** (no custom domain yet). Canonical URL is centralized in `lib/site.ts` — change it there when a real domain lands.
- **Run locally:** `npm run dev` → http://localhost:3939 · `npm run build` · `npx tsc --noEmit`.

---

## 3. Work completed

### ✅ Phase 0 — Social / SEO foundation
Every shared link now previews premium (was previously blank + hardcoded to a domain Pelumi doesn't own).
- `app/opengraph-image.tsx` — dynamic 1200×630 OG card (editorial dark, Instrument Serif fetched at build). Also serves the X/Twitter card via `app/twitter-image.tsx`.
- `app/icon.svg` (favicon) + `app/apple-icon.tsx` (iOS icon) — serif "P" monogram.
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`.
- `lib/site.ts` — canonical URL, set to `https://pelumi-adewara.vercel.app`.

### ✅ Phase 1 — Conversion layer
- **Services** section — 5 hireable offers in plain terms + "free 20-minute call" CTA (`components/services.tsx`).
- **Testimonials** section — real client quotes (`components/testimonials.tsx`).
- **Hero dual CTA** — "Work with me" (primary) + "See the work" (ghost).
- **Reusable `components/cta.tsx`** — primary (filled cream) / ghost (bordered) button.
- **Résumé slot** — built but dormant (see §7).
- Section order + indices: 00 Hero · 01 Work · 02 Services · 03 Testimonials · 04 How I build · 05 Stack · 06 Lab · 07 About · 08 Contact.

**Git:** both phases committed on branch **`portfolio-upgrade`** (NOT yet merged to `main`, so not yet deployed). Commits: `Phase 0…` and `Phase 1…`.

---

## 4. What's left

| Priority | Item | Blocked on |
|---|---|---|
| High | Deploy: merge `portfolio-upgrade` → `main` | Pelumi's go-ahead |
| High | **CV/résumé** — drop PDF + flip flag (see §7) | **The parallel CV session** |
| Med | Confirm testimonial permission (publishing "Nina" by name) | Pelumi |
| Med | Add **Truekey Realty** + **Lagos Key Listings** as full case studies | Screenshots + blurbs |
| Med | Screenshots for **Ronsho** + **Study Buddy** (currently text-only) | Pelumi |
| Med (Phase 2) | Individual `/work/[slug]` routes — shareable single-project links + per-project OG | — |
| Low | Clear remaining `// REPLACE` in `content.ts` (QwamPay/Study Buddy stacks, city, status) | Real values |
| Ongoing | 30-day content system (see `docs/STRATEGY.md`) | — |

---

## 5. Projects (canonical descriptions — CV must match these)

**On the portfolio (in `lib/content.ts`):**

1. **QwamPay** — *Fintech* · 2025–26 · Frontend, Product UI. Public marketing site + support portal for a WhatsApp-payments fintech. **Live in production** (qwampay.com). Stack: React, TypeScript, Tailwind.
2. **Motoka** — *Automotive* · 2026 · Backend, API design, Database. Vehicle-documents platform backend: auth, 2FA, KYC, vehicle records, automatic expiry-notification engine (9-point schedule). Serves several thousand car owners. Stack: Node.js, Express, Supabase, PostgreSQL, REST. (motoka.ng)
3. **Ronsho** — *Marketplace* · 2026 · Frontend, Backend, Database. Nigerian bespoke-fashion marketplace connecting customers with tailors + fabric sellers. Built solo full-stack. Stack: React, TypeScript, Vite, Tailwind, Node.js, Supabase.
4. **Study Buddy** — *Education* · 2026 · Full-stack, Research. E-learning platform; final-year dissertation at **Arden University** — every feature grounded in e-learning literature (in-lesson quizzes, progress tracking, lesson-duration metadata). Stack: React, Node.js, Express, MongoDB.
5. **Who's Cuh?** — *Food delivery* · 2026 · Frontend, Brand. Landing site for a local food-delivery brand (Ijebu-Ode & Ijagun). **Live in production.** Stack: React, TypeScript, Vite, Vercel.

**Not yet on the portfolio (real, shipped — surfaced from client chats, candidates for case studies):**

6. **Truekey Realty** — *Real estate* · real-estate listings site for homes across Ikoyi–Sangotedo, Lagos. **Live** (truekeyrealty.homes). Client: "Nina." Testimonial: *"I just checked it out — thank you very much."*
7. **Lagos Key Listings** — *Real estate* · real-estate site (lagos-key-listings.lovable.app). Testimonial: *"It's perfect. Thank you so much."*

---

## 6. Stack & services (for CV skills section)

**Stack (grouped, from `content.ts`):**
- **Interface:** React, Next.js, TypeScript, Tailwind CSS, Framer/Motion, HTML/CSS
- **Mobile:** React Native, cross-platform delivery
- **Backend:** Node.js, Express, REST APIs, auth systems, database design
- **Design:** Figma, design systems, wireframing, prototyping
- **Practice:** AI-assisted development, accessibility, performance budgets, technical writing
- **Databases seen across projects:** PostgreSQL, Supabase, MongoDB

**Services (what he's hireable for):** business/marketing websites · web apps & dashboards · mobile apps · backends & APIs · redesigns & UI implementation.

**Education:** Computer Science; final-year dissertation at Arden University (Study Buddy).
**Current role:** builds frontend for **QwamPay Technologies**.
**Experience framing:** 5+ years of practice across fintech, automotive, marketplaces, real estate, and education.

---

## 7. CV integration contract (IMPORTANT for the CV session)

The portfolio already has a **dormant résumé download** wired in. To make the CV plug in with zero rework:

1. **Output filename:** `pelumi-adewara-cv.pdf`
2. **Drop it at:** `public/pelumi-adewara-cv.pdf` in this repo.
3. **Flip the flag:** in `lib/content.ts`, set `resume.available: true`.
   Then "Résumé" download links appear automatically in the hero (and can be added to nav/contact).

**Keep the CV consistent with this doc:** same title ("Product Engineer"), same tagline, the §5 project descriptions, the §6 stack. The CV and portfolio should read like one person wrote both — because they did.

---

## 8. Contact / links (canonical)

- **Email:** Padewara12@gmail.com (personal) · Platforms@qwampay.com (work)
- **GitHub:** https://github.com/Dave1604 (@Dave1604)
- **LinkedIn:** https://www.linkedin.com/in/pelumi-adewara-077096274 (in/pelumi-adewara)
- **X:** https://x.com/Ayodave5 (@Ayodave5)
- **Portfolio:** https://pelumi-adewara.vercel.app

---

## 9. Related docs

- `docs/STRATEGY.md` — full positioning, prioritized roadmap, and the 30-day content system.
