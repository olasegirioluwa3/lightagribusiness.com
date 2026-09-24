"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  HiSearch,
  HiTemplate,
  HiCog,
  HiChartBar,
  HiRefresh,
  HiArrowRight,
} from "react-icons/hi";

interface ProcessStep {
  number: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnose",
    icon: HiSearch,
    description: "Understand the current situation and identify operational and financial gaps.",
  },
  {
    number: "02",
    title: "Design",
    icon: HiTemplate,
    description: "Develop practical solutions and custom SOPs tailored to your unique farm context.",
  },
  {
    number: "03",
    title: "Implement",
    icon: HiCog,
    description: "Turn strategy into action on the farm floor through staff training and supervision.",
  },
  {
    number: "04",
    title: "Measure",
    icon: HiChartBar,
    description: "Track performance, mortality rates, feed conversion and real-time financial margins.",
  },
  {
    number: "05",
    title: "Improve",
    icon: HiRefresh,
    description: "Refine and strengthen operating systems for sustained, long-term commercial success.",
  },
];

export const AdvisoryProcess: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-[#0A160E] text-white overflow-hidden">
      {/* Background Panoramic Farm Landscape */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/farmers onn a farmland.jpg"
          alt="Agricultural advisory process"
          fill
          className="object-cover object-center filter brightness-[0.25] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A160E] via-[#0A160E]/85 to-[#0A160E]" />
      </div>

      <Container size="lg" className="relative z-10">
        {/* Header matching mockup */}
        <div className="max-w-2xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8BC34A] block mb-2">
            OUR ADVISORY PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-3">
            From insight to impact.
          </h2>
          <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
            Our five-step approach turns understanding into measurable results.
          </p>
        </div>

        {/* 5-Step Horizontal Stepper with Visual Connecting Arrows matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={step.number} className="relative group">
                <div className="flex flex-col items-center text-center p-4">
                  {/* Step Number Badge */}
                  <div className="mb-3">
                    <span className="font-mono text-xs font-bold text-[#8BC34A] bg-[#122218] border border-[#8BC34A]/30 px-3 py-1 rounded-full">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-[#122218] border-2 border-[#8BC34A] flex items-center justify-center text-[#8BC34A] group-hover:bg-[#8BC34A] group-hover:text-[#0A160E] transition-all duration-300 mb-4 shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-base text-white mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-white/70 leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>

                {/* Connecting arrow indicator for desktop */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-2 top-20 -translate-y-1/2 z-10 text-[#8BC34A]/60 pointer-events-none">
                    <HiArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
