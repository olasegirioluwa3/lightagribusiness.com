import { NavItem } from "@/types";

export const headerNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "What We Do",
    href: "/#pillars",
    children: [
      {
        label: "Academy",
        href: "/academy",
        badge: "Pillar 1",
      },
      {
        label: "Advisory",
        href: "/advisory",
        badge: "Pillar 2",
      },
      {
        label: "LightAgriOS",
        href: "/lightagrios",
        badge: "Pillar 3",
      },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Our Approach",
    href: "/approach",
  },
  {
    label: "Partnerships",
    href: "/partnerships",
  },
  {
    label: "Careers",
    href: "/career",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "About",
    href: "/about",
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
    { label: "Our Approach", href: "/approach" },
    { label: "The 5 Governing Beliefs", href: "/about#beliefs" },
    { label: "Institutional Partnerships", href: "/partnerships" },
    { label: "Careers & Talent", href: "/career" },
    { label: "Insights & Readiness Report", href: "/insights" },
    { label: "Resources Center", href: "/resources" },
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
