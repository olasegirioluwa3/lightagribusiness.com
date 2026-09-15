import React from "react";
import { Hero } from "@/components/home/Hero";
import { ThreePillarsSection } from "@/components/home/ThreePillarsSection";
import { PersonaPathways } from "@/components/home/PersonaPathways";
import { GoverningBeliefs } from "@/components/home/GoverningBeliefs";
import { DiagnosticCTA } from "@/components/home/DiagnosticCTA";

export const metadata = {
  title: "Homepage V1 | Light Agribusiness",
  description: "Original homepage — preserved for reference.",
};

export default function HomeV1() {
  return (
    <>
      <Hero />
      <ThreePillarsSection />
      <PersonaPathways />
      <GoverningBeliefs />
      <DiagnosticCTA />
    </>
  );
}
