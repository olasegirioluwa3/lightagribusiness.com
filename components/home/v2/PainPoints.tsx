import React from "react";
import { Container } from "@/components/ui/Container";

// Exact vector iconography matching the framework
const ProfitChartIcon: React.FC<{ className?: string }> = ({
  className = "w-7 h-7",
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
    <path d="M3 3v18h18" />
    <rect x="7" y="12" width="3" height="6" rx="0.5" />
    <rect x="13" y="9" width="3" height="9" rx="0.5" />
    <rect x="19" y="5" width="3" height="13" rx="0.5" />
    <path d="M7 11l5-4 5 3 4-4" />
  </svg>
);

const DataInfoIcon: React.FC<{ className?: string }> = ({
  className = "w-7 h-7",
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
    <ellipse cx="12" cy="5" rx="8" ry="2.5" />
    <path d="M4 5v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" />
    <path d="M4 11v6c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-6" />
    <path d="M12 9v4" />
  </svg>
);

const InvestmentIcon: React.FC<{ className?: string }> = ({
  className = "w-7 h-7",
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
    <circle cx="12" cy="5" r="3" />
    <path d="M12 8v13" />
    <path d="M7 16c2.5-1.5 5-1.5 5 0" />
    <path d="M12 16c0-1.5 2.5-1.5 5 0" />
    <path d="M5 21h14" />
  </svg>
);

const TeamStructureIcon: React.FC<{ className?: string }> = ({
  className = "w-7 h-7",
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
    <circle cx="12" cy="6" r="3" />
    <circle cx="5" cy="17" r="2.5" />
    <circle cx="19" cy="17" r="2.5" />
    <path d="M12 9v3" />
    <path d="M12 12L7 15" />
    <path d="M12 12l5 3" />
    <path d="M9.5 9.5a5 5 0 0 0-5 5" />
    <path d="M14.5 9.5a5 5 0 0 1 5 5" />
  </svg>
);

const AccountabilityShieldIcon: React.FC<{ className?: string }> = ({
  className = "w-7 h-7",
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
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const PracticalCapacityIcon: React.FC<{ className?: string }> = ({
  className = "w-7 h-7",
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
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
  </svg>
);

const painPoints = [
  {
    icon: ProfitChartIcon,
    text: "We are producing, but profitability is still unclear.",
  },
  {
    icon: DataInfoIcon,
    text: "Our farm has data, but we don't have useful information.",
  },
  {
    icon: InvestmentIcon,
    text: "We want investment, but our business isn't investment-ready.",
  },
  {
    icon: TeamStructureIcon,
    text: "Our operations depend too heavily on individuals.",
  },
  {
    icon: AccountabilityShieldIcon,
    text: "We need better systems and accountability.",
  },
  {
    icon: PracticalCapacityIcon,
    text: "Our team needs practical capacity, not another theoretical workshop.",
  },
];

export const PainPoints: React.FC = () => {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-20 border-b-2 border-gray-200">
      <Container size="lg">
        {/* Header Block: Leftfully Aligned */}
        <div className="text-left">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-green block mb-2.5">
            What We Help You Solve
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 tracking-tight leading-tight">
            What is holding your agribusiness back?
          </h2>
        </div>

        {/* 6-Column Strip with Thicker Dividing Lines */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t-2 border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-0">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-start group ${
                    index !== 0
                      ? "lg:border-l-2 lg:border-gray-200 lg:pl-6"
                      : ""
                  } ${index !== painPoints.length - 1 ? "lg:pr-6" : ""}`}
                >
                  {/* Circular Sage Badge */}
                  <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#EBF3EC] flex items-center justify-center flex-shrink-0 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-sm mb-4 sm:mb-5">
                    <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Pain Point Statement */}
                  <p className="text-[13px] sm:text-[13.5px] font-medium text-gray-800 leading-snug group-hover:text-gray-900 transition-colors text-left">
                    {point.text}
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
