"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const ApproachHero: React.FC = () => {
  return (
    <section className="relative bg-[#0B1A10] text-white overflow-hidden border-b border-[#182B1E]">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/advisory-man presenting analytics1.png"
          alt="Agribusiness advisory consultation"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A10]/98 via-[#0B1A10]/80 to-[#0B1A10]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A10]/90 via-transparent to-transparent" />
      </div>

      {/* Glow orbs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#1F5C3F]/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#C69214]/15 rounded-full blur-[100px] pointer-events-none" />

      <Container size="lg" className="relative z-10 py-20 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <div className="lg:col-span-7">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#8BC34A] block mb-5">
              Our Approach
            </span>

            <h1 className="font-sans font-black text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] text-white tracking-tight leading-[1.18] mb-6">
              We don&apos;t start with solutions.{" "}
              <span className="block mt-1">
                We start with{" "}
                <span className="text-[#C69214] italic">understanding.</span>
              </span>
            </h1>

            <p className="text-sm sm:text-[15px] lg:text-base text-white/75 leading-[1.85] max-w-lg mb-10">
              Agribusiness problems are rarely as simple as they first appear. At Light, we combine practical field understanding, systems thinking, evidence and continuous improvement to help agribusinesses and institutions move from uncertainty to clearer action.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#8BC34A] hover:bg-[#7cb342] text-[#0A170F] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Start a Conversation</span>
                <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/advisory"
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-black/30 hover:bg-white/10 border border-white/30 hover:border-white/60 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Right: Typography Stack */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end text-left lg:text-right pt-6 lg:pt-0">
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Better understanding.
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Better decisions.
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-black text-[#8BC34A] tracking-tight">
                Stronger agribusinesses.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
