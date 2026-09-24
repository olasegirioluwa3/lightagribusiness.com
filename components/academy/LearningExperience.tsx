"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  HiOutlineBookOpen,
  HiOutlineHand,
  HiOutlineCog,
  HiOutlineClipboardCheck,
  HiOutlineTrendingUp,
  HiArrowRight,
} from "react-icons/hi";

export const LearningExperience: React.FC = () => {
  const steps = [
    {
      title: "Learn",
      description: "Build foundational knowledge.",
      icon: HiOutlineBookOpen,
    },
    {
      title: "Practise",
      description: "Gain hands-on experience.",
      icon: HiOutlineHand,
    },
    {
      title: "Apply",
      description: "Use skills in your context.",
      icon: HiOutlineCog,
    },
    {
      title: "Assess",
      description: "Measure progress and competence.",
      icon: HiOutlineClipboardCheck,
    },
    {
      title: "Improve",
      description: "Strengthen and advance.",
      icon: HiOutlineTrendingUp,
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-white border-b border-brand-border/60">
      <Container size="lg">
        {/* Section Header with top-right link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="min-w-0">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#1F5C3F] block mb-2.5">
              THE LEARNING EXPERIENCE
            </span>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-[32px] xl:text-[36px] font-bold text-brand-charcoal tracking-tight leading-tight mb-2 whitespace-nowrap overflow-x-auto sm:overflow-x-visible pb-1 sm:pb-0">
              Learn &rarr; Practise &rarr; Apply &rarr; Assess &rarr; Improve
            </h2>
            <p className="text-sm sm:text-base text-brand-grey">
              A practical, hands-on learning journey designed for real-world impact.
            </p>
          </div>

          <Link
            href="#certification-pathway"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1F5C3F] hover:text-[#184932] group whitespace-nowrap flex-shrink-0"
          >
            <span>View All Features</span>
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 5-Step Process Sequence */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative flex flex-col items-center text-center">
                    
                    {/* Node Circle */}
                    <div className="w-14 h-14 rounded-full bg-[#FAF8F3] border-2 border-[#1F5C3F]/30 text-[#1F5C3F] flex items-center justify-center mb-3 shadow-sm group-hover:border-[#1F5C3F] group-hover:bg-[#1F5C3F] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-brand-charcoal mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-brand-grey leading-relaxed">
                      {step.description}
                    </p>

                    {/* Connecting arrow indicator on sm+ screens */}
                    {idx < steps.length - 1 && (
                      <div className="hidden sm:block absolute top-7 -right-2 transform -translate-y-1/2 text-slate-300">
                        <HiArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Framed Image Showcase */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-brand-border">
              <Image
                src="/image/lightAgriOs (7).jpg"
                alt="Agribusiness professional in field testing digital applications"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-[#08150E]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-emerald-500/30">
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                  From learning to application.
                </span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
