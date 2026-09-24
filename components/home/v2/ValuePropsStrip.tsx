import React from "react";
import { Container } from "@/components/ui/Container";

// Exact iconography matching the framework - bolder & larger
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
    {/* Top gear */}
    <circle cx="12" cy="7" r="2.2" />
    <path d="M12 3.5v1M12 9.5v1M8.5 7h1M14.5 7h1M9.5 4.5l.7.7M13.8 8.8l.7.7M9.5 9.5l.7-.7M13.8 5.2l.7-.7" />
    {/* Bottom Left gear */}
    <circle cx="7.5" cy="15.5" r="2.2" />
    <path d="M7.5 12v1M7.5 18v1M4 15.5h1M10 15.5h1M5 13l.7.7M9.3 17.3l.7.7M5 18l.7-.7M9.3 13.7l.7-.7" />
    {/* Bottom Right gear */}
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
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
  >
    {/* African continent contour */}
    <path d="M35 15 C45 14 62 16 68 20 C72 23 70 28 65 30 C69 33 78 35 84 41 C86 44 80 47 74 50 C71 54 69 60 66 66 C62 73 57 82 52 88 C48 88 47 84 45 78 C42 70 38 64 36 56 C34 52 30 50 25 49 C18 48 12 43 12 36 C12 30 18 27 25 25 C29 24 31 18 35 15 Z" />
    {/* Madagascar */}
    <path d="M75 62 C78 62 79 66 77 72 C75 76 72 79 70 79 C69 79 71 73 73 68 C74 65 74 62 75 62 Z" />
  </svg>
);

interface ValuePropItem {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const valueProps: ValuePropItem[] = [
  {
    icon: LightbulbIcon,
    title: "Practical",
    description: "Solutions people can actually implement.",
  },
  {
    icon: SystemsGearsIcon,
    title: "Systems-led",
    description: "Look beyond individual problems to the systems creating them.",
  },
  {
    icon: DataChartIcon,
    title: "Data-informed",
    description: "Use information, diagnostics and technology to improve decisions.",
  },
  {
    icon: AfricaMapIcon,
    title: "Built for Africa",
    description: "Solutions designed around the realities of African agriculture.",
  },
];

export const ValuePropsStrip: React.FC = () => {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-20 border-b-2 border-gray-200">
      <Container size="lg">
        {/* Top Header Block: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start lg:items-end">
          {/* Left: Eyebrow + Headline */}
          <div className="lg:col-span-7">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-2.5">
              Practical Illumination
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 tracking-tight leading-[1.25]">
              We don&apos;t just tell you what to do.
              <span className="block mt-1 sm:mt-1.5">
                We help you see what matters.
              </span>
            </h2>
          </div>

          {/* Right: Explanatory Subtext */}
          <div className="lg:col-span-5 lg:pb-1">
            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed max-w-xl">
              We simplify complex challenges, provide practical solutions, and
              leave something useful behind &mdash; from every training,
              consultation and partnership.
            </p>
          </div>
        </div>

        {/* Bottom: 4 Value Props Row with thicker dividing lines */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t-2 border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {valueProps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 sm:gap-5 group ${
                    index !== 0 ? "lg:border-l-2 lg:border-gray-200 lg:pl-8" : ""
                  } ${index !== valueProps.length - 1 ? "lg:pr-8" : ""}`}
                >
                  {/* Icon Circle Badge - Prominent & Generous */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EBF3EC] flex items-center justify-center flex-shrink-0 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Text Details */}
                  <div className="pt-1">
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 leading-snug group-hover:text-brand-green transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-gray-600 leading-relaxed mt-1">
                      {item.description}
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

