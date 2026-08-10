/**
 * SOURCE OF TRUTH FOR ALL COPY.
 *
 * Replace items marked `// REPLACE` with real specifics once you send them
 * (project names, links, exact outcomes, contact URLs). Structure stays.
 */

export const identity = {
  name: "Pelumi Adewara",
  role: "Product engineer",
  // Hero kinetic line — read out loud, it should sound like a human, not a slogan
  thesis: [
    { word: "I", weight: "light" },
    { word: "design,", weight: "italic" },
    { word: "build,", weight: "light" },
    { word: "and", weight: "light" },
    { word: "ship", weight: "italic" },
    { word: "—", weight: "mute" },
    { word: "from", weight: "light" },
    { word: "the", weight: "light" },
    { word: "first", weight: "light" },
    { word: "wireframe", weight: "italic" },
    { word: "to", weight: "light" },
    { word: "the", weight: "light" },
    { word: "App", weight: "light" },
    { word: "Store.", weight: "italic" },
  ] as const,
  intro:
    "Five years of practice across fintech, automotive, marketplaces, and education. Computer science gives me the rigor; freelance gives me the empathy.",
} as const;

export const currently = {
  status: "Open to full-time remote roles & contract work",
  workingOn: "Full-stack engineer — QwamPay & Motoka",
  studying: "BSc Computing — Arden, 2026",
  // Set to your city. Time renders client-side from the IANA zone.
  city: "Lagos",
  timezone: "Africa/Lagos",
} as const;

// ---------------------------------------------------------------------------
// AVAILABILITY — answers the two questions every remote recruiter asks before
// they read a single case study: can I hire this person, and will our hours
// overlap? Leaving these unanswered is what gets a tab closed.
// ---------------------------------------------------------------------------

export const availability = {
  setup:
    "Hired worldwide as an independent contractor — no visa or sponsorship required.",
  hours:
    "Based in Lagos (GMT+1). Full working-day overlap with UK and EU teams; hours extend to cover the US East Coast morning.",
} as const;

// ---------------------------------------------------------------------------
// BOOKING — flip `available` and paste a Cal.com / Calendly URL and the
// "book a call" buttons light up everywhere automatically. Until then the
// CTAs route to the contact form, so nothing on the page promises a
// scheduler that doesn't exist.
// ---------------------------------------------------------------------------

export const booking = {
  available: true,
  href: "https://cal.com/pelumi-adewara-g8krb3/30min",
  label: "Book a 30-min call",
} as const;

// ---------------------------------------------------------------------------
// EXPERIENCE — the section a recruiter looks for first and the portfolio
// version of the CV. Titles, orgs, dates, one or two lines each. Keep this in
// sync with /public/pelumi-adewara-cv.pdf; a mismatch between the two is the
// fastest way to lose a reader's trust.
// ---------------------------------------------------------------------------

export type Role = {
  title: string;
  org: string;
  period: string;
  context?: string;
  href?: string;
  live?: boolean;
  points: string[];
  stack?: string[];
};

