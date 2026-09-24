"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineDatabase,
  HiArrowRight,
} from "react-icons/hi";

export const LightAgriOSCTA: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-[#0B1D14] overflow-hidden border-b border-emerald-950">
      {/* Background Landscape Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/lightAgriOs (1).jpg"
          alt="Agriculture landscape"
          fill
          className="object-cover opacity-20 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D14] via-[#0B1D14]/90 to-[#0B1D14]/80" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: Headline and CTAs */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
              ACCELERATE YOUR PERFORMANCE WITH LIGHTAGRIOS.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-xl">
              Let&apos;s find the right solutions for your unique challenges.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1F5C3F] hover:bg-[#184932] text-white font-semibold text-sm sm:text-base tracking-wide shadow-lg shadow-black/40 transition-all"
              >
                <span>BOOK A DEMO</span>
                <HiArrowRight className="w-4 h-4 text-emerald-300" />
              </Link>
              <Link
                href="/advisory"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-sm sm:text-base tracking-wide backdrop-blur-sm transition-all"
              >
                TALK TO AN AGRI-SYSTEMS SPECIALIST
              </Link>
            </div>
          </div>

          {/* Right Side: 3 Feature Pill Badges */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                <HiOutlineSparkles className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Practical expertise & field support
              </span>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                <HiOutlineShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Field-tested operational SOPs
              </span>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                <HiOutlineDatabase className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Multi-farm enterprise scalability
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
