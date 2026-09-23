"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const GlobalExpertiseBanner: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#0B150F] text-white border-y border-[#182B1E]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Panel 1: Left */}
          <div className="bg-[#122218] rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-tight mb-4">
                GLOBAL EXPERTISE,
                <br />
                <span className="text-[#8BC34A]">LOCAL CONTEXT</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                We leverage global knowledge with a focus on regional agribusiness context and solving innovative challenges and developments through specialized research across our active projects.
              </p>
              <div className="mb-6">
                <Link
                  href="/partnerships"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8BC34A] hover:bg-[#7cb342] text-[#0B150F] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
                >
                  <span>View recent projects</span>
                </Link>
              </div>
            </div>

            {/* Conference Photo */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/15 bg-black/40">
              <Image
                src="/image/lightagribusiness-gallery (12).jpg"
                alt="Agricultural conference and institutional research panel discussion"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Panel 2: Right */}
          <div className="bg-[#122218] rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between shadow-xl">
            {/* Field Technician Photo */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/15 bg-black/40 mb-6">
              <Image
                src="/image/lightagribusiness-gallery (36).jpg"
                alt="Field agronomist inspecting greenhouse crop trial"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8BC34A] block mb-2">
                GLOBAL EXPERTISE, LOCAL CONTEXT
              </span>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white tracking-tight leading-snug mb-3 uppercase">
                LEVERAGING GLOBAL KNOWLEDGE WITH A FOCUS ON REGIONAL AGRIBUSINESS NEEDS.
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                Leveraging global knowledge with a focus on calibration in regional agribusiness needs to solve operational bottlenecks and driving real-world growth and development.
              </p>
              <Link
                href="/advisory"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8BC34A] hover:text-white transition-colors"
              >
                <span>View recent projects</span>
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
