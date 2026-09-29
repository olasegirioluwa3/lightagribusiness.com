"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  HiAcademicCap,
  HiOfficeBuilding,
  HiChip,
  HiUsers,
  HiShieldCheck,
  HiDatabase,
  HiSparkles,
  HiX,
} from "react-icons/hi";

const statements = {
  vision: {
    title: "Our Vision",
    content:
      "To become Africa's most trusted institution for agribusiness knowledge, business transformation, operational excellence, and technology-enabled agricultural development.",
  },
  mission: {
    title: "Our Mission",
    content:
      "Light Agribusiness Consultancy Limited builds capable people, resilient agribusinesses, and adopted technology across Africa — through practical training, hands-on advisory and systems design, and the continued development of LightAgriOS — so that agriculture becomes more professional, more investable, and more sustainable, one organization and one learner at a time.",
  },
};

const statementImages = {
  vision: "/image/Tech is transforming agriculture for a greener future.jpg",
  mission:
    "/image/pillar1 - female instructor advising many farmers in a farm.png",
  values: "/image/pillar1- farmer explaining to a student in a farm.png",
};

const coreValues = [
  {
    value: "Practical Excellence",
    meaning:
      "We do not publish, teach, or advise on anything we would not confidently apply ourselves. Good enough to use beats impressive to read.",
    foldsIn: "Practical Knowledge, Excellence, Professionalism",
  },
  {
    value: "Integrity & Stewardship",
    meaning:
      "We tell clients the truth even when it costs us the engagement. We treat land, capital, and trust as things we are stewarding, not exploiting.",
    foldsIn: "Integrity, Stewardship, Service",
  },
  {
    value: "Systems Thinking",
    meaning:
      "We look for the underlying process, not just the immediate symptom. We build things that keep working after we leave the room.",
    foldsIn: "Systems Thinking, Continuous Learning",
  },
  {
    value: "Innovation with Purpose",
    meaning:
      "We adopt new tools and methods because they solve a real problem for a real user, not to appear cutting-edge.",
    foldsIn: "Innovation, Leadership",
  },
  {
    value: "Collaborative Transformation",
    meaning:
      "We measure our success by the growth of the people and organizations we work with, not by how indispensable we make ourselves.",
    foldsIn: "Collaboration, Impact, Transformation, Sustainability",
  },
];

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
  const [activeStatement, setActiveStatement] = useState<
    "vision" | "mission" | "values" | null
  >(null);

  useEffect(() => {
    if (!activeStatement) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveStatement(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeStatement]);

  return (
    <section className="bg-gradient-to-r from-[#032619] via-[#063624] to-[#032619] text-white">
      <Container size="lg">
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr] gap-12 py-14">
          {/* LEFT CONTENT */}
          <div className="about-text-fade-in">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#A4D8AE] font-semibold mb-3">
              From Consultancy To Institution
            </p>

            <h2 className="mb-5 text-4xl font-bold leading-tight text-white">
              Building an ecosystem
              <br />
              for long-term impact.
            </h2>

            <p className="text-white/80 leading-relaxed mb-8">
              Our ambition extends beyond individual consulting engagements. We
              are developing a comprehensive ecosystem to support agribusinesses
              and professionals across Nigeria and eventually across Africa.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setActiveStatement("vision")}
                className="inline-flex items-center gap-2 rounded-full bg-[#A6D85D] px-5 py-3 text-sm font-semibold text-[#143020] transition-colors hover:bg-[#b8e675] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6D85D]"
              >
                Our Vision
              </button>
              <button
                type="button"
                onClick={() => setActiveStatement("mission")}
                className="inline-flex items-center rounded-full border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6D85D]"
              >
                Our Mission
              </button>
              <button
                type="button"
                onClick={() => setActiveStatement("values")}
                className="inline-flex items-center rounded-full border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A6D85D]"
              >
                Our Core Values
              </button>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="space-y-5">
            {capabilitiesLeft.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-4">
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
                <div key={item.title} className="flex items-center gap-4">
                  <Icon className="w-5 h-5 text-[#A6D85D]" />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {activeStatement && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveStatement(null);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="institution-dialog-title"
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[28px] border border-[#E2DCCF] bg-[#FAF8F3] text-[#222222] shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
          >
            <div className="relative h-[240px] overflow-hidden rounded-t-[28px] sm:h-[300px]">
              <Image
                src={statementImages[activeStatement]}
                alt=""
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08150F] via-[#08150F]/70 to-transparent" />
              <button
                type="button"
                aria-label="Close dialog"
                onClick={() => setActiveStatement(null)}
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8BC34A]"
              >
                <HiX aria-hidden="true" className="h-5 w-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center rounded-full border border-[#8BC34A]/30 bg-[#101b15]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8BC34A]">
                  {activeStatement === "values"
                    ? "Core Principles"
                    : "Institutional Direction"}
                </span>
                <h2
                  id="institution-dialog-title"
                  className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl"
                >
                  {activeStatement === "values"
                    ? "The Five Load-Bearing Values"
                    : statements[activeStatement].title}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 border-b border-[#E2DCCF] bg-white px-6 py-5 md:grid-cols-4 sm:px-8">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#7D7D7D]">
                  Type
                </p>
                <p className="font-semibold text-[#222222]">
                  {activeStatement === "vision"
                    ? "Vision"
                    : activeStatement === "mission"
                      ? "Mission"
                      : "Core Values"}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#7D7D7D]">
                  Institution
                </p>
                <p className="font-semibold text-[#222222]">
                  Light Agribusiness
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#7D7D7D]">
                  Coverage
                </p>
                <p className="font-semibold text-[#222222]">Pan-Africa</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#7D7D7D]">
                  Status
                </p>
                <p className="font-semibold text-[#1F5C3F]">Active</p>
              </div>
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              <div className="mb-8">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#1F5C3F]">
                  Executive Summary
                </h3>
                <p className="leading-relaxed text-[#5A5A5A]">
                  {activeStatement === "vision"
                    ? "Our long-term aspiration and institutional destination."
                    : activeStatement === "mission"
                      ? "The work we undertake daily to advance agribusiness transformation."
                      : "The foundational principles that shape every engagement, decision, and innovation."}
                </p>
              </div>

              {activeStatement === "values" ? (
                <>
                  <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#1F5C3F]">
                    What Guides Our Work
                  </h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    {coreValues.map((item) => (
                      <article
                        key={item.value}
                        className="rounded-2xl border border-[#E2DCCF] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                      >
                        <h4 className="mb-3 text-lg font-bold text-[#1F5C3F]">
                          {item.value}
                        </h4>
                        <p className="mb-5 leading-relaxed text-[#4F4F4F]">
                          {item.meaning}
                        </p>
                        <div className="border-t border-[#E2DCCF] pt-4">
                          <span className="mb-1 block text-[11px] uppercase tracking-wider text-[#7D7D7D]">
                            Folds In
                          </span>
                          <p className="text-sm text-[#222222]">
                            {item.foldsIn}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              ) : (
                <div className="rounded-2xl border border-[#E2DCCF] bg-white p-6 sm:p-8">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#1F5C3F]">
                    {activeStatement === "vision"
                      ? "Our Long-Term Ambition"
                      : "What We Work Toward"}
                  </h3>

                  <p className="text-base leading-8 text-[#383838]">
                    {statements[activeStatement].content}
                  </p>
                </div>
              )}

              <div className="mt-10 flex justify-end border-t border-[#E2DCCF] pt-6">
                <button
                  type="button"
                  onClick={() => setActiveStatement(null)}
                  className="rounded-xl bg-[#1F5C3F] px-6 py-3 font-semibold text-white transition hover:bg-[#184A33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F5C3F]"
                >
                  Close
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};
