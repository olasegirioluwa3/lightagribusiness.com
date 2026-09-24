"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import {
  HiOutlineCloud,
  HiOutlineCalculator,
  HiOutlineClipboardCheck,
  HiOutlineTrendingUp,
} from "react-icons/hi";

const principles = [
  {
    title: "ZERO DATA GAPS",
    subtitle: "[cloud offline sync]",
    description: "Capture records directly in remote fields without network coverage; automatically syncs when connected.",
    icon: HiOutlineCloud,
    badge: "Offline Ready",
  },
  {
    title: "PRECISION NUTRITION",
    subtitle: "[feed calculator]",
    description: "Least-cost feed formulations, nutrient balance algorithms, and automated daily consumption tracking.",
    icon: HiOutlineCalculator,
    badge: "Formulation Engine",
  },
  {
    title: "SOP COMPLIANCE",
    subtitle: "[checklist, checklists]",
    description: "Digital biosecurity routines, vaccination calendars, and mandatory daily worker sign-offs.",
    icon: HiOutlineClipboardCheck,
    badge: "Protocol Control",
  },
  {
    title: "FINANCIAL VISIBILITY",
    subtitle: "[margin forecast]",
    description: "Live batch P&L, real-time input cost monitoring, and harvest revenue forecasts to the kilogram.",
    icon: HiOutlineTrendingUp,
    badge: "Unit Economics",
  },
];

export const EcosystemPrinciples: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#F4F1E8] border-b border-brand-border/60">
      <Container size="lg">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-green block mb-2">
            OUR ECOSYSTEM PRINCIPLES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-brand-charcoal tracking-tight leading-tight mb-4">
            We help you solve the right ones.
          </h2>
          <p className="text-sm sm:text-base text-brand-grey leading-relaxed">
            Our software support addresses the root issues affecting performance
            and growth, not just the symptoms.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#FAF8F3] hover:bg-white rounded-2xl p-6 border border-brand-border/80 hover:border-brand-green/40 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100/80 text-brand-green flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-brand-green group-hover:text-white transition-all duration-200">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Tag */}
                  <h3 className="font-bold text-base sm:text-lg text-brand-charcoal tracking-tight mb-1">
                    {p.title}
                  </h3>
                  <div className="text-xs font-mono font-medium text-brand-green mb-3">
                    {p.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-grey leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-brand-border/40 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/70">
                    {p.badge}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
