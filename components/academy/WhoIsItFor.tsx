"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import {
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineSparkles,
  HiOutlineChatAlt2,
  HiOutlineAcademicCap,
  HiOutlineLibrary,
} from "react-icons/hi";

export const WhoIsItFor: React.FC = () => {
  const personas = [
    {
      title: "Farmers & Agripreneurs",
      description: "Growers seeking operational control, improved margins, and practical farm systems.",
      icon: HiOutlineUserGroup,
    },
    {
      title: "Agribusiness Owners & Managers",
      description: "Commercial leaders building structured SOPs, loss prevention, and team compliance.",
      icon: HiOutlineBriefcase,
    },
    {
      title: "Young Professionals",
      description: "Career starters building tangible, employable competencies for agribusiness.",
      icon: HiOutlineSparkles,
    },
    {
      title: "Consultants & Advisors",
      description: "Field practitioners seeking diagnostic frameworks and evidence-based methodologies.",
      icon: HiOutlineChatAlt2,
    },
    {
      title: "Students & Graduates",
      description: "University agriculturalists bridging theoretical lecture halls to practical competence.",
      icon: HiOutlineAcademicCap,
    },
    {
      title: "Institutions & Organisations",
      description: "DFIs, universities, and corporates training outgrower networks and workforce cohorts.",
      icon: HiOutlineLibrary,
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-[#FAF8F3] border-b border-brand-border/60">
      <Container size="lg">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#1F5C3F] block mb-2.5">
            WHO IS IT FOR?
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-[40px] font-bold text-brand-charcoal tracking-tight leading-tight mb-3">
            Designed for every stage of the journey.
          </h2>
          <p className="text-sm sm:text-base text-brand-grey leading-relaxed">
            Our programmes are relevant to a wide range of people and organisations across the agrifood ecosystem.
          </p>
        </div>

        {/* 6 Audience Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {personas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-brand-border/80 hover:border-[#1F5C3F]/50 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1F5C3F] border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#1F5C3F] group-hover:text-white transition-all shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-sm sm:text-base font-bold text-brand-charcoal leading-snug">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
