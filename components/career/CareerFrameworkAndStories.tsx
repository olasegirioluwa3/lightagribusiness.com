"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  HiPlay,
  HiCog,
  HiUsers,
  HiGlobeAlt,
  HiLightBulb,
  HiHeart,
  HiCheckCircle,
  HiX,
} from "react-icons/hi";

const frameworkPillars = [
  {
    id: "technical",
    name: "Technical Skills",
    icon: HiCog,
    cx: 200,
    cy: 70,
    description: "Deep agronomic science, biosecurity protocols, farm diagnostics, and financial feasibility modeling.",
  },
  {
    id: "leadership",
    name: "Leadership",
    icon: HiUsers,
    cx: 320,
    cy: 160,
    description: "Leading multi-disciplinary teams, managing client farm turnarounds, and executive presentation mastery.",
  },
  {
    id: "networking",
    name: "Networking",
    icon: HiGlobeAlt,
    cx: 280,
    cy: 300,
    description: "Engaging commercial aggregators, DFIs, university faculties, and institutional investor desks.",
  },
  {
    id: "innovation",
    name: "Innovation",
    icon: HiLightBulb,
    cx: 120,
    cy: 300,
    description: "Designing scalable SOPs, deploying LightAgriOS modules, and testing modern farm technologies.",
  },
  {
    id: "relations",
    name: "Client Relations",
    icon: HiHeart,
    cx: 80,
    cy: 160,
    description: "Developing trust with farm managers, owner-operators, and outgrower communities on the ground.",
  },
];

