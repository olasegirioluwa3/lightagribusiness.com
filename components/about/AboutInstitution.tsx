import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  HiAcademicCap,
  HiOfficeBuilding,
  HiChip,
  HiChartBar,
  HiUsers,
  HiShieldCheck,
  HiDatabase,
  HiSparkles,
} from "react-icons/hi";

const capabilitiesLeft = [
  {
    icon: HiOfficeBuilding,
    title: "Advisory",
  },
  {
    icon: HiAcademicCap,
    title: "Professional development",
  },
  {
    icon: HiShieldCheck,
    title: "Certification",
  },
  {
    icon: HiUsers,
    title: "Research",
  },
];

const capabilitiesRight = [
  {
    icon: HiChip,
    title: "Technology",
  },
  {
    icon: HiDatabase,
    title: "Data",
  },
  {
    icon: HiUsers,
    title: "Partnerships",
  },
  {
    icon: HiSparkles,
    title: "Investment readiness",
  },
];

export const AboutInstitution = () => {
  return (
    <section className="bg-gradient-to-r from-[#032619] via-[#063624] to-[#032619] text-white">
      <Container size="lg">
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr] gap-12 py-14">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#A4D8AE] font-semibold mb-3">
              From Consultancy To Institution
            </p>

            <h2 className="text-4xl font-bold leading-tight mb-5">
              Building an ecosystem
              <br />
              for long-term impact.
            </h2>

            <p className="text-white/80 leading-relaxed mb-8">
              Our ambition extends beyond individual consulting
              engagements. We are developing a comprehensive
              ecosystem to support agribusinesses and professionals
              across Nigeria and eventually across Africa.
            </p>

            <Link
              href="/our-vision"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A6D85D] text-[#143020] font-semibold text-sm"
            >
              Our Vision →
            </Link>
          </div>

          {/* MIDDLE */}
          <div className="space-y-5">
            {capabilitiesLeft.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4"
                >
                  <Icon className="w-5 h-5 text-[#A6D85D]" />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>

          {/* RIGHT */}
          <div className="space-y-5 lg:border-l lg:border-white/15 lg:pl-10">
            {capabilitiesRight.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4"
                >
                  <Icon className="w-5 h-5 text-[#A6D85D]" />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};