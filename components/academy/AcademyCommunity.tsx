"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const AcademyCommunity: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 bg-[#FAF8F3] border-b border-brand-border/60">
      <Container size="lg">
        {/* Unified Banner matching the UI mockup */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#091710] text-white border border-emerald-900/60 shadow-2xl overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* 1. Left Column: Community Headline & Pill CTA */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:pr-6 z-10">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-emerald-400 block mb-3 font-mono">
                LIGHT ACADEMY COMMUNITY
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-tight mb-3">
                Real people. Real progress.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-md">
                Our alumni and participants are building stronger careers, more capable teams and better agribusinesses.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F5C3F] hover:bg-[#184932] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Join Our Community</span>
                <HiArrowRight className="w-4 h-4 text-emerald-300" />
              </Link>
            </div>

            {/* 2. Middle Column: Testimonial Quote */}
            <div className="lg:col-span-4 p-8 sm:p-10 lg:py-8 lg:px-6 z-10 border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="text-3xl sm:text-4xl text-[#D4AF37] font-serif leading-none mb-2">
                &ldquo;
              </div>
              <blockquote className="font-serif text-sm sm:text-base lg:text-[17px] text-white leading-relaxed mb-3">
                The training gave me practical skills I could immediately apply on my farm.*
              </blockquote>
              <div className="text-xs text-slate-400 font-medium">
                — Programme Participant
              </div>
            </div>

            {/* 3. Right Column: Farmer in the Field Image blending into the card */}
            <div className="lg:col-span-3 relative h-64 sm:h-72 lg:h-full min-h-[260px] lg:min-h-[300px] w-full overflow-hidden">
              <Image
                src="/image/lightAgriOs (4).jpg"
                alt="Light Academy alumni participant in the field"
                fill
                className="object-cover object-center"
              />
              {/* Edge gradient blend into the dark container */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#091710] via-transparent to-transparent lg:w-16" />
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
