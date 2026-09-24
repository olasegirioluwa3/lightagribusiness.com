"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  HiTrendingDown,
  HiLightningBolt,
  HiClipboardCheck,
  HiArrowRight,
} from "react-icons/hi";

export const AdvisoryCaseStudy: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E8E4DA]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Case Study Farm Photo */}
          <div className="lg:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#E5E0D5]">
            <Image
              src="/image/poultry (1).jpg"
              alt="Poultry farm operations diagnostics"
              fill
              className="object-cover"
            />
          </div>

          {/* Center Column: Narrative & Details matching mockup */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2E7D32] block mb-1">
                CASE STUDY
              </span>
              <h3 className="font-bold text-2xl sm:text-3xl text-[#122216] leading-snug">
                Improving farm performance through better systems
              </h3>
              <span className="text-xs font-semibold text-[#777777] block mt-1">
                Poultry Farm | Operations &amp; Management
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              A commercial poultry operation was experiencing high mortality, poor feed conversion and inconsistent performance. Through a structured diagnostic and advisory process, we redesigned operating systems, improved biosecurity and introduced better records and monitoring.
            </p>

            <p className="text-xs font-bold text-[#122216]">
              Outcome: <span className="font-normal text-[#555555]">Improved performance, lower mortality, and stronger operational control.</span>
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#122216] hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 group shadow-sm"
              >
                <span>View Full Case Study</span>
                <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Key Outcomes Cards matching mockup */}
          <div className="lg:col-span-3 space-y-3">
            <div className="bg-[#FAF9F5] border border-[#E8E4DA] rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-white border border-[#E8E4DA] flex items-center justify-center text-[#2E7D32] shrink-0">
                <HiTrendingDown className="w-5 h-5" />
              </div>
              <span className="font-sans font-bold text-xs sm:text-sm text-[#122216] leading-tight">
                Lower mortality rate
              </span>
            </div>

            <div className="bg-[#FAF9F5] border border-[#E8E4DA] rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-white border border-[#E8E4DA] flex items-center justify-center text-[#2E7D32] shrink-0">
                <HiLightningBolt className="w-5 h-5" />
              </div>
              <span className="font-sans font-bold text-xs sm:text-sm text-[#122216] leading-tight">
                Improved feed conversion
              </span>
            </div>

            <div className="bg-[#FAF9F5] border border-[#E8E4DA] rounded-xl p-4 flex items-center gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-white border border-[#E8E4DA] flex items-center justify-center text-[#2E7D32] shrink-0">
                <HiClipboardCheck className="w-5 h-5" />
              </div>
              <span className="font-sans font-bold text-xs sm:text-sm text-[#122216] leading-tight">
                Better record keeping
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
