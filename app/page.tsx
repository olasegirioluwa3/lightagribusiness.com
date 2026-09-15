import React from "react";
import { HeroV2 } from "@/components/home/v2/HeroV2";
import { ValuePropsStrip } from "@/components/home/v2/ValuePropsStrip";
import { EcosystemPillars } from "@/components/home/v2/EcosystemPillars";
import { PainPoints } from "@/components/home/v2/PainPoints";
import { ApproachProcess } from "@/components/home/v2/ApproachProcess";
import { WhyLight } from "@/components/home/v2/WhyLight";
import { CaseStudies } from "@/components/home/v2/CaseStudies";
import { InvestorBanner } from "@/components/home/v2/InvestorBanner";
import { InsightsPreview } from "@/components/home/v2/InsightsPreview";
import { PartnershipsCTA } from "@/components/home/v2/PartnershipsCTA";
import { FinalCTABanner } from "@/components/home/v2/FinalCTABanner";

export default function Home() {
  return (
    <>
      <HeroV2 />
      <ValuePropsStrip />
      <EcosystemPillars />
      <PainPoints />
      <ApproachProcess />
      <WhyLight />
      <CaseStudies />
      <InvestorBanner />
      <InsightsPreview />
      <PartnershipsCTA />
      <FinalCTABanner />
    </>
  );
}
