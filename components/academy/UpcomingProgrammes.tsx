"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiLocationMarker, HiClock, HiUserGroup, HiArrowRight } from "react-icons/hi";

export const UpcomingProgrammes: React.FC = () => {
  const programmes = [
    {
      title: "Modern Farm Management",
      badge: "In-Person",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      location: "Lagos, Nigeria",
      duration: "3 days | In-person",
      audience: "Farm owners, managers, professionals",
      image: "/image/pillar1- farmer explaining to a student in a farm.png",
      href: "/contact",
    },
    {
      title: "Agribusiness Financial Management",
      badge: "In-Person",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      location: "Lagos, Nigeria",
      duration: "2 days | In-person",
      audience: "Managers, finance teams",
      image: "/image/advisory-man presenting analytics1.png",
      href: "/contact",
    },
    {
      title: "Foundational Agribusiness Certificate",
      badge: "Online/Hybrid",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      location: "Online (Flexible)",
      duration: "Self-paced",
      audience: "Individuals, young professionals",
      image: "/image/pillar1-woman in a garden with a laptop.png",
      href: "/contact",
    },
  ];

  return (
    <section id="programmes" className="py-8 sm:py-10 bg-[#FAF8F3] border-b border-brand-border/60">
      <Container size="lg">
        {/* Header with View All link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#1F5C3F] block mb-2.5">
              UPCOMING PROGRAMMES
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[40px] font-bold text-brand-charcoal tracking-tight leading-tight mb-2">
              Featured programmes
            </h2>
            <p className="text-sm sm:text-base text-brand-grey">
              Explore our latest training and development opportunities.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1F5C3F] hover:text-[#184932] group"
          >
            <span>View All Programmes</span>
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Programme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programmes.map((prog, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-white border border-brand-border/80 shadow-md hover:shadow-xl hover:border-[#1F5C3F]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${prog.badgeColor} shadow-sm backdrop-blur-md`}>
                      {prog.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal mb-4 group-hover:text-[#1F5C3F] transition-colors leading-snug">
                    {prog.title}
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm text-brand-grey mb-6">
                    <div className="flex items-center gap-2">
                      <HiLocationMarker className="w-4 h-4 text-[#1F5C3F] flex-shrink-0" />
                      <span>{prog.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiClock className="w-4 h-4 text-[#1F5C3F] flex-shrink-0" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiUserGroup className="w-4 h-4 text-[#1F5C3F] flex-shrink-0" />
                      <span className="truncate">{prog.audience}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 pb-6 pt-0 border-t border-brand-border/40 mt-auto">
                <Link
                  href={prog.href}
                  className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1F5C3F] group-hover:text-[#184932] group-hover:translate-x-1 transition-all"
                >
                  <span>View details</span>
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
