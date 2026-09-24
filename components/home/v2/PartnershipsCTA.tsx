import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

// High fidelity SVGs for 5 Partner Categories
const AcademicIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const FinancialIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M3 10h18" />
    <path d="M5 6l7-3 7 3" />
    <path d="M6 10v8" />
    <path d="M10 10v8" />
    <path d="M14 10v8" />
    <path d="M18 10v8" />
  </svg>
);

const GovernmentIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M9 3v18" />
    <path d="M15 3v18" />
    <path d="M4 9h16" />
    <path d="M4 15h16" />
  </svg>
);

const DevelopmentIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h16.8" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3a17 17 0 0 1 0 18" />
  </svg>
);

const PrivateSectorIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const partnerCategories = [
  {
    title: "Academic",
    desc: "Universities & research institutions",
    icon: AcademicIcon,
  },
  {
    title: "Financial",
    desc: "Banks, DFIs & microfinance",
    icon: FinancialIcon,
  },
  {
    title: "Government",
    desc: "Ministries & agencies",
    icon: GovernmentIcon,
  },
  {
    title: "Development",
    desc: "NGOs & international organisations",
    icon: DevelopmentIcon,
  },
  {
    title: "Private Sector",
    desc: "Corporates & industry partners",
    icon: PrivateSectorIcon,
  },
];

export const PartnershipsCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
      <Container size="lg">
        {/* Top: Image (Left) + Text & CTA (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 lg:mb-16">
          {/* Left Column: Meeting Image */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
              <Image
                src="/image/advisory-man presenting analytics2.png"
                alt="Building the agricultural ecosystem together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>

          {/* Right Column: Copy & Action */}
          <div className="lg:col-span-8 flex flex-col items-start lg:pl-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-green block mb-3">
              PARTNERSHIPS
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 tracking-tight leading-[1.25] mb-4">
              Building the agricultural <br className="hidden sm:inline" />
              ecosystem together.
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 max-w-2xl">
              We work with governments, financial institutions, academia, development
              partners and the private sector to extend our reach and increase impact.
            </p>

            <Link
              href="/partnerships"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a3820] hover:bg-[#062615] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm group"
            >
              <span>Partner With Light</span>
              <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom: 5 Partner Categories Strip with Dividers */}
        <div className="pt-10 border-t border-gray-100">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-100">
            {partnerCategories.map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={cat.title}
                  className={`flex flex-col items-center text-center px-4 ${
                    idx === 0 ? "lg:pl-0" : ""
                  } ${idx === partnerCategories.length - 1 ? "lg:pr-0" : ""}`}
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-brand-green flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                    {cat.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 leading-snug max-w-[160px]">
                    {cat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
