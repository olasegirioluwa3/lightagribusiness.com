"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const AcademyHero: React.FC = () => {
  return (
    <section className="relative bg-[#07130D] text-white overflow-hidden pt-6 pb-8 lg:pt-8 lg:pb-10 border-b border-brand-green/20">
      {/* Background Photography Seamlessly Blended */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/image/pillar1 - female instructor advising many farmers in a farm.png"
          alt="Practical agricultural capacity development and field training"
          fill
          priority
          className="object-cover object-right lg:object-[80%_center] opacity-35 lg:opacity-40 transition-opacity duration-700"
        />
        {/* Directional gradient overlay: solid dark on text side, fading to reveal image on showcase side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07130D] via-[#07130D]/92 via-35% to-[#07130D]/40" />
        {/* Vertical edge fades */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07130D] via-[#07130D]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07130D] via-[#07130D]/80 to-transparent" />
        {/* Atmospheric ambient glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(31,92,63,0.38)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(198,146,20,0.14)_0%,transparent_50%)]" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Eyebrow, Headline, Value Copy & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-green/25 border border-emerald-500/40 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-300">
                WHAT WE DO &gt; KNOWLEDGE &amp; CAPACITY DEVELOPMENT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl xl:text-[52px] font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Better agribusinesses begin with better{" "}
              <span className="text-[#D4AF37] block mt-1">capability.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              Practical knowledge, professional development and certification
              designed to turn learning into application.
            </p>

            {/* CTAs matching the UI mockup */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#programmes"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#1F5C3F] hover:bg-[#184932] text-white font-semibold text-sm sm:text-base tracking-wide shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Programmes</span>
                <HiArrowRight className="w-4 h-4 text-emerald-300" />
              </a>
              <a
                href="#about-academy"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 hover:text-white border border-white/20 hover:border-white/40 font-medium text-sm sm:text-base tracking-wide backdrop-blur-sm transition-all"
              >
                Learn About Light Academy
              </a>
            </div>
          </div>

          {/* Right Column: Visual Training Showcase matching provided mockup */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
              
              {/* Framed Feature Image */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/90">
                <Image
                  src="/image/pillar1 - female instructor advising many farmers in a farm.png"
                  alt="Instructor training farmers in the field"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

                {/* Floating Top Right Value Stack Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/15 text-right space-y-1 shadow-lg">
                  <div className="text-xs sm:text-sm font-serif font-bold text-white tracking-wide">
                    Better People
                  </div>
                  <div className="text-xs sm:text-sm font-serif font-bold text-emerald-300 tracking-wide">
                    Better Systems
                  </div>
                  <div className="text-xs sm:text-sm font-serif font-bold text-[#D4AF37] tracking-wide">
                    Better Agribusinesses
                  </div>
                </div>

                {/* Floating Bottom Left Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#071710]/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-emerald-500/30 flex items-center gap-2.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    Practical training for real-world impact.
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
