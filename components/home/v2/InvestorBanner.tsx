import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

// High-fidelity SVG icons matching the framework
const DiagnosticIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v10" />
    <path d="M7 12h10" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const BusinessSystemsIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <path d="M6 9v3a3 3 0 0 0 3 3h6" />
    <circle cx="18" cy="6" r="3" />
    <path d="M18 9v3a3 3 0 0 1-3 3" />
  </svg>
);

const OperationalVisibilityIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const StructuredReportingIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M9 13h6" />
    <path d="M9 17h4" />
  </svg>
);

const CapacityDevelopmentIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TechnologyAdoptionIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3" />
    <path d="M15 1v3" />
    <path d="M9 20v3" />
    <path d="M15 20v3" />
    <path d="M20 9h3" />
    <path d="M20 14h3" />
    <path d="M1 9h3" />
    <path d="M1 14h3" />
  </svg>
);

const serviceItems = [
  { label: "Diagnostics", icon: DiagnosticIcon },
  { label: "Business Systems Assessment", icon: BusinessSystemsIcon },
  { label: "Operational Visibility", icon: OperationalVisibilityIcon },
  { label: "Structured Reporting", icon: StructuredReportingIcon },
  { label: "Capacity Development", icon: CapacityDevelopmentIcon },
  { label: "Technology Adoption", icon: TechnologyAdoptionIcon },
];

export const InvestorBanner: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#051c14] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle digital grid pattern lines behind center */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & CTA (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#86efac] block mb-3">
              FOR INVESTORS & FINANCIAL INSTITUTIONS
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-[1.25] mb-4">
              Better agribusinesses are <br className="hidden sm:inline" />
              better investments.
            </h2>

            <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-8 max-w-md">
              We help businesses{" "}
              <span className="text-emerald-400 font-medium">
                become more operationally structured,
              </span>{" "}
              knowledge and institutionally ready through{" "}
              <span className="text-emerald-400 font-medium">diagnostics,</span>{" "}
              stronger systems, capacity development and technology adoption.
            </p>

            <Link
              href="/partnerships#investors"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#c8e6b2] hover:bg-[#b8dd9f] text-[#062615] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md group"
            >
              <span>Explore Investment Readiness</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Center Column: Executive Photo with Tech Backing (lg:col-span-4) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-emerald-950/40">
              <Image
                src="/image/investor-banner-exec.jpg"
                alt="Agribusiness investment readiness analyst"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051c14]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: 6 Capabilities Checklist (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-3.5">
              {serviceItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-[#0a2c1e] border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:border-emerald-400/60 group-hover:bg-[#0e3b29] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-white/90 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
