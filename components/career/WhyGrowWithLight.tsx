"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import {
  HiTrendingUp,
  HiHeart,
  HiGlobeAlt,
  HiLightBulb,
} from "react-icons/hi";

interface BenefitCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const benefits: BenefitCard[] = [
  {
    icon: HiTrendingUp,
    title: "CAREER PATHWAYS",
    description:
      "Clear, merit-based career progression from field analyst to senior systems advisor and institutional practice lead.",
  },
  {
    icon: HiHeart,
    title: "MENTORSHIP & TRAINING",
    description:
      "Direct apprentice working model under senior African commercial agronomists, diagnostic specialists, and tech leaders.",
  },
  {
    icon: HiGlobeAlt,
    title: "GLOBAL PROJECTS",
    description:
      "Multi-country commercial advisory assignments, investor feasibility studies, and regional outgrower programs.",
  },
  {
    icon: HiLightBulb,
    title: "INNOVATION & IMPACT",
    description:
      "Pioneering digital farm tools with LightAgriOS, building practical SOPs, and driving real-world food security.",
  },
];

export const WhyGrowWithLight: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E8E4DA]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading and narrative matching mockup */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32] block">
              WHY GROW WITH LIGHT?
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[34px] text-[#122216] tracking-tight leading-tight">
              WHY GROW WITH LIGHT?
            </h2>
            <p className="text-sm text-[#555555] leading-relaxed">
              Our culture unites high-performance agricultural expertise, workable systems thinking, and purpose-driven impact across Africa&apos;s agricultural value chains.
            </p>
          </div>

          {/* Right Column: 4 Benefit Cards matching mockup */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF9F5] border border-[#E8E4DA] rounded-2xl p-5 flex flex-col items-center text-center hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E4DA] flex items-center justify-center text-[#2E7D32] group-hover:bg-[#2E7D32] group-hover:text-white transition-colors duration-200 mb-4 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-black text-xs uppercase tracking-wider text-[#122216] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-[11px] text-[#666666] leading-relaxed">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
