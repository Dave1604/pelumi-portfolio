# Project Handoff & Status — Pelumi's Portfolio + Brand

> **Purpose:** single source of truth so any collaborator (including a parallel
> Claude session building the CV) is on the same page. If you're building the
> **CV**, read §1, §5, §6, §7 — they define the positioning, projects, and
> stack the résumé must match word-for-word so portfolio and CV agree.
>
> **Last updated:** 2026-09-21

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

### ✅ Phase 1.5 — Recruiter layer (2026-08-10)
Came out of a hiring-manager review of the live site. The finding that drove it:
**the CV was materially stronger than the site.** The site read as "freelancer with
five side projects"; the CV shows two current engineering roles, five employers,
and ~10 delivered client projects. Fixes:

- **`availability` in `content.ts`** — states the contractor/no-sponsorship setup and
  the GMT+1 overlap with UK/EU/US-East. Rendered in the hero foot **and** repeated in
  Contact (recruiters often deep-link straight there). This answers the two questions
  that otherwise close the tab.
- **New `components/experience.tsx` (§02)** — on-page employment history sourced from
  the CV: QwamPay, Motoka, Freelance, AutoCredit/MoniCredit, Tech Talent Academy,
  CodeSquad, plus an education row and a résumé-download CTA. **Sections renumbered:**
  00 Hero · 01 Work · **02 Experience** · 03 Services · 04 Testimonials · 05 How I build ·
  06 Stack · 07 Lab · 08 About · 09 Contact. "Experience" added to `nav`.
- **Real specifics in case-study outcomes** — QwamPay corrected to *three* production
  frontends (marketing + support + admin) plus backend/Meta WhatsApp template work;
  Motoka's payments, guest renewals and nine-stage engine surfaced; Study Buddy
  reframed to lead with the software, not the dissertation; Who's Cuh credits five
  founding restaurant partners.
- **Testimonials cut to one** — two thank-you notes from the *same* client read as
  padding. Component now renders a single quote full-width.
- **`booking` in `content.ts`** — dormant flag + href. Flip `available` and paste a
  Cal.com URL and the "book a call" CTAs light up in Services and Contact. Until then
  nothing on the page promises a scheduler that doesn't exist.

### 🐛 Fixed — the site had no Lighthouse performance score at all
Running Lighthouse against the live site returned **`NO_LCP`** on both desktop and
mobile presets: no Largest Contentful Paint, therefore **no performance score** —
what a client or recruiter would see if they ran PageSpeed Insights on it.

**Cause:** `@keyframes hero-rise` animated the hero `<h1>` from `opacity: 0`. Chrome
evaluates only an element's **first paint** for LCP candidacy and permanently skips
anything painted fully transparent, so the page's natural LCP element disqualified
itself and nothing else above the fold qualified either.

**Fix:** `hero-rise` now animates `transform` + `filter: blur()` only, no opacity — the
headline paints real pixels on frame one. At-rest appearance is unchanged; the entrance
reads as a settle rather than a fade.

**Verified** on a local production build: Performance **100**, Accessibility **100**,
Best Practices **100**, SEO **100**; FCP 0.3 s, LCP 0.6 s, TBT 0 ms, CLS 0.
⚠️ Those are localhost numbers — **re-run against the live URL after deploying** before
quoting any figure on the site itself. Do not publish a localhost score.

### ✅ Statement interlude + case-study refresh (2026-09-21, deployed)

