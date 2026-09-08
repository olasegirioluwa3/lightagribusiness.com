import React from "react";
import { Hero } from "@/components/home/Hero";
import { ThreePillarsSection } from "@/components/home/ThreePillarsSection";
import { PersonaPathways } from "@/components/home/PersonaPathways";
import { GoverningBeliefs } from "@/components/home/GoverningBeliefs";
import { DiagnosticCTA } from "@/components/home/DiagnosticCTA";

export default function Home() {
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
