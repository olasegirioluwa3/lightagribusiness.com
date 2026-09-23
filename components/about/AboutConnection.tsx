import React from "react";
import { Container } from "@/components/ui/Container";
import {
  HiArrowRight,
  HiAcademicCap,
  HiChartBar,
  HiChip,
  HiDatabase,
} from "react-icons/hi";

const steps = [
  {
    icon: HiAcademicCap,
    label: "Knowledge",
  },
  {
    icon: HiChartBar,
    label: "Advisory",
  },
  {
    icon: HiChip,
    label: "Technology",
  },
  {
    icon: HiDatabase,
    label: "Data & Insight",
  },
  {
    icon: HiAcademicCap,
    label: "Better Agribusinesses",
  },
];

export const AboutConnection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#062A1D] via-[#0A3A28] to-[#062A1D] py-14 lg:py-16">
      <Container size="lg">
        <div className="grid lg:grid-cols-[360px_1fr] gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="block mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#9FD0A7]">
              How The Pieces Connect
            </span>

            <h2 className="text-white text-3xl lg:text-[42px] font-bold leading-[1.1] mb-4">
              A stronger ecosystem.
              <br />
              Better outcomes.
            </h2>

            <p className="text-white/75 text-sm leading-relaxed">
              Knowledge builds capability. Advisory applies it.
              Technology creates visibility. Data and insight
              support better decisions. Better decisions create
              stronger agribusinesses and stronger agribusinesses
              create new knowledge.
            </p>
          </div>

          {/* PROCESS FLOW */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 lg:gap-5">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <React.Fragment key={step.label}>
                  <div className="flex flex-col items-center text-center min-w-[90px]">
                    <div className="w-16 h-16 rounded-full border border-[#5FA46E] bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(95,164,110,0.25)]">
                      <Icon className="w-7 h-7 text-[#B8F2C3]" />
                    </div>

                    <span className="mt-3 text-xs font-medium text-white leading-tight">
                      {step.label}
                    </span>
                  </div>

                  {index !== steps.length - 1 && (
                    <HiArrowRight className="hidden lg:block w-5 h-5 text-[#7BC78C]" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};