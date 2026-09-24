"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const LightAgriOSHero: React.FC = () => {
  return (
    <section className="relative bg-[#07130D] overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-brand-green/20">
      {/* Background Agriculture Field Picture Seamlessly Blended */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/image/lightAgriOs (1).jpg"
          alt="Precision agriculture field operations background"
          fill
          priority
          className="object-cover object-right lg:object-[75%_center] opacity-35 lg:opacity-40 transition-opacity duration-700"
        />
        {/* Directional gradient overlay: deep solid on left for pristine text legibility, fading on right to reveal the farm photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07130D] via-[#07130D]/90 via-35% to-[#07130D]/40" />
        {/* Vertical fades to blend smoothly into navigation and adjacent section */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07130D] via-[#07130D]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07130D] via-[#07130D]/80 to-transparent" />
        {/* Agritech radial ambient glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(31,92,63,0.38)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(198,146,20,0.14)_0%,transparent_50%)]" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Headline and Call-to-Actions */}
          <div className="lg:col-span-5 xl:col-span-5">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-green/25 border border-emerald-500/40 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-300">
              LIGHTAGRIOS | PRECISION INTELLIGENCE
              </span>
            </div>

            {/* Main Headline matching provided UI */}
            <h1 className="text-3xl sm:text-5xl xl:text-[52px] font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              DIGITAL CLARITY FOR{" "}
              <span className="text-[#D4AF37] block mt-1">
                EVERY ACRE, FEEDLOT,
              </span>
              <span className="text-[#D4AF37] block mt-1">
                AND HARVEST.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              Real-time visibility, operational compliance, and automated margins
              for structured agribusiness.
            </p>

            {/* CTAs matching the UI mockup */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#1F5C3F] hover:bg-[#184932] text-white font-semibold text-sm sm:text-base tracking-wide shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>REQUEST A LIVE DEMO</span>
                <HiArrowRight className="w-4 h-4 text-emerald-300" />
              </Link>
              <a
                href="#modular-suite"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 hover:text-white border border-white/20 hover:border-white/40 font-medium text-sm sm:text-base tracking-wide backdrop-blur-sm transition-all"
              >
                EXPLORE PLATFORM FEATURES
              </a>
            </div>
          </div>

          {/* Right Column: Multi-Device Dashboard Mockup Display matching UI */}
          <div className="lg:col-span-7 xl:col-span-7 relative pt-4 pb-8 lg:py-6">
            <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
              
              {/* 1. Left Tablet Device (Portrait) */}
              <div className="absolute -left-3 sm:-left-6 lg:-left-4 top-8 sm:top-12 z-20 w-36 sm:w-48 rounded-xl bg-[#0D1611] p-1.5 sm:p-2 border border-white/20 shadow-2xl shadow-black/90 backdrop-blur-md hidden xs:block transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between px-1.5 pb-1 border-b border-white/10 text-[8px] text-slate-400">
                  <span className="font-mono text-emerald-400 font-semibold">TABLET OS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="bg-[#FAF8F3] rounded-lg p-2 mt-1 text-slate-800 space-y-1.5">
                  <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Field Paddock Map</div>
                  <div className="h-14 sm:h-16 w-full rounded bg-emerald-950/10 border border-emerald-900/15 relative overflow-hidden flex items-center justify-center">
                    {/* Simulated Field Heatmap Grid */}
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0.5 p-1 opacity-70">
                      <div className="bg-emerald-500/40 rounded-sm" />
                      <div className="bg-emerald-600/60 rounded-sm" />
                      <div className="bg-emerald-400/50 rounded-sm" />
                      <div className="bg-emerald-600/70 rounded-sm" />
                      <div className="bg-[#C69214]/60 rounded-sm" />
                      <div className="bg-emerald-500/50 rounded-sm" />
                      <div className="bg-emerald-700/80 rounded-sm" />
                      <div className="bg-emerald-600/60 rounded-sm" />
                      <div className="bg-emerald-500/40 rounded-sm" />
                    </div>
                    <span className="relative z-10 text-[8px] font-bold text-emerald-950 bg-white/90 px-1.5 py-0.5 rounded shadow-sm">
                      Paddock #4 NDVI
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[8px] pt-0.5">
                    <span className="text-slate-500">Soil Moisture</span>
                    <span className="font-mono font-bold text-emerald-700">42.8% Optimal</span>
                  </div>
                  <div className="flex justify-between items-center text-[8px]">
                    <span className="text-slate-500">Irrigation Gate</span>
                    <span className="font-mono font-bold text-slate-700">Auto-Active</span>
                  </div>
                </div>
              </div>

              {/* 2. Main Desktop Monitor (Centerpiece) */}
              <div className="relative z-10 mx-auto w-full max-w-[500px] sm:max-w-[540px] lg:max-w-[560px]">
                <div className="relative rounded-2xl bg-[#0F1713] p-2 sm:p-3 border border-white/20 shadow-2xl shadow-black/90 backdrop-blur-md">
                  {/* Screen Top Bar */}
                  <div className="flex items-center justify-between pb-2 px-2 border-b border-white/10 text-[10px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 font-mono text-[10px] text-slate-400 hidden sm:inline">
                        lightagrios.app/command-center
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-[9px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> ONLINE SYNC
                      </span>
                    </div>
                  </div>

                  {/* Dashboard Screen Content */}
                  <div className="bg-[#FAF8F3] text-brand-charcoal rounded-xl p-3 sm:p-4 mt-2 overflow-hidden shadow-inner">
                    {/* Top Dashboard Row */}
                    <div className="flex items-center justify-between mb-3 border-b border-brand-border/60 pb-2">
                      <div>
                        <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-grey">
                          Commercial Feedlot & Arable Complex
                        </div>
                        <div className="font-bold text-sm sm:text-base text-brand-charcoal">
                          Operational Command Center
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] sm:text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                          Active Batch: #BF-204
                        </span>
                      </div>
                    </div>

                    {/* 3 Metric Summary Cards */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-3">
                      <div className="bg-white p-2 rounded-lg border border-brand-border/60 shadow-sm">
                        <div className="text-[8px] sm:text-[9px] font-medium text-brand-grey uppercase">
                          Feed Conversion
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-brand-green font-mono mt-0.5">
                          1.48 : 1
                        </div>
                        <div className="text-[8px] sm:text-[9px] text-emerald-700 font-semibold mt-0.5">
                          ↑ +18.4%
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-brand-border/60 shadow-sm">
                        <div className="text-[8px] sm:text-[9px] font-medium text-brand-grey uppercase">
                          SOP Compliance
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-brand-charcoal font-mono mt-0.5">
                          99.2%
                        </div>
                        <div className="text-[8px] sm:text-[9px] text-emerald-700 font-semibold mt-0.5">
                          100% daily
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-brand-border/60 shadow-sm">
                        <div className="text-[8px] sm:text-[9px] font-medium text-brand-grey uppercase">
                          Batch Margin
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#C69214] font-mono mt-0.5">
                          +24.6%
                        </div>
                        <div className="text-[8px] sm:text-[9px] text-brand-grey font-semibold mt-0.5">
                          ₦840 / kg
                        </div>
                      </div>
                    </div>

                    {/* Chart & Diagnostics Visual Simulation */}
                    <div className="grid grid-cols-12 gap-2.5">
                      {/* Trajectory Graph */}
                      <div className="col-span-8 bg-white p-2.5 rounded-lg border border-brand-border/60 shadow-sm">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-brand-charcoal">
                            Daily Feed Efficiency Curve
                          </span>
                          <span className="text-[8px] text-brand-grey">Last 30 Days</span>
                        </div>
                        {/* SVG Chart Graphic */}
                        <div className="w-full h-20 sm:h-24 relative">
                          <svg className="w-full h-full" viewBox="0 0 300 90" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="chartGradHero" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#1F5C3F" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="#1F5C3F" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M0,75 Q40,65 80,50 T160,35 T240,25 T300,15 L300,90 L0,90 Z"
                              fill="url(#chartGradHero)"
                            />
                            <path
                              d="M0,75 Q40,65 80,50 T160,35 T240,25 T300,15"
                              fill="none"
                              stroke="#1F5C3F"
                              strokeWidth="2.5"
                            />
                            <line
                              x1="0"
                              y1="45"
                              x2="300"
                              y2="45"
                              stroke="#C69214"
                              strokeWidth="1.5"
                              strokeDasharray="4 4"
                            />
                          </svg>
                          <div className="flex justify-between text-[7px] sm:text-[8px] text-brand-grey mt-0.5 font-mono">
                            <span>Day 1</span>
                            <span>Day 15</span>
                            <span>Day 30 (Harvest)</span>
                          </div>
                        </div>
                      </div>

                      {/* Circular Biosecurity Score */}
                      <div className="col-span-4 bg-white p-2 rounded-lg border border-brand-border/60 shadow-sm flex flex-col justify-between">
                        <div className="text-[9px] font-bold uppercase tracking-wider text-brand-charcoal text-center">
                          Biosecurity
                        </div>
                        <div className="my-auto flex flex-col items-center justify-center py-0.5">
                          <div className="relative w-12 h-12 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                              <path
                                className="text-slate-100"
                                strokeWidth="3.5"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path
                                className="text-emerald-600"
                                strokeDasharray="94, 100"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                            </svg>
                            <span className="absolute text-[11px] font-bold text-brand-green font-mono">
                              94%
                            </span>
                          </div>
                          <span className="text-[8px] text-brand-grey mt-0.5">Audit-Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Monitor Stand Base */}
                  <div className="w-28 sm:w-32 h-3.5 bg-slate-700/80 rounded-b-md mx-auto -mb-1 shadow-md" />
                  <div className="w-40 sm:w-44 h-2 bg-slate-600/70 rounded-full mx-auto -mb-2.5" />
                </div>
              </div>

              {/* 3. Front Smartphone Mockup */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-12 sm:left-20 z-30 w-32 sm:w-40 rounded-2xl bg-[#080E0B] p-1.5 border border-emerald-400/40 shadow-2xl shadow-black backdrop-blur-md transition-transform hover:-translate-y-1 duration-300">
                {/* Phone Notch */}
                <div className="w-10 h-1.5 bg-black rounded-full mx-auto mb-1" />
                <div className="bg-[#12231A] text-white rounded-xl p-2 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-[7px] text-emerald-400 font-mono">
                    <span>OFFLINE LOG</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-[9px] font-bold text-white truncate">Pen #03 Feed Distribution</div>
                  <div className="text-[8px] text-slate-300">420 kg Broiler Finisher</div>
                  <div className="pt-0.5 flex items-center justify-between text-[7px] text-[#D4AF37] font-mono border-t border-white/10">
                    <span>Sync: 0s queue</span>
                    <span>Verified ✓</span>
                  </div>
                </div>
              </div>

              {/* 4. Right Secondary Display Mockup (Horizontal Tablet / Laptop) */}
              <div className="absolute -right-3 sm:-right-6 lg:-right-4 top-14 sm:top-16 z-20 w-40 sm:w-52 rounded-xl bg-[#0E1712] p-1.5 sm:p-2 border border-white/20 shadow-2xl shadow-black/90 backdrop-blur-md hidden sm:block transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between px-1.5 pb-1 border-b border-white/10 text-[8px] text-slate-400">
                  <span className="font-mono text-emerald-300 font-semibold">FINANCIAL LEDGER</span>
                  <span className="text-[8px] text-emerald-400 font-mono">LIVE MARGIN</span>
                </div>
                <div className="bg-[#FAF8F3] rounded-lg p-2 mt-1 text-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] text-slate-500 font-medium">Feedlot Unit A</span>
                    <span className="text-[8px] font-mono font-bold text-emerald-700">+22.4%</span>
                  </div>
                  {/* Mini Progress Bar */}
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#1F5C3F] h-full w-[82%]" />
                  </div>
                  <div className="flex items-center justify-between text-[8px] pt-0.5 border-t border-slate-200/80">
                    <span className="text-slate-500">Projected Margin</span>
                    <span className="font-mono font-bold text-[#C69214]">₦3.42M</span>
                  </div>
                  <div className="flex items-center justify-between text-[8px]">
                    <span className="text-slate-500">Loss Prevention</span>
                    <span className="text-emerald-700 font-medium font-mono">-0.4% leak</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
