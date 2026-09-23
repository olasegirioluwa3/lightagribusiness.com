"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const AcademyCTA: React.FC = () => {
  return (
    <section className="relative py-8 sm:py-10 bg-[#07130D] text-white overflow-hidden border-b border-brand-green/20">
      {/* Background Agriculture Field Texture Blended */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/image/footers image - sunset (1).jpg"
          alt="Agriculture capacity building background"
          fill
          className="object-cover opacity-75 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07130D] via-[#07130D]/90 to-[#07130D]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(31,92,63,0.3)_0%,transparent_60%)]" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-8">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37] block mb-2.5">
              INVEST IN PEOPLE. BUILD BETTER AGRIBUSINESS.
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-normal mb-3">
              Build the capability behind your agribusiness.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              Explore our training programmes, certification pathways and professional development opportunities.
            </p>
          </div>

          {/* Right Column: Dual CTAs matching UI */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-row items-stretch sm:items-center lg:justify-end gap-3.5">
            <a
              href="#programmes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#c29e2e] text-[#07130D] font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-black/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Programmes</span>
              <HiArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-medium text-xs sm:text-sm tracking-wide backdrop-blur-sm transition-all"
            >
              Get in Touch
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
};
