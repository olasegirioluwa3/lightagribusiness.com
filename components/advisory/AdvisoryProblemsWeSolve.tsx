"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import {
  HiCog,
  HiTrendingUp,
  HiUsers,
  HiClipboardList,
  HiGlobeAlt,
  HiShieldCheck,
} from "react-icons/hi";

interface ProblemItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  // description: string;
}

const problems: ProblemItem[] = [
  {
    title: "Operations Inefficiencies",
    icon: HiCog,
    // description: "Informal daily routines, missing standard operating procedures, and unmonitored farm floor leakage.",
  },
  {
    title: "Productivity Gaps",
    icon: HiTrendingUp,
    // description: "Poor feed conversion, unaddressed mortality spikes, irregular crop cycles, and low yields per hectare.",
  },
  {
    title: "People & Management",
    icon: HiUsers,
    // description: "Over-reliance on founder memory, lack of middle supervision, and high turnover of farm staff.",
  },
  {
    title: "Finance & Records",
    icon: HiClipboardList,
    // description: "Paper notebooks, unverified production costings, inventory shrinkage, and lack of real-time margins.",
  },
  {
    title: "Markets & Value Chains",
    icon: HiGlobeAlt,
    // description: "Unstable off-taker relationships, poor post-harvest cold storage, and unpredictable pricing shocks.",
  },
  {
    title: "Investment Readiness",
    icon: HiShieldCheck,
    // description: "Inadequate governance, missing audited accounts, and inability to satisfy bank or DFI capital conditions.",
  },
];

export const AdvisoryProblemsWeSolve: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E8E4DA]">
      <Container size="lg">
        {/* Header matching mockup */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32] block mb-2">
            THE PROBLEMS WE SOLVE
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[34px] text-[#122216] tracking-tight leading-tight mb-3">
            Every agribusiness has challenges.
            <br />
            We help you solve the right ones.
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
            Our advisory support addresses the real issues affecting performance and growth, not just the symptoms.
          </p>
        </div>

        {/* 6 Icon-based Problem Cards matching mockup */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F5] border border-[#E8E4DA] rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center hover:bg-white hover:border-[#2E7D32] hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E4DA] flex items-center justify-center text-[#2E7D32] group-hover:bg-[#2E7D32] group-hover:text-white transition-colors duration-200 mb-3.5 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-bold text-xs sm:text-sm text-[#122216] leading-snug mb-2">
                  {p.title}
                </h3>
                <p className="text-[11px] text-[#666666] leading-relaxed hidden sm:block">
                  {/* {p.description} */}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
