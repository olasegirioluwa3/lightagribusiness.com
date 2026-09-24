"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    step: "01",
    title: "Capture",
    description: "Understand the current decision and identify gaps.",
    // Magnifying glass with target dot
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <circle cx="11" cy="11" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Validate",
    description: "Develop practical solutions tailored to your operation.",
    // Branching validation / workflow node
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M6 9v6" />
        <path d="M9 6h6" />
        <path d="M15 9l-6 6" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Automate",
    description: "Turn strategy into daily execution.",
    // Precision Cog / Gear
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Analyze",
    description: "Track performance and margins.",
    // Performance Bar Chart with Trend line
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <path d="M4 11l4-4 4 4 8-8" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Scale",
    description: "Safely expand for long-term growth.",
    // Circular Arrows / Scaling Loop
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6" />
        <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
];

export const WorkflowStepper: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-[#071710] overflow-hidden border-b border-emerald-950">
      {/* Background Landscape Texture Overlay matching UI mockup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/lightAgriOs (1).jpg"
          alt="Agricultural field operations"
          fill
          priority
          className="object-cover opacity-20 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071710]/95 via-[#0A1F16]/90 to-[#071710]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(31,92,63,0.35)_0%,transparent_70%)]" />
      </div>

      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-emerald-400 block mb-2.5">
            OUR ADVISORY PROCESS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight mb-3">
            DATA-TO-DECISION OPERATIONAL WORKFLOW
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our five step approach turns understanding into measurable results.
          </p>
        </div>

        {/* Stepper Chain (Desktop horizontal 5 columns with connecting arrows, mobile responsive cards) */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-3 lg:gap-4 items-stretch">
            {steps.map((st, index) => {
              const isLast = index === steps.length - 1;

              return (
                <div key={st.step} className="relative flex flex-col group">
                  {/* Step Top Badge (Lime Pill matching mockup) */}
                  <div className="mb-3 flex items-center justify-between sm:justify-start">
                    <span className="inline-flex items-center justify-center px-3 py-0.5 rounded-full bg-[#86EFAC] text-[#071710] font-sans font-bold text-xs tracking-wider shadow-sm">
                      {st.step}
                    </span>

                    {/* Connecting line for mobile view */}
                    <span className="md:hidden text-xs text-emerald-400 font-mono">
                      Phase {st.step} of 05
                    </span>
                  </div>

                  {/* Card Container */}
                  <div className="bg-[#0D241A]/85 hover:bg-[#112E21] border border-emerald-500/25 hover:border-emerald-400/50 rounded-2xl p-5 sm:p-5 lg:p-6 backdrop-blur-md transition-all duration-200 h-full flex flex-col justify-between shadow-lg">
                    <div>
                      {/* Icon Circle Container with Green Border */}
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-emerald-400/40 bg-emerald-950/70 text-emerald-300 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-emerald-300 group-hover:text-white transition-all duration-200 shadow-inner">
                        {st.icon}
                      </div>

                      {/* Step Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                        {st.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                        {st.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-emerald-500/15 flex items-center justify-between text-[10px] font-mono text-emerald-400/60">
                      <span>LIGHT AGRIOS</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* Horizontal Connector Arrow (Desktop only, between cards) */}
                  {!isLast && (
                    <div className="hidden md:flex absolute -right-2 lg:-right-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-[#071710] border border-emerald-400/60 flex items-center justify-center text-emerald-300 shadow-md">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
