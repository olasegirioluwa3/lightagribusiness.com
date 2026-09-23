"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const ElevateCTABanner: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-[#0A120D] text-white overflow-hidden border-t border-[#182A20]">
      {/* Background Image of Panoramic Farm Landscape with Radiant Sunrise */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/lightagribusiness-gallery (11).jpg"
          alt="African agricultural landscape illuminated by morning sun"
          fill
          className="object-cover object-center opacity-60"
          priority={false}
        />
        {/* Soft radial and horizontal gradient to keep text readable while letting golden sun shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08120B]/95 via-[#08120B]/70 to-[#08120B]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08120B] via-transparent to-[#08120B]/60" />
        
        {/* Golden Sun Flare Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#E0AB2D]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Subtitle, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.15] mb-3 uppercase">
              READY TO ELEVATE YOUR
              <br />
              <span className="text-white/95">AGRIBUSINESS STRATEGY?</span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-white/80 font-normal leading-relaxed mb-8 max-w-lg">
              Let&apos;s find the right resource for your unique challenges.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/advisory"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8BC34A] hover:bg-[#7cb342] text-[#0A170F] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-98"
              >
                <span>EXPLORE CONSULTANCY</span>
                <HiArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-black/40 hover:bg-white/10 text-white border border-white/35 hover:border-white/70 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 backdrop-blur-xs"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Horizontal Floating Value Pill Badges */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-row flex-wrap items-center justify-start lg:justify-end gap-3 sm:gap-4">
            {/* Pill 1: Practical Expertise */}
            <div className="flex items-center gap-2.5 bg-black/50 hover:bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 text-xs sm:text-sm text-white/95 transition-all shadow-md">
              <div className="w-6 h-6 rounded-full border border-[#8BC34A] flex items-center justify-center text-[#8BC34A] shrink-0">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-semibold text-xs tracking-tight">Practical Expertise</span>
            </div>

            {/* Pill 2: Field Experience */}
            <div className="flex items-center gap-2.5 bg-black/50 hover:bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 text-xs sm:text-sm text-white/95 transition-all shadow-md">
              <div className="w-6 h-6 rounded-full border border-[#8BC34A] flex items-center justify-center text-[#8BC34A] shrink-0">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="font-semibold text-xs tracking-tight">Field Experience</span>
            </div>

            {/* Pill 3: Measurable Growth */}
            <div className="flex items-center gap-2.5 bg-black/50 hover:bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 text-xs sm:text-sm text-white/95 transition-all shadow-md">
              <div className="w-6 h-6 rounded-full border border-[#8BC34A] flex items-center justify-center text-[#8BC34A] shrink-0">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
              </div>
              <span className="font-semibold text-xs tracking-tight">Measurable Growth</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
