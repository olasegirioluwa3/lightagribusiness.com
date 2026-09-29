"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const ResourcesHero: React.FC = () => {
  return (
    <section className="relative bg-[#0E1712] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#1A2C21]">
      {/* Ambient background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#1F5C3F]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#8BC34A]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Headline, Badge, Subtitle & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center self-start mb-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#182C1E] text-[#8BC34A] border border-[#2A4C34] shadow-xs">
                LIGHT RESOURCES CENTER
              </span>
            </div>

            {/* Main Headline with Airy Line-Height */}
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] text-white tracking-tight leading-[1.2] lg:leading-[1.22] mb-6">
              KNOWLEDGE TO DRIVE YOUR AGRIBUSINESS FORWARD.
            </h1>

            {/* Subtitle with Relaxed Spacing */}
            <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-xl mb-10">
              Access expert-curated data, reports, guides, and tools for every sector.
            </p>

            {/* Action Buttons with Generous Spacing */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="#categories"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#8BC34A] hover:bg-[#7cb342] text-[#0A170F] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl active:scale-98"
              >
                <span>VIEW RESOURCE TYPES</span>
                <HiArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-black/30 hover:bg-white/10 text-white border border-white/30 hover:border-white/60 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 backdrop-blur-xs"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Right Column: Analytics & Research Team Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/15 group bg-[#14231A]">
              <Image
                src="/image/advisory-man presenting analytics1.png"
                alt="Agribusiness research team reviewing analytics and field reports"
                fill
                priority
                className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1712]/80 via-transparent to-transparent" />

              {/* Sub-label badge */}
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 text-[11px] font-semibold uppercase tracking-wider text-[#8BC34A]">
                Empirical Research &amp; Field Benchmarks
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
