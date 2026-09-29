"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import {
  HiClipboardCheck,
  HiCog,
  HiBriefcase,
  HiShieldCheck,
  HiUsers,
  HiArrowRight,
} from "react-icons/hi";

interface JourneyStep {
  number: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  highlight: string;
}

const journeySteps: JourneyStep[] = [
  {
    number: "01",
    title: "INTERN / GRADUATE TRAINEE",
    icon: HiClipboardCheck,
    description:
      "An entry point for students and recent graduates to learn, assist, observe, and develop.",
    highlight: "Learn · Assist · Observe · Develop",
  },
  {
    number: "02",
    title: "ASSOCIATE",
    icon: HiCog,
    description:
      "Support consulting assignments and projects through structured analysis and delivery.",
    highlight: "Analyse · Support · Deliver",
  },
  {
    number: "03",
    title: "CONSULTANT / OFFICER",
    icon: HiBriefcase,
    description:
      "Own specific assignments and take responsibility for client outcomes.",
    highlight: "Lead · Advise · Implement",
  },
  {
    number: "04",
    title: "SENIOR CONSULTANT",
    icon: HiShieldCheck,
    description:
      "Lead technical assignments and teams while managing complex client relationships.",
    highlight: "Lead teams · Solve complex problems · Manage clients",
  },
  {
    number: "05",
    title: "PRINCIPAL CONSULTANT",
    icon: HiUsers,
    description:
      "Lead major consulting engagements and provide senior technical direction.",
    highlight: "Strategy · Technical leadership · Business development",
  },
  {
    number: "06",
    title: "DIRECTOR / PRACTICE LEAD",
    icon: HiUsers,
    description:
      "Own a business or technical practice, developing people and growing the market.",
    highlight: "Build the practice · Develop people · Grow the market",
  },
];

export const CareerJourney: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF9F5] border-b border-[#E8E4DA]">
      <Container size="lg">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <div>
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
              CAREER PROGRESSION
            </span>
            <h2 className="mb-2 font-sans text-2xl font-black leading-tight tracking-tight text-[#122216] sm:text-3xl lg:text-[36px]">
              A CLEAR PATH TO GROW
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-[#666666] sm:text-base">
              Progress from early-career learning to technical leadership and
              practice ownership across Light&apos;s agribusiness work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === journeySteps.length - 1;

            return (
              <div key={step.number} className="relative group">
                <div className="flex h-full flex-col justify-between rounded-2xl border border-[#E5E0D5] bg-white p-5 shadow-sm transition-all duration-200 hover:border-[#2E7D32] hover:shadow-md">
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
                    <span className="block text-[10px] font-bold leading-relaxed text-[#2E7D32]">
                      {step.highlight}
                    </span>
                  </div>
                </div>

                {/* Connecting arrow indicator for desktop */}
                {!isLast && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-[#E0DCD3] bg-white text-[#2E7D32] shadow-sm pointer-events-none xl:flex">
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
