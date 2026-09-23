"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight, HiTrendingUp, HiSparkles, HiGlobeAlt } from "react-icons/hi";

export const GlobalNetworkAndImpact: React.FC = () => {
  const networkBenefits = [
    { label: "Improved Efficiency", icon: HiTrendingUp },
    { label: "Higher Yields", icon: HiSparkles },
    { label: "Sustainable Sourcing", icon: HiGlobeAlt },
  ];

  const impactMetrics = [
    { label: "Improved Efficiency", icon: HiTrendingUp },
    { label: "Higher Yields", icon: HiSparkles },
    { label: "Sustainable Sourcing", icon: HiGlobeAlt },
    { label: "Sustainable Sourcing", icon: HiGlobeAlt },
    { label: "Income & Development", icon: HiTrendingUp },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F4F1E8] border-b border-[#E2DCCF]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: Global Network of Collaboration */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DCCF] shadow-sm flex flex-col justify-between">
            <div>
              {/* World Map SVG */}
              <div className="relative aspect-[16/9] w-full mb-6 bg-[#EAF3EC] rounded-xl overflow-hidden flex items-center justify-center">
                <svg
                  className="w-full h-full opacity-80"
                  viewBox="0 0 800 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* North America */}
                  <path d="M60 80 Q100 55 145 65 T190 85 T225 120 T185 165 T150 175 T115 150 Z" fill="#1F5C3F" fillOpacity="0.3" />
                  {/* South America */}
                  <path d="M175 200 Q215 210 235 245 T225 335 T195 380 T165 335 T155 255 Z" fill="#1F5C3F" fillOpacity="0.3" />
                  {/* Europe */}
                  <path d="M380 60 Q425 48 458 72 T440 120 T400 130 T372 95 Z" fill="#1F5C3F" fillOpacity="0.3" />
                  {/* Africa — highlighted */}
                  <path d="M378 138 Q452 128 480 188 T490 278 T442 358 T395 338 T360 242 T358 168 Z" fill="#1F5C3F" fillOpacity="0.55" />
                  {/* Asia */}
                  <path d="M490 55 Q575 38 680 68 T760 132 T715 210 T630 192 T535 162 T478 115 Z" fill="#1F5C3F" fillOpacity="0.3" />
                  {/* Australia */}
                  <path d="M660 270 Q720 260 748 298 T728 355 T665 345 T638 298 Z" fill="#1F5C3F" fillOpacity="0.3" />
                  {/* Trade routes */}
                  <path d="M180 130 Q315 70 430 210 T680 148" stroke="#8BC34A" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.7" />
                  <path d="M200 260 Q340 280 430 230 T720 318" stroke="#8BC34A" strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.6" />
                  <circle cx="180" cy="130" r="5" fill="#8BC34A" />
                  <circle cx="430" cy="210" r="6" fill="#8BC34A" />
                  <circle cx="468" cy="258" r="5" fill="#8BC34A" />
                  <circle cx="680" cy="148" r="5" fill="#8BC34A" />
                  <circle cx="720" cy="318" r="4" fill="#8BC34A" />
                </svg>
              </div>

              <h3 className="font-sans font-black text-xl sm:text-2xl text-[#222222] tracking-tight uppercase leading-tight mb-2">
                GLOBAL NETWORK OF COLLABORATION
              </h3>
              <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed mb-6">
                Proven solutions and augmenting high-quality food connection and indeterminate performance. Setting the distinctly and extensive workshops we recognized agribusiness systems, Improved commodity consumption situations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F5C3F] hover:bg-[#15402C] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
              >
                <span>View Full Outline</span>
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Benefit Pills */}
            <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-[#E2DCCF]">
              {networkBenefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 bg-[#EAF3EC] px-3 py-1.5 rounded-full text-[11px] font-semibold text-[#1F5C3F]">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Partnership Impact */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DCCF] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1F5C3F] block mb-1">
                PARTNERSHIP IMPACT
              </span>
              <h3 className="font-sans font-black text-xl sm:text-2xl text-[#222222] tracking-tight uppercase mb-3">
                PARTNERSHIP IMPACT
              </h3>
              <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed mb-6">
                We partner with large-scale commercial farming systems to enable food security. We measure impact across agribusiness and evaluate against optimal agribusiness returns.
              </p>
            </div>

            {/* 5 Impact Metrics in Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {impactMetrics.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-3.5 rounded-xl bg-[#F4F1E8] border border-[#E2DCCF] hover:bg-[#EAF3EC] hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#1F5C3F]/10 group-hover:bg-[#1F5C3F] text-[#1F5C3F] group-hover:text-[#8BC34A] flex items-center justify-center mb-2 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#222222] group-hover:text-[#1F5C3F] leading-tight transition-colors">
                      {item.label}
                    </span>
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