export const CareerFrameworkAndStories: React.FC = () => {
  const [activePillar, setActivePillar] = useState(frameworkPillars[0]);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  return (
    <section id="network" className="py-16 sm:py-24 bg-white border-b border-[#E8E4DA]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: OUR CAREER FRAMEWORK matching mockup */}
          <div className="lg:col-span-5 bg-[#FAF9F5] rounded-3xl p-6 sm:p-8 border border-[#E8E4DA] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32] block mb-2">
                OUR CAREER FRAMEWORK
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-3xl text-[#122216] tracking-tight leading-snug mb-3">
                OUR CAREER FRAMEWORK
              </h2>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                We develop well-rounded agribusiness leaders through 5 interconnected core competencies. Click any node to explore:
              </p>
            </div>

            {/* Circular Interactive Framework Diagram with prominent icons for each core matching mockup */}
            <div className="relative w-full aspect-square max-w-[380px] mx-auto my-3 flex items-center justify-center select-none">
              {/* Background Circular Loop Track with Clockwise Directional Flow Arrows */}
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              >
                <defs>
                  {/* Arrow marker for flow direction */}
                  <marker
                    id="flow-arrow"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#8BC34A" />
                  </marker>
                </defs>

                {/* Outer Connecting Cycle Track */}
                <circle
                  cx="200"
                  cy="200"
                  r="125"
                  fill="none"
                  stroke="#8BC34A"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity="0.5"
                />

                {/* Curved Directional Flow Paths with Arrows */}
                {/* 1 -> 2 (Technical to Leadership) */}
                <path
                  d="M 230 85 A 125 125 0 0 1 310 145"
                  fill="none"
                  stroke="#8BC34A"
                  strokeWidth="2.5"
                  markerEnd="url(#flow-arrow)"
                />
                {/* 2 -> 3 (Leadership to Networking) */}
                <path
                  d="M 322 195 A 125 125 0 0 1 292 278"
                  fill="none"
                  stroke="#8BC34A"
                  strokeWidth="2.5"
                  markerEnd="url(#flow-arrow)"
                />
                {/* 3 -> 4 (Networking to Innovation) */}
                <path
                  d="M 248 318 A 125 125 0 0 1 152 318"
                  fill="none"
                  stroke="#8BC34A"
                  strokeWidth="2.5"
                  markerEnd="url(#flow-arrow)"
                />
                {/* 4 -> 5 (Innovation to Client Relations) */}
                <path
                  d="M 108 278 A 125 125 0 0 1 78 195"
                  fill="none"
                  stroke="#8BC34A"
                  strokeWidth="2.5"
                  markerEnd="url(#flow-arrow)"
                />
                {/* 5 -> 1 (Client Relations to Technical) */}
                <path
                  d="M 90 145 A 125 125 0 0 1 170 85"
                  fill="none"
                  stroke="#8BC34A"
                  strokeWidth="2.5"
                  markerEnd="url(#flow-arrow)"
                />

                {/* Central Growth Hub */}
                <circle
                  cx="200"
                  cy="200"
                  r="52"
                  fill="#EAF3EC"
                  stroke="#8BC34A"
                  strokeWidth="1.5"
                  className="transition-all duration-300 shadow-inner"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="45"
                  fill="#FFFFFF"
                  className="transition-all duration-300"
                />
                <text
                  x="200"
                  y="194"
                  textAnchor="middle"
                  className="text-[11px] font-black fill-[#2E7D32] uppercase tracking-wider"
                >
                  Light Core
                </text>
                <text
                  x="200"
                  y="210"
                  textAnchor="middle"
                  className="text-[9px] font-bold fill-[#666666] tracking-tight"
                >
                  5 Pillars Loop
                </text>
              </svg>

              {/* 5 Core Competency Interactive Nodes with Prominent Icons */}
              {frameworkPillars.map((pillar) => {
                const Icon = pillar.icon;
                const isCurrent = activePillar.id === pillar.id;

                // Coordinates for the 5 positions matching 72° circular geometry
                const positions: Record<
                  string,
                  {
                    left: string;
                    top: string;
                    labelPosition: string;
                    labelClasses: string;
                  }
                > = {
                  technical: {
                    left: "50%",
                    top: "14%",
                    labelPosition: "top",
                    labelClasses: "bottom-full mb-1.5 left-1/2 -translate-x-1/2",
                  },
                  leadership: {
                    left: "83%",
                    top: "38%",
                    labelPosition: "right",
                    labelClasses: "left-full ml-2 top-1/2 -translate-y-1/2 text-left",
                  },
                  networking: {
                    left: "71%",
                    top: "80%",
                    labelPosition: "bottom",
                    labelClasses: "top-full mt-1.5 left-1/2 -translate-x-1/2",
                  },
                  innovation: {
                    left: "29%",
                    top: "80%",
                    labelPosition: "bottom",
                    labelClasses: "top-full mt-1.5 left-1/2 -translate-x-1/2",
                  },
                  relations: {
                    left: "17%",
                    top: "38%",
                    labelPosition: "left",
                    labelClasses: "right-full mr-2 top-1/2 -translate-y-1/2 text-right",
                  },
                };

                const pos = positions[pillar.id] || {
                  left: "50%",
                  top: "50%",
                  labelPosition: "bottom",
                  labelClasses: "top-full mt-1",
                };

                return (
                  <div
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar)}
                    style={{ left: pos.left, top: pos.top }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                  >
                    {/* Node Icon Button */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                        isCurrent
                          ? "bg-[#2E7D32] text-white ring-4 ring-[#8BC34A]/30 scale-110 shadow-lg"
                          : "bg-white text-[#2E7D32] border-2 border-[#8BC34A]/60 hover:bg-[#EAF3EC] hover:scale-105"
                      }`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Node Label Text */}
                    <div
                      className={`absolute whitespace-nowrap pointer-events-none transition-all duration-200 ${pos.labelClasses}`}
                    >
                      <span
                        className={`text-[10px] sm:text-[11px] font-sans transition-colors ${
                          isCurrent
                            ? "font-black text-[#122216] underline underline-offset-2 decoration-[#2E7D32]"
                            : "font-bold text-[#444444] group-hover:text-[#122216]"
                        }`}
                      >
                        {pillar.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Pillar Detail Box with Key Competency Highlights */}
            <div className="mt-4 bg-white rounded-2xl p-4 sm:p-5 border border-[#E5E0D5] shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#EAF3EC] text-[#2E7D32] flex items-center justify-center shrink-0">
                  <activePillar.icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E7D32] block leading-none">
                    Core Competency Focus
                  </span>
                  <h4 className="font-sans font-black text-sm text-[#122216]">
                    {activePillar.name}
                  </h4>
                </div>
              </div>
              <p className="text-xs text-[#555555] leading-relaxed mb-3">
                {activePillar.description}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-[#2E7D32] font-semibold">
                <HiCheckCircle className="w-3.5 h-3.5" />
                <span>Integrated into everyday client farm diagnostics &amp; advisory</span>
              </div>
            </div>
          </div>

          {/* RIGHT: GLOBAL IMPACT STORIES & OUR PROFESSIONAL NETWORK matching mockup */}
          <div className="lg:col-span-7 space-y-8">
            {/* Top Sub-section: GLOBAL IMPACT STORIES */}
            <div>
              <div className="mb-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32] block mb-1">
                  GLOBAL IMPACT STORIES
                </span>
                <h3 className="font-sans font-black text-xl sm:text-2xl text-[#122216] tracking-tight leading-tight">
                  GLOBAL IMPACT STORIES
                </h3>
                <p className="text-xs text-[#666666]">
                  Short video perspectives and field reports from current team members.
                </p>
              </div>

              {/* 2 Video Cards Grid matching mockup */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Story 1 */}
                <div className="bg-[#FAF9F5] border border-[#E8E4DA] rounded-2xl overflow-hidden p-3.5 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div
                    onClick={() => setActiveVideoModal("somto")}
                    className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black cursor-pointer group mb-3"
                  >
                    <Image
                      src="/image/lightagribusiness-gallery (36).jpg"
                      alt="Field agronomist inspecting greenhouse crops"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-85"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-[#122216] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <HiPlay className="w-5 h-5 ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] text-[#444444] italic leading-relaxed mb-3">
                      &ldquo;Being on the ground with commercial farms gave me practical systems insight that no textbook ever taught.&rdquo;
                    </p>
                    <div className="flex items-center gap-2.5 pt-2 border-t border-[#E8E4DA]">
                      <div className="w-7 h-7 rounded-full bg-[#2E7D32] text-white text-[10px] font-bold flex items-center justify-center">
                        SF
                      </div>
                      <div>
                        <h5 className="font-bold text-xs text-[#122216] leading-none">
                          Somto Forescta
                        </h5>
                        <span className="text-[10px] text-[#2E7D32]">
                          Field Agronomist &amp; Diagnostic Fellow
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story 2 */}
                <div className="bg-[#FAF9F5] border border-[#E8E4DA] rounded-2xl overflow-hidden p-3.5 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div
                    onClick={() => setActiveVideoModal("semona")}
                    className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black cursor-pointer group mb-3"
                  >
                    <Image
                      src="/image/middle-aged man with lighagrios tab.png"
                      alt="LightAgriOS systems lead with farm management tablet"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-85"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-[#122216] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <HiPlay className="w-5 h-5 ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] text-[#444444] italic leading-relaxed mb-3">
                      &ldquo;Building software directly connected to farmers&apos; daily realities is the most rewarding work of my career.&rdquo;
                    </p>
                    <div className="flex items-center gap-2.5 pt-2 border-t border-[#E8E4DA]">
                      <div className="w-7 h-7 rounded-full bg-[#2E7D32] text-white text-[10px] font-bold flex items-center justify-center">
                        SS
                      </div>
                      <div>
                        <h5 className="font-bold text-xs text-[#122216] leading-none">
                          Semona Sachanson
                        </h5>
                        <span className="text-[10px] text-[#2E7D32]">
                          Systems Lead &amp; LightAgriOS Architect
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Sub-section: OUR PROFESSIONAL NETWORK */}
            <div className="pt-6 border-t border-[#E8E4DA]">
              <div className="mb-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32] block mb-1">
                  OUR PROFESSIONAL NETWORK
                </span>
                <h4 className="font-sans font-black text-lg sm:text-xl text-[#122216] tracking-tight leading-tight">
                  OUR PROFESSIONAL NETWORK
                </h4>
                <p className="text-xs text-[#666666]">
                  Verified case study partners, alumni, and ecosystem leaders.
                </p>
              </div>

              {/* Alumni quote cards + Partner badges matching mockup */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5]">
                  <p className="text-[11px] text-[#555555] italic leading-relaxed mb-3">
                    &ldquo;Light equipped me with workable biosecurity SOPs that completely turned around our livestock mortalities.&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#122216] text-[#8BC34A] text-[9px] font-bold flex items-center justify-center">
                      SW
                    </div>
                    <div>
                      <span className="font-bold text-[11px] text-[#122216] block leading-none">
                        Seno Willon
                      </span>
                      <span className="text-[9px] text-[#666666]">Senior Farm Partner</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E5E0D5]">
                  <p className="text-[11px] text-[#555555] italic leading-relaxed mb-3">
                    &ldquo;Their practical frameworks survival test on real farms every week. That is what separates Light from theoretical consultants.&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#122216] text-[#8BC34A] text-[9px] font-bold flex items-center justify-center">
                      AP
                    </div>
                    <div>
                      <span className="font-bold text-[11px] text-[#122216] block leading-none">
                        Adebayo Patrick
                      </span>
                      <span className="text-[9px] text-[#666666]">Agripreneur &amp; Academy Alum</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Institutional verification logos matching mockup */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {["USDA Standard", "ResearchGate", "USCAL Network", "IDISO Advisory"].map(
                  (badge, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E4DA] text-center"
                    >
                      <span className="font-mono font-bold text-[10px] text-[#444444] tracking-wider uppercase">
                        {badge}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Video Preview Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#122218] border border-white/20 rounded-2xl max-w-lg w-full p-6 text-white relative shadow-2xl">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              <HiX className="w-5 h-5" />
            </button>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black mb-4">
              <Image
                src={
                  activeVideoModal === "somto"
                    ? "/image/lightagribusiness-gallery (36).jpg"
                    : "/image/middle-aged man with lighagrios tab.png"
                }
                alt="Perspective preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="text-xs bg-[#2E7D32] px-3 py-1.5 rounded-full font-bold">
                  Field Perspective Ready
                </span>
              </div>
            </div>
            <h4 className="font-bold text-sm mb-1">
              {activeVideoModal === "somto"
                ? "Somto Forescta — Field Diagnostic Fellow"
                : "Semona Sachanson — Systems Lead"}
            </h4>
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              Working at Light Agribusiness provides hands-on problem solving on real commercial farms across Nigeria, Kenya, and Ghana.
            </p>
            <button
              onClick={() => setActiveVideoModal(null)}
              className="w-full py-2.5 rounded-full bg-[#8BC34A] text-[#0B150F] font-bold text-xs uppercase tracking-wider"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
