import { Pillar } from "@/types";

export const pillarsData: Pillar[] = [
  {
    id: "academy",
    name: "Light Agribusiness Academy",
    subtitle: "Knowledge & Capacity Development",
    tagline: "We turn agricultural ambition into practical, employable, applicable competence.",
    description:
      "Bridging the gap between classroom theory and commercial operational reality. We train students, early-stage agripreneurs, and farm operators in the exact skills agricultural enterprises actually pay for.",
    targetAudience: "Students, Graduates, Farm Managers & Rising Agripreneurs",
    accentColor: "#D97706",
    accentBg: "bg-amber-500/10",
    badge: "Pillar One",
    features: [
      "Assessed, practical certifications (Foundation, Professional, Advanced)",
      "Structured SIWES and practical field internships",
      "Hands-on farm floor curriculum designed backward from Monday morning tasks",
      "Direct pathway into LightAgriOS digital record management",
    ],
    ctaText: "Explore Academy Courses",
    ctaHref: "/academy",
  },
  {
    id: "advisory",
    name: "Light Advisory",
    subtitle: "Business Systems & Operational Excellence",
    tagline: "We turn agricultural effort into a business that runs on systems, not guesswork.",
    description:
      "Transforming informal farms into disciplined, scalable, and investment-ready enterprises. We install plain-language Standard Operating Procedures (SOPs), cashflow controls, and governance structures.",
    targetAudience: "Commercial Farms, Processing Enterprises & Cooperatives",
    accentColor: "#1E293B",
    accentBg: "bg-slate-800/10",
    badge: "Pillar Two",
    features: [
      "Fixed-fee, scoped Farm & Business Diagnostics with a 1-page action sheet",
      "Custom Standard Operating Procedure (SOP) design for field teams",
      "5D Delivery Framework: Diagnose → Design → Document → Deploy → Sustain",
      "Seamless handoff into LightAgriOS for automated ongoing system maintenance",
    ],
    ctaText: "Request a Farm Diagnostic",
    ctaHref: "/advisory",
  },
  {
    id: "lightagrios",
    name: "LightAgriOS",
    subtitle: "African Agribusiness Operating System",
    tagline: "We turn farm data into decisions you can actually see and act on.",
    description:
      "The unified digital operating platform built specifically for the realities of African farming: low-connectivity environments, multi-enterprise operations, and real floor managers who need clarity, not complicated software.",
    targetAudience: "Farm Owners, Multi-Site Enterprises & Agricultural Portfolios",
    accentColor: "#0D9488",
    accentBg: "bg-teal-500/10",
    badge: "Pillar Three",
    features: [
      "Offline-first digital farm records (Crops, Livestock, Greenhouse)",
      "Daily feed, mortality, labor, and cashflow tracking",
      "Automated financial health dashboards & investor-grade reporting",
      "Integrated Training Centre module directly connected to Academy content",
    ],
    ctaText: "Discover LightAgriOS",
    ctaHref: "/lightagrios",
  },
];

export const flywheelSteps = [
  {
    step: "01",
    title: "Learn at the Academy",
    description:
      "Students & managers master practical operational skills and receive rigorous, assessed credentials.",
    pillar: "Academy",
  },
  {
    step: "02",
    title: "Operate on LightAgriOS",
    description:
      "Graduates deploy LightAgriOS to replace messy paper notebooks with structured digital records and dashboards.",
    pillar: "Technology",
  },
  {
    step: "03",
    title: "Scale with Advisory",
    description:
      "As operations expand, Light Advisory steps in to audit data, build custom SOPs, and prepare for institutional capital.",
    pillar: "Advisory",
  },
];
