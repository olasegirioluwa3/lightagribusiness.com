import React from "react";
import { Container } from "@/components/ui/Container";
import {
  HiLightBulb,
  HiBookOpen,
  HiShare,
  HiShieldCheck,
  HiUsers,
  HiTrendingUp,
} from "react-icons/hi";

const principles = [
  {
    icon: HiLightBulb,
    title: "Clarity",
    subtitle: "before complexity.",
  },
  {
    icon: HiBookOpen,
    title: "Practice",
    subtitle: "before theory.",
  },
  {
    icon: HiShare,
    title: "Systems",
    subtitle: "before symptoms.",
  },
  {
    icon: HiShieldCheck,
    title: "Evidence",
    subtitle: "before hype.",
  },
  {
    icon: HiUsers,
    title: "Technology",
    subtitle: "in service of people.",
  },
  {
    icon: HiTrendingUp,
    title: "Continuous",
    subtitle: "improvement.",
  },
];

export const AboutBeliefs: React.FC = () => {
  return (
    <section className="bg-white py-14 lg:py-16">
      <Container size="lg">
        {/* Header */}
        <div className="mb-10">
          <span className="block mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#1F5C3F]">
            What We Believe
          </span>

          <h2 className="text-3xl lg:text-[42px] font-bold leading-tight text-[#0D2A1E]">
            Our principles guide everything we do.
          </h2>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-b border-[#E3EAE5]">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`
                  flex flex-col items-center text-center py-8 px-4
                  ${index !== principles.length - 1 ? "lg:border-r border-[#E3EAE5]" : ""}
                `}
              >
                <Icon className="w-8 h-8 text-[#1F5C3F] mb-4" />

                <h3 className="text-sm font-semibold text-[#0D2A1E]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#53625B] leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};