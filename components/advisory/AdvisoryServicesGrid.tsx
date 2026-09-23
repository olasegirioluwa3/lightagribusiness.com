"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  HiSearch,
  HiTrendingUp,
  HiChartPie,
  HiShieldCheck,
  HiTemplate,
  HiAcademicCap,
  HiLightningBolt,
  HiGlobeAlt,
  HiArrowRight,
} from "react-icons/hi";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const serviceItems: ServiceItem[] = [
  {
    title: "Agribusiness Diagnostics",
    description: "Identify operational bottlenecks, yield leaks, and financial drainage across your value chain.",
    icon: HiSearch,
  },
  {
    title: "Farm Operations Improvement",
    description: "Improve biosecurity, daily labor protocols, input efficiency, and bottom-line farm profitability.",
    icon: HiTrendingUp,
  },
  {
    title: "Business Strategy",
    description: "Build robust, scalable commercial models that withstand regional market and climatic shifts.",
    icon: HiChartPie,
  },
  {
    title: "Investment Readiness",
    description: "Prepare institutional governance, financial records, and feasibility studies to attract bank or DFI capital.",
    icon: HiShieldCheck,
  },
  {
    title: "Management Systems",
    description: "Strengthen middle management, daily supervision logs, and plain-language operational SOPs.",
    icon: HiTemplate,
  },
  {
    title: "Technical Advisory",
    description: "Access specialized crop, poultry, livestock, and soil agronomy consultants when you need them.",
    icon: HiAcademicCap,
  },
  {
    title: "Productivity Improvement",
    description: "Optimize feed conversion ratios, reduce post-harvest waste, and maximize output per hectare.",
    icon: HiLightningBolt,
  },
  {
    title: "Agribusiness Development",
    description: "Structure resilient smallholder outgrower schemes, quality aggregation hubs, and market links.",
    icon: HiGlobeAlt,
  },
];

export const AdvisoryServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-[#E8E4DA]">
      <Container size="lg">
        {/* Header matching mockup */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32] block mb-2">
            OUR ADVISORY SERVICES
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[34px] text-[#122216] tracking-tight leading-tight mb-3">
            Practical expertise. Real solutions.
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
            We work with you across key areas of your agribusiness to build structures that keep operating when the owner is not in the room.
          </p>
        </div>

        {/* Grid: 8 Service Cards on the Left + Feature Image Panel on the Right matching mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 8 Service Cards in 2x4 Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceItems.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF9F5] border border-[#E8E4DA] rounded-2xl p-5 hover:bg-white hover:border-[#2E7D32] hover:shadow-md transition-all duration-200 group flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E4DA] flex items-center justify-center text-[#2E7D32] shrink-0 group-hover:bg-[#2E7D32] group-hover:text-white transition-colors shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#122216] mb-1.5 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Feature Image Banner matching mockup */}
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden min-h-[380px] shadow-lg flex flex-col justify-end p-6 sm:p-8 group">
            <Image
              src="/image/lightagribusiness-gallery (36).jpg"
              alt="Agronomist reviewing crop analytics in greenhouse"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            <div className="relative z-10 space-y-4">
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white leading-snug">
                Better decisions start with better information.
              </h3>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8BC34A] hover:bg-[#7CB342] text-[#0A160E] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md group"
                >
                  <span>Explore Services</span>
                  <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