export const experience: Role[] = [
  {
    title: "Full Stack Software Engineer",
    org: "QwamPay Technologies",
    period: "2025 — Present",
    context: "WhatsApp-native fintech · Lagos",
    href: "https://qwampay.com",
    live: true,
    points: [
      "Built three production frontends — the marketing site, the support portal, and the complete admin portal — for a payments platform now in closed beta with around 300 testers.",
      "Worked on the backend powering WhatsApp-based payments, and connected Meta WhatsApp Business message templates and workflows.",
      "Built a reusable UI component library and integrated backend APIs, working alongside backend engineers from startup stage.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Full Stack Software Engineer",
    org: "Motoka",
    period: "2025 — Present",
    context: "Vehicle-documents platform",
    href: "https://motoka.ng",
    live: true,
    points: [
      "Built the complete backend architecture for a platform serving around 5,000 car owners: 2FA authentication, KYC, vehicle records, and payment workflows.",
      "Shipped an automatic document-expiry engine on a nine-point reminder schedule, plus guest renewals and public REST APIs.",
      "Redesigned the admin dashboard end to end, working directly with startup leadership.",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "Supabase", "REST"],
  },
  {
    title: "Freelance Product Engineer",
    org: "~10 completed client projects",
    period: "2021 — Present",
    context: "Real estate · food delivery · automotive · culture",
    points: [
      "Delivered around ten client projects end to end — requirements, client meetings, revisions, and launch — including Truekey Realty and Who's Cuh?.",
      "Further work spans a car-dealership site, a museum site with a lighting-concept brand, and a real-estate platform with interactive maps.",
    ],
  },
  {
    title: "Frontend Developer",
    org: "AutoCredit Technologies (MoniCredit)",
    period: "2024 — 2025",
    context: "Consumer finance · wallets & payments",
    points: [
      "Developed and maintained production frontend features for MoniCredit, a consumer finance app built on wallet-as-a-service and value-added services — wallets, transfers, bill payments, airtime and data.",
      "Built responsive interfaces in close collaboration with the backend team.",
    ],
  },
  {
    title: "Frontend Developer & Tutor",
    org: "Tech Talent Academy",
    period: "2021 — 2023",
    points: [
      "Taught frontend web development and mentored beginner developers, reviewing student projects while shipping frontend applications alongside teaching.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    org: "CodeSquad LLC",
    period: "2020 — 2021",
    points: [
      "Built responsive web interfaces alongside experienced developers, working in Git-based team workflows.",
    ],
  },
];

export const education = {
  degree: "BSc (Hons) Computing",
  school: "Arden University",
  period: "Awarded June 2026",
  // The 2:1 stays because UK and EU employers still screen on classification.
  // It's one line and it's a positive; drop it if it ever starts feeling junior.
  classification: "Second Class Honours, Upper Division",
  note: "Final-year dissertation: the Study Buddy e-learning platform. Coursework in data mining, blockchain, cybersecurity, and managing innovation.",
} as const;

// ---------------------------------------------------------------------------
// SELECTED WORK
// ---------------------------------------------------------------------------
// Four case studies covering breadth. Copy is structural so it reads honest
// today; swap each block with real names, links, screenshots, and outcomes
// once you send them. Outcomes are deliberately qualitative — replace with
// real metrics if you have them, leave as-is if you don't (no fake numbers).

export type CaseStudy = {
  id: string;
  index: string;
  kind: string;
  name: string;
  year: string;
  role: string[];
  oneLiner: string;
  problem: string;
  process: string;
  solution: string;
  outcome: string;
  stack: string[];
  links?: { label: string; href: string }[];
  image?: { src: string; alt: string };
};

export const work: CaseStudy[] = [
  {
    id: "qwampay",
    index: "01",
    kind: "Fintech",
    name: "QwamPay — website & support portal",
    year: "2025–26",
    role: ["Frontend", "Backend", "Product UI"],
    oneLiner:
      "Three production frontends for a WhatsApp-payments fintech — a marketing site that has to earn trust in one scroll, a support portal that keeps it, and the admin portal the team runs the business from.",
    problem:
      "QwamPay lets people make instant payments inside WhatsApp — a new behaviour, which means the website does the explaining a bank branch normally would. It had to make that behaviour feel obvious and safe to a first-time visitor, and the support experience couldn't undercut the promise the moment something went wrong.",
    process:
      "Worked directly with the team on how QwamPay is actually pitched, then compressed it: one clear promise up top, product detail and proof underneath. For support, mapped the questions users actually arrive with and organised the portal around resolutions, not the org chart.",
    solution:
      "Built and shipped three frontends: a fast, responsive marketing site that walks a visitor from 'what is this' to 'get started' without a dead end; a support portal where finding the answer takes fewer taps than raising a ticket; and the internal admin portal the team operates on. Also worked the backend behind the WhatsApp payment flow and wired up Meta's WhatsApp Business message templates — plus a reusable component library the three surfaces share.",
    outcome:
      "The marketing site and support portal are live at qwampay.com — the first thing every prospective user, partner, and investor meets. The platform itself is in closed beta with around 300 testers, run day to day through the admin portal I built.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    links: [{ label: "Visit qwampay.com", href: "https://qwampay.com" }],
    image: {
      src: "/work/qwampay.png",
      alt: "QwamPay homepage — money, bills & contribution, all inside WhatsApp",
    },
  },
  {
    id: "motoka",
    index: "02",
    kind: "Automotive",
    name: "Motoka — vehicle platform backend",
    year: "2026",
    role: ["Backend", "API design", "Database"],
    oneLiner:
      "The API behind a vehicle-documents platform — auth, KYC, vehicle records, and a notification engine that never lets a paper quietly expire.",
    problem:
      "Vehicle paperwork fails silently: nothing tells you a document is about to lapse until a checkpoint does. Motoka needed a backend that treats expiry dates as first-class data — plus the trust infrastructure a product holding people's documents can't skip: real auth, two-factor, KYC.",
    process:
      "Designed the API around the vehicle record as the core entity, with documents, uploads, and reminders hanging off it. The notification schedule came from asking when a reminder is actually useful: early enough to act on, repeated enough to survive being ignored, and persistent past the deadline.",
    solution:
      "Node.js/Express API on Supabase — email/password and magic-link auth, 2FA via authenticator app or email OTP, profile and KYC management, vehicle registration, payment workflows, guest renewals, public REST endpoints, file uploads to Supabase Storage, rate limiting and security headers. Expiry notifications fire automatically on a nine-point schedule, from 30 days before to a week after. I also redesigned the admin dashboard end to end.",
    outcome:
      "The backend runs the product for around 5,000 registered car owners — every account, vehicle record, payment, and reminder goes through it — and all nine reminder stages fire without a human in the loop.",
    stack: ["Node.js", "Express", "Supabase", "PostgreSQL", "REST"],
    links: [
      { label: "Visit motoka.ng", href: "https://motoka.ng" },
      { label: "Backend on GitHub", href: "https://github.com/Dave1604/motoka-backend" },
    ],
    image: {
      src: "/work/motoka.png",
      alt: "Motoka homepage — effortless car ownership in Nigeria, with plate-number license renewal",
    },
  },
  {
    id: "ronsho",
    index: "03",
    kind: "Marketplace",
    name: "Ronsho — bespoke fashion marketplace",
    year: "2026",
    role: ["Frontend", "Backend", "Database"],
    oneLiner:
      "A Nigerian marketplace connecting customers with tailors and fabric sellers — giving bespoke fashion the digital storefront it never had.",
    problem:
      "Nigerian bespoke fashion runs on referrals and WhatsApp: great tailors are invisible beyond their own street, and a customer ordering bespoke online has no basis for trust. The platform had to carry what a recommendation carries — portfolio, pricing, turnaround, and other people's word.",
    process:
      "Built around the two questions every customer actually asks: 'can I trust this tailor?' and 'do they have my fabric?'. Profiles lead with portfolio and reviews; search filters across tailors and fabrics at the same time, because that's how people shop for an outfit — as one decision, not two.",
    solution:
      "Full-stack build: React + TypeScript frontend with Tailwind, a Node/Express TypeScript API, and Supabase (Postgres) underneath. Tailor discovery by location, specialty, and rating; a fabric marketplace by type, colour, and price per yard; fitting requests and orders placed directly through the platform.",
    outcome:
      "Discovery, profiles, fabrics, search, and bookings all work end to end — designed and built solo across the whole stack, and in active development ahead of launch.",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Node.js", "Supabase"],
    image: {
      src: "/work/ronsho.jpg",
      alt: "Ronsho marketplace hero — 'Shop Ronsho for Weddings, Events & Anniversaries' — over a search band with style, delivery-date, and colour filters",
    },
    links: [{ label: "View on GitHub", href: "https://github.com/Dave1604/ronsho" }],
  },
  {
    id: "study-buddy",
    index: "04",
    kind: "Education",
    name: "Study Buddy — e-learning platform",
    year: "2026",
    role: ["Full-stack", "Research"],
    oneLiner:
      "A dissertation-grade e-learning platform where every engagement feature is drawn from the research literature, not a feature wishlist.",
    problem:
      "Most e-learning tools bolt quizzes on as an afterthought and call it engagement. My final-year dissertation at Arden University asked a stricter question: what does a platform look like when every interactive feature is chosen from what e-learning research says actually works?",
    process:
      "Started in the literature — the testing effect (Roediger & Karpicke), metacognitive self-monitoring, and the finding that competitive leaderboards can demotivate learners. Then I built only what the evidence supported: instant explanatory feedback over blind scoring, personal progress over rankings, honest time expectations. Every feature traces back to a source rather than a hunch.",
    solution:
      "A full-stack platform with student and instructor roles: in-lesson quizzes across three question types with shuffled answers and instant feedback that explains why an answer is wrong, Recharts progress dashboards tracking score trends and learning hours, and lesson-duration metadata that rolls up into real course-length estimates — '12m' per lesson, '3h 5m' per course. Behind it, a hardened Express API — JWT auth, bcrypt, rate-limiting — targeting WCAG 2.1 AA. The data layer started on MongoDB and I migrated it to Supabase Postgres: once progress, attempts, lessons, and courses all had to agree with each other, the relational model stopped being optional.",
    outcome:
      "Runs end to end across both student and instructor roles — three question types, explanatory feedback, progress dashboards, and course-length estimates — on a rate-limited, JWT-secured API built to WCAG 2.1 AA. It doubles as my final-year dissertation at Arden, which is why the requirements document is a bibliography.",
    stack: ["React", "Recharts", "Node.js / Express", "JWT auth", "Supabase (Postgres)"],
    image: {
      src: "/work/study-buddy.png",
      alt: "Study Buddy landing page — 'Learn without limits. Track every step.' — with floating quiz and progress-dashboard mockups",
    },
    links: [{ label: "View on GitHub", href: "https://github.com/Dave1604/study-buddy-platform" }],
  },
  {
    id: "whos-cuh",
    index: "05",
    kind: "Food delivery",
    name: "Who's Cuh? — food delivery platform",
    year: "2026",
    role: ["Frontend", "Product UI", "Brand"],
    oneLiner:
      "A food-delivery platform for Ijebu-Ode & Ijagun — the brand and marketing site, the admin panel restaurants run their menus from, and the rider side. The customer app is in build.",
    problem:
      "A delivery service competing on personality needed a web presence that carried the brand's voice — playful, local, direct — without reading like a template with the logo swapped. Behind it sat the harder problem: restaurant owners had to be able to put food in the app themselves, and riders needed a flow of their own, or the whole thing would run on phone calls.",
    process:
      "Started from the voice, not the layout: if the brand talks like a friend who knows where to eat, the site should too. Then built mobile-first, because that's where the orders come from. The admin panel was designed against a stricter test than the marketing site — a restaurant owner with no training should be able to add a dish, price it, and see it live without calling anyone.",
    solution:
      "A fast React + TypeScript front end on Vite, shipped on Vercel: a menu-forward marketing site with a straight line from landing to ordering, an admin panel where restaurants upload and manage their food, and the rider-facing side of the platform. The customer app is in active development.",
    outcome:
      "The marketing site is live as the brand's front door, with five founding restaurant partners signed into early access. The admin and rider surfaces are built and waiting on the app launch.",
    stack: ["React", "TypeScript", "Vite", "Vercel"],
    links: [{ label: "Visit the site", href: "https://whos-cuh.vercel.app" }],
    image: {
      src: "/work/whos-cuh.png",
      alt: "Who's Cuh? landing page — food that hits different, with the app previewed on a phone",
    },
  },
];

// ---------------------------------------------------------------------------
// SERVICES — what someone can actually hire me for, in plain terms
// ---------------------------------------------------------------------------

export const services = [
  {
    number: "01",
    title: "Business & marketing websites",
    body: "Fast, responsive sites that move a first-time visitor from 'what is this' to 'get started' without a dead end. Built to load quick and read clearly — not just look good in a screenshot.",
    audience: "Founders · agencies · local businesses",
  },
  {
    number: "02",
    title: "Web apps & dashboards",
    body: "Auth, data, admin — the parts users never see but always feel. From a single internal tool to a full product surface.",
    audience: "Startups · SaaS · internal teams",
  },
  {
    number: "03",
    title: "Mobile apps",
    body: "iOS and Android from one React Native codebase — native feel, gesture-first, shipped to the stores.",
    audience: "Product teams · founders",
  },
  {
    number: "04",
    title: "Backends & APIs",
    body: "Node/Express on Postgres or Supabase — auth, 2FA, KYC, uploads, scheduled jobs. The trust infrastructure a real product can't skip.",
    audience: "Products handling real data",
  },
  {
    number: "05",
    title: "Redesigns & UI implementation",
    body: "A tired site or a Figma file, turned into something premium and pixel-honest. Design handed over? I build it exactly. No design yet? I do that too.",
    audience: "Anyone whose site outgrew its ambition",
  },
];

// ---------------------------------------------------------------------------
// TESTIMONIALS — real client words. Keep short and honest; never invent.
// ---------------------------------------------------------------------------

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  href?: string;
};

// One real quote beats two from the same client — a thin wall of praise reads
// as "one client, stretched". Add the second only when it's a different name
// on a different project.
export const testimonials: Testimonial[] = [
  {
    quote: "It’s perfect. Thank you so much.",
    name: "Nina",
    detail: "Truekey Realty — real-estate site",
    href: "https://truekeyrealty.homes",
  },
];

// ---------------------------------------------------------------------------
// RÉSUMÉ — deferred. Drop a PDF at /public/pelumi-adewara-cv.pdf,
// then set available: true and the download links appear automatically.
// ---------------------------------------------------------------------------

export const resume = {
  available: true,
  href: "/pelumi-adewara-cv.pdf",
  label: "Résumé",
} as const;

// ---------------------------------------------------------------------------
// HOW I BUILD — one combined narrative, not two parallel essays
// ---------------------------------------------------------------------------

export const principles = [
  {
    number: "01",
    title: "Design and code at the same table",
    body: "I don't hand off — I move between Figma and the editor in the same hour. Decisions made with both files open are different from decisions made in either alone. Spacing rules collapse, animation timings get honest, and edge cases stop being someone else's problem.",
  },
  {
    number: "02",
    title: "Performance is a design decision",
    body: "Speed isn't a final pass — it's how an interface feels in the first quarter of a second. I budget for it: image weight, route caching, JS payloads, the size of the first paint. If a flourish makes the page slower than the user's patience, the flourish loses.",
  },
  {
    number: "03",
    title: "Interfaces should feel honest",
    body: "Loading states tell the truth. Error messages name the thing. Buttons say what they do, not what marketing wishes they did. Confidence comes from clarity, and clarity is mostly editorial work — copy, hierarchy, restraint.",
  },
  {
    number: "04",
    title: "Build small, ship often",
    body: "Big launches hide bad assumptions. I ship the smallest version that's honest about what it is, watch how it's used, and earn the next layer. Most 'features' get cheaper to remove than to refine.",
  },
  {
    number: "05",
    title: "Accessibility is the floor, not the finish",
    body: "Semantic structure, focus order, motion preferences, contrast — these are commitments, not checkboxes. An interface that's only usable by people who look and move like the team is an interface that hasn't been finished.",
  },
];

// ---------------------------------------------------------------------------
// STACK — grouped by intent, not alphabetised
// ---------------------------------------------------------------------------

export const stack = [
  {
    group: "Interface",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML / CSS"],
  },
  {
    group: "Mobile",
    items: ["React Native", "Cross-platform delivery"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Auth systems", "Database design"],
  },
  {
    group: "Design",
    items: ["Figma", "Design systems", "Wireframing", "Prototyping"],
  },
  {
    group: "Practice",
    items: [
      "AI-assisted development",
      "Accessibility",
      "Performance budgets",
      "Technical writing",
    ],
  },
];

// ---------------------------------------------------------------------------
// PROJECT LAB — studio sketchbook, framed honestly (not shipped products)
// ---------------------------------------------------------------------------

export const lab = [
  {
    tag: "Typography",
    title: "Fluid display type — a study in how letters breathe at scale",
    note: "Notes on optical sizing, axis behaviour, and where serif italics earn their place in product UI.",
  },
  {
    tag: "Motion",
    title: "Interaction sketches — easings, transforms, restraint",
    note: "A small library of timings I trust. Most modern UI motion is too long, too eager, too literal.",
  },
  {
    tag: "Components",
    title: "Design-system R&D — primitives I keep rebuilding",
    note: "Buttons, tooltips, combobox patterns, focus rings. The boring 5% that decides whether the system feels good.",
  },
  {
    tag: "AI workflow",
    title: "Notes from AI-assisted development",
    note: "What the model is genuinely good at, where it lies, and how I structure prompts and reviews so taste survives the speed-up.",
  },
  {
    tag: "Mobile",
    title: "React Native ergonomics — gesture-first patterns",
    note: "On the difference between a mobile app and a website wearing native chrome.",
  },
  {
    tag: "Editorial",
    title: "Layout systems for long-form product content",
    note: "Marketing pages that read like a magazine instead of a deck.",
  },
];

// ---------------------------------------------------------------------------
// ABOUT — short, written for a human
// ---------------------------------------------------------------------------

export const about = [
  "I started building because I was the friend everyone asked to make their idea look like a real thing. I learned design by being impatient with cheap-looking work, and engineering by being impatient with software that wasted my time.",
  "Computer Science gave me the part of the craft that doesn't change — the structures underneath, the reasons systems behave the way they do. Freelance work gave me the part that does — clients, deadlines, the discipline of shipping something a real person will sit in front of.",
  "Most of my favourite projects sit at a seam: between design and code, between a frontend feeling and a backend reality, between what a brief asks for and what it actually needs. I'm fluent on both sides on purpose.",
  "I want to work on products that take their users seriously — the kind of work where every detail repays the attention. If that's the kind of thing you're making, I'd like to hear about it.",
];

// ---------------------------------------------------------------------------
// CONTACT — placeholders. URLs go in once you send them.
// ---------------------------------------------------------------------------

export const contact = {
  email: "Padewara12@gmail.com",
  socials: [
    { label: "GitHub", handle: "@Dave1604", href: "https://github.com/Dave1604" },
    { label: "LinkedIn", handle: "in/pelumi-adewara", href: "https://www.linkedin.com/in/pelumi-adewara-077096274" },
    { label: "X", handle: "@Ayodave5", href: "https://x.com/Ayodave5" },
  ],
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "How I build", href: "#build" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
