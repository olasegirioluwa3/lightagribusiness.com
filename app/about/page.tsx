import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIdea } from "@/components/about/AboutIdea";
import { AboutSystem } from "@/components/about/AboutSystem";
import { AboutEcosystem } from "@/components/about/AboutEcosystem";
import { AboutConnection } from "@/components/about/AboutConnection";
import { AboutBeliefs } from "@/components/about/AboutBeliefs";
import { AboutWhoWeWorkWith } from "@/components/about/AboutWhoWeWorkWith";
import { AboutApproach } from "@/components/about/AboutApproach";
import { AboutPerformanceFramework } from "@/components/about/AboutPerformanceFramework";
import { AboutInstitution } from "@/components/about/AboutInstitution";
import { AboutFuture } from "@/components/about/AboutFuture";
import { AboutCommitment } from "@/components/about/AboutCommitment";

export const metadata: Metadata = {
  title: "About Us | Light Agribusiness",
  description:
    "Learn about Light Agribusiness Consultancy Limited - Africa's agribusiness knowledge, advisory, systems and technology institution.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutIdea />
      <AboutSystem />
      <AboutEcosystem />
      <AboutConnection />
      <AboutBeliefs />
      <AboutWhoWeWorkWith />
      <AboutApproach />
      <AboutPerformanceFramework />
      <AboutInstitution />
      <AboutFuture />
      <AboutCommitment />
    </div>
  );
}
