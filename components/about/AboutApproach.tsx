import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    text: "Understand the current situation and identify gaps.",
  },
  {
    number: "02",
    title: "Design",
    text: "Develop practical interventions.",
  },
  {
    number: "03",
    title: "Implement",
    text: "Support the transition from strategy to action.",
  },
  {
    number: "04",
    title: "Measure",
    text: "Track what changes and what works.",
  },
  {
    number: "05",
    title: "Improve",
    text: "Use evidence to strengthen the system.",
  },
];

export const AboutApproach = () => {
  return (
    <section className="bg-white py-0">
      <Container size="lg">
        <div className="grid min-w-0 lg:grid-cols-[420px_minmax(0,1fr)]">
          {/* Left Banner */}
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[320px]">
            <Image
              src="/image/advisory-man presenting analytics1.png"
              alt="Our Approach"
              fill
              className="scale-105 object-cover blur-sm"
            />

            <div className="absolute inset-0 bg-[#07130D]/80" />

            <div className="absolute inset-0 flex flex-col justify-center p-6 text-white sm:p-10">
              <p className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3">
                Our Approach
              </p>

              <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                We don&apos;t start with solutions.
                <br />
                We start with understanding.
              </h2>

              <p className="text-white/85">
                Every engagement begins by asking better questions.
              </p>
            </div>
          </div>

          {/* Right Timeline */}
          <div className="grid grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-2 lg:px-8 xl:flex xl:items-center xl:justify-between xl:gap-2 xl:px-4 xl:py-12">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="mx-auto w-full max-w-sm rounded-xl border border-[#E8E4DA] bg-[#FAF9F5] p-4 text-center xl:w-[100px] xl:shrink-0 xl:rounded-none xl:border-0 xl:bg-transparent xl:p-0">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0E4B34] font-bold text-white">
                    {step.number}
                  </div>

                  <h3 className="mb-2 font-bold text-[#153426]">
                    {step.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-[#66746C]">
                    {step.text}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden h-px min-w-3 flex-1 bg-[#D6E0DA] xl:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
