"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  HiOutlineCube,
  HiOutlineGlobe,
  HiOutlineUsers,
  HiOutlineShieldCheck,
  HiOutlineArchive,
  HiOutlineBookOpen,
  HiOutlineCurrencyDollar,
  HiOutlineShare,
  HiArrowRight,
} from "react-icons/hi";

const capabilities = [
  {
    title: "Livestock & Nutrition",
    description: "Identify processes and optimize daily feed formulations, mortality logs, and yield.",
    icon: HiOutlineCube,
  },
  {
    title: "Agronomy & Fields",
    description: "Promote precision, field productivity, crop cycle logs, and weather resilience.",
    icon: HiOutlineGlobe,
  },
  {
    title: "Workforce & SOPs",
    description: "Build stronger, more disciplined operations with daily digital worker sign-offs.",
    icon: HiOutlineUsers,
  },
  {
    title: "Investment Score",
    description: "Prepare for, structure, and attract institutional capital with verifiable audit logs.",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "Inventory & Storage",
    description: "Strengthen warehouse processes, security, batch tracking, and input reorder alerts.",
    icon: HiOutlineArchive,
  },
  {
    title: "Financial Ledger",
    description: "Access specialized farm accounting, daily operational cost tracking, and cashflow.",
    icon: HiOutlineBookOpen,
  },
  {
    title: "Costing & Margins",
    description: "Optimize revenues, identify invisible cost leaks, and reduce feed and input waste.",
    icon: HiOutlineCurrencyDollar,
  },
  {
    title: "Outgrower Sync",
    description: "Build extra scale and market access with centralized farmer cluster monitoring.",
    icon: HiOutlineShare,
  },
];

export const ModularCapabilities: React.FC = () => {
  return (
    <section id="modular-suite" className="py-16 sm:py-24 bg-[#F4F1E8] border-b border-brand-border/60">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Capabilities Suite Header & Grid (8 cards) */}
          <div className="lg:col-span-8">
            <div className="max-w-2xl mb-10">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-green block mb-2">
                OUR CORE SOFTWARE SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-charcoal tracking-tight leading-tight mb-3">
                MODULAR CAPABILITIES SUITE
              </h2>
              <p className="text-sm sm:text-base text-brand-grey leading-relaxed">
                We work with you across key areas of your agribusiness.
              </p>
            </div>

            {/* 8 Cards Grid (2 cols on tablet/desktop, 1 on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-[#FAF8F3] hover:bg-white rounded-xl p-4 sm:p-5 border border-brand-border/80 hover:border-brand-green/40 shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-100 text-brand-green flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-white transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-brand-charcoal mb-1 group-hover:text-brand-green transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs text-brand-grey leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: The Unified System Graphic Card */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-white rounded-2xl p-5 border border-brand-border shadow-lg overflow-hidden">
              {/* Image from project assets */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-5 border border-brand-border/60 bg-[#F4F1E8]">
                <Image
                  src="/image/LightAgriOs - modular capabilities suite.png"
                  alt="The Unified System - Circular Core Diagram"
                  fill
                  className="object-contain"
                />
              </div>

              {/* 3 Layer Action Buttons matching UI mockup */}
              <div className="space-y-2.5">
                <Link
                  href="/advisory"
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#1F5C3F] hover:bg-[#184932] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm group"
                >
                  <span>Advisory Integration</span>
                  <HiArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#1E293B] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                  <span>Platform Layer</span>
                  <span className="text-[10px] uppercase font-mono text-slate-400">Core OS</span>
                </div>

                <Link
                  href="/contact"
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#0D6B63] hover:bg-[#0A544E] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm group"
                >
                  <span>Platform Integration</span>
                  <HiArrowRight className="w-4 h-4 text-teal-300 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
