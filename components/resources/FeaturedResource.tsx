"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  HiArrowRight,
  HiDocumentText,
  HiOutlineBookOpen,
  HiOutlineCalendar,
} from "react-icons/hi";

export const FeaturedResource: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#16432D] text-white overflow-hidden relative border-y border-[#23583C]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8BC34A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/40 rounded-full blur-2xl pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="bg-[#1B4E34]/90 rounded-3xl border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Book Preview + Content + Stats + Button */}
            <div className="lg:col-span-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">
              {/* Document Cover Mockup */}
              <div className="w-44 sm:w-52 shrink-0 bg-[#FAF8F3] text-[#222222] rounded-xl p-3.5 shadow-2xl border border-white/40 flex flex-col justify-between aspect-[3/4] relative overflow-hidden group">
                {/* Header of book cover */}
                <div className="border-b border-[#E2DCCF] pb-2 mb-2">
                  <span className="text-[8px] font-bold tracking-wider uppercase text-[#1F5C3F] block">
                    LIGHT AGRIBUSINESS
                  </span>
                  <h4 className="font-extrabold text-[13px] leading-tight text-[#112015] mt-0.5">
                    Comprehensive Soil Health Guide
                  </h4>
                </div>

                {/* Cover Image inside book */}
                <div className="relative flex-1 w-full rounded-md overflow-hidden my-1 bg-[#101b15]">
                  <Image
                    src="/image/lightagribusiness-gallery (36).jpg"
                    alt="Soil Health Guide Book Cover"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 text-[8px] text-white/90 font-medium leading-tight">
                    Practical Soil Restoration & Nutrition
                  </div>
                </div>

                {/* Footer of book cover */}
                <div className="pt-2 flex items-center justify-between border-t border-[#E2DCCF]">
                  <span className="text-[8px] font-semibold text-[#5A5A5A]">
                    50 Pages • 2024
                  </span>
                  <span className="text-[8px] font-bold text-[#1F5C3F]">
                    Pillar 2 Series
                  </span>
                </div>
              </div>

              {/* Text Description & Metadata */}
              <div className="flex-1 flex flex-col justify-between text-center sm:text-left">
                <div>
                  <span className="inline-block px-3 py-1 rounded text-[11px] font-bold uppercase tracking-widest bg-[#8BC34A]/20 text-[#8BC34A] border border-[#8BC34A]/40 mb-3">
                    FEATURED RESOURCE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
                    Comprehensive Soil Health Guide
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 max-w-xl">
                    Comprehensive soil health guide covering soil biology,
                    microbial vitality, high-yield soil restoration, and
                    customized fertilizer protocols for tropical agricultural
                    lands.
                  </p>
                </div>

                {/* Meta stats */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-white/90 mb-6">
                  <div className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-lg border border-white/10">
                    <HiDocumentText className="w-4 h-4 text-[#8BC34A]" />
                    <span className="font-semibold">771 KB</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-lg border border-white/10">
                    <HiOutlineBookOpen className="w-4 h-4 text-[#8BC34A]" />
                    <span className="font-semibold">6 Pages</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-lg border border-white/10">
                    <HiOutlineCalendar className="w-4 h-4 text-[#8BC34A]" />
                    <span className="font-semibold">June 2024</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <a
                    href="/Comprehensive_Soil_Health_Guide_v2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#8BC34A] hover:bg-[#7cb342] text-[#112015] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl active:scale-98"
                  >
                    <span>VIEW / DOWNLOAD</span>
                    <HiArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Consultant with Tablet */}
            <div className="lg:col-span-4 relative flex justify-center">
              <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                <Image
                  src="/image/middle-aged man with lighagrios tab.png"
                  alt="Agribusiness consultant using LightAgriOS digital diagnostic platform"
                  fill
                  className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center sm:text-left">
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">
                    Field-Tested Methodologies
                  </div>
                  <div className="text-[11px] text-white/80">
                    Deployed across 120+ commercial farming operations
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
