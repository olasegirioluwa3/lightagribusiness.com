"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { HiTrendingUp, HiBookOpen, HiScale, HiPlay } from "react-icons/hi";

interface CategoryCardsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  {
    id: "market",
    title: "MARKET REPORTS",
    label: "Market Reports",
    count: "12 Publications",
    desc: "Commodity trends, value-chain pricing & regional export trade outlooks.",
    icon: HiTrendingUp,
  },
  {
    id: "technical",
    title: "TECHNICAL GUIDES",
    label: "Technical Guides",
    count: "24 Toolkits",
    desc: "Field-tested SOPs, agronomy workflows, feed formulation & biosecurity.",
    icon: HiBookOpen,
  },
  {
    id: "regulatory",
    title: "REGULATORY INSIGHTS",
    label: "Regulatory Insights",
    count: "8 Briefs",
    desc: "Trade compliance, agricultural policy updates, certification & standards.",
    icon: HiScale,
  },
  {
    id: "webinars",
    title: "WEBINARS & VIDEOS",
    label: "Webinars & Videos",
    count: "15 Sessions",
    desc: "Recorded masterclasses, field walkthroughs & executive roundtables.",
    icon: HiPlay,
  },
];

export const CategoryCards: React.FC<CategoryCardsProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="py-12 sm:py-16 bg-[#F4F1E8] border-b border-[#E2DCCF]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          {/* Section Header Copy */}
          <div className="lg:col-span-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1F5C3F] block mb-2">
              RESOURCES BY CATEGORY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight leading-tight mb-3">
              RESOURCES BY CATEGORY
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed">
              We diagnose root agribusiness bottlenecks and equip teams with practical,
              actionable systems—not just generic reports.
            </p>
          </div>

          {/* 4 Category Pill Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.label;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(isSelected ? "All Categories" : cat.label);
                      const el = document.getElementById("latest-resources");
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
                    {/* Icon Circle */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 transition-colors ${
                        isSelected
                          ? "bg-[#8BC34A] text-[#112015]"
                          : "bg-[#EAE5D8] group-hover:bg-[#1F5C3F] text-[#1F5C3F] group-hover:text-[#8BC34A]"
                      }`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    {/* Title */}
                    <span
                      className={`text-xs sm:text-[13px] font-bold tracking-tight uppercase leading-tight mb-1 ${
                        isSelected ? "text-white" : "text-[#222222] group-hover:text-[#1F5C3F]"
                      }`}
                    >
                      {cat.title}
                    </span>

                    {/* Sub count */}
                    <span
                      className={`text-[10px] sm:text-[11px] font-medium ${
                        isSelected ? "text-white/80" : "text-[#7D7D7D]"
                      }`}
                    >
                      {cat.count}
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
