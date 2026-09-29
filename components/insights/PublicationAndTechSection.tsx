"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight, HiTrendingUp, HiOutlineSparkles } from "react-icons/hi";

export const PublicationAndTechSection: React.FC = () => {
  const timelineMilestones = [
    {
      title: "First Quarter - 2026",
      subtitle: "Special Issue on African Food Security & Regional Trade",
      active: false,
    },
    {
      title: "Second Quarter - 2026",
      subtitle: "Farm Mechanization & Renewable Energy Audit",
      active: false,
    },
    {
      title: "Third Quarter - 2026",
      subtitle: "Input Subsidies & Localized Fertilizer Blending",
      active: false,
    },
    {
      title: "Fourth Quarter - 2026",
      subtitle: "Annual African Agribusiness Readiness Benchmark",
      active: true,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F4F1E8] border-b border-[#E2DCCF]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Publication Timeline (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF8F3] rounded-2xl p-6 sm:p-8 border border-[#E2DCCF] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1F5C3F] block mb-1">
                RESEARCH ROADMAP
              </span>
              <h3 className="font-sans font-black text-xl sm:text-2xl text-[#222222] tracking-tight uppercase mb-6">
                PUBLICATION TIMELINE
              </h3>

              {/* Vertical Timeline */}
              <div className="space-y-6 relative pl-6 border-l-2 border-[#1F5C3F]/30 ml-2 mb-8">
                {timelineMilestones.map((milestone, idx) => (
                  <div key={idx} className="relative group">
                    {/* Node Dot */}
                    <div
                      className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 transition-all ${
                        milestone.active
                          ? "bg-[#8BC34A] border-[#1F5C3F] ring-4 ring-[#8BC34A]/20"
                          : "bg-white border-[#7D7D7D] group-hover:border-[#1F5C3F]"
                      }`}
                    />
                    <h4 className="font-bold text-xs sm:text-sm text-[#222222] leading-tight">
                      {milestone.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#5A5A5A] mt-0.5 leading-snug">
                      {milestone.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Soil Inspection Image */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#E2DCCF] bg-[#152019]">
              <Image
                src="/image/pillar1- farmer explaining to a student in a farm.png"
                alt="Field soil evaluation and diagnostic trials"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-[10px] font-semibold text-white/90">
                Ground-Truth Field Research
              </div>
            </div>
          </div>

          {/* Right Column: Data & Tech Banner + Case Study (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Top Container: Data & Technology Integration */}
            <div className="bg-[#122A1E] text-white rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8BC34A] block mb-1">
                    DATA &amp; TECHNOLOGY INTEGRATION
                  </span>
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-white tracking-tight uppercase leading-tight mb-2">
                    DATA &amp; TECHNOLOGY INTEGRATION
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                    HARNESSING THE POWER OF ADVANCED DATA ANALYTICS &amp; REMOTE SENSING.
                  </p>
                  <Link
                    href="/lightagrios"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8BC34A] hover:bg-[#7cb342] text-[#0B150F] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
                  >
                    <span>Learn more</span>
                    <HiArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Satellite Remote Sensing Imagery */}
                <div className="sm:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20 bg-black/40 shadow-md">
                  <Image
                    src="/image/lightagribusiness-gallery (37).jpg"
                    alt="Precision remote sensing and crop NDVI health analytics"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Container: Case Study */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DCCF] shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#1F5C3F]/10 text-[#1F5C3F] mb-3">
                  RECENT CASE STUDY
                </span>
                <h3 className="font-sans font-extrabold text-lg sm:text-xl text-[#222222] tracking-tight leading-snug mb-1 uppercase">
                  IMPROVING CROP YIELD THROUGH DATA-DRIVEN SOIL ANALYSIS
                </h3>
                <span className="text-xs font-semibold text-[#8BC34A] block mb-3">
                  Poultry &amp; Field Research Project
                </span>
                <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed mb-6">
                  A multi-year research project with high-precision soil health diagnostics, optimized fertilizer blend prescriptions, and continuous moisture tracking to stop yield leaks.
                </p>
              </div>

              {/* Action + Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-4 border-t border-[#E2DCCF]">
                <div className="sm:col-span-5">
                  <Link
                    href="/academy"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#112015] hover:bg-[#1F5C3F] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <span>View Full Case Study</span>
                    <HiArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 3 Metric Pills */}
                <div className="sm:col-span-7 flex flex-col sm:flex-row gap-3">
                  <div className="flex items-center gap-2 bg-[#FAF8F3] px-3 py-2 rounded-lg border border-[#E2DCCF] flex-1">
                    <HiTrendingUp className="w-4 h-4 text-[#1F5C3F] shrink-0" />
                    <span className="text-[11px] font-bold text-[#222222]">
                      Increased yield by 31%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FAF8F3] px-3 py-2 rounded-lg border border-[#E2DCCF] flex-1">
                    <HiOutlineSparkles className="w-4 h-4 text-[#1F5C3F] shrink-0" />
                    <span className="text-[11px] font-bold text-[#222222]">
                      Decreased water use
                    </span>
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
