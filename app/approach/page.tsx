import React from "react";
import { ApproachHero } from "@/components/approach/ApproachHero";
import { FiveStepsSection } from "@/components/approach/FiveStepsSection";
import { SevenPillarFramework } from "@/components/approach/SevenPillarFramework";
import { ApproachInPractice } from "@/components/approach/ApproachInPractice";
import { LightEcosystemSection } from "@/components/approach/LightEcosystemSection";
import { WhatMakesDifferent } from "@/components/approach/WhatMakesDifferent";
import { ClearerPath } from "@/components/approach/ClearerPath";
import { ApproachCTA } from "@/components/approach/ApproachCTA";

export const metadata = {
  title: "Our Approach | Light Agribusiness",
  description:
    "We don't start with solutions. We start with understanding. Learn how Light's 5-step approach moves agribusinesses from uncertainty to sustainable performance.",
};

export default function ApproachPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <ApproachHero />
      <FiveStepsSection />
      <SevenPillarFramework />
      <ApproachInPractice />
      <LightEcosystemSection />
      <WhatMakesDifferent />
      <ClearerPath />
      <ApproachCTA />
    </main>
  );
}
