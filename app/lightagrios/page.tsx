import React from "react";
import { Metadata } from "next";
import { LightAgriOSHero } from "@/components/lightagrios/LightAgriOSHero";
import { EcosystemPrinciples } from "@/components/lightagrios/EcosystemPrinciples";
import { WorkflowStepper } from "@/components/lightagrios/WorkflowStepper";
import { ModularCapabilities } from "@/components/lightagrios/ModularCapabilities";
import { PlatformDeepDive } from "@/components/lightagrios/PlatformDeepDive";
import { FeedlotCaseStudy } from "@/components/lightagrios/FeedlotCaseStudy";
import { WhoWeWorkWith } from "@/components/lightagrios/WhoWeWorkWith";
import { LightAgriOSCTA } from "@/components/lightagrios/LightAgriOSCTA";

export const metadata: Metadata = {
  title: "LightAgriOS | Farm Management Software & Agricultural Precision Intelligence",
  description:
    "Real-time visibility, operational compliance, and automated margins for structured agribusiness in Africa. Offline-first farm operating system.",
};

export default function LightAgriOSPage() {
  return (
    <main className="min-h-screen bg-[#F4F1E8]">
      {/* 1. Hero Section: Headline, CTAs, Multi-device UI Showcase */}
      <LightAgriOSHero />

      {/* 2. The Problems We Solve / Ecosystem Principles */}
      <EcosystemPrinciples />

      {/* 3. Advisory Process (5 Steps) / Operational Workflow Stepper */}
      <WorkflowStepper />

      {/* 4. Modular Capabilities Suite & The Unified System */}
      <ModularCapabilities />

      {/* 5. Platform Deep-Dive: Livestock & Feed Balancing */}
      <PlatformDeepDive />

      {/* 6. Case Study: 2,000-Head Cattle Feedlot */}
      <FeedlotCaseStudy />

      {/* 7. Who We Work With: Built For Agri-Food Enterprises */}
      <WhoWeWorkWith />

      {/* 8. Bottom CTA Banner */}
      <LightAgriOSCTA />
    </main>
  );
}
