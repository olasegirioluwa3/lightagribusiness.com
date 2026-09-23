"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import {
  HiClipboardCheck,
  HiCog,
  HiBriefcase,
  HiShieldCheck,
  HiUsers,
  HiArrowRight,
  HiSearch,
} from "react-icons/hi";

interface JourneyStep {
  number: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  highlight: string;
  category: "Foundations" | "Execution" | "Strategic";
}

const journeySteps: JourneyStep[] = [
  {
    number: "01",
    title: "ONBOARDING",
    icon: HiClipboardCheck,
    description:
      "Comprehensive immersion in Light's 5 core values, diagnostic methodologies, and operational toolkits.",
    highlight: "Weeks 1–4 • Institutional Induction",
    category: "Foundations",
  },
  {
    number: "02",
    title: "SKILLS DEVELOPMENT",
    icon: HiCog,
    description:
      "Hands-on diagnostic field training, financial modeling, farm biosecurity protocols, and SOP development.",
    highlight: "Months 2–6 • Technical Mastery",
    category: "Execution",
  },
  {
    number: "03",
    title: "PROJECT LEADS",
    icon: HiBriefcase,
    description:
      "Direct ownership leading client farm audits, outgrower network rollouts, and LightAgriOS deployments.",
    highlight: "Year 1 • Client Operations",
    category: "Execution",
  },
  {
    number: "04",
    title: "LEADERSHIP",
    icon: HiShieldCheck,
    description:
      "Executive advisory presentations, cross-functional team leadership, and institutional strategy building.",
    highlight: "Years 2+ • Practice Leadership",
    category: "Strategic",
  },
  {
    number: "05",
    title: "MENTORSHIP",
    icon: HiUsers,
    description:
      "Coaching upcoming cohorts, contributing to annual research readiness reports, and ecosystem governance.",
    highlight: "Senior Partner & Ecosystem Fellow",
    category: "Strategic",
  },
];

export const CareerJourney: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredSteps = journeySteps.filter((step) => {
    const matchesSearch =
      step.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      step.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || step.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-14 sm:py-20 bg-[#FAF9F5] border-b border-[#E8E4DA]">
      <Container size="lg">
        {/* Header with Title and Search/Category Controls matching mockup */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32] block mb-2">
              OUR PROFESSIONAL DEVELOPMENT
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[36px] text-[#122216] tracking-tight leading-tight mb-2">
              PROFESSIONAL DEVELOPMENT JOURNEY
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] max-w-xl">
              We guide you through every stage of your career with structured frameworks, continuous training, and real farm leadership.
            </p>
          </div>

          {/* Filter Bar matching mockup right corner */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Search Input */}
            <div className="relative">
              <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#888888]" />
              <input
                type="text"
                placeholder="Search stages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs rounded-full bg-white border border-[#E0DCD3] text-[#122216] focus:outline-none focus:border-[#2E7D32] shadow-sm w-36 sm:w-44"
              />
            </div>

            {/* Category Filter Pills */}
            {["All", "Foundations", "Execution", "Strategic"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] font-bold px-3 py-1.5 rounded-full transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#2E7D32] text-white shadow-sm"
                    : "bg-white text-[#555555] border border-[#E0DCD3] hover:border-[#2E7D32]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Step Horizontal Pathway with connecting arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {filteredSteps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === filteredSteps.length - 1;

            return (
              <div key={step.number} className="relative group">
                <div className="bg-white rounded-2xl p-5 border border-[#E5E0D5] shadow-sm h-full flex flex-col justify-between hover:shadow-md hover:border-[#2E7D32] transition-all duration-200">
                  <div>
                    {/* Header Row: Icon & Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#EAF3EC] text-[#2E7D32] flex items-center justify-center group-hover:bg-[#2E7D32] group-hover:text-white transition-colors duration-200 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#888888]">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-sans font-black text-sm uppercase tracking-wider text-[#122216] mb-2">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-[#555555] leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Stage Milestone Badge */}
                  <div className="pt-3 border-t border-[#F0ECE3]">
                    <span className="text-[10px] font-bold text-[#2E7D32] block">
                      {step.highlight}
                    </span>
                  </div>
                </div>

                {/* Connecting arrow indicator for desktop */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-[#E0DCD3] items-center justify-center text-[#2E7D32] shadow-sm pointer-events-none">
                    <HiArrowRight className="w-3 h-3" />
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
