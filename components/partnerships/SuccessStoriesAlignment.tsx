"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const SuccessStoriesAlignment: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#0B150F] text-white border-y border-[#182B1E]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Heading + Description + CTA */}
          <div className="lg:col-span-5 bg-[#122218] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8BC34A] block mb-2">
                SUCCESS STORIES &amp; ALIGNMENT
              </span>
              <h3 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-tight mb-4">
                SUCCESS STORIES &amp; ALIGNMENT
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                Learn from a global test knowledge to success activity and accelerate agribusiness matters relaying, organizations, data and other recent projects.
              </p>
              <Link
                href="/advisory"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8BC34A] hover:bg-[#7cb342] text-[#0B150F] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
              >
                <span>View recent projects</span>
              </Link>
            </div>

            {/* Conference / Meeting Photo */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/15 bg-black/40 mt-6">
              <Image
                src="/image/lightagribusiness-gallery (12).jpg"
                alt="Partnership alignment and success stories conference discussion"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-[#8BC34A]">
                CASE STUDY
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-[11px] font-bold text-white">Featured Case study</div>
                <div className="text-[10px] text-white/75 mt-0.5 line-clamp-2">
                  Poultry systems understanding high treatment consistently access and commitments.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Global Expertise Panel */}
          <div className="lg:col-span-7 bg-[#122218] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between">
            {/* Top Image */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/15 bg-black/40 mb-6">
              <Image
                src="/image/advisory-man presenting analytics1.png"
                alt="Global expertise advisory consultation session"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-[#8BC34A]">
                GLOBAL EXPERTISE, LOCAL ALIGNMENT
              </div>
            </div>

            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8BC34A] block mb-2">
                GLOBAL EXPERTISE, LOCAL CONTEXT
              </span>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white tracking-tight leading-snug mb-3 uppercase">
                LEVERAGING GLOBAL KNOWLEDGE WITH A FOCUS ON REGIONAL AGRIBUSINESS USODS.
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-5">
                Leveraging global knowledge with a focus on calibration about regional agribusiness needs, business solutions online and incorporating research-solving stories and needs.
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
