"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineOfficeBuilding,
  HiOutlinePresentationChartLine,
  HiOutlineLibrary,
  HiOutlineBadgeCheck,
  HiArrowRight,
} from "react-icons/hi";

export const AcademyOfferings: React.FC = () => {
  const offerings = [
    {
      title: "Training Programmes",
      description: "Hands-on, practical training for farmers, agribusinesses and professionals.",
      icon: HiOutlineAcademicCap,
      href: "#programmes",
    },
    {
      title: "Professional Development",
      description: "Build your expertise and advance your career in agribusiness.",
      icon: HiOutlineUserGroup,
      href: "#programmes",
    },
    {
      title: "Institutional Training",
      description: "Tailored programmes for organisations and institutions.",
      icon: HiOutlineOfficeBuilding,
      href: "/contact",
    },
    {
      title: "Workshops & Masterclasses",
      description: "Focused, practical sessions on key industry topics.",
      icon: HiOutlinePresentationChartLine,
      href: "#programmes",
    },
    {
      title: "University Partnerships",
      description: "Collaborating with academic institutions to build future talent.",
      icon: HiOutlineLibrary,
      href: "/partnerships",
    },
    {
      title: "Certification",
      description: "Recognised credentials to validate skills and build credibility.",
      icon: HiOutlineBadgeCheck,
      href: "#certification-pathway",
    },
  ];

  return (
    <section id="what-we-offer" className="py-8 sm:py-10 bg-white border-b border-brand-border/60">
      <Container size="lg">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#1F5C3F] block mb-2.5">
            WHAT WE OFFER
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-[40px] font-bold text-brand-charcoal tracking-tight leading-tight mb-3">
            Practical learning for real-world impact.
          </h2>
          <p className="text-sm sm:text-base text-brand-grey leading-relaxed">
            Our programmes are designed for individuals, teams and institutions looking to build capability,
            improve performance and create lasting value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: 6 Services Grid (2 Columns x 3 Rows) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {offerings.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#FAF8F3] border border-brand-border/80 hover:border-[#1F5C3F]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white border border-brand-border/80 text-[#1F5C3F] flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#1F5C3F] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal mb-2 group-hover:text-[#1F5C3F] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-grey leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1F5C3F] group-hover:text-[#184932] group-hover:translate-x-1 transition-all"
                    >
                      <span>Learn more</span>
                      <HiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Featured Light Academy Card matching UI */}
          <div className="lg:col-span-4 sticky top-24" id="about-academy">
            <div className="rounded-2xl overflow-hidden border border-brand-border shadow-2xl bg-[#08150E] text-white">
              
              {/* Photo Top */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/image/pillar1- male instructor with some students having a lot of feed samples.png"
                  alt="Students in agricultural training session"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08150E] via-transparent to-transparent" />
              </div>

              {/* Card Content Below Photo */}
              <div className="p-6 sm:p-7">
                <div className="inline-block px-2.5 py-1 rounded bg-[#1F5C3F]/40 border border-emerald-500/40 text-[10px] font-mono font-bold tracking-widest text-emerald-300 uppercase mb-4">
                  LIGHT ACADEMY
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-black text-white tracking-wide mb-3">
                  LEARN. APPLY. GROW.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Light Academy is our dedicated learning ecosystem, designed to turn knowledge into capability and capability into performance.
                </p>

                <a
                  href="#certification-pathway"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#c29e2e] text-[#08150E] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore Light Academy</span>
                  <HiArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
