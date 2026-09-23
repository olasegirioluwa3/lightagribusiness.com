"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  HiArrowRight,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineTrendingUp,
} from "react-icons/hi";

export const AdvisoryCTA: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-20 bg-[#0B150F] text-white overflow-hidden">
      {/* Background Farm Sunset Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/footers image - sunset (1).jpg"
          alt="African agricultural sunset"
          fill
          className="object-cover object-center filter brightness-[0.9] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B150F]/95 via-[#0B150F]/80 to-[#0B150F]/90" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="max-w-3xl space-y-6">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight uppercase">
            YOUR AGRIBUSINESS DESERVES
            <br />
            BETTER SYSTEMS.
          </h2>

          <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
            Let&apos;s find the right solutions for your unique challenges. Stop relying on memory and informal routines — let&apos;s build systems that work.
          </p>

          {/* 3 Key Value Icons matching mockup */}
          <div className="flex flex-wrap items-center gap-6 pt-2 pb-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
              <HiOutlineSparkles className="w-5 h-5 text-[#8BC34A]" />
              <span>Practical expertise</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
              <HiOutlineShieldCheck className="w-5 h-5 text-[#8BC34A]" />
              <span>Field experience</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
              <HiOutlineTrendingUp className="w-5 h-5 text-[#8BC34A]" />
              <span>Measurable results</span>
            </div>
          </div>

          {/* Dual CTAs matching mockup */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#8BC34A] hover:bg-[#7CB342] text-[#0B150F] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#8BC34A]/25 group"
            >
              <span>Request an Advisory Assessment</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#122218] hover:bg-[#1a3324] text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all duration-200"
            >
              <span>Talk to Our Team</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
