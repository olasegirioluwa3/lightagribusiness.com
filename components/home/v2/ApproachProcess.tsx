import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HiArrowRight } from "react-icons/hi";

const steps = [
  {
    num: "01",
    label: "Diagnose",
    title: "Understand the current situation and identify gaps.",
    numColor: "text-[#C69214]",
    labelColor: "text-gray-900",
    numBg: "bg-amber-50 border-amber-200",
  },
  {
    num: "02",
    label: "Design",
    title: "Co-create practical interventions for your context.",
    numColor: "text-brand-green",
    labelColor: "text-gray-900",
    numBg: "bg-[#EBF3EC] border-green-200",
  },
  {
    num: "03",
    label: "Implement",
    title: "Support the transition from strategy into action.",
    numColor: "text-blue-700",
    labelColor: "text-gray-900",
    numBg: "bg-blue-50 border-blue-200",
  },
  {
    num: "04",
    label: "Measure",
    title: "Track what has changed and what still needs work.",
    numColor: "text-teal-700",
    labelColor: "text-gray-900",
    numBg: "bg-teal-50 border-teal-200",
  },
  {
    num: "05",
    label: "Improve",
    title: "Continuously refine the system.",
    numColor: "text-brand-gold-dark",
    labelColor: "text-gray-900",
    numBg: "bg-amber-50 border-amber-200",
  },
];

export const ApproachProcess: React.FC = () => {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-20 border-b-2 border-gray-200">
      <Container size="lg">
        {/* Single-row layout: Left text column | Right steps column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left: Eyebrow + Headline + Description + CTA — all together */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-green block">
              Our Approach
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 tracking-tight leading-[1.25]">
              From understanding
              <span className="block mt-1">to lasting impact.</span>
            </h2>
            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
              We follow a structured, practical process that links understanding
              to action and creates measurable, sustainable improvement.
            </p>
            <Button
              href="/approach"
              variant="primary"
              size="md"
              className="group bg-brand-green hover:bg-brand-green-light text-white font-semibold flex items-center gap-2 w-fit"
            >
              <span>Learn About Our Approach</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right: 5-Step Process Strip */}
          <div className="lg:col-span-7">

            {/* Desktop: horizontal connected strip */}
            <div className="hidden sm:flex items-start gap-0">
              {steps.map((step, idx) => (
                <React.Fragment key={step.num}>
                  <div className="flex-1 flex flex-col items-center text-center group px-2">
                    {/* Number Circle */}
                    <div
                      className={`w-14 h-14 rounded-full border-2 ${step.numBg} flex items-center justify-center mb-3 shadow-sm transition-transform duration-300 group-hover:scale-110`}
                    >
                      <span className={`text-lg font-extrabold ${step.numColor}`}>
                        {step.num}
                      </span>
                    </div>

                    {/* Label */}
                    <p className={`text-sm font-bold ${step.labelColor} mb-1.5 tracking-tight`}>
                      {step.label}
                    </p>

                    {/* Description */}
                    <p className="text-[12px] text-gray-500 leading-snug max-w-[100px]">
                      {step.title}
                    </p>
                  </div>

                  {/* Arrow connector between steps */}
                  {idx < steps.length - 1 && (
                    <div className="flex items-start pt-7 px-0.5 shrink-0">
                      <HiArrowRight className="w-4 h-4 text-gray-300" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile: vertical list */}
            <div className="sm:hidden space-y-4">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  {/* Number Circle */}
                  <div
                    className={`w-12 h-12 rounded-full border-2 ${step.numBg} flex items-center justify-center flex-shrink-0 shadow-sm`}
                  >
                    <span className={`text-base font-extrabold ${step.numColor}`}>
                      {step.num}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="pt-1">
                    <p className="text-sm font-bold text-gray-900 leading-tight mb-0.5">
                      {step.label}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {step.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
