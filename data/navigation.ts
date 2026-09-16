import { NavItem } from "@/types";

export const headerNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Africa's Agribusiness Knowledge, Advisory & Technology Institution",
  },
  {
    label: "Academy",
    href: "/academy",
    description: "Practical capacity development, certifications & SIWES internships",
    badge: "Pillar 1",
  },
  {
    label: "Advisory",
    href: "/advisory",
    description: "Operational diagnostics, plain-language SOPs & enterprise business systems",
    badge: "Pillar 2",
  },
  {
    label: "LightAgriOS",
    href: "/lightagrios",
    description: "The complete farm operating system for African agribusiness",
    badge: "Pillar 3",
  },
  {
    label: "Insights",
    href: "/insights",
    description: "Annual Readiness Reports, SOP kits, and practical agricultural research",
  },
  {
    label: "About",
    href: "/about",
    description: "Our story, the 5 governing beliefs, and institutional leadership",
  },
  {
    label: "Partnerships",
    href: "/partnerships",
    description: "University, DFI, NGO, and government collaboration models",
  },
];

export const footerNavigation = {
  pillars: [
    { label: "Light Agribusiness Academy", href: "/academy" },
    { label: "Professional Certifications", href: "/academy#certifications" },
    { label: "SIWES & Student Internships", href: "/academy#siwes" },
    { label: "Light Advisory Services", href: "/advisory" },
    { label: "Farm & Business Diagnostics", href: "/advisory#diagnostic" },
    { label: "Standard Operating Procedures (SOPs)", href: "/advisory#sops" },
    { label: "LightAgriOS Software", href: "/lightagrios" },
    { label: "Multi-Farm Enterprise Platform", href: "/lightagrios#enterprise" },
  ],
  institution: [
    { label: "About Light", href: "/about" },
    { label: "The 5 Governing Beliefs", href: "/about#beliefs" },
    { label: "Institutional Partnerships", href: "/partnerships" },
    { label: "Insights & Readiness Report", href: "/insights" },
    { label: "Contact & Consultations", href: "/contact" },
  ],
  audiences: [
    { label: "For Students & Graduates", href: "/academy" },
    { label: "For Commercial Farm Operators", href: "/advisory" },
    { label: "For Corporate Agribusinesses", href: "/advisory#enterprise" },
    { label: "For Investors & DFIs", href: "/partnerships#investors" },
    { label: "For Universities & Polytechnics", href: "/partnerships#academic" },
  ],
};
