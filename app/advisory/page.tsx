import React from "react";
import type { Metadata } from "next";
import { AdvisoryHero } from "@/components/advisory/AdvisoryHero";
import { AdvisoryProblemsWeSolve } from "@/components/advisory/AdvisoryProblemsWeSolve";
import { AdvisoryProcess } from "@/components/advisory/AdvisoryProcess";
import { AdvisoryServicesGrid } from "@/components/advisory/AdvisoryServicesGrid";
import { AdvisoryPackages } from "@/components/advisory/AdvisoryPackages";
import { AdvisoryFrameworkAndTech } from "@/components/advisory/AdvisoryFrameworkAndTech";
import { AdvisoryCaseStudy } from "@/components/advisory/AdvisoryCaseStudy";
import { AdvisoryWhoWeWorkWith } from "@/components/advisory/AdvisoryWhoWeWorkWith";
import { AdvisoryCTA } from "@/components/advisory/AdvisoryCTA";

export const metadata: Metadata = {
  title: "Advisory & Business Systems | Light Agribusiness",
  description:
    "We diagnose the systems behind performance and build structures that keep operating. Practical agribusiness diagnostics, plain-language SOPs, operational turnarounds, and investment readiness.",
};

export default function AdvisoryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section matching mockup */}
      <AdvisoryHero />

      {/* 2. The Problems We Solve (6 Icon Cards) matching mockup */}
      <AdvisoryProblemsWeSolve />

      {/* 3. Advisory Process (Five Steps Stepper) matching mockup */}
      <AdvisoryProcess />

      {/* 4. Advisory Services (8 Cards + Feature Image Panel) matching mockup */}
      <AdvisoryServicesGrid />

      {/* 5. Retained Operational Advisory Packages (Offer Ladder) */}
      <AdvisoryPackages />

      {/* 6. The Light 7-Pillar Framework™ & Advisory + Technology Split Section matching mockup */}
      <AdvisoryFrameworkAndTech />

      {/* 7. Case Study (Poultry Farm | Operations & Management + 3 Outcomes) matching mockup */}
      <AdvisoryCaseStudy />

      {/* 8. Who We Work With (6 Audience Categories) matching mockup */}
      <AdvisoryWhoWeWorkWith />

      {/* 9. Bottom CTA Section (Sunset Panoramic Banner) matching mockup */}
      <AdvisoryCTA />
    </main>
  );
}
