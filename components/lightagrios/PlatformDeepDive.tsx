"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight, HiOutlineScale, HiOutlineLightningBolt } from "react-icons/hi";

export const PlatformDeepDive: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#081710] text-white overflow-hidden border-b border-emerald-950">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Deep Dive Narrative */}
          <div className="lg:col-span-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 block mb-2">
              PLATFORM & DEEP-DIVE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              PLATFORM DEEP-DIVE: LIVESTOCK & FEED BALANCING
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              We look beyond isolated problems. Our 7 pillar framework helps us
              understand how different parts of an agribusiness interact — so we
              can build solutions that last.
            </p>

            <Link
              href="/approach"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#C69214] hover:bg-[#A87B0F] text-white font-semibold text-sm transition-all shadow-md group"
            >
              <span>Learn More</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Center Column: Software Interface Mockup (Feed Optimization) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#11231A] border border-emerald-500/30 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold font-mono text-emerald-300">
                    Feed Optimization & Rations Engine
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">
                  Pen #04 • Cattle Feedlot
                </span>
              </div>

              {/* Feed Formulation Metric Highlights */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-[#0A1610] p-2.5 rounded-lg border border-white/5">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 block">
                    Crude Protein Target
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-emerald-300">
                    16.8% (Balanced)
                  </span>
                </div>
                <div className="bg-[#0A1610] p-2.5 rounded-lg border border-white/5">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 block">
                    Target Cost / Tonne
                  </span>
                  <span className="text-sm sm:text-base font-mono font-bold text-[#E0AB2D]">
                    ₦310,000 (-14%)
                  </span>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="bg-[#FAF8F3] text-brand-charcoal p-3 rounded-xl mb-3 shadow-inner">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold text-brand-charcoal uppercase">
                    Daily Weight Gain vs Feed Cost Curve
                  </span>
                  <span className="text-[9px] font-mono text-emerald-700 font-semibold">
                    Optimal Margin Zone
                  </span>
                </div>

                <div className="h-28 w-full relative">
                  <svg className="w-full h-full" viewBox="0 0 280 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="feedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1F5C3F" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#1F5C3F" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    {/* Fill */}
                    <path
                      d="M0,65 Q70,55 140,30 T280,10 L280,80 L0,80 Z"
                      fill="url(#feedGrad)"
                    />
                    {/* Growth curve */}
                    <path
                      d="M0,65 Q70,55 140,30 T280,10"
                      fill="none"
                      stroke="#1F5C3F"
                      strokeWidth="2.5"
                    />
                    {/* Threshold cost line */}
                    <line
                      x1="0"
                      y1="40"
                      x2="280"
                      y2="40"
                      stroke="#C69214"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  </svg>
                  <div className="flex justify-between text-[8px] text-brand-grey font-mono mt-1">
                    <span>Week 1 (Starter)</span>
                    <span>Week 4 (Grower)</span>
                    <span>Week 8 (Finisher)</span>
                  </div>
                </div>
              </div>

              {/* Ingredient Matrix Micro-table */}
              <div className="space-y-1.5 text-[10px] font-mono">
                <div className="flex justify-between text-slate-400 border-b border-white/5 pb-1">
                  <span>Ingredient</span>
                  <span>Inclusion</span>
                  <span>Cost/kg</span>
                </div>
                <div className="flex justify-between text-slate-200">
                  <span>Yellow Maize (Grain)</span>
                  <span className="text-emerald-400">52.0%</span>
                  <span>₦540</span>
                </div>
                <div className="flex justify-between text-slate-200">
                  <span>Soybean Meal (48% CP)</span>
                  <span className="text-emerald-400">24.5%</span>
                  <span>₦920</span>
                </div>
                <div className="flex justify-between text-slate-200">
                  <span>Wheat Offal + Premix</span>
                  <span className="text-emerald-400">23.5%</span>
                  <span>₦280</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Advisory + Technology Callout Card */}
          <div className="lg:col-span-3">
            <div className="bg-[#12281D] rounded-2xl p-6 border border-emerald-500/30 shadow-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-400 block mb-2">
                  COMMON FOR ADVISORY & TECHNOLOGY
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                  Advisory identifies the problem. Technology helps sustain the solution.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Our advisory work is documented by LightAgriOS, giving you
                  visibility into your data and enabling better decisions.
                </p>
              </div>

              <Link
                href="/advisory"
                className="w-full text-center px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wide border border-white/20 transition-all"
              >
                Explore Advisory + OS &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
