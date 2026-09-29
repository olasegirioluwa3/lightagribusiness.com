"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  HiArrowRight,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineTrendingUp,
} from "react-icons/hi";

interface CareerCTAProps {
  onOpenApply: () => void;
}

export const CareerCTA: React.FC<CareerCTAProps> = ({ onOpenApply }) => {
  return (
    <section className="relative py-12 sm:py-20 bg-[#0B150F] text-white overflow-hidden">
      {/* Background Farm Sunset Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/footers image - sunset (1).jpg"
          alt="African agricultural landscape at sunset"
          fill
          className="object-cover object-center filter brightness-[0.95] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B150F]/95 via-[#0B150F]/75 to-[#0B150F]/90" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="max-w-3xl space-y-6">
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            READY TO DRIVE THE
            <br />
            FUTURE OF AGRICULTURE?
          </h2>

          <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
            Whether you are a seasoned agribusiness advisor, software engineer, or high-potential agriculture graduate — join the team building Africa&apos;s agricultural reference institution.
          </p>

          {/* 3 Key Value Icons matching mockup */}
          <div className="flex flex-wrap items-center gap-6 pt-2 pb-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
              <HiOutlineSparkles className="w-5 h-5 text-[#8BC34A]" />
              <span>Practical Knowledge</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
              <HiOutlineShieldCheck className="w-5 h-5 text-[#8BC34A]" />
              <span>Systems Thinking</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
              <HiOutlineTrendingUp className="w-5 h-5 text-[#8BC34A]" />
              <span>Measurable Impact</span>
            </div>
          </div>

          {/* Action CTAs matching mockup */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenApply}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#8BC34A] hover:bg-[#7CB342] text-[#0B150F] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#8BC34A]/25"
            >
              <span>Schedule a Chat</span>
              <HiArrowRight className="w-4 h-4" />
            </button>

          
          </div>
        </div>
      </Container>
    </section>
  );
};
