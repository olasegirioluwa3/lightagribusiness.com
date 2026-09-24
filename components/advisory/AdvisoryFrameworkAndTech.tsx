"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  HiArrowRight,
  HiGlobeAlt,
  HiCog,
  HiUsers,
  HiSparkles,
  HiShieldCheck,
  HiCurrencyDollar,
  HiDatabase,
} from "react-icons/hi";

const sevenPillars = [
  { id: "environment", name: "Environment", icon: HiGlobeAlt, cx: 200, cy: 60, desc: "Agro-ecological conditions, biosecurity & climate resilience" },
  { id: "technology", name: "Technology", icon: HiCog, cx: 310, cy: 110, desc: "Digital farm management with LightAgriOS & precision tools" },
  { id: "people", name: "People", icon: HiUsers, cx: 330, cy: 230, desc: "Middle management supervision, farm labor SOPs & accountability" },
  { id: "production", name: "Production", icon: HiSparkles, cx: 270, cy: 330, desc: "Crop cycles, livestock mortality control & feed conversion" },
  { id: "soil", name: "Soil & Inputs", icon: HiDatabase, cx: 130, cy: 330, desc: "Nutrient balancing, soil health analysis & input optimization" },
  { id: "finance", name: "Finance", icon: HiCurrencyDollar, cx: 70, cy: 230, desc: "Forensic unit economics, margin transparency & cashflow control" },
  { id: "governance", name: "Governance", icon: HiShieldCheck, cx: 90, cy: 110, desc: "Ownership structures, board oversight & investor readiness" },
];

export const AdvisoryFrameworkAndTech: React.FC = () => {
  const [activePillar, setActivePillar] = useState(sevenPillars[0]);

  return (
    <section className="py-16 sm:py-24 bg-[#0A160E] text-white overflow-hidden">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: The Light 7-Pillar Framework™ matching mockup */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8BC34A] block mb-2">
                THE LIGHT 7-PILLAR FRAMEWORK™
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-tight mb-3">
                A systems lens for sustainable performance.
              </h2>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-xl">
                We look beyond isolated problems. Our 7-pillar framework helps us understand how different parts of an agribusiness interact — so we can build solutions that last.
              </p>
            </div>

            {/* Circular 7-Pillar SVG Interactive Diagram matching mockup */}
            <div className="relative w-full aspect-square max-w-[420px] mx-auto my-4 flex items-center justify-center select-none">
              <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
                {/* Outer Ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="none"
                  stroke="#8BC34A"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                  opacity="0.35"
                />

                {/* Connecting Lines from Center to each of the 7 Pillars */}
                {sevenPillars.map((p) => (
                  <line
                    key={`line-${p.id}`}
                    x1="200"
                    y1="200"
                    x2={p.cx}
                    y2={p.cy}
                    stroke={activePillar.id === p.id ? "#8BC34A" : "rgba(255,255,255,0.15)"}
                    strokeWidth={activePillar.id === p.id ? "2" : "1"}
                  />
                ))}

                {/* Central Hub: Better Agribusiness Performance */}
                <circle
                  cx="200"
                  cy="200"
                  r="56"
                  fill="#122218"
                  stroke="#8BC34A"
                  strokeWidth="2.5"
                  className="shadow-2xl"
                />
                <text
                  x="200"
                  y="190"
                  textAnchor="middle"
                  className="text-[10px] font-bold fill-white/80"
                >
                  Better
                </text>
                <text
                  x="200"
                  y="204"
                  textAnchor="middle"
                  className="text-[10px] font-black fill-[#8BC34A] uppercase"
                >
                  Agribusiness
                </text>
                <text
                  x="200"
                  y="218"
                  textAnchor="middle"
                  className="text-[10px] font-bold fill-white/80"
                >
                  Performance
                </text>

                {/* 7 Outer Pillar Nodes */}
                {sevenPillars.map((p) => {
                  const isCurrent = activePillar.id === p.id;
                  const Icon = p.icon;
                  return (
                    <g
                      key={p.id}
                      onClick={() => setActivePillar(p)}
                      className="cursor-pointer group"
                    >
                      <circle
                        cx={p.cx}
                        cy={p.cy}
                        r={isCurrent ? "24" : "19"}
                        fill={isCurrent ? "#8BC34A" : "#122218"}
                        stroke={isCurrent ? "#FFFFFF" : "#8BC34A"}
                        strokeWidth="2"
                        className="transition-all duration-300 group-hover:scale-110"
                      />
                      {/* Icon rendering using foreignObject */}
                      <foreignObject
                        x={p.cx - (isCurrent ? 12 : 9)}
                        y={p.cy - (isCurrent ? 12 : 9)}
                        width={isCurrent ? 24 : 18}
                        height={isCurrent ? 24 : 18}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <Icon 
                            className={`w-full h-full transition-colors ${
                              isCurrent ? "text-[#0A160E]" : "text-[#8BC34A]"
                            }`}
                          />
                        </div>
                      </foreignObject>
                      <text
                        x={p.cx}
                        y={p.cy + (p.cy > 200 ? 32 : -28)}
                        textAnchor="middle"
                        className={`text-[10px] transition-colors ${
                          isCurrent
                            ? "fill-white font-black"
                            : "fill-white/70 group-hover:fill-white font-medium"
                        }`}
                      >
                        {p.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Active Pillar Details Card */}
            <div className="bg-[#122218] rounded-xl p-4 border border-white/10 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#8BC34A] block">
                  Active Framework Pillar
                </span>
                <h4 className="font-bold text-sm text-white">{activePillar.name}</h4>
                <p className="text-xs text-white/70 mt-0.5">{activePillar.desc}</p>
              </div>
              <Link
                href="/approach"
                className="shrink-0 px-4 py-2 rounded-full bg-[#8BC34A] text-[#0A160E] font-bold text-[11px] uppercase tracking-wider"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Column: CONNECTING ADVISORY & TECHNOLOGY matching mockup */}
          <div className="lg:col-span-5 bg-[#122218] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8BC34A] block">
                CONNECTING ADVISORY &amp; TECHNOLOGY
              </span>
              <h3 className="text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                Advisory identifies the problem. Technology helps sustain the solution.
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Our advisory work is complemented by LightAgriOS, giving you visibility, insights and real-time operational data to support better decisions.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/lightagrios"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white font-bold text-xs uppercase tracking-wider transition-all duration-200 group"
              >
                <span>Explore LightAgriOS</span>
                <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
