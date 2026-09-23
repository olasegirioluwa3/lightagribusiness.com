"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { HiGlobeAlt, HiLightBulb, HiClipboardList, HiTrendingUp } from "react-icons/hi";

const whyPartner = [
  {
    title: "EXTENSIVE AGRI-FOOD NETWORK",
    desc: "Access to a pan-African network of farmers, processors, cooperatives, and agribusiness investors.",
    icon: HiGlobeAlt,
  },
  {
    title: "INNOVATIVE ADVISORY",
    desc: "Diagnostics, SOPs, and business systems built for the realities of African agribusiness.",
    icon: HiLightBulb,
  },
  {
    title: "ADVISORY SOLUTIONS",
    desc: "End-to-end advisory spanning from operational audits to investment-readiness frameworks.",
    icon: HiClipboardList,
  },
  {
    title: "MEASURABLE IMPACT",
    desc: "Every engagement is measured by what actually changed on the farm or in the business.",
    icon: HiTrendingUp,
  },
];

export const WhyPartnerWithLight: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#F4F1E8] border-b border-[#E2DCCF]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Heading */}
          <div className="lg:col-span-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1F5C3F] block mb-2">
              WHY PARTNER WITH LIGHT
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-[#222222] tracking-tight leading-tight uppercase mb-3">
              WHY PARTNER WITH LIGHT
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed">
              Our experienced institutional teams help local and global partners build stronger agrifood systems, get the capability and professional advisory solutions, and assessment.
            </p>
          </div>

          {/* Right: 4 Benefit Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {whyPartner.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-4 sm:p-5 rounded-xl border border-[#E2DCCF] bg-[#FAF8F3] hover:bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#EAE5D8] group-hover:bg-[#1F5C3F] text-[#1F5C3F] group-hover:text-[#8BC34A] flex items-center justify-center mb-3 transition-colors">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold tracking-tight uppercase leading-tight text-[#222222] group-hover:text-[#1F5C3F] transition-colors">
                      {item.title}
                    </span>
                    <p className="text-[10px] text-[#5A5A5A] mt-1 leading-snug hidden sm:block">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
