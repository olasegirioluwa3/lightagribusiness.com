"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiSearch, HiUserGroup, HiBriefcase } from "react-icons/hi";

export const EngageWithUs: React.FC = () => {
  const engagementModels = [
    {
      title: "REQUEST CUSTOM RESEARCH",
      desc: "Commission bespoke agricultural market studies, value-chain diagnostics, or feasibility assessments.",
      href: "/contact",
      icon: HiSearch,
    },
    {
      title: "JOINT RESEARCH PARTNERSHIPS",
      desc: "Collaborate on pan-African field trials, academic research grants, and development project evaluations.",
      href: "/partnerships",
      icon: HiUserGroup,
    },
    {
      title: "CONSULTANCY SERVICES",
      desc: "Engage our senior advisory team to audit farm operations, draft SOPs, and deploy data-driven management.",
      href: "/advisory",
      icon: HiBriefcase,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F3] border-b border-[#E2DCCF]">
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1F5C3F] block mb-2">
            ENGAGE WITH US
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-[#222222] tracking-tight uppercase mb-3">
            ENGAGE WITH US
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed">
            We partner with agribusinesses and institutions to build actionable processes and resilient agricultural systems.
          </p>
        </div>

        {/* 3 Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {engagementModels.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DCCF] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-[#EAE5D8] group-hover:bg-[#1F5C3F] text-[#1F5C3F] group-hover:text-[#8BC34A] flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-sans font-bold text-sm sm:text-base text-[#222222] group-hover:text-[#1F5C3F] transition-colors uppercase tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5A5A5A] leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
