import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HiArrowRight } from "react-icons/hi";

/* ── Inline SVG icons — identical to ValuePropsStrip ── */
const LightbulbIcon: React.FC<{ className?: string }> = ({
  className = "w-7 h-7 sm:w-8 sm:h-8",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
    <path d="M10 9h4" />
  </svg>
);

const SystemsGearsIcon: React.FC<{ className?: string }> = ({
  className = "w-7 h-7 sm:w-8 sm:h-8",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="7" r="2.2" />
    <path d="M12 3.5v1M12 9.5v1M8.5 7h1M14.5 7h1M9.5 4.5l.7.7M13.8 8.8l.7.7M9.5 9.5l.7-.7M13.8 5.2l.7-.7" />
    <circle cx="7.5" cy="15.5" r="2.2" />
    <path d="M7.5 12v1M7.5 18v1M4 15.5h1M10 15.5h1M5 13l.7.7M9.3 17.3l.7.7M5 18l.7-.7M9.3 13.7l.7-.7" />
    <circle cx="16.5" cy="15.5" r="2.2" />
    <path d="M16.5 12v1M16.5 18v1M13 15.5h1M19 15.5h1M14 13l.7.7M18.3 17.3l.7.7M14 18l.7-.7M18.3 13.7l.7-.7" />
  </svg>
);

const DataChartIcon: React.FC<{ className?: string }> = ({
  className = "w-7 h-7 sm:w-8 sm:h-8",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 20h18" />
    <rect x="5" y="13" width="3" height="7" rx="0.5" />
    <rect x="11" y="9" width="3" height="11" rx="0.5" />
    <rect x="17" y="5" width="3" height="15" rx="0.5" />
    <path d="M5 10l5-4 4 3 6-5" />
    <polyline points="16 4 20 4 20 8" />
  </svg>
);

const AfricaMapIcon: React.FC<{ className?: string }> = ({
  className = "w-7 h-7 sm:w-8 sm:h-8",
}) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    <path d="M35 15 C45 14 62 16 68 20 C72 23 70 28 65 30 C69 33 78 35 84 41 C86 44 80 47 74 50 C71 54 69 60 66 66 C62 73 57 82 52 88 C48 88 47 84 45 78 C42 70 38 64 36 56 C34 52 30 50 25 49 C18 48 12 43 12 36 C12 30 18 27 25 25 C29 24 31 18 35 15 Z" />
    <path d="M75 62 C78 62 79 66 77 72 C75 76 72 79 70 79 C69 79 71 73 73 68 C74 65 74 62 75 62 Z" />
  </svg>
);

const reasons = [
  {
    label: "Practical",
    body: "Solutions that people can actually implement.",
    Icon: LightbulbIcon,
  },
  {
    label: "Systems-led",
    body: "Look beyond individual problems to the systems creating them.",
    Icon: SystemsGearsIcon,
  },
  {
    label: "Data-Informed",
    body: "Better decisions with better information — from analytics to benchmarks.",
    Icon: DataChartIcon,
  },
  {
    label: "Built for Africa",
    body: "Designed for local agricultural challenges and realities.",
    Icon: AfricaMapIcon,
  },
];

export const WhyLight: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-18 lg:py-20 overflow-hidden">
      {/* Dark agricultural photo background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/lightagribusiness-gallery (38).jpg"
          alt="Agricultural background"
          fill
          className="object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-[#0B1D14]/95" />
      </div>

      <Container size="lg" className="relative z-10">

        {/* Top: Left copy + Right image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Eyebrow + Headline + Description + CTA */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block">
              Why Light?
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-[1.25]">
              More than a consultancy.
              <span className="block mt-1 text-brand-green">A systems partner.</span>
            </h2>
            <p className="text-sm sm:text-[15px] text-white/70 leading-relaxed">
              We combine agricultural expertise, business systems experience,
              and technology to help you understand your situation, make better
              decisions and achieve sustainable growth.
            </p>
            <Button
              href="/about"
              variant="primary"
              size="md"
              className="group bg-brand-green hover:bg-brand-green-light text-white font-semibold flex items-center gap-2 w-fit"
            >
              <span>Get to Know Our Approach</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right: Feature image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-2xl shadow-black/40">
              <Image
                src="/image/advisory-man presenting analytics2.png"
                alt="Light Agribusiness advisory consultancy in action"
                fill
                className="object-cover"
              />
              {/* Subtle green tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 via-transparent to-[#0B1D14]/40" />
            </div>
            {/* Floating stat badge */}
            <div className="absolute -bottom-4 -left-4 bg-brand-gold text-white px-4 py-3 rounded-xl shadow-lg hidden sm:block">
              <p className="text-xs font-bold uppercase tracking-wider opacity-80">Systems Partner</p>
              <p className="text-sm font-serif font-bold mt-0.5">Clarity. Systems. Growth.</p>
            </div>
          </div>
        </div>

        {/* Bottom: 4-column horizontal strip — same pattern as ValuePropsStrip */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t-2 border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {reasons.map((item, index) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-start gap-4 sm:gap-5 group ${
                    index !== 0 ? "lg:border-l-2 lg:border-white/10 lg:pl-8" : ""
                  } ${index !== reasons.length - 1 ? "lg:pr-8" : ""}`}
                >
                  {/* Icon Circle Badge */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-green/15 border border-brand-green/25 flex items-center justify-center flex-shrink-0 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Text */}
                  <div className="pt-1">
                    <h3 className="font-bold text-base sm:text-lg text-white leading-snug group-hover:text-brand-gold transition-colors duration-200">
                      {item.label}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-white/60 leading-relaxed mt-1">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </Container>
    </section>
  );
};
