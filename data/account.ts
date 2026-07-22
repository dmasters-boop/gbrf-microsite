// ─────────────────────────────────────────────────────────────────────────────
// ACCOUNT CONFIGURATION — Great Barrier Reef Foundation × Salesforce
// All site content is driven from this single source of truth.
//
// Built from the GBRF narrative as creative direction — not a field-mapping spec.
// Proof points use the Salesforce Nonprofit customer benchmark (FY2025, n=196).
// No deal values, ARR, or opportunity-stage language is used anywhere in this file.
// ─────────────────────────────────────────────────────────────────────────────

// ── Optional feature types ─────────────────────────────────────────────────

export interface GlobalMapOU {
  id: string;
  label: string;
  countries: string[];   // ISO alpha-3 codes
  status: "live" | "in-progress";
  agentforce?: boolean;
  before?: string;       // State before your platform
  current: string;       // Current state today
  future?: string;       // Future state with Agentforce
  futureHighlights?: string[];
  zoom?: { coordinates: [number, number]; zoom: number };
}

export interface GlobalMapTimelineFrame {
  year: number;
  label: string;
  caption?: string;
  ouStatus: Record<string, "live" | "in-progress" | "none">;
}

export interface ROISlider {
  label: string;
  sublabel: string;
  min: number;
  max: number;
  step: number;
  default: number;
  format: (v: number) => string;
}

export interface Headless360Pillar {
  number: string;
  eyebrow: string;
  headline: string;
  body: string;
  detail: string;
  capabilities: string[];
  tag: string;
}

export interface Headless360Play {
  category: string;
  label: string;
  description: string;
  surface: string;
}

export interface InnovationExperiment {
  id: string;
  status: "active" | "scoping" | "complete";
  title: string;
  function: string;
  tagline: string;
  description: string;
  why: string;
  signals: string[];
  stage: string;
  origin: string;
}

export type DemoCategory =
  | "agentforce" | "data" | "service" | "sales" | "platform"
  | "slack" | "tableau" | "analytics" | "watsonx";

export interface DemoVideo {
  id: string;
  title: string;
  description: string;
  category: DemoCategory;
  embedUrl: string;
  duration?: string;
  featured?: boolean;
}

export type TeamGroup =
  | "sales" | "engineering" | "architecture" | "success"
  | "specialist" | "analytics" | "data";

export interface TeamMember {
  name: string;
  role: string;
  group: TeamGroup;
  description: string;
  image?: string;
  email?: string;
  slack?: string;
}

export type AgentCategory =
  | "sales" | "service" | "field-service" | "marketing"
  | "operations" | "finance" | "hr" | "consulting" | "platform";

export interface SpecializedAgent {
  id: string;
  name: string;
  category: AgentCategory;
  tagline: string;
  description: string;
  image?: string;
}

export interface ArchLayer {
  name: string;
  tagline: string;
  products: string[];
  color?: string;
}

export interface StrategyRow {
  dimension: string;
  from: string;
  to: string;
  poweredBy: string[];
}

export interface ProofFunction {
  id: string;
  name: string;
  stats: { value: string; label: string }[];
  agentCapabilities: string[];
  results: { metric: string; label: string }[];
  quote?: { text: string; attribution: string };
}

