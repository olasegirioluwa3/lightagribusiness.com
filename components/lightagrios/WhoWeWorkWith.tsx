"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import {
  HiOutlineOfficeBuilding,
  HiOutlineGlobeAlt,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineLibrary,
  HiOutlineCog,
} from "react-icons/hi";

const categories = [
  {
    title: "Commercial Farms",
    subtitle: "Poultry, feedlot, aquaculture & arable estates",
    icon: HiOutlineOfficeBuilding,
  },
  {
    title: "Feed Millers",
    subtitle: "Batch costing, formulation control & raw material tracking",
    icon: HiOutlineCog,
  },
  {
    title: "Agro-Processors",
    subtitle: "Processing lines, cold-chain inventory & yield metrics",
    icon: HiOutlineGlobeAlt,
  },
  {
    title: "Investors & DFIs",
    subtitle: "Audited production logs & real-time governance metrics",
    icon: HiOutlineCurrencyDollar,
  },
  {
    title: "Outgrower Schemes",
    subtitle: "Smallholder clusters, input delivery & harvest aggregation",
    icon: HiOutlineUserGroup,
  },
  {
    title: "Public Agencies",
    subtitle: "Agricultural development programmes & regional food security",
    icon: HiOutlineLibrary,
  },
];

export const WhoWeWorkWith: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F4F1E8] border-b border-brand-border/60">
      <Container size="lg">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-green block mb-2">
            WHO WE WORK WITH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-brand-charcoal tracking-tight leading-tight mb-3">
            BUILT FOR AGRI-FOOD ENTERPRISES
          </h2>
          <p className="text-sm sm:text-base text-brand-grey leading-relaxed">
            We partner with organizations across the agri-food value chain committed
            to building a more productive and resilient African food system.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group bg-[#FAF8F3] hover:bg-white rounded-2xl p-5 border border-brand-border/80 hover:border-brand-green/40 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center justify-between"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-brand-green flex items-center justify-center mb-3 group-hover:bg-brand-green group-hover:text-white transition-all duration-200">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-brand-charcoal mb-1 leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-brand-grey leading-tight line-clamp-2">
                    {cat.subtitle}
                  </p>
                </div>
                <div className="w-6 h-0.5 bg-brand-border/60 group-hover:bg-brand-green mt-3 rounded-full transition-colors" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
