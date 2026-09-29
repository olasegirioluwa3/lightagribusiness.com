"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const talentAreas = [
  "Consultancy",
  "Training & Facilitation",
  "Agriculture & Production",
  "Project Management",
  "Business Development",
  "Research & Analysis",
  "Digital Agriculture",
  "Technology",
  "Monitoring & Evaluation",
  "Finance & Investment",
  "Communications",
  "Other",
];

const futureClusters = [
  {
    name: "Knowledge",
    roles:
      "Trainers, facilitators, extension specialists, and knowledge managers",
  },
  {
    name: "Advisory",
    roles:
      "Agribusiness, farm business, value-chain, and specialist consultants",
  },
  {
    name: "Production",
    roles:
      "Livestock, crop, greenhouse, and controlled-environment specialists",
  },
  {
    name: "Projects",
    roles:
      "Project managers, field officers, and monitoring, evaluation & learning specialists",
  },
  {
    name: "Technology",
    roles: "LightAgriOS, data, and digital agriculture specialists",
  },
  {
    name: "Markets & Investment",
    roles:
      "Value-chain, business development, investment, and agricultural finance professionals",
  },
  {
    name: "Systems & Operations",
    roles:
      "Finance, administration, people operations, and client success professionals",
  },
];

const hiringMindsets = [
  ["Practical thinking", "Turn knowledge into something people can use."],
  ["Curiosity", "Keep asking questions and learning."],
  ["Communication", "Explain complex agricultural and business issues simply."],
  ["Results orientation", "Connect your work to measurable outcomes."],
  ["Integrity", "Be someone clients, farmers, and colleagues can trust."],
  ["Collaboration", "Work well across disciplines and with different people."],
  ["Adaptability", "Respond thoughtfully to changing conditions."],
  ["Technology openness", "Use technology to improve agricultural systems."],
  ["Field understanding", "Move comfortably between strategy and real farms."],
  ["Knowledge sharing", "Teach what you know and stay open to learning."],
];

interface CareerFutureTalentProps {
  onOpenGeneralApply: () => void;
}

export const CareerFutureTalent: React.FC<CareerFutureTalentProps> = ({
  onOpenGeneralApply,
}) => (
  <>
    <section
      id="future-opportunities"
      className="border-b border-[#E8E4DA] bg-[#FAF9F5] py-14 sm:py-20"
    >
      <Container size="lg">
        <div className="mb-9 max-w-3xl sm:mb-12">
          <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
            Future Opportunities
          </span>
          <h2 className="mb-3 font-sans text-2xl font-black leading-tight text-[#122216] sm:text-3xl">
            A multidisciplinary team, built to grow
          </h2>
          <p className="text-sm leading-relaxed text-[#555555] sm:text-base">
            As our work expands, we expect to build capability across these
            seven areas. These are future areas of growth, not a list of
            currently open vacancies.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {futureClusters.map((cluster, index) => (
            <article
              key={cluster.name}
              className="rounded-xl border border-[#E5E0D5] bg-white p-5 shadow-sm"
            >
              <span className="mb-3 block font-mono text-xs font-bold text-[#2E7D32]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-base font-bold text-[#122216]">
                {cluster.name}
              </h3>
              <p className="text-sm leading-relaxed text-[#555555]">
                {cluster.roles}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>

    <section
      id="talent-network"
      className="bg-[#0A160E] py-14 text-white sm:py-20"
    >
      <Container size="lg">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#8BC34A]">
              Join Our Talent Network
            </span>
            <h2 className="mb-3 text-2xl font-black leading-tight sm:text-3xl text-white">
              Bring your expertise to work that matters
            </h2>
            <p className="text-sm leading-relaxed text-white/75 sm:text-base">
              We are building a multidisciplinary network of professionals who
              can contribute to agricultural transformation across Nigeria and
              Africa. We welcome expressions of interest from people across
              these fields.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenGeneralApply}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#8BC34A] px-6 py-3 font-bold text-[#0B150F] transition-colors hover:bg-[#7CB342] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8BC34A] sm:w-fit"
          >
            Join the Talent Network
            <HiArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {talentAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/80"
            >
              {area}
            </li>
          ))}
        </ul>
      </Container>
    </section>

    <section className="border-b border-[#E8E4DA] bg-white py-14 sm:py-20">
      <Container size="lg">
        <div className="mb-9 max-w-3xl sm:mb-12">
          <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
            What We Look For
          </span>
          <h2 className="mb-3 text-2xl font-black leading-tight text-[#122216] sm:text-3xl">
            Mindset matters as much as qualifications
          </h2>
          <p className="text-sm leading-relaxed text-[#555555] sm:text-base">
            We value people who understand agriculture, business, and people,
            and can turn knowledge into practical results.
          </p>
        </div>

        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {hiringMindsets.map(([title, description], index) => (
            <li
              key={title}
              className="rounded-xl border border-[#E5E0D5] bg-[#FAF9F5] p-5"
            >
              <span className="mb-3 block font-mono text-xs font-bold text-[#2E7D32]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 font-bold text-[#122216]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#555555]">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  </>
);
