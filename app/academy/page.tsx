import React from "react";
import { Metadata } from "next";
import { AcademyHero } from "@/components/academy/AcademyHero";
import { CapabilityGap } from "@/components/academy/CapabilityGap";
import { AcademyOfferings } from "@/components/academy/AcademyOfferings";
import { CertificationPathway } from "@/components/academy/CertificationPathway";
import { WhoIsItFor } from "@/components/academy/WhoIsItFor";
import { LearningExperience } from "@/components/academy/LearningExperience";
import { UpcomingProgrammes } from "@/components/academy/UpcomingProgrammes";
import { AcademyCommunity } from "@/components/academy/AcademyCommunity";
import { AcademyCTA } from "@/components/academy/AcademyCTA";

export const metadata: Metadata = {
  title: "Light Agribusiness Academy | Knowledge & Capacity Development",
  description:
    "Practical knowledge, professional development, and certification designed to turn agribusiness learning into real-world application across Africa.",
};

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      {/* 1. Hero Section: Headline, CTAs, Value Badges & Showcase */}
      <AcademyHero />

      {/* 2. The Capability Gap: Problem Statement, 5 Challenge Cards & Quote */}
      <CapabilityGap />

      {/* 3. What We Offer: 6 Service Cards & Featured Light Academy Ecosystem */}
      <AcademyOfferings />

      {/* 4. The Certification Pathway: 3-Tier Linear Progression */}
      <CertificationPathway />

      {/* 5. Who Is It For?: 6 Audience Personas */}
      <WhoIsItFor />

      {/* 6. The Learning Experience: 5-Stage Stepper & Field Application */}
      <LearningExperience />

      {/* 7. Upcoming Programmes: 3 Featured Cohorts with Details */}
      <UpcomingProgrammes />

      {/* 8. Alumni / Community: Testimonial & Real Progress */}
      <AcademyCommunity />

      {/* 9. Final CTA: Dual Actions & Institutional Value */}
      <AcademyCTA />
    </main>
  );
}
