"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

import { HiBookOpen, HiOutlineOfficeBuilding, HiDesktopComputer } from "react-icons/hi";

const pillars = [
  {
    key: "KNOWLEDGE",
    label: "KNOWLEDGE",
    sub: "Knowledge & Capacity Development",
    desc: "Build the capability of the people responsible for making decisions and implementing change.",
    accent: "#8BC34A",
    bg: "bg-[#112316]/70",
    border: "border-[#8BC34A]/25",
    Icon: HiBookOpen,
    href: "/academy",
  },
  {
    key: "ADVISORY",
    label: "ADVISORY",
    sub: "Advisory & Business Systems",
    desc: "Apply structured thinking and practical expertise to real agribusiness challenges.",
    accent: "#D4A017",
    bg: "bg-[#1C1808]/70",
    border: "border-[#D4A017]/35",
    Icon: HiOutlineOfficeBuilding,
    href: "/advisory",
  },
  {
    key: "TECHNOLOGY",
    label: "TECHNOLOGY",
    sub: "LightAgriOS Platform",
    desc: "Create greater visibility, information and operational intelligence.",
    accent: "#4EC9E1",
    bg: "bg-[#0E1E24]/70",
    border: "border-[#4EC9E1]/25",
    Icon: HiDesktopComputer,
    href: "/lightagrios",
  },
];

export const LightEcosystemSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#0D1810] text-white border-b border-[#182B1E]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: Heading + CTA */}
          <div className="lg:col-span-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8BC34A] block mb-3">
              The Light Ecosystem
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[34px] text-white leading-[1.28] mb-4">
              Knowledge + Advisory + Technology.
            </h2>
            <p className="text-sm text-white/70 leading-[1.85] mb-8">
              Better systems require more than one tool. Our approach connects the three pillars of the Light ecosystem. Together, they build capability, create visibility and turn information into better decisions.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8BC34A] hover:bg-[#7cb342] text-[#0A170F] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md group"
            >
              <span>Explore the Light Ecosystem</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: 3 Pillar Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {pillars.map((p) => {
              const Icon = p.Icon;
              return (
                <Link
                  key={p.key}
                  href={p.href}
                  className={`group ${p.bg} ${p.border} border rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl`}
                >
                  <div>
                    <Icon className="w-8 h-8" style={{ color: p.accent }} />
                  </div>
                  <div>
                    <span
                      className="text-xs font-black uppercase tracking-wider block mb-1"
                      style={{ color: p.accent }}
                    >
                      {p.label}
                    </span>
                    <p className="text-[11px] font-medium text-white/50 mb-3">{p.sub}</p>
                    <p className="text-[12px] text-white/75 leading-relaxed">{p.desc}</p>
                  </div>
                  <div
                    className="flex items-center gap-1.5 text-[11px] font-bold mt-auto transition-colors"
                    style={{ color: p.accent }}
                  >
                    Learn more <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};
