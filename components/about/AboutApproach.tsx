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
        <div className="grid lg:grid-cols-[420px_1fr]">

          {/* Left Banner */}
          <div className="relative min-h-[220px] overflow-hidden">
            <Image
              src="/image/advisory-man presenting analytics1.png"
              alt="Our Approach"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[#0A2418]/50" />

            <div className="absolute inset-0 p-10 flex flex-col justify-center text-white">
              <p className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3">
                Our Approach
              </p>

              <h2 className="text-4xl font-bold leading-tight mb-4">
                We don&apos;t start with solutions.
                <br />
                We start with understanding.
              </h2>

              <p className="text-white/85">
                Every engagement begins by asking
                better questions.
              </p>
            </div>
          </div>

          {/* Right Timeline */}
          <div className="flex items-center justify-between px-8 lg:px-12 py-12">

            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="text-center max-w-[130px]">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#0E4B34] text-white flex items-center justify-center font-bold mb-4">
                    {step.number}
                  </div>

                  <h3 className="font-bold text-[#153426] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-[#66746C]">
                    {step.text}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="w-12 h-[1px] bg-[#D6E0DA]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};