- **New `components/statement.tsx`** — unnumbered interlude between Testimonials and
  How I Build: one serif line ("Not tutorials. Not toy repos. Real products in
  production, used by strangers.") whose characters brighten in sequence with scroll
  and dim on the way back. Motion `useScroll` + per-char `useTransform`, no new deps.
  Copy lives in `statement` in `content.ts`. Chars start at 0.14 opacity (LCP-safe),
  full text in `aria-label`, reduced-motion renders plain text. Scroll progress tracks
  the **paragraph**, not the section — section padding would burn the sweep off-screen.
- **Motoka** — role includes Frontend; copy credits the public site at motoka.ng and
  the homepage plate-renewal flow; new `motoka.jpg` (old png removed).
- **QwamPay** — new hero screenshot of the redesigned qwampay.com (`qwampay.jpg`,
  2880×1500). Captured headless via CDP with the hero's 5-language rotation pinned to
  English, floating chat bubbles hidden, bottom dead space cropped. Alt text names the
  language switcher (English, Pidgin, Yorùbá, Igbo, Hausa).
- **CLAUDE.md** now committed to the repo (deploy workflow, content rules, state).
- Reusable **motion skills** saved at `~/.claude/skills/`: `scroll-text-reveal`,
  `site-preloader`, `section-entrances` — GSAP/Lenis/Motion techniques
  reverse-engineered from abdvl.xyz, pickt404, rivetsync. Shareable reference artifact:
  https://claude.ai/code/artifact/07a306af-bf2a-44a8-a155-2e1aa55a04e8

---

## 4. What's left

| Priority | Item | Blocked on |
|---|---|---|
| ✅ Done | Deploy Phase 0+1 to production (pelumi-adewara.vercel.app) | — |
| ✅ Done | **CV/résumé** — PDF in `public/`, `resume.available: true` | — |
| ✅ Done | Testimonial permission — Nina confirmed, published by name | — |
| ✅ Done | Clear `// REPLACE` placeholders (city, grad date, QwamPay/Study Buddy stacks) | — |
| ✅ Done | Screenshots for **Ronsho** + **Study Buddy** | — |
| ✅ Done | Recruiter layer — availability, Experience section, metrics, testimonial cut | — |
| ✅ Done | **Cal.com booking** — live at `cal.com/pelumi-adewara-g8krb3/30min`, wired into Services + Contact via `booking` in `content.ts`. Copy changed 20-min → **30-min** to match the real event | — |
| **High** | **Rename the Cal.com event** — it's titled *"15 min meeting"* but is 30 minutes long. Recruiters click "Book a 30-min call" and land on a page contradicting it | Pelumi |
| **High** | **Second testimonial from a different client** — one quote is thin | Pelumi |
| High | Real photo (headshot) for About + OG card | Pelumi |
| Med | Add **Truekey Realty** as a full case study | Screenshots + blurb |
| **High** | **Update the CV PDF** — there is no source file in this repo, only the built `public/pelumi-adewara-cv.pdf`, so it can't be edited here. See §7a for the exact list of corrections | Pelumi / CV session |
| **High** | Re-run Lighthouse on the **live** URL after deploying the LCP fix, then quote the real number in the "Performance is a design decision" principle | — |
| Med | Real form endpoint (Resend/Formspree) — `mailto:` silently dead-ends on machines with no mail client | — |
| Med | Ronsho + Study Buddy live demos — **blocked**: not deploy-ready, Study Buddy's Supabase project is gone | Pelumi |
| Med | Project Lab (§07) promises six essays that don't exist — write one or cut the section | Pelumi |
| Low | Mobile case study — hero says "to the App Store" and Services sells mobile apps, but no mobile project is shown | Pelumi |
| Med (Phase 2) | Individual `/work/[slug]` routes — shareable single-project links + per-project OG | — |
| Ongoing | 30-day content system (see `docs/STRATEGY.md`) | — |

---

## 5. Projects (canonical descriptions — CV must match these)

**On the portfolio (in `lib/content.ts`):**

1. **QwamPay** — *Fintech* · 2025–26 · Frontend, Product UI. Public marketing site + support portal for a WhatsApp-payments fintech. **Live in production** (qwampay.com). Stack: React, TypeScript, Tailwind.
2. **Motoka** — *Automotive* · 2026 · Backend, API design, Database. Vehicle-documents platform backend: auth, 2FA, KYC, vehicle records, automatic expiry-notification engine (9-point schedule). Serves several thousand car owners. Stack: Node.js, Express, Supabase, PostgreSQL, REST. (motoka.ng)
3. **Ronsho** — *Marketplace* · 2026 · Frontend, Backend, Database. Nigerian bespoke-fashion marketplace connecting customers with tailors + fabric sellers. Built solo full-stack. Stack: React, TypeScript, Vite, Tailwind, Node.js, Supabase.
4. **Study Buddy** — *Education* · 2026 · Full-stack, Research. E-learning platform; final-year dissertation at **Arden University** — every feature grounded in e-learning literature (in-lesson quizzes, progress tracking, lesson-duration metadata). Stack: React, Node.js, Express, MongoDB.
5. **Who's Cuh?** — *Food delivery* · 2026 · Frontend, Brand. Landing site for a local food-delivery brand (Ijebu-Ode & Ijagun). **Live in production.** Stack: React, TypeScript, Vite, Vercel.

**Not yet a full case study (real, shipped — currently a testimonial, candidate for a case study):**

6. **Truekey Realty** — *Real estate* · real-estate listings site for homes across Ikoyi–Sangotedo, Lagos. **Live** (truekeyrealty.homes). Client: Nina (permission to publish her name confirmed). Testimonials: *"I just checked it out — thank you very much."* and *"It's perfect. Thank you so much."* (This is a single project — an earlier Lovable build was superseded by the truekeyrealty.homes deployment; do not reference the old prototype URL.)

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

**Education:** BSc (Hons) Computer Science, Arden University — **expected graduation Nov 2026**; final-year dissertation (Study Buddy).
**Location:** Lagos, Nigeria (GMT+1).
**Current roles:** **Full Stack Software Engineer** at **QwamPay Technologies** *and* **Motoka** (both 2025–present). Not "frontend" — he ships backend at both.
**Experience framing:** 5+ years of practice across fintech, automotive, marketplaces, real estate, and education.

**Availability (canonical — keep site, CV, and LinkedIn identical):**
Open to **full-time remote roles and contract work**. Hired worldwide as an
**independent contractor — no visa or sponsorship required**. Full working-day overlap
with UK/EU; hours extend to cover the US East Coast morning.

**Employment history (canonical, mirrors `experience` in `content.ts` and the CV):**

| Period | Title | Org |
|---|---|---|
| 2025 – Present | Full Stack Software Engineer | QwamPay Technologies |
| 2025 – Present | Full Stack Software Engineer | Motoka |
| 2021 – Present | Freelance Product Engineer | ~10 completed client projects |
| 2024 – 2025 | Frontend Developer | AutoCredit Technologies (MoniCredit) — consumer finance app: wallet-as-a-service + value-added services. **Not a lending platform**; the CV's older wording was wrong. |
| 2021 – 2023 | Frontend Developer & Tutor | Tech Talent Academy |
| 2020 – 2021 | Frontend Developer Intern | CodeSquad LLC |

---

## 7. CV integration contract (IMPORTANT for the CV session)

The portfolio already has a **dormant résumé download** wired in. To make the CV plug in with zero rework:

1. **Output filename:** `pelumi-adewara-cv.pdf`
2. **Drop it at:** `public/pelumi-adewara-cv.pdf` in this repo.
3. **Flip the flag:** in `lib/content.ts`, set `resume.available: true`.
   Then "Résumé" download links appear automatically in the hero (and can be added to nav/contact).

**Keep the CV consistent with this doc:** same title ("Product Engineer"), same tagline, the §5 project descriptions, the §6 stack. The CV and portfolio should read like one person wrote both — because they did.

### 7a. CV corrections outstanding (as of 2026-08-10)

> **Copy-paste drafts for every correction below live in `docs/CV-UPDATES-2026-08.md`.**

The shipped `public/pelumi-adewara-cv.pdf` is now **out of sync with the site**. There is
no `.docx`/`.md`/Figma source in this repo — only the built PDF — so whoever regenerates
it needs the original. Corrections required:

1. **Education** — currently reads *"BSc (Hons) Computer Science · Expected Nov 2026"*.
   Should be **BSc (Hons) Computing, Arden University — awarded June 2026, Second Class
   Honours (Upper Division)**. Note the subject name changed too (Computing, not
   Computer Science) — confirm which is printed on the certificate and make all three
   surfaces agree (CV, site, LinkedIn).
   **Site-side decision (2026-09-21):** the portfolio deliberately omits the
   classification — Pelumi's call; a 2:1 line reads student-framed on a site pitching
   shipped production work. Degree/school/date stay. Whether the CV keeps the
   classification is a separate choice (CVs are screened differently); just don't
   "fix" the site back into showing it.
2. **Study Buddy stack** — CV says MongoDB. The project **migrated MongoDB → Supabase
   Postgres**. State the migration; it's a stronger detail than either database alone.
3. **Motoka** — "several thousand car owners" → **~5,000**.
4. **QwamPay** — the CV implies a live product. It is **in closed beta, ~300 testers**;
   the marketing and support sites are what's publicly live. Say so.
5. **Who's Cuh?** — scope is bigger than "brand site": marketing site **plus** a restaurant
   admin panel (menu upload/management) **plus** the rider-facing side, with the customer
   app in active development.
6. **Add the availability line** from §6 verbatim — contractor, no sponsorship, GMT+1
   overlap. It belongs at the top of the CV as much as on the site.
7. **MoniCredit is mis-described** — the CV calls it a *lending platform*. It's a
   consumer finance app built on **wallet-as-a-service and value-added services**
   (wallets, transfers, bill payments, airtime/data). Fix this one first; it's the only
   outright factual error in the document.

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
