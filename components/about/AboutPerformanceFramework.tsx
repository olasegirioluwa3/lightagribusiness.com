import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  HiUsers,
  HiSparkles,
  HiDatabase,
  HiCurrencyDollar,
  HiChip,
  HiShieldCheck,
} from "react-icons/hi";

const pillars = [
  {
    icon: HiUsers,
    title: "People",
  },
  {
    icon: HiSparkles,
    title: "Production",
  },
  {
    icon: HiDatabase,
    title: "Soil",
  },
  {
    icon: HiCurrencyDollar,
    title: "Finance",
  },
  {
    icon: HiChip,
    title: "Technology",
  },
  {
    icon: HiShieldCheck,
    title: "Environment",
  },
];

export const AboutPerformanceFramework = () => {
  return (
    <section className="bg-white border-t border-[#E4EBE6]">
      <Container size="lg">
        <div className="grid lg:grid-cols-[1fr_480px] items-center">

          {/* LEFT */}
          <div className="py-12 pr-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F7D5D] mb-3">
              Our View of Agribusiness Performance
            </p>

            <h2 className="text-[34px] font-bold text-[#0F2A1D] leading-tight mb-3">
              The Light 7-Pillar Farm
              <br />
              Performance Framework™
            </h2>

            <p className="text-[#5E6A64] text-[15px] mb-10">
              We look at seven interconnected areas —
              not in isolation, but in how they work together.
            </p>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.title}
                    className="flex flex-col items-center text-center"
                  >
                    <Icon className="w-8 h-8 text-[#356A49]" />

                    <span className="mt-3 text-sm font-medium text-[#1D3328]">
                      {pillar.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[300px] overflow-hidden">
            <Image
              src="/image/farmer observing a farm.jpg"
              alt="Performance Framework"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />

            <div className="absolute right-8 top-1/2 -translate-y-1/2">
              <div className="w-40 h-40 rounded-full border-2 border-[#4DA35B]/50 bg-[#0E412A]/75 backdrop-blur-sm flex items-center justify-center">
                <p className="text-center text-white font-semibold leading-relaxed">
                  Stronger
                  <br />
                  Systems.
                  <br />
                  Greater
                  <br />
                  Impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};