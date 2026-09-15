import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

const caseStudies = [
  {
    tag: "Poultry Operations",
    title: "Reducing mortality losses and improving production performance with a structured biosecurity system.",
    image: "/image/lightagribusiness-gallery (20).jpg",
    href: "/advisory#case-studies",
    accentBg: "bg-amber-500",
    accentText: "text-amber-600",
  },
  {
    tag: "Greenhouse Production",
    title: "From disorganized growing schedules to a digital crop calendar and traceability system.",
    image: "/image/lightagribusiness-gallery (15).jpg",
    href: "/advisory#case-studies",
    accentBg: "bg-brand-green",
    accentText: "text-brand-green",
  },
  {
    tag: "Agribusiness Strategy",
    title: "Building a more competitive agribusiness company through diagnostics and enterprise redesign.",
    image: "/image/lightagribusiness-gallery (23).jpg",
    href: "/advisory#case-studies",
    accentBg: "bg-slate-700",
    accentText: "text-slate-700",
  },
  {
    tag: "Capacity Development",
    title: "Equipping farm teams with practical certifications that changed how they showed up every Monday.",
    image: "/image/pillar1 - farmer explaining to a student in a farm.png",
    href: "/academy#case-studies",
    accentBg: "bg-teal-600",
    accentText: "text-teal-600",
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-20 border-b-2 border-gray-200">
      <Container size="lg">

        {/* Header: Two-column — same framework pattern */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start lg:items-end mb-12 sm:mb-14">
          {/* Left: Eyebrow + Headline */}
          <div className="lg:col-span-7">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-green block mb-2.5">
              From Problems To Progress 
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 tracking-tight leading-[1.25]">
              Real work. Practical solutions.
              <span className="block mt-1">Measurable change.</span>
            </h2>
          </div>

          {/* Right: "View All" link — bottom-aligned */}
          <div className="lg:col-span-5 lg:pb-1 flex lg:justify-end">
            <Link
              href="/advisory#case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors group"
            >
              <span>View All Case Studies</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4-Column Case Study Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.tag}
              href={cs.href}
              className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-brand-green/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={cs.image}
                  alt={cs.tag}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Tag pill on image */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full ${cs.accentBg}`}>
                    {cs.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  {/* Tag label repeated in body */}
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${cs.accentText} block mb-2`}>
                    {cs.tag}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 leading-snug">
                    {cs.title}
                  </p>
                </div>

                {/* CTA link */}
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green mt-4 group-hover:gap-2.5 transition-all">
                  View Case Study
                  <HiArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
};
