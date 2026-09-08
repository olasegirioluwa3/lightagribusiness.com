export type PillarId = "academy" | "advisory" | "lightagrios";

export interface Pillar {
  id: PillarId;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  targetAudience: string;
  accentColor: string;
  accentBg: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  badge: string;
}

export interface Persona {
  id: string;
  name: string;
  age: number;
  role: string;
  avatarText: string;
  painPoint: string;
  solution: string;
  headlineMessage: string;
  proofPoint: string;
  primaryPillar: PillarId;
  ctaText: string;
  ctaHref: string;
}

export interface Course {
  id: string;
  title: string;
  tier: "Foundation" | "Professional" | "Advanced";
  duration: string;
  level: string;
  description: string;
  practicalOutcome: string;
  modulesCount: number;
  featured?: boolean;
}

export interface AdvisoryService {
  id: string;
  title: string;
  tier: "Diagnostic" | "Systems Design" | "Enterprise Transformation";
  timeline: string;
  description: string;
  deliverables: string[];
  lightAgriOSIntegration: string;
}

export interface LightAgriOSTier {
  name: string;
  badge?: string;
  description: string;
  price: string;
  billingPeriod: string;
  idealFor: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
}
