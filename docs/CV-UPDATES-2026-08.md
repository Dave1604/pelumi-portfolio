# CV updates — 2026-08-10

Copy-paste replacements for `pelumi-adewara-cv.pdf`. Ordered by importance.
Each block shows what's in the CV now and what should replace it.

After applying: export as `pelumi-adewara-cv.pdf`, drop it at
`public/pelumi-adewara-cv.pdf` in this repo, and the site picks it up with no
code change. Update LinkedIn to match at the same time.

---

## 1. MoniCredit — factual error, fix first

The CV calls it a lending platform. It isn't.

**Now:**
> **Frontend Developer** · AutoCredit Technologies (MoniCredit) — 2024 – 2025
> Developed and maintained frontend features for the MoniCredit lending platform in
> production; built responsive interfaces and improved UX in collaboration with backend
> developers.

**Replace with:**
> **Frontend Developer** · AutoCredit Technologies (MoniCredit) — 2024 – 2025
> *Consumer finance app — wallet-as-a-service & value-added services*
> Developed and maintained production frontend features for MoniCredit, a consumer
> finance platform built on wallet-as-a-service and value-added services — wallets,
> transfers, bill payments, airtime and data.
> Built responsive interfaces and improved UX in close collaboration with backend
> developers.

---

## 2. Education — you've graduated

**Now:**
> **BSc (Hons) Computer Science** · Arden University — Expected Nov 2026

**Replace with:**
> **BSc (Hons) Computing** · Arden University — Awarded June 2026
> Second Class Honours (Upper Division)
> Final-year dissertation: Study Buddy e-learning platform. Coursework: Data Mining,
> Blockchain, Cybersecurity, Managing Innovation & Change.

⚠️ Check the certificate: is the subject **Computing** or **Computer Science**? Whichever
it is, make the CV, the site (`education.degree` in `lib/content.ts`) and LinkedIn agree.

---

## 3. Availability — new line, directly under the contact row

This is the highest-value addition. It answers the question that otherwise gets a
Nigeria-based applicant filtered out before anyone reads the experience.

> **Available for full-time remote roles and contract work.** Hired worldwide as an
> independent contractor — no visa or sponsorship required. Lagos (GMT+1): full
> working-day overlap with UK and EU teams, extending to cover the US East Coast morning.

---

## 4. Summary — two corrections

**Now:**
> Product Engineer with 5+ years of practice building production web and mobile
> applications across fintech, automotive, marketplaces, real estate, and education.
> Frontend specialist (React, Next.js, TypeScript) with growing backend ownership
> (Node.js, Express, PostgreSQL, Supabase). Ships real, live products used by real
> customers — including a WhatsApp-native fintech platform and a vehicle-documents
> backend serving several thousand car owners. Around 10 completed freelance client
> projects alongside startup roles.

**Replace with:**
> Product Engineer with 5+ years of practice building production web and mobile
> applications across fintech, automotive, marketplaces, real estate, and education.
> Frontend specialist (React, Next.js, TypeScript) with real backend ownership
> (Node.js, Express, PostgreSQL, Supabase). Ships products strangers actually use —
> a vehicle-documents backend serving around 5,000 car owners, and the three production
> frontends behind a WhatsApp-native payments platform now in closed beta. Around 10
> completed freelance client projects alongside two current engineering roles.

Changes: "several thousand" → **~5,000**; "growing backend ownership" → **real backend
ownership** (you own Motoka's entire backend — "growing" undersells it); "alongside
startup roles" → **two current engineering roles**.

---

## 5. QwamPay — don't imply a public launch

The current bullets read as a launched product. It's in closed beta, and claiming
otherwise is the kind of thing that unravels in an interview.

**Now (first bullet):**
> Built the public marketing website, the complete admin portal frontend, and the support
> portal frontend for a payments platform, all live in production.

**Replace with:**
> Built three production frontends — the public marketing site, the support portal, and
> the complete admin portal — for a WhatsApp-native payments platform. Marketing and
> support sites are publicly live; the platform is in closed beta with ~300 testers, run
> day to day through the admin portal.

Other two bullets (backend + Meta WhatsApp templates, reusable components) stay as-is —
they're good.

---

## 6. Motoka — use the number

**Now:**
> Built the complete backend architecture for a platform serving several thousand car
> owners: authentication with 2FA, KYC flows, vehicle records, and payment workflows.

**Replace with:**
> Built the complete backend architecture for a platform serving around 5,000 car owners:
> authentication with 2FA, KYC flows, vehicle records, and payment workflows.

---

## 7. Who's Cuh? — bigger than the CV says

**Now (under Freelance):**
> **Who's Cuh?** — food-delivery platform and brand site (Ijebu-Ode & Ijagun): ordering,
> restaurant onboarding, payment and delivery workflow. LIVE

**Replace with:**
> **Who's Cuh?** — food-delivery platform and brand (Ijebu-Ode & Ijagun). Built the
> marketing site (LIVE), the restaurant admin panel where vendors upload and manage their
> menus, and the rider-facing side of the platform; the customer app is in active
> development. Five founding restaurant partners signed into early access.

---

## 8. Study Buddy — the migration is the story

**Now:**
> **Study Buddy** — e-learning platform built as final-year dissertation at Arden
> University; features grounded in e-learning research (in-lesson quizzes, progress
> tracking, lesson-duration metadata).
> Stack: React, Node.js, Express, MongoDB

**Replace with:**
> **Study Buddy** — e-learning platform built as final-year dissertation at Arden
> University; every interactive feature grounded in e-learning research (in-lesson
> quizzes with explanatory feedback, progress tracking, lesson-duration metadata),
> built to WCAG 2.1 AA on a JWT-secured, rate-limited API. Migrated the data layer from
> MongoDB to Supabase Postgres once progress, attempts, lessons and courses had to stay
> relationally consistent.
> Stack: React, Node.js, Express, Supabase (Postgres) — migrated from MongoDB

The migration is worth the extra line: it's a real engineering judgement call, and
those are rarer on a junior-to-mid CV than another framework name.

---

## 9. Skills — one small correction

**Databases:** PostgreSQL, Supabase, MongoDB → keep all three. MongoDB stays legitimately
(you shipped on it, then migrated off it). No change needed; noted here so nobody
"fixes" it later.

---

## Still missing (not blocking)

- **Traffic numbers** for the freelance sites — "lots of traffic" can't go on a CV, but
  a real figure from Vercel Analytics or GA can ("Truekey Realty: ~N visitors/month").
- **A second testimonial** from a different client — the site currently shows one.