export const ACCOUNT = {

  // ── Identity ───────────────────────────────────────────────────────────────
  company: "Great Barrier Reef Foundation",

  brand: {
    // Salesforce blue drives CTAs, highlights, stat anchors, and the full-bleed
    // "impact" sections — the Salesforce Nonprofit side of the blend.
    primary:      "#00A1E0",
    primaryDark:  "#0079AB",
    // Deep ocean navy canvas — the GBRF side of the blend. Overrides the dark
    // theme's near-black so the whole site reads as "immersive underwater."
    bg:           "#04263B",
    // Pale ice-blue for the light-rhythm content sections (Salesforce Nonprofit
    // white-content feel against the ocean-dark canvas).
    light:        "#E8F2F8",

    // "modern" = DM Sans display + DM Sans body — the bold geometric sans both
    // GBRF and Salesforce Nonprofit use.
    fonts: "modern" as "editorial" | "refined" | "modern" | "technical" | "bold",

    // "dark" theme gives the deep-hero / bold-stat-anchor rhythm and keeps the
    // whole site consistent with the template's dark-native deep-dive pages.
    theme: "dark" as "dark" | "light" | "editorial" | "bold" | "corporate",

    heroLayout: "centered" as "centered" | "split" | "minimal",

    // Full-bleed Great Barrier Reef photography — the Reef is the brand.
    // Rendered behind the hero with a deep-ocean brand-tinted overlay.
    heroImage: "/images/gbrf-hero-reef.jpg" as string | undefined,

    headerAlign: "left" as "left" | "center",

    // Spacious in hero/narrative sections (GBRF editorial feel). Product and
    // use-case sections keep their own card layouts regardless.
    density: "spacious" as "compact" | "default" | "spacious",

    // Co-branded GBRF × Salesforce nav lockup. The logo is a stacked mark with a
    // dark wordmark, so the Nav seats it on a small white chip for legibility on
    // the dark ocean nav (see components/Nav.tsx).
    customerLogo: "/images/gbrf-logo.png" as string | undefined,
    customerLogoDark: "/images/gbrf-logo.png" as string | undefined,
  },

  // ── Pages ──────────────────────────────────────────────────────────────────
  // Only sections the narrative actually supports are exposed. Agentic /
  // Agentforce-specific template pages (act-3, agent-tracker, agents,
  // headless-360, global-map, innovation, roi-calculator, demo-library, pulse)
  // are intentionally omitted — the GBRF narrative is a Nonprofit Cloud platform
  // story, not an autonomous-agent story, and inventing that content would break
  // the "don't editorialize / don't invent" rules. Their page files were removed.
  pages: [
    "business-case",
    "strategy",
    "commercials",
    "proof",
    "account-team",
  ] as string[],

  // ── Hero ───────────────────────────────────────────────────────────────────
  // Leads with operational transformation, per creative direction.
  hero: {
    eyebrow: "Great Barrier Reef Foundation × Salesforce · Executive Briefing",
    headline: "Built for\nwhat comes next.",
    subheadline:
      "GBRF manages one of the most complex conservation operations in the world — 400+ active projects protecting a $95 billion national and natural asset. The platform behind that mission needs to match its ambition.",
    ctaPrimary:   { label: "Read the business case", href: "/business-case" },
    ctaSecondary: { label: "Meet the team",          href: "/account-team" },
  },

  // ── Platform capability tiles (home grid) ──────────────────────────────────
  // Nonprofit Cloud Unlimited Edition capabilities — the two highlighted tiles
  // (NPC + Unlimited Edition) are the commercial centre of the microsite.
  platformInvestments: [
    { product: "Nonprofit Cloud",   category: "Platform",       highlight: true,  role: "One platform for donors, programs, partners, and impact" },
    { product: "Unlimited Edition", category: "Edition",        highlight: true,  role: "Full Copy Sandbox, Premier Success, and headroom to scale" },
    { product: "Program Management", category: "Delivery",      highlight: false, role: "60+ Reef-saving initiatives tracked against funding and milestones" },
    { product: "Stakeholder 360",   category: "Relationships",  highlight: false, role: "Every donor, agency, and Traditional Owner org in one view" },
    { product: "Impact Reporting",  category: "Accountability", highlight: false, role: "Board- and funder-ready outcomes from live data" },
    { product: "Integrations",      category: "Connectivity",   highlight: false, role: "Workday, eReefs, and government reporting connected without walls" },
    { product: "Backup & Shield",   category: "Trust",          highlight: false, role: "Data protection and governance for sensitive partnership data" },
  ],

  // ── The burning platform (home gap section) ───────────────────────────────
  gap: {
    headline: "GBRF has outgrown its fundraising database.",
    subhead:  "Raiser's Edge was built for one job. GBRF is now a science-driven, multi-stakeholder program delivery engine.",
    body:     "In 2025, GBRF launched an integrated Communications and Fundraising Strategy that unites marketing, communications, and fundraising under one operating model. That strategy demands a platform that can deliver on it — and a donor ledger cannot. Today, critical stakeholder relationships live in disconnected silos: program data doesn't connect to partner engagement, government contract milestones share no common view with donor stewardship, and the financial data in Workday never speaks to the CRM.",
    stats: [
      { value: "400+",  label: "active projects across the conservation portfolio" },
      { value: "60+",   label: "concurrent Reef-saving initiatives in delivery" },
      { value: "$95B",  label: "national and natural asset the mission protects" },
    ],
  },

  // ── Three chapters (home page nav cards) ─────────────────────────────────
  acts: [
    {
      number: "The Case",
      href: "/business-case",
      title: "The Business Case",
      tagline: "Why Unlimited Edition — and why now.",
      description: "The entitlements that make implementation succeed, the add-ons worth evaluating, and the timing that matters for GBRF's FY27 start.",
    },
    {
      number: "The Editions",
      href: "/strategy",
      title: "Why Unlimited Edition",
      tagline: "The version that scales without compromise.",
      description: "Same price list, same phased ramp. The difference is what's included — the entitlements that make a Gravity Lab implementation lower-risk and built to scale.",
    },
    {
      number: "The Numbers",
      href: "/commercials",
      title: "Investment Overview",
      tagline: "The five-year investment, modelled.",
      description: "Scenario comparison, phased licensing, and the GBRF Option — bespoke pricing designed for the mission.",
    },
  ],

  // ── Act 1: The Burning Platform ───────────────────────────────────────────
  act1: {
    meta: { title: "The Burning Platform · GBRF Executive Briefing" },
    hero: {
      eyebrow: "The Burning Platform",
      headline: "GBRF has outgrown\nits fundraising database.",
      subheadline: "Raiser's Edge did one job well for years — donor management. But GBRF now runs government contracts, activates corporate partnerships, and reports impact at a board and funder level that a donor ledger was never built to provide.",
    },
    narrative: [
      {
        title: "One Job, Done Well",
        body: "Raiser's Edge was built for a single purpose — donor management — and for years it delivered on it. That's not the problem. The problem is that GBRF's mission has moved on, and the platform behind it hasn't.",
      },
      {
        title: "A New Operating Model",
        body: "In 2025, GBRF launched an integrated Communications and Fundraising Strategy that unites marketing, communications, and fundraising under one cohesive operating model. That strategy demands a platform that can deliver on it — one that connects the whole picture, not just the giving history.",
      },
      {
        title: "No Longer Just Fundraising",
        body: "GBRF is a science-driven, multi-stakeholder program delivery engine running 60+ concurrent Reef-saving initiatives — managing government contracts, activating corporate partnerships, and reporting impact to a board and funders who expect evidence, not a donor ledger.",
      },
      {
        title: "The Cost of Disconnection",
        body: "Critical stakeholder relationships live in silos. Program data doesn't connect to partner engagement. Government contract milestones have no common view with donor stewardship. Workday holds financial and operational data that never speaks to the CRM. When the COO asks 'what is the return on our investment in Reef Restoration this quarter?', the answer requires manual assembly across systems — each one telling only part of the story.",
      },
    ],
    beforeAfter: {
      eyebrow: "Before vs. After",
      title:   "What answering one question looks like — before and after.",
      rows: [
        {
          dimension: "Stakeholder View",
          before: "A corporate partner's relationship lives across a fundraising record, an email thread, a program delivery log, and a government reporting file. No one has the full picture — the relationship manager is the integration layer.",
          after: "Every stakeholder lives in one platform with a complete, chronological relationship record. The COO sees the full partner ecosystem in a single view.",
        },
        {
          dimension: "Program & Contract Tracking",
          before: "Tracking 60+ projects against Reef Trust Partnership milestones and compliance obligations requires manual cross-referencing across disconnected systems.",
          after: "Program milestones are tracked in NPC against funding source, delivery partner, and reporting obligation — in one place. Reporting is generated, not assembled by hand.",
        },
        {
          dimension: "Donor Stewardship",
          before: "The most compelling proof of impact — what a donor's gift actually delivered for the Reef — has to be assembled manually before every major stewardship conversation.",
          after: "A donor's record connects to the program outcomes their giving funded. Stewardship conversations are backed by system data, not manual prep.",
        },
        {
          dimension: "Board & Funder Reporting",
          before: "Evidence-based reporting draws on data from multiple systems, consolidated by hand, and formatted for each audience separately.",
          after: "Reports draw on live program, stakeholder, and financial data — board-ready and funder-ready without manual assembly.",
        },
      ],
    },
    metrics: [
      { value: "400+",  label: "active projects in the conservation portfolio" },
      { value: "60+",   label: "concurrent Reef-saving initiatives" },
      { value: "4",     label: "program areas — Restoration, Water Quality, Resilient Reefs, Reef Islands" },
      { value: "$95B",  label: "national and natural asset protected" },
    ],
    enablers: [
      {
        name: "Nonprofit Cloud",
        role: "Purpose-built for the operating model",
        description: "A relationship-led, program-delivering, impact-reporting platform for an organisation with a diverse stakeholder ecosystem and a board that expects evidence-based outcomes.",
      },
      {
        name: "Program Management",
        role: "Delivery connected to funding",
        description: "Connects program delivery milestones to the funding sources behind them — so a milestone, its contract, and its budget live in one place.",
      },
      {
        name: "Stakeholder 360",
        role: "One record for every relationship",
        description: "Donors, government partners, corporate sponsors, community groups, and Traditional Owner organisations — a single view of every relationship and every touchpoint.",
      },
    ],
    quote: { text: "When the COO needs to answer 'what is the return on our investment in Reef Restoration this quarter?', the answer requires manual assembly across multiple systems — each one only telling part of the story. That is the gap." },
    next:  { href: "/act-2", label: "See the platform" },
  },

  // ── Act 1 interactive flow — Stakeholder 360 walkthrough ──────────────────
  scenarioFlow: {
    scenario: "Corporate Partner Review · AECOM · Reef Resilience Renewal",
    steps: [
      {
        id:      "signal",
        number:  "01",
        label:   "The Question",
        title:   "A partner review with no single answer",
        summary: "AECOM has renewed for four more years of Reef resilience support. But the relationship lives across four systems.",
        detail:  "Today, preparing for this review means the relationship manager pulls the donation history from the fundraising record, the co-investment from a program delivery log, the government co-funding linkage from a reporting file, and the last conversation from an email thread. The relationship manager is the integration layer.",
        mockUI: {
          type:      "alert",
          badge:     "PARTNER REVIEW",
          headline:  "AECOM — 4-year renewal",
          account:   "Corporate Partner · Reef Resilience",
          metric:    "Relationship spans 4 systems",
          submetric: "Fundraising · email · program log · government reporting",
        },
      },
      {
        id:      "context",
        number:  "02",
        label:   "One Record",
        title:   "The full relationship, assembled automatically",
        summary: "In Nonprofit Cloud, the complete partner picture resolves into a single Stakeholder 360 record.",
        detail:  "Donation history, active program co-investment, government co-funding linkage, and the next engagement milestone — every touchpoint and every commitment, in one place, without anyone stitching it together by hand.",
        mockUI: {
          type: "metrics",
          items: [
            { label: "Giving History",       value: "Complete", status: "neutral" },
            { label: "Program Co-Investment", value: "Linked",   status: "neutral" },
            { label: "Gov Co-Funding",       value: "Connected", status: "neutral" },
            { label: "Next Milestone",       value: "On record", status: "neutral" },
          ],
        },
      },
      {
        id:      "insight",
        number:  "03",
        label:   "The Picture",
        title:   "Every commitment, every connection — visible",
        summary: "The COO can see the full partner ecosystem in a single view, not four.",
        detail:  "Account teams see every touchpoint, every commitment, and every program connection tied to the AECOM relationship — including where corporate co-investment sits alongside government co-funding for the same Reef resilience work.",
        mockUI: {
          type:    "insight",
          finding: "Stakeholder 360 — full relationship resolved",
          drivers: [
            "Donation history connected to the programs it funded",
            "Corporate co-investment linked to government co-funding",
            "Next engagement milestone visible to the whole account team",
          ],
          confidence: 100,
        },
      },
      {
        id:      "action",
        number:  "04",
        label:   "The Brief",
        title:   "A Stakeholder 360 view, ready to review",
        summary: "One record showing the corporate partner's full history and next milestone — ready for the renewal conversation.",
        detail:  "Instead of an afternoon of manual assembly, the account team opens a single record: donation history, active program co-investment, government co-funding linkage, and the next engagement milestone — ready for a confident renewal conversation.",
        mockUI: {
          type: "document",
          items: [
            { icon: "doc",   label: "AECOM — Stakeholder 360 Record",        status: "ready" },
            { icon: "chart", label: "Program Co-Investment + Gov Linkage",   status: "ready" },
            { icon: "list",  label: "Next Engagement Milestone",             status: "ready" },
          ],
        },
      },
      {
        id:      "execution",
        number:  "05",
        label:   "The Outcome",
        title:   "Continuity that doesn't depend on memory",
        summary: "Onboarding a new program manager no longer means starting from scratch.",
        detail:  "Relationship continuity stops depending on any one person's recall. When a new program manager joins, the full history is already there — and the COO can answer for the whole partner ecosystem in one view.",
        mockUI: {
          type:   "comparison",
          before: { label: "Before NPC",  time: "4 systems",   mood: "Person-dependent" },
          after:  { label: "With NPC",     time: "1 record",   mood: "Continuous" },
        },
      },
    ],
  },

  // ── Act 2: The Platform Story ──────────────────────────────────────────────
  data360: {
    meta: { title: "The Platform · GBRF Executive Briefing" },
    hero: {
      eyebrow: "The Platform",
      headline: "One platform for\nthe whole mission.",
      subheadline: "Nonprofit Cloud is not a CRM with a nonprofit skin. It is purpose-built for the operating model GBRF actually runs — a relationship-led, program-delivering, impact-reporting organisation with a diverse stakeholder ecosystem.",
    },
    narrative: [
      {
        title: "Not a CRM With a Nonprofit Skin",
        body: "Nonprofit Cloud is purpose-built for a relationship-led, program-delivering, impact-reporting organisation with a diverse stakeholder ecosystem and a board that expects evidence-based outcomes. That is the organisation GBRF has become.",
      },
      {
        title: "The Full Stakeholder Picture",
        body: "NPC unifies donors, government partners, corporate sponsors, community groups, and Traditional Owner organisations in one platform — with a single view of every relationship and every touchpoint.",
      },
      {
        title: "Programs Connected to Funding",
        body: "Program management connects delivery milestones to the funding sources behind them. When a Water Quality project hits a milestone, the connected government contract record can update — and reporting is generated from the system, not assembled by hand.",
      },
      {
        title: "Unlimited Edition Does This Without Compromise",
        body: "Full Copy Sandbox means GravityLab can build and test without touching production. Premier Success and 24/7 support mean the implementation team is never blocked. Higher API limits and 10GB of storage per user mean the integrations GBRF needs — including a Workday data warehouse connection — can be built without hitting walls. The platform doesn't just support the mission today. It scales with it.",
      },
    ],
    dataFlows: [
      { source: "Donors & Philanthropy",           signal: "Giving history, stewardship, multi-year pledges and bequests",            outcome: "Every gift connected to the Reef outcomes it funded" },
      { source: "Government Partners",              signal: "Reef Trust Partnership contracts, milestones, and compliance obligations", outcome: "Contract milestones tracked against delivery in one place" },
      { source: "Corporate & Community Partners",   signal: "Co-investment, sponsorships, and Traditional Owner partnerships",         outcome: "The full partner ecosystem visible in a single view" },
      { source: "Finance & Operations (Workday)",   signal: "Financial and operational data via a data warehouse connection",          outcome: "Program ROI answerable without manual assembly across systems" },
    ],
    metrics: [
      { value: "Full Copy", label: "sandbox — build and test against a complete replica of production" },
      { value: "24/7",      label: "Premier Success — the implementation team is never blocked" },
      { value: "Higher",    label: "API call limits — integrations built without hitting walls" },
      { value: "10GB",      label: "data storage per user — built for a data-rich organisation" },
    ],
    quote: { text: "The platform doesn't just support the mission today. It scales with it." },
    next:  { href: "/use-cases", label: "Explore the use cases" },
  },

  // ── Use Cases (interactive library) ──────────────────────────────────────
  useCases: {
    meta: { title: "Use Cases · GBRF Executive Briefing" },
    headline: "Nonprofit Cloud for the Reef",
    opening:  "Four workflows GBRF runs every day — each one broken by disconnected systems today, each one unified by Nonprofit Cloud. These aren't features. They're the operating model GBRF's mission now demands.",
    cases: [
      {
        id: "case-1",
        title: "Unified Stakeholder Management",
        challenge: "GBRF's relationship with a major corporate partner like AECOM — renewed for four more years of Reef resilience support — lives across a fundraising record, an email thread, a program delivery log, and a government reporting file. No one has the full picture. The relationship manager is the integration layer.",
        what: "Every stakeholder — donor, government agency, Traditional Owner group, corporate partner — lives in a single platform with a complete, chronological relationship record. Account teams see every touchpoint, every commitment, every program connection. The COO can see the full partner ecosystem in a single view.",
        systems: ["Nonprofit Cloud", "Stakeholder 360", "Program Management"],
        workflow: "Demo moment: a Stakeholder 360 view — one record showing a corporate partner's donation history, active program co-investment, government co-funding linkage, and next engagement milestone.",
        value: "Relationship continuity that doesn't depend on individual memory. Onboarding a new program manager no longer means starting from scratch.",
      },
      {
        id: "case-2",
        title: "Program & Contract Milestones",
        challenge: "GBRF runs 60+ projects simultaneously across Reef Restoration, Water Quality, Resilient Reefs, and Reef Islands. Government contracts under the Reef Trust Partnership have specific milestone and compliance reporting requirements. Today, tracking those milestones against delivery and funding requires manual cross-referencing across systems.",
        what: "Program milestones are tracked in NPC against the funding source, delivery partner, and reporting obligation — in one place. When a Water Quality project hits a milestone, the connected government contract record updates. Reporting is generated from the system, not assembled by hand.",
        systems: ["Nonprofit Cloud", "Program Management", "Grants & Contracts"],
        workflow: "Demo moment: a live program record showing a Reef Trust Partnership project with linked government contract, delivery milestones, budget tracking, and an auto-generated progress summary.",
        value: "Faster government reporting, reduced manual effort, and audit-ready records that demonstrate accountability to funders at every level.",
      },
      {
        id: "case-3",
        title: "Donor Stewardship & Pipeline",
        challenge: "GBRF's philanthropic growth depends on moving major donors from first gift to multi-year commitment to legacy bequest. Today that journey is managed in a database that doesn't connect to program outcomes — so the most compelling proof of impact has to be assembled manually before every major stewardship conversation.",
        what: "Donor records in NPC connect to the program outcomes funded by their giving. A major donor's record shows their giving history, the projects their investment supported, and the measurable Reef outcomes those projects delivered. Stewardship conversations are backed by system data, not manual prep.",
        systems: ["Nonprofit Cloud", "Fundraising", "Impact Reporting"],
        workflow: "Demo moment: a major donor record showing giving history, linked program investments, and a generated impact summary ready for a stewardship call.",
        value: "Deeper donor relationships, more compelling stewardship conversations, and a stronger foundation for multi-year and legacy giving.",
      },
      {
        id: "case-4",
        title: "Impact Reporting for Board & Funders",
        challenge: "GBRF's Board and major funders — including the Australian Government — require evidence-based reporting on program outcomes. Today that reporting is a significant manual effort, drawing on data from multiple systems, consolidated by hand, and formatted for each audience separately.",
        what: "NPC's reporting capability draws on live program, stakeholder, and financial data to generate board-ready and funder-ready impact reports. The Foundation's sustainability commitments — including annual targets reported to the Board — are tracked in the same system that manages delivery.",
        systems: ["Nonprofit Cloud", "Impact Reporting", "Program Management"],
        workflow: "Demo moment: a live dashboard showing program portfolio performance, government contract compliance status, and philanthropic pipeline — the COO's view of the whole organisation in one screen.",
        value: "Board reporting that takes hours, not days. Funder accountability that demonstrates impact without manual assembly.",
      },
    ],
    beforeAfter: {
      headline: "The workflows Nonprofit Cloud changes first.",
      workflows: [
        {
          title: "Stakeholder Relationship Management",
          before: "A corporate partner's relationship is spread across a fundraising record, an email thread, a program delivery log, and a government reporting file. Preparing for a renewal means an afternoon of manual assembly, and the full picture only exists in one person's head.",
          after: "Every stakeholder lives in one platform with a complete, chronological record. Account teams — and the COO — see every touchpoint, commitment, and program connection in a single Stakeholder 360 view.",
        },
        {
          title: "Program & Contract Reporting",
          before: "60+ projects tracked against Reef Trust Partnership milestones require manual cross-referencing across systems. Government reporting is consolidated by hand, project by project.",
          after: "Milestones are tracked against funding source, delivery partner, and reporting obligation in one place. When a project hits a milestone, the connected contract record updates — and progress summaries generate from the system.",
        },
      ],
    },
    valueLevers: {
      headline: "Where the platform changes the day-to-day",
      disclaimer: "The goal isn't more systems. It's an organisation where every relationship, every program, and every dollar of impact lives in one platform — so the answer to a board question, a funder report, or a stewardship conversation is already there.",
      levers: [
        { title: "Relationship Continuity", description: "A complete record for every stakeholder means continuity no longer depends on individual memory — and onboarding a new program manager doesn't start from scratch." },
        { title: "Faster Government Reporting", description: "Milestones tracked against funding and obligation produce audit-ready records — faster reporting, less manual effort, accountability at every level." },
        { title: "Deeper Donor Stewardship", description: "Donor records connected to the Reef outcomes their giving funded make every stewardship conversation more compelling — and multi-year and legacy giving more likely." },
        { title: "Board Reporting in Hours, Not Days", description: "Board- and funder-ready impact reports draw on live program, stakeholder, and financial data — no manual assembly." },
      ],
    },
  },

  // ── Business Case — Why Unlimited Edition ─────────────────────────────────
  businessCase: {
    meta: { title: "The Business Case · GBRF Executive Briefing" },
    headline: "The Business Case: Why Unlimited Edition",
    subhead:  "Both options deliver Nonprofit Cloud on the Ohana for Nonprofits price list with the same phased ramp. The difference is what's included.",
    investmentLines: [
      { product: "Nonprofit Cloud — Unlimited Edition", stage: "Recommended edition",  status: "Ohana for Nonprofits price list · phased ramp from 24 Aug 2026" },
      { product: "Backup & Recovery",                   stage: "Optional add-on",       status: "Automated daily backup of data and metadata · point-in-time restore" },
      { product: "Salesforce Shield",                   stage: "Optional add-on",       status: "Platform Encryption · Event Monitoring · Field Audit Trail" },
    ],
    // Data-driven headline/eyebrow for the entitlements section (see patched
    // business-case/page.tsx). Replaces the template's "This is what inaction costs."
    valueEyebrow: "What Unlimited Edition Includes",
    valueHeadline: "The entitlements that make implementation succeed.",
    valueUnlocked: [
      {
        label: "Full Copy Sandbox",
        value: "Included",
        description: "GravityLab can build and test against a complete replica of production. Without it, implementation risk is higher and testing is constrained to partial sandbox environments. EE requires this to be purchased separately — UE includes it.",
      },
      {
        label: "Premier Success",
        value: "24/7",
        description: "GBRF's implementation window starts 24 August. When the team hits a blocker at 9pm on a Wednesday, Premier Success means a Salesforce expert picks up the phone. EE includes standard business-hours support only.",
      },
      {
        label: "API Call Limits",
        value: "Higher",
        description: "GBRF's integration roadmap includes a Workday data warehouse connection, eReefs, and government reporting systems. UE's higher API limits mean those integrations can be built without hitting throttles that require additional purchases.",
      },
      {
        label: "Data & File Storage",
        value: "10GB",
        description: "UE includes 10GB of data storage per user vs EE's standard allocation. For a data-rich program delivery organisation running 60+ projects, this is not a theoretical concern.",
      },
      {
        label: "Onboarding & Enablement",
        value: "Day 1",
        description: "UE includes structured onboarding support, ensuring GravityLab and the GBRF internal team are set up for success from day one.",
      },
    ],
    clientZeroNote: "The right comparison is not UE list price vs EE list price. It is UE's included entitlements vs EE list price plus the cost of every bolt-on required to reach the same capability. When you add Full Copy Sandbox, Premier Support, and additional storage to EE, the total cost of ownership converges — and UE delivers a better-supported, lower-risk implementation.",
    windowNote: "All quotes are valid until 31 July 2026. Service starts 24 August 2026. Confirming the commercial path by 31 July lets GravityLab begin Phase 1 configuration on 24 August as planned — and the Foundation enters FY27 with the operational platform its mission demands.",
    ask: "The Recommendation",
    askNote: "Enterprise Edition is a capable platform. But for GBRF's scope — 69 users, four-plus implementation phases, government contract integrations, and a GravityLab build that requires safe sandbox environments — it is not the right starting point. The entitlements that make implementation successful are not included by default, and the cost of adding them closes the price gap while increasing procurement and contract complexity.",
  },

  // ── Pilot / Phased Rollout Plan ───────────────────────────────────────────
  pilotPlan: {
    meta: { title: "Path to Full Deployment · GBRF Executive Briefing" },
    headline: "The Path to Full Deployment",
    cta: "A confident, phased ramp — from Phase 1 design on 24 August 2026 to full deployment by mid-2027. Six waves. One platform, running at scale.",
    phases: [
      {
        phase: "Phase 1 · Design",
        title: "Foundation",
        weeks: "From 24 Aug 2026 · 8 core users",
        steps: [
          "Foundation configuration and data model build with GravityLab.",
          "Sandbox testing against a full copy of production — before anything touches live data.",
        ],
      },
      {
        phase: "Phase 2 · Foundation",
        title: "Go Live",
        weeks: "From 26 Oct 2026 · +14 users",
        steps: [
          "Core platform live for primary teams.",
          "First wave of stakeholder and program management workflows activated.",
        ],
      },
      {
        phase: "Phase 3 · Rollout Wave 1",
        title: "Integrate",
        weeks: "From 26 Dec 2026 · +11 users",
        steps: [
          "Extended team onboarding.",
          "Integration activation and reporting configuration.",
        ],
      },
      {
        phase: "Phase 4 · Rollout Wave 2",
        title: "Deepen",
        weeks: "From 27 Feb 2027 · +8 users",
        steps: [
          "Deeper program delivery workflows.",
          "Impact reporting workflows extended across teams.",
        ],
      },
      {
        phase: "Phase 5 · Rollout Wave 3",
        title: "Scale",
        weeks: "From 27 Apr 2027 · +21 users",
        steps: [
          "Broad organisational deployment.",
          "Advanced reporting and automation.",
        ],
      },
      {
        phase: "Phase 6 · Rollout Wave 4",
        title: "At Scale",
        weeks: "From 27 Jun 2027 · +13 users",
        steps: [
          "Full deployment complete.",
          "Platform running at the scale the mission demands.",
        ],
      },
    ],
  },

  // ── Proof — Salesforce Nonprofit customer benchmark ───────────────────────
  // Source: Salesforce Customer Success Metrics, Nonprofit industry, FY2025 (n=196).
  proof: {
    meta: { title: "Proof · GBRF Executive Briefing" },
    headline: "Proof the platform delivers for nonprofits.",
    opening: "GBRF isn't the first mission-driven organisation to run on Salesforce. Across 196 nonprofit customers, the platform delivers measurable outcomes — on investment, productivity, and growth. Source: Salesforce Customer Success Metrics, Nonprofit industry, FY2025 (n=196).",
    // Bold stat anchors shown beneath the hero — the strongest four for GBRF's
    // operational-transformation context (rendered in proof/page.tsx).
    heroStats: [
      { value: "99%",    label: "of nonprofits achieved positive ROI" },
      { value: "25%",    label: "average ROI achieved" },
      { value: "9 mo",   label: "average time to ROI" },
      { value: "24%",    label: "increase in employee productivity" },
    ],
    functions: [
      {
        id: "roi",
        name: "Return on Investment",
        stats: [
          { value: "99%", label: "achieved positive ROI" },
          { value: "9 mo", label: "average time to ROI" },
        ],
        agentCapabilities: [
          "One platform for donors, programs, partners, and impact — replacing disconnected systems",
          "Included Unlimited Edition entitlements lower implementation risk and total cost of ownership",
          "Every dollar of program delivery connected to the funding source behind it",
        ],
        results: [
          { metric: "99%",   label: "of nonprofits achieved positive ROI" },
          { metric: "25%",   label: "average ROI achieved" },
          { metric: "9 mo",  label: "average time to ROI" },
        ],
      },
      {
        id: "productivity",
        name: "Productivity & Decisions",
        stats: [
          { value: "24%", label: "increase in employee productivity" },
          { value: "23%", label: "faster decision-making" },
        ],
        agentCapabilities: [
          "Board- and funder-ready impact reports drawn from live program, stakeholder, and financial data",
          "The COO's view of the whole organisation — portfolio performance, contract compliance, pipeline — in one screen",
          "Reporting generated from the system, not assembled by hand",
        ],
        results: [
          { metric: "24%",  label: "increase in employee productivity" },
          { metric: "23%",  label: "faster decision-making" },
        ],
      },
      {
        id: "growth",
        name: "Growth & Engagement",
        stats: [
          { value: "23%", label: "increase in sales revenue" },
          { value: "24%", label: "improvement in customer satisfaction / NPS" },
        ],
        agentCapabilities: [
          "Donor records connected to the Reef outcomes their giving funded — stronger stewardship conversations",
          "A single view of every relationship across donors, government, corporate, community, and Traditional Owner organisations",
          "Coordinated marketing, communications, and fundraising under one operating model",
        ],
        results: [
          { metric: "23%",  label: "increase in sales revenue" },
          { metric: "24%",  label: "improvement in customer satisfaction / NPS" },
          { metric: "24%",  label: "increase in marketing-led or influenced growth" },
        ],
      },
    ] as ProofFunction[],
  },

  // ── Commercials — Investment Overview ─────────────────────────────────────
  // Figures, quotes (Q-numbers), and phased schedule supplied by the account
  // team. All prices AUD, ex-tax unless stated; GST = 10%.
  commercials: {
    meta: { title: "Investment Overview · GBRF Executive Briefing" },
    heading: "Investment Overview",
    intro: "The following investment options have been modelled for GBRF's Salesforce Nonprofit Cloud implementation across a 5-year term (August 2026 – August 2031). Licensing is phased across implementation cohorts, reducing Year 1 costs significantly.",
    summary: {
      columns: ["Scenario", "Edition", "5-Year Total (ex-tax)", "Yr 1 Annual Cost", "Yr 2–5 Annual Cost"],
      note: "All prices in AUD, ex-tax.",
      rows: [
        { scenario: "Commercial RRP", edition: "EE", total: "$2,718,114", yr1: "$427,703", yr25: "$572,603", gbrf: false },
        { scenario: "Commercial RRP", edition: "UE", total: "$2,973,376", yr1: "$407,411", yr25: "$641,491", gbrf: false },
        { scenario: "Nonprofit RRP", edition: "EE", total: "$608,089",   yr1: "$93,797",  yr25: "$128,573", gbrf: false },
        { scenario: "Nonprofit RRP", edition: "UE", total: "$749,287",   yr1: "$103,041", yr25: "$161,561", gbrf: false },
        { scenario: "GBRF Option",   edition: "EE", total: "$555,101",   yr1: "$85,849",  yr25: "$117,313", gbrf: true },
        { scenario: "GBRF Option",   edition: "UE", total: "$583,354",   yr1: "$79,887",  yr25: "$125,867", gbrf: true },
      ],
    },
    callout: {
      heading: "GBRF Option Pricing — Bespoke investment designed for your mission",
      points: [
        "EE 5-Year Total: AUD $555,101 (ex-tax) — saving $31,464 in Year 1 through phased licence staggering",
        "UE 5-Year Total: AUD $583,354 (ex-tax) — saving $45,980 in Year 1 through phased licence staggering",
        "Multi-year lock-in available with no price uplift at renewal: EE ~$127,871/yr (9% Special Term) | UE ~$133,419/yr (6% Special Term)",
      ],
      // Rendered as a distinct highlight, immediately after the UE 5-year bullet.
      valueBadge: "Most cost-effective in Year 1",
      valueNote: "The UE option represents the most cost-effective choice in Year 1 — at AUD $79,887, it is lower than the EE Year 1 cost of AUD $85,849, despite natively including Sandbox (Full Copy) and Premier Success Plan as standard entitlements. UE also delivers additional platform functionality included out of the box.",
    },
    charts: {
      xLabels: ["Yr 1", "Yr 2", "Yr 3", "Yr 4", "Yr 5"],
      yLabel: "AUD (ex-tax)",
      maxY: 700000,
      ee: {
        title: "Annual Cost by Year: Enterprise Edition",
        series: [
          { name: "Commercial RRP", values: [427703, 572603, 572603, 572603, 572603], hero: false },
          { name: "Nonprofit RRP",  values: [93797, 128573, 128573, 128573, 128573],  hero: false },
          { name: "GBRF Option",     values: [85849, 117313, 117313, 117313, 117313],  hero: true },
        ],
      },
      ue: {
        title: "Annual Cost by Year: Unlimited Edition",
        series: [
          { name: "Commercial RRP", values: [407411, 641491, 641491, 641491, 641491], hero: false },
          { name: "Nonprofit RRP",  values: [103041, 161561, 161561, 161561, 161561], hero: false },
          { name: "GBRF Option",     values: [79887, 125867, 125867, 125867, 125867],  hero: true },
        ],
      },
    },
    accordions: [
      {
        id: "ee-quote",
        title: "GBRF Option EE — Full Quote Breakdown",
        summary: "5-Year Total: AUD $555,101 ex-tax | AUD $610,612 inc. GST",
        lineItems: [
          { product: "Nonprofit Cloud – EE",     term: "Aug 2026–Aug 2031", qty: "10", total: "$0.00" },
          { product: "Nonprofit Cloud – EE",     term: "Oct 2026–Aug 2031", qty: "12", total: "$52,896" },
          { product: "Nonprofit Cloud – EE",     term: "Dec 2026–Aug 2031", qty: "11", total: "$46,816" },
          { product: "Nonprofit Cloud – EE",     term: "Feb 2027–Aug 2031", qty: "8",  total: "$32,832" },
          { product: "Nonprofit Cloud – EE",     term: "Apr 2027–Aug 2031", qty: "21", total: "$82,992" },
          { product: "Nonprofit Cloud – EE",     term: "Jun 2027–Aug 2031", qty: "13", total: "$49,400" },
          { product: "Salesforce Shield",        term: "Aug 2026–Aug 2031", qty: "1",  total: "$94,601" },
          { product: "Sandbox (Full Copy)",      term: "Aug 2026–Aug 2031", qty: "1",  total: "$94,601" },
          { product: "Premier Success Plan",     term: "Aug 2026–Aug 2031", qty: "1",  total: "$94,601" },
          { product: "Backup & Recover – Data",  term: "Aug 2026–Aug 2031", qty: "10", total: "$6,300" },
          { product: "Backup & Recover – Files", term: "Aug 2026–Aug 2031", qty: "1",  total: "$63" },
        ],
        schedule: { years: ["$85,849", "$117,313", "$117,313", "$117,313", "$117,313"], total: "$555,101" },
        renewal: "Multi-year lock-in available: secure a 9% Quote Special Term to protect against uplift at renewal — capping annual cost at no more than AUD $127,871 on the current licence stack.",
      },
      {
        id: "ue-quote",
        title: "GBRF Option UE — Full Quote Breakdown",
        summary: "5-Year Total: AUD $583,354 ex-tax | AUD $641,689 inc. GST",
        lineItems: [
          { product: "Nonprofit Cloud – UE",     term: "Aug 2026–Aug 2031", qty: "8",  total: "$52,800" },
          { product: "Nonprofit Cloud – UE",     term: "Oct 2026–Aug 2031", qty: "14", total: "$89,320" },
          { product: "Nonprofit Cloud – UE",     term: "Dec 2026–Aug 2031", qty: "11", total: "$67,760" },
          { product: "Nonprofit Cloud – UE",     term: "Feb 2027–Aug 2031", qty: "8",  total: "$47,520" },
          { product: "Nonprofit Cloud – UE",     term: "Apr 2027–Aug 2031", qty: "21", total: "$120,120" },
          { product: "Nonprofit Cloud – UE",     term: "Jun 2027–Aug 2031", qty: "13", total: "$71,500" },
          { product: "Salesforce Shield",        term: "Aug 2026–Aug 2031", qty: "1",  total: "$127,971" },
          { product: "Sandbox (Full Copy)",      term: "Aug 2026–Aug 2031", qty: "1",  total: "$0", included: true },
          { product: "Premier Success Plan",     term: "Aug 2026–Aug 2031", qty: "1",  total: "$0", included: true },
          { product: "Backup & Recover – Data",  term: "Aug 2026–Aug 2031", qty: "10", total: "$6,300" },
          { product: "Backup & Recover – Files", term: "Aug 2026–Aug 2031", qty: "1",  total: "$63" },
        ],
        schedule: { years: ["$79,887", "$125,867", "$125,867", "$125,867", "$125,867"], total: "$583,354" },
        renewal: "Multi-year lock-in available: secure a 6% Quote Special Term to protect against uplift at renewal — capping annual cost at no more than AUD $133,419 on the current licence stack. Based on a 5-year renewal, this could save GBRF up to AUD $18,000 compared to a standard renewal rate.",
      },
      {
        id: "included",
        title: "What's Included",
        items: [
          "Nonprofit Cloud — phased user licensing aligned to rollout cohorts",
          "Salesforce Shield — Platform Encryption, Event Monitoring, Field Audit Trail",
          "Backup & Recover — Data (10 GB) + Files (1 GB)",
          "Sandbox (Full Copy) — included as standard in UE; separate line item in EE",
          "Premier Success Plan — included as standard in UE; separate line item in EE",
        ],
      },
      {
        id: "phasing",
        title: "Phased Licensing Schedule",
        intro: "Licenses are activated in cohorts aligned to the implementation plan, reducing Year 1 costs significantly.",
        phasing: {
          columns: ["Phase", "Go-Live", "New Users", "Cumulative Users", "Total Licences"],
          rows: [
            { phase: "Design",                    goLive: "Aug 2026", newUsers: "5",  cumulative: "5",  licences: "8" },
            { phase: "Foundation Build",          goLive: "Oct 2026", newUsers: "8",  cumulative: "13", licences: "22" },
            { phase: "Stakeholder Cohort 1",      goLive: "Dec 2026", newUsers: "10", cumulative: "23", licences: "33" },
            { phase: "RE Migration",              goLive: "Feb 2027", newUsers: "7",  cumulative: "30", licences: "41" },
            { phase: "Stakeholder Cohort 2",      goLive: "Apr 2027", newUsers: "21", cumulative: "51", licences: "62" },
            { phase: "Functional Enhancement R1", goLive: "Jun 2027", newUsers: "13", cumulative: "64", licences: "75" },
          ],
        },
      },
    ],
  },

  // ── Architecture (layered stack diagram) ──────────────────────────────────
  architecture: {
    meta: { title: "Architecture · GBRF Executive Briefing" },
    headline: "One platform. Every part of the mission.",
    opening: "This isn't a technology diagram — it's the operating model that connects GBRF's stakeholders, programs, and impact reporting on a single platform, built to scale.",
    layers: [
      {
        name: "Outcomes",
        tagline: "What the Board and funders see",
        products: ["Reef Outcomes", "Impact Reporting", "Funder Accountability", "Sustainability Targets"],
        color: "var(--brand-primary)",
      },
      {
        name: "Work Surfaces",
        tagline: "Where the team works",
        products: ["Nonprofit Cloud", "Slack", "Mobile", "Donor & Partner Comms"],
        color: "var(--brand-primary)",
      },
      {
        name: "Applications",
        tagline: "The operating model",
        products: ["Program Management", "Stakeholder 360", "Fundraising & Stewardship", "Grants & Contracts"],
        color: "var(--brand-primary)",
      },
      {
        name: "Reporting & Intelligence",
        tagline: "Evidence for every audience",
        products: ["Reports & Dashboards", "Impact Metrics", "Milestone Tracking"],
        color: "var(--brand-primary)",
      },
      {
        name: "Data Foundation",
        tagline: "One record for every relationship",
        products: ["Unified Data Model", "Identity Resolution", "Higher API Limits", "Full Copy Sandbox"],
        color: "var(--brand-primary)",
      },
      {
        name: "Systems of Record",
        tagline: "Connected, not replaced",
        products: ["Workday", "eReefs", "Government Reporting", "Backup & Recovery"],
        color: "var(--brand-primary)",
      },
    ] as ArchLayer[],
    note: "Unlimited Edition provides the Full Copy Sandbox, higher API limits, and storage that let every layer connect — including the Workday data warehouse connection, eReefs, and government reporting — without hitting walls.",
  },

  // ── Strategy — Unlimited Edition vs Enterprise Edition (central) ───────────
  strategy: {
    meta: { title: "Unlimited vs Enterprise · GBRF Executive Briefing" },
    headline: "Unlimited Edition vs Enterprise Edition.",
    opening: "Both options begin August 2026 and scale to full deployment by mid-2027.",
    matrixLabel: "What Unlimited Edition Includes That Enterprise Does Not",
    // Custom column labels for the edition comparison (see patched strategy/page.tsx).
    fromLabel: "Enterprise Edition",
    toLabel: "Unlimited Edition",
    rows: [
      {
        dimension: "Full Copy Sandbox",
        from: "Purchased separately. Testing is constrained to partial sandbox environments — higher implementation risk.",
        to: "Included. GravityLab builds and tests against a complete replica of production, without touching live data.",
        poweredBy: ["Included in UE"],
      },
      {
        dimension: "Premier Success (24/7)",
        from: "Standard business-hours support only.",
        to: "24/7 phone support. When the team hits a blocker at 9pm on a Wednesday, a Salesforce expert picks up the phone.",
        poweredBy: ["Included in UE"],
      },
      {
        dimension: "API Call Limits",
        from: "Lower limits — integrations can hit throttles that require additional purchases.",
        to: "Higher limits — the Workday data warehouse connection, eReefs, and government reporting integrations can be built without walls.",
        poweredBy: ["Included in UE"],
      },
      {
        dimension: "Data & File Storage",
        from: "Standard allocation.",
        to: "10GB of data storage per user — built for a data-rich organisation running 60+ projects.",
        poweredBy: ["Included in UE"],
      },
      {
        dimension: "Onboarding & Enablement",
        from: "Not included by default.",
        to: "Structured onboarding, so GravityLab and the GBRF internal team are set up for success from day one.",
        poweredBy: ["Included in UE"],
      },
    ] as StrategyRow[],
    closing: "The right comparison isn't UE list price vs EE list price. It's UE's included entitlements vs EE list price plus every bolt-on required to reach the same capability. Add them up and the total cost of ownership converges — and UE delivers a better-supported, lower-risk implementation.",
  },

  // ── Account team ──────────────────────────────────────────────────────────
  // Photos were redacted in source; members render with color-coded initials.
  team: [
    {
      name:        "Britt Baker",
      role:        "Territory Account Executive",
      group:       "sales" as TeamGroup,
      description: "Primary Salesforce relationship owner and account executive for GBRF.",
      email:       "brittany.baker@salesforce.com",
    },
    {
      name:        "William Sullivan",
      role:        "Regional Sales Director",
      group:       "sales" as TeamGroup,
      description: "Senior Salesforce executive sponsor overseeing the GBRF engagement.",
      email:       "wsullivan@salesforce.com",
    },
    {
      name:        "Andrea Mainzer",
      role:        "Data Cloud AE",
      group:       "data" as TeamGroup,
      description: "Data Cloud lead for ANZ Public Sector & Education, advising on data strategy and future platform phases.",
      email:       "andrea.mainzer@salesforce.com",
    },
    {
      name:        "Chris Esposito",
      role:        "Agentforce & Data Cloud Consumption Lead",
      group:       "specialist" as TeamGroup,
      description: "Advises on Agentforce and Data Cloud activation, from sales to value realisation.",
      email:       "cesposito@salesforce.com",
    },
    {
      name:        "Simon Gaiger",
      role:        "Agentforce AE",
      group:       "specialist" as TeamGroup,
      description: "Agentforce specialist supporting GBRF's future AI and automation use cases.",
      email:       "sgaiger@salesforce.com",
    },
    {
      name:        "Vinicius Bagnarolli",
      role:        "Slack Specialist",
      group:       "specialist" as TeamGroup,
      description: "Slack specialist enabling team collaboration and internal workflow integration.",
      email:       "vbagnarolli@salesforce.com",
    },
    {
      name:        "Daniel Masters",
      role:        "Marketing Cloud AE",
      group:       "specialist" as TeamGroup,
      description: "Communications and engagement specialist advising on donor and supporter marketing.",
      email:       "dmasters@salesforce.com",
    },
    {
      name:        "James Thornton",
      role:        "Data Foundations Account Director",
      group:       "data" as TeamGroup,
      description: "Data Foundations advisor ensuring GBRF's data architecture is built for scale.",
      email:       "james.thornton@salesforce.com",
    },
    {
      name:        "Rob Czarka",
      role:        "Director, Signature Success Plan Sales",
      group:       "success" as TeamGroup,
      description: "Signature Success advisor — former NFP Salesforce customer who has lived the platform from the other side.",
      email:       "rczarka@salesforce.com",
    },
    {
      name:        "Roshni Gondhia",
      role:        "Premier Success, Sales Executive",
      group:       "success" as TeamGroup,
      description: "Premier Success executive ensuring GBRF gets maximum value from the platform from day one.",
      email:       "rgondhia@salesforce.com",
    },
    {
      name:        "Chrissy Soper",
      role:        "Partner Sales Senior Manager",
      group:       "sales" as TeamGroup,
      description: "Partner Sales lead coordinating the GravityLab implementation partnership.",
      email:       "csoper@salesforce.com",
    },
    {
      name:        "Sahfahri Supar",
      role:        "Renewals Manager",
      group:       "success" as TeamGroup,
      description: "Renewals Manager ensuring commercial continuity and long-term platform investment protection.",
      email:       "mbinsupar@salesforce.com",
    },
    {
      name:        "Jason Hincks",
      role:        "Industry Solutions & Strategy Director, Nonprofit",
      group:       "specialist" as TeamGroup,
      description: "Industry Solutions & Strategy lead for Nonprofit, bringing sector best practice and platform strategy to the GBRF engagement.",
      email:       "jhincks@salesforce.com",
    },
  ] as TeamMember[],

  // ── Agentforce Embedded Chat — disabled (no deployment in scope) ──────────
  agentforce: null as null | {
    orgId: string;
    deploymentDevName: string;
    orgUrl: string;
    scrt2Url: string;
    label: string;
  },

  // ── CTA (used in home close, commercials cross-link + sticky nav) ─────────
  cta: {
    headline:  "GBRF's mission is too important to be held back by infrastructure that can't keep up.",
    body:      "Phase 1 configuration to begin in August with Gravity Lab.",
    primary:   { label: "Meet the account team",  href: "/account-team" },
    secondary: { label: "Talk to the team",       href: "/account-team" },
  },
};
