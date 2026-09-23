"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { HiTrendingUp, HiDocumentText, HiOutlineSparkles, HiCog } from "react-icons/hi";

interface ResearchDomainsProps {
  selectedDomain: string;
  onSelectDomain: (domain: string) => void;
}

const domains = [
  {
    id: "market",
    title: "MARKET ANALYSIS",
    label: "Market Analysis",
    count: "Commodity & Pricing",
    icon: HiTrendingUp,
  },
  {
    id: "policy",
    title: "POLICY & TRADE",
    label: "Policy & Trade",
    count: "Regulatory & Cross-Border",
    icon: HiDocumentText,
  },
  {
    id: "sustainability",
    title: "SUSTAINABILITY & REGENERATION",
    label: "Sustainability & Regeneration",
    count: "Soil & Climate Resilience",
    icon: HiOutlineSparkles,
  },
  {
    id: "technology",
    title: "TECHNOLOGY & INNOVATION",
    label: "Technology & Innovation",
    count: "AgTech & Remote Sensing",
    icon: HiCog,
  },
];

export const ResearchDomains: React.FC<ResearchDomainsProps> = ({
  selectedDomain,
  onSelectDomain,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-[#F4F1E8] border-b border-[#E2DCCF]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6">
          {/* Section Header */}
          <div className="lg:col-span-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1F5C3F] block mb-2">
              OUR RESEARCH DOMAINS
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-[#222222] tracking-tight leading-tight mb-3 uppercase">
              OUR RESEARCH DOMAINS
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed">
              Our empirical research informs policy decisions and operational growth, carrying out critical research that drives transformation and sustainability.
            </p>
          </div>

          {/* 4 Domain Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {domains.map((dom) => {
                const Icon = dom.icon;
                const isSelected = selectedDomain === dom.label;
                return (
                  <button
                    key={dom.id}
                    onClick={() => {
                      onSelectDomain(isSelected ? "All Categories" : dom.label);
                      const el = document.getElementById("reports-grid");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`flex flex-col items-center text-center p-4 sm:p-5 rounded-xl border transition-all duration-300 group ${
                      isSelected
                        ? "bg-[#1F5C3F] text-white border-[#1F5C3F] shadow-lg scale-102"
                        : "bg-[#FAF8F3] hover:bg-white text-[#222222] border-[#E2DCCF] shadow-sm hover:shadow-md hover:-translate-y-1"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 transition-colors ${
                        isSelected
                          ? "bg-[#8BC34A] text-[#112015]"
                          : "bg-[#EAE5D8] group-hover:bg-[#1F5C3F] text-[#1F5C3F] group-hover:text-[#8BC34A]"
                      }`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    <span
                      className={`text-xs sm:text-[12px] font-bold tracking-tight uppercase leading-tight mb-1 ${
                        isSelected ? "text-white" : "text-[#222222] group-hover:text-[#1F5C3F]"
                      }`}
                    >
                      {dom.title}
                    </span>

                    <span
                      className={`text-[10px] sm:text-[11px] font-medium ${
                        isSelected ? "text-white/80" : "text-[#7D7D7D]"
                      }`}
                    >
                      {dom.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
