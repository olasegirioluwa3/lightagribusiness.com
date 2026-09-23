"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

const practiceSteps = [
  {
    num: "01",
    heading: "A problem becomes visible",
    desc: "Something isn't performing as expected.",
  },
  {
    num: "02",
    heading: "We investigate",
    desc: "We gather information, ask questions and examine the system.",
  },
  {
    num: "03",
    heading: "We identify the gap",
    desc: "We distinguish symptoms from underlying issues.",
  },
  {
    num: "04",
    heading: "We design the intervention",
    desc: "The response is matched to the actual situation.",
  },
  {
    num: "05",
    heading: "We implement",
    desc: "People and processes begin to change.",
  },
  {
    num: "06",
    heading: "We measure",
    desc: "Performance is monitored against relevant indicators.",
  },
  {
    num: "07",
    heading: "We improve",
    desc: "What we learn becomes the foundation for the next cycle.",
  },
];

export const ApproachInPractice: React.FC = () => {
  return (
    <section id="practice" className="py-14 sm:py-20 bg-white border-b border-gray-200">
      <Container size="lg">
        <div className="mb-10 sm:mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1F5C3F] block mb-2">
            From Problem to Performance
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[34px] text-[#111111] tracking-tight leading-[1.28] mb-2">
            Our approach in practice.
          </h2>
          <p className="text-sm text-[#5A5A5A] leading-relaxed">
            Here&apos;s how we bring the five steps to life — from the field to the boardroom.
          </p>
        </div>

        {/* 7-column grid matching design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {practiceSteps.map((step, idx) => (
            <div
              key={step.num}
              className="relative bg-[#FAFAF8] hover:bg-white border border-[#EBE8E1] hover:border-[#1F5C3F]/40 rounded-xl p-4 sm:p-5 flex flex-col gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            >
              {/* Top pill/dot with step number */}
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#1F5C3F]" />
                <span className="text-[11px] font-bold text-[#1F5C3F] tracking-wide">
                  {step.num}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="font-bold text-[13px] sm:text-[14px] text-[#111111] leading-snug group-hover:text-[#1F5C3F] transition-colors">
                {step.heading}
              </h3>

              {/* Step Description */}
              <p className="text-[11px] sm:text-[12px] text-[#6B6B6B] leading-relaxed">
                {step.desc}
              </p>

              {/* Connector line on desktop */}
              {idx < practiceSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-7 w-2 h-[1px] bg-[#D4CEBF] z-10" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
