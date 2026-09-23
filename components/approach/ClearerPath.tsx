"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";

const journeySteps = [
  { label: "Understand", sub: "where you are." },
  { label: "Identify what's", sub: "holding you back." },
  { label: "Determine what", sub: "needs to change." },
  { label: "Build a practical", sub: "path forward." },
  { label: "Measure", sub: "what works." },
  { label: "Improve", sub: "what comes next." },
];

export const ClearerPath: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-gray-200">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left: Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100">
              <Image
                src="/image/pillar1-woman in a garden with a laptop.png"
                alt="Agribusiness professional on a clearer path with Light"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-[#1F5C3F] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-md uppercase tracking-wider">
                What this means for you
              </div>
            </div>
          </div>

          {/* Right: Journey Steps */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#1F5C3F] block mb-3">
              What this means for you
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[36px] text-[#111111] leading-[1.28] mb-2">
              A clearer path, whatever your goal.
            </h2>
            <p className="text-sm text-[#5A5A5A] leading-relaxed mb-8">
              Whether you are managing a farm, building an agribusiness, exploring investment or strengthening your team, the starting point remains the same.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {journeySteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <HiCheckCircle className="w-5 h-5 text-[#1F5C3F] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[12px] sm:text-[13px] font-semibold text-[#111111] leading-snug">
                      {step.label}
                    </p>
                    {step.sub && (
                      <p className="text-[11px] text-[#6B6B6B]">{step.sub}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F5C3F] hover:bg-[#15402C] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md group"
            >
              <span>Start the Conversation</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
};
