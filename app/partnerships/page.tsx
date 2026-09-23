"use client";

import React, { useState } from "react";
import { PartnershipsHero } from "@/components/partnerships/PartnershipsHero";
import { WhyPartnerWithLight } from "@/components/partnerships/WhyPartnerWithLight";
import { PartnershipModels } from "@/components/partnerships/PartnershipModels";
import { SuccessStoriesAlignment } from "@/components/partnerships/SuccessStoriesAlignment";
import { JoiningOurNetwork } from "@/components/partnerships/JoiningOurNetwork";
import { GlobalNetworkAndImpact } from "@/components/partnerships/GlobalNetworkAndImpact";
import { PartnershipsCTA } from "@/components/partnerships/PartnershipsCTA";

export default function PartnershipsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <PartnershipsHero />
      <WhyPartnerWithLight />
      <PartnershipModels
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <SuccessStoriesAlignment />
      <JoiningOurNetwork />
      <GlobalNetworkAndImpact />
      <PartnershipsCTA />
    </main>
  );
}
