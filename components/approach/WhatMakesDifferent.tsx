"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

import {
  HiLightBulb,
  HiCubeTransparent,
  HiChartBar,
  HiClipboardCheck,
  HiUserGroup,
  HiRefresh,
} from "react-icons/hi";

const differentiators = [
  {
    title: "Practical over complicated.",
    desc: "We make complex issues understandable and actionable.",
    Icon: HiLightBulb,
  },
  {
    title: "Systems over symptoms.",
    desc: "We look for the factors creating a problem, not just the problem itself.",
    Icon: HiCubeTransparent,
  },
  {
    title: "Evidence over assumptions.",
    desc: "We value information, observation and measurable performance.",
    Icon: HiChartBar,
  },
  {
    title: "Application over theory.",
    desc: "Recommendations should be capable of being implemented.",
    Icon: HiClipboardCheck,
  },
  {
    title: "Partnership over prescription.",
    desc: "We work with people and organisations — not simply on them.",
    Icon: HiUserGroup,
  },
  {
    title: "Improvement over perfection.",
    desc: "The goal is meaningful, measurable progress and the capacity to keep improving.",
    Icon: HiRefresh,
  },
];

export const WhatMakesDifferent: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#F4F1E8] border-b border-[#E2DCCF]">
      <Container size="lg">
        <div className="mb-10 sm:mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1F5C3F] block mb-2">
            Why Light?
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[34px] text-[#111111] tracking-tight leading-[1.28]">
            What Makes Our Approach Different?
          </h2>
          <p className="text-sm text-[#5A5A5A] leading-relaxed mt-2">
            It&apos;s not just what we do — it&apos;s how we do it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
          {differentiators.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E2DCCF] p-5 sm:p-6 flex flex-col gap-3.5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#EAF3EC] group-hover:bg-[#1F5C3F] text-[#1F5C3F] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[14px] text-[#111111] leading-snug group-hover:text-[#1F5C3F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-[12px] text-[#6B6B6B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
