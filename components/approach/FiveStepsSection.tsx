"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import {
  HiSearch,
  HiPencilAlt,
  HiCog,
  HiChartBar,
  HiRefresh,
  HiArrowRight,
} from "react-icons/hi";

const steps = [
  {
    num: "01",
    label: "Diagnose",
    desc: "Understand the current situation and identify the real problem.",
    Icon: HiSearch,
    accent: "#C69214",
    iconBg: "bg-[#FDF5E0]",
    ring: "border-[#E8C84A]",
  },
  {
    num: "02",
    label: "Design",
    desc: "Develop practical interventions tailored to your context.",
    Icon: HiPencilAlt,
    accent: "#1F5C3F",
    iconBg: "bg-[#E8F4EC]",
    ring: "border-[#A8D5B5]",
  },
  {
    num: "03",
    label: "Implement",
    desc: "Turn strategy into action.",
    Icon: HiCog,
    accent: "#1A5276",
    iconBg: "bg-[#EAF2FB]",
    ring: "border-[#90C1E8]",
  },
  {
    num: "04",
    label: "Measure",
    desc: "Track what changes and what works.",
    Icon: HiChartBar,
    accent: "#0E7490",
    iconBg: "bg-[#E5F6F9]",
    ring: "border-[#80CDD9]",
  },
  {
    num: "05",
    label: "Improve",
    desc: "Continuously refine the system.",
    Icon: HiRefresh,
    accent: "#C69214",
    iconBg: "bg-[#FDF5E0]",
    ring: "border-[#E8C84A]",
  },
];

export const FiveStepsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 lg:py-24 bg-[#F4F1E8] border-b border-[#E2DCCF]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* ── Left Column ── */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1F5C3F] block">
              The Light Approach
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[34px] text-[#111111] tracking-tight leading-[1.35]">
              Five steps from understanding to improvement.
            </h2>
            <p className="text-sm sm:text-[15px] text-[#5A5A5A] leading-[1.85]">
              Our approach is designed to move an agribusiness from where it is today to where it needs to be — without skipping the work required to understand the gap.
            </p>
            <a
              href="#practice"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1F5C3F] hover:text-[#15402C] transition-colors group w-fit"
            >
              See it in practice
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* ── Right Column: Horizontal icon steps ── */}
          <div className="lg:col-span-8">

            {/* DESKTOP */}
            <div className="hidden sm:flex items-start justify-between gap-1">
              {steps.map((step, idx) => {
                const Icon = step.Icon;
                return (
                  <React.Fragment key={step.num}>
                    {/* Step card */}
                    <div className="flex-1 flex flex-col items-center text-center group min-w-0 px-1">
                      {/* Step number */}
                      <span
                        className="text-[11px] font-black tracking-widest mb-2 self-start ml-1"
                        style={{ color: step.accent }}
                      >
                        {step.num}
                      </span>

                      {/* Icon container */}
                      <div
                        className={`w-14 h-14 rounded-2xl ${step.iconBg} border-2 ${step.ring}
                          flex items-center justify-center mb-3 shadow-sm
                          group-hover:scale-105 group-hover:shadow-md transition-all duration-300`}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: step.accent }}
                        />
                      </div>

                      {/* Label */}
                      <p className="text-[13px] font-black text-[#111111] mb-1.5 leading-tight tracking-tight">
                        {step.label}
                      </p>

                      {/* Description */}
                      <p className="text-[11px] text-[#6B6B6B] leading-snug">
                        {step.desc}
                      </p>
                    </div>

                    {/* Arrow connector */}
                    {idx < steps.length - 1 && (
                      <div className="flex items-center pt-[38px] shrink-0 px-0.5">
                        <HiArrowRight className="w-4 h-4 text-[#C0BAB0]" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* MOBILE — vertical timeline */}
            <div className="sm:hidden flex flex-col gap-0">
              {steps.map((step, idx) => {
                const Icon = step.Icon;
                return (
                  <div key={step.num} className="flex items-start gap-4">
                    {/* Circle + connecting line */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-xl ${step.iconBg} border-2 ${step.ring}
                          flex items-center justify-center shadow-sm shrink-0`}
                      >
                        <Icon className="w-5 h-5" style={{ color: step.accent }} />
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="w-[2px] h-8 bg-[#D5CEBF] mt-1" />
                      )}
                    </div>

                    {/* Text */}
                    <div className="pt-2 pb-6">
                      <span
                        className="text-[10px] font-black tracking-widest block mb-0.5"
                        style={{ color: step.accent }}
                      >
                        {step.num}
                      </span>
                      <p className="text-sm font-black text-[#111111] mb-1">{step.label}</p>
                      <p className="text-xs text-[#6B6B6B] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
