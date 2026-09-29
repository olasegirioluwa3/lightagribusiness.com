"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight, HiOutlineBadgeCheck } from "react-icons/hi";

export const CertificationPathway: React.FC = () => {
  const pathwayLevels = [
    {
      level: "01",
      title: "Foundational Certificate",
      description: "Build core knowledge and practical skills.",
      highlight: "Entry Tier",
    },
    {
      level: "02",
      title: "Practitioner Certificate",
      description: "Apply skills in real-world settings.",
      highlight: "Professional Tier",
    },
    {
      level: "03",
      title: "Advanced / Specialist Certificate",
      description: "Lead, innovate and create greater value.",
      highlight: "Executive Tier",
    },
  ];

  return (
    <section
      id="certification-pathway"
      className="py-8 sm:py-10 bg-[#071910] text-white overflow-hidden border-b border-emerald-950"
    >
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Description & Action Button */}
          <div className="lg:col-span-5">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-emerald-400 block mb-3">
              THE CERTIFICATION PATHWAY
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight mb-4">
              Build recognised capability.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-md">
              Our certification pathway helps you validate your skills,
              strengthen your professional profile and unlock new opportunities.
            </p>

            <a
              href="/Light_Agribusiness_Academy_Certification_and_Short_Courses_Catalogue.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#c29e2e] text-[#071910] font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-black/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Certification Levels</span>
              <HiArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: 3 Connected Linear Steps matching UI */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
              {pathwayLevels.map((step, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Circular Step Node with Number & Icon */}
                  <div className="relative mb-5 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#0E281C] border-2 border-emerald-500/50 flex flex-col items-center justify-center shadow-lg shadow-black/50 group-hover:border-emerald-400 transition-colors">
                      <span className="font-mono text-xs font-bold text-[#D4AF37] leading-none mb-0.5">
                        {step.level}
                      </span>
                      <HiOutlineBadgeCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  {/* Step Card Content */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 w-full backdrop-blur-sm">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
                      {step.highlight}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Horizontal Arrow between cards on desktop */}
                  {idx < pathwayLevels.length - 1 && (
                    <div className="hidden sm:block absolute top-8 -right-3.5 transform -translate-y-1/2 z-10 text-emerald-400/80">
                      <HiArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
