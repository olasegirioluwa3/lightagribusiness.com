"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  HiTrendingDown,
  HiOutlineExclamationCircle,
  HiOutlineClipboardList,
  HiOutlineCash,
  HiOutlineChip,
} from "react-icons/hi";

export const CapabilityGap: React.FC = () => {
  const challenges = [
    {
      icon: HiTrendingDown,
      title: "Low productivity and efficiency",
    },
    {
      icon: HiOutlineExclamationCircle,
      title: "Poor decision-making",
    },
    {
      icon: HiOutlineClipboardList,
      title: "Weak management systems",
    },
    {
      icon: HiOutlineCash,
      title: "Limited access to investment",
    },
    {
      icon: HiOutlineChip,
      title: "Underutilised technology",
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-[#FAF8F3] border-b border-brand-border/60">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Problem Statement & 5 Challenge Cards */}
          <div className="lg:col-span-6">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#1F5C3F] block mb-3">
              THE CAPABILITY GAP
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[40px] font-bold text-brand-charcoal tracking-tight leading-tight mb-4">
              Knowledge exists.
              <span className="block text-[#1F5C3F]">Application is the challenge.</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-grey leading-relaxed mb-4">
              Many agribusinesses have access to information, but struggle to turn it into practical action.
            </p>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 mb-6">
              The result is often:
            </p>

            {/* 5 Problem Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
              {challenges.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center p-3 rounded-xl bg-white border border-brand-border/80 shadow-sm hover:border-[#1F5C3F]/40 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#1F5C3F] border border-emerald-200 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-brand-charcoal leading-snug">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Quote & Photo Card matching UI */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-border bg-[#0C1B13] text-white">
              {/* Photo & Quote Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
                <Image
                  src="/image/pillar1 - farmer explaining to a student in a farm.png"
                  alt="Practical agribusiness application on the farm"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B13] via-[#0C1B13]/70 to-[#0C1B13]/30" />
                
                {/* Quote Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <div className="text-3xl sm:text-4xl text-[#D4AF37] font-serif leading-none mb-2">
                    &ldquo;
                  </div>
                  <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-white leading-snug mb-3 max-w-md">
                    The right knowledge, applied at the right time, can change the{" "}
                    <span className="text-[#D4AF37] underline decoration-[#D4AF37]/50 underline-offset-4">trajectory</span>{" "}
                    of an agribusiness.
                  </blockquote>
                  <div className="h-0.5 w-16 bg-[#D4AF37] rounded-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
