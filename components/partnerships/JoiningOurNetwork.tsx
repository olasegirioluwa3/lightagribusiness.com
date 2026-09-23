"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const JoiningOurNetwork: React.FC = () => {
  const steps = [
    {
      number: "5",
      label: "APPLY",
      desc: "Apply to join to get started with joining our community.",
    },
    {
      number: "5",
      label: "ALIGN",
      desc: "Entuice on-board requirements, innovation and commitments.",
    },
    {
      number: "6",
      label: "ACHIEVE",
      desc: "Reframe comprehensive innovation and optimal accomplishments.",
    },
  ];

  const featuredPartners = [
    { name: "Global Organics", abbr: "GO", color: "#2196F3" },
    { name: "LLOBA", abbr: "LLOBA", color: "#4CAF50" },
    { name: "USGA", abbr: "USGA", color: "#1F5C3F" },
    { name: "Research1903", abbr: "R1903", color: "#607D8B" },
    { name: "UNBA", abbr: "UNBA", color: "#3F51B5" },
    { name: "Liberia Agri Offices", abbr: "LAO", color: "#8BC34A" },
    { name: "URICAL", abbr: "URICAL", color: "#E91E63" },
    { name: "Biosafeness", abbr: "BS", color: "#795548" },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F3] border-b border-[#E2DCCF]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Joining Our Network */}
          <div className="lg:col-span-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1F5C3F] block mb-1">
              JOINING OUR NETWORK
            </span>
            <h3 className="font-sans font-black text-xl sm:text-2xl text-[#222222] tracking-tight uppercase mb-2">
              JOINING OUR NETWORK
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed mb-8">
              We help your site characterize via your agribusiness.
            </p>

            {/* Step Flow */}
            <div className="flex items-start gap-4 sm:gap-6">
              {steps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div className="flex flex-col items-center text-center flex-1 min-w-0">
                    {/* Number Badge */}
                    <div className="w-12 h-12 rounded-full bg-[#1F5C3F] text-white font-black text-lg flex items-center justify-center shadow-md mb-2 shrink-0">
                      {step.number}
                    </div>
                    <span className="font-black text-xs sm:text-sm text-[#222222] uppercase tracking-tight">
                      {step.label}
                    </span>
                    <p className="text-[10px] text-[#5A5A5A] leading-snug mt-1 hidden sm:block">
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow connector (except after last) */}
                  {idx < steps.length - 1 && (
                    <div className="flex items-center pt-5 text-[#7D7D7D] shrink-0">
                      <HiArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Partners Grid */}
          <div className="lg:col-span-8">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1F5C3F] block mb-1">
              OUR PARTNERS
            </span>
            <h3 className="font-sans font-black text-xl sm:text-2xl text-[#222222] tracking-tight uppercase mb-6">
              FEATURED PARTNERS
            </h3>

            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {featuredPartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E2DCCF] p-4 flex flex-col items-center justify-center text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group min-h-[72px]"
                >
                  {/* Monogram / Initials Logo */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-1.5 text-white font-black text-[11px] shrink-0"
                    style={{ backgroundColor: partner.color }}
                  >
                    {partner.abbr.length > 4 ? partner.abbr.slice(0, 2) : partner.abbr}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-[#5A5A5A] group-hover:text-[#1F5C3F] transition-colors leading-tight">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
