"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";
import {
  HiUserGroup,
  HiTrendingUp,
  HiGlobeAlt,
  HiShoppingCart,
  HiDesktopComputer,
  HiSparkles,
} from "react-icons/hi";

/* ──────────────────────────────────────────────────
   SVG diagram: 6 pillars around a center node.
   ViewBox 400 × 400, center (200,200), radius 145.
   Angles: People −90°, Production −30°, Soil 30°,
           Markets 90°, Technology 150°, Environment −150°
────────────────────────────────────────────────── */
const CX = 200;
const CY = 200;
const R = 145;
const toRad = (deg: number) => (deg * Math.PI) / 180;

const pillars = [
  { label: "People",      angle: -90,  Icon: HiUserGroup,       color: "#8BC34A" },
  { label: "Production",  angle: -30,  Icon: HiTrendingUp,      color: "#C69214" },
  { label: "Soil",        angle:  30,  Icon: HiSparkles,        color: "#8BC34A" },
  { label: "Markets",     angle:  90,  Icon: HiShoppingCart,    color: "#C69214" },
  { label: "Technology",  angle: 150,  Icon: HiDesktopComputer, color: "#8BC34A" },
  { label: "Environment", angle: -150, Icon: HiGlobeAlt,        color: "#C69214" },
];

const NodePoint = ({
  cx,
  cy,
  label,
  Icon,
  color,
}: {
  cx: number;
  cy: number;
  label: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}) => {
  return (
    <g>
      {/* Outer glow ring */}
      <circle cx={cx} cy={cy} r="28" fill={color} fillOpacity="0.12" />
      {/* Main node circle */}
      <circle
        cx={cx}
        cy={cy}
        r="22"
        fill="#122A18"
        stroke={color}
        strokeWidth="1.8"
      />
      {/* Render icon via foreignObject */}
      <foreignObject
        x={cx - 12}
        y={cy - 12}
        width="24"
        height="24"
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </foreignObject>
      {/* Label — positioned outside the node away from centre */}
      <text
        x={cx}
        y={cy + 38}
        textAnchor="middle"
        fill="rgba(255,255,255,0.85)"
        fontSize="11"
        fontWeight="700"
        fontFamily="sans-serif"
        letterSpacing="0.5"
      >
        {label}
      </text>
    </g>
  );
};

export const SevenPillarFramework: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#0B1A10] text-white relative overflow-hidden border-b border-[#182B1E]">
      {/* Background farm image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/lightagribusiness-gallery (13).jpg"
          alt="Agricultural systems framework"
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-[#0B1A10]/75" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1F5C3F]/20 rounded-full blur-[100px] pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8BC34A] block mb-3">
              Our 7-Pillar Framework™
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[36px] text-white leading-[1.28] mb-5">
              A systems lens for stronger agribusinesses.
            </h2>
            <p className="text-sm text-white/70 leading-[1.85] mb-8">
              We look beyond isolated symptoms. Our 7-pillar framework helps us understand how different parts of an agribusiness interact — so we can build solutions that last.
            </p>
            <Link
              href="/advisory"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8BC34A] hover:bg-[#7cb342] text-[#0B1A10] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md group"
            >
              <span>Learn More</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ── Right: SVG Circular Diagram ── */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="w-full max-w-[420px] aspect-square">
              <svg
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Outer dashed orbit ring */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={R}
                  fill="none"
                  stroke="rgba(139,195,74,0.2)"
                  strokeWidth="1.5"
                  strokeDasharray="6 5"
                />
                {/* Inner subtle ring */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={R - 30}
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />

                {/* Spoke lines: center → each pillar node */}
                {pillars.map((p) => {
                  const nx = CX + R * Math.cos(toRad(p.angle));
                  const ny = CY + R * Math.sin(toRad(p.angle));
                  return (
                    <line
                      key={p.label + "-line"}
                      x1={CX}
                      y1={CY}
                      x2={nx}
                      y2={ny}
                      stroke={p.color}
                      strokeWidth="1.2"
                      strokeOpacity="0.35"
                      strokeDasharray="4 3"
                    />
                  );
                })}

                {/* Center node */}
                <circle
                  cx={CX}
                  cy={CY}
                  r="52"
                  fill="#1F5C3F"
                  stroke="#8BC34A"
                  strokeWidth="1.8"
                  strokeOpacity="0.5"
                />
                <circle cx={CX} cy={CY} r="52" fill="url(#centerGrad)" />
                <defs>
                  <radialGradient id="centerGrad" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#2D7A52" />
                    <stop offset="100%" stopColor="#1A4A30" />
                  </radialGradient>
                </defs>
                <text
                  x={CX}
                  y={CY - 10}
                  textAnchor="middle"
                  fill="white"
                  fontSize="9.5"
                  fontWeight="800"
                  fontFamily="sans-serif"
                  letterSpacing="0.3"
                >
                  Better
                </text>
                <text
                  x={CX}
                  y={CY + 3}
                  textAnchor="middle"
                  fill="white"
                  fontSize="9.5"
                  fontWeight="800"
                  fontFamily="sans-serif"
                  letterSpacing="0.3"
                >
                  Agribusiness
                </text>
                <text
                  x={CX}
                  y={CY + 16}
                  textAnchor="middle"
                  fill="white"
                  fontSize="9.5"
                  fontWeight="800"
                  fontFamily="sans-serif"
                  letterSpacing="0.3"
                >
                  Performance
                </text>

                {/* Outer pillar nodes */}
                {pillars.map((p) => {
                  const nx = CX + R * Math.cos(toRad(p.angle));
                  const ny = CY + R * Math.sin(toRad(p.angle));
                  return (
                    <NodePoint
                      key={p.label}
                      cx={nx}
                      cy={ny}
                      label={p.label}
                      Icon={p.Icon}
                      color={p.color}
                    />
                  );
                })}
              </svg>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
