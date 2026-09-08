"use client";

import React, { useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { personasData } from "@/data/personas";
import { HiCheck, HiArrowRight } from "react-icons/hi";

export const PersonaPathways: React.FC = () => {
  const [selectedId, setSelectedId] = useState(personasData[0].id);

  const activePersona =
    personasData.find((p) => p.id === selectedId) || personasData[0];

  return (
    <section className="py-20 bg-brand-parchment-card/50 border-b border-brand-border/40">
      <Container size="lg">
        <SectionHeader
          badge="Audience Pathways"
          badgeVariant="gold"
          title="Tailored Solutions for Africa's Agribusiness Stakeholders"
          subtitle="Whether you are a university student entering the sector, an established farm manager scaling operations, or an institutional DFI de-risking capital."
        />

        {/* Persona Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {personasData.map((persona) => {
            const isSelected = persona.id === selectedId;
            return (
              <button
                key={persona.id}
                onClick={() => setSelectedId(persona.id)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap border flex items-center gap-2 ${
                  isSelected
                    ? "bg-brand-green text-white border-brand-green shadow-green"
                    : "bg-brand-parchment text-brand-charcoal border-brand-border hover:border-brand-green/40 hover:bg-white"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isSelected
                      ? "bg-brand-gold text-brand-charcoal"
                      : "bg-brand-border/60 text-brand-charcoal"
                  }`}
                >
                  {persona.avatarText}
                </span>
                <span>{persona.name}</span>
                <span className="opacity-70 text-xs hidden md:inline">({persona.role.split("/")[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Active Persona Details Card */}
        <div className="max-w-4xl mx-auto">
          <Card
            borderAccent={activePersona.primaryPillar}
            className="p-8 sm:p-10 transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant={activePersona.primaryPillar}>
                    {activePersona.primaryPillar.toUpperCase()} PATHWAY
                  </Badge>
                  <span className="text-xs text-brand-grey font-medium">
                    Profile: {activePersona.name}, Age {activePersona.age}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal leading-tight">
                  &ldquo;{activePersona.headlineMessage}&rdquo;
                </h3>

                <div className="space-y-2 pt-2">
                  <div className="text-xs sm:text-sm text-brand-grey">
                    <span className="font-bold text-brand-charcoal">The Challenge: </span>
                    {activePersona.painPoint}
                  </div>
                  <div className="text-xs sm:text-sm text-brand-grey">
                    <span className="font-bold text-brand-green">The Light Solution: </span>
                    {activePersona.solution}
                  </div>
                </div>

                <div className="pt-2 flex items-start gap-2 text-xs sm:text-sm text-brand-charcoal-muted bg-white/70 p-3 rounded-lg border border-brand-border/40">
                  <HiCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>
                    <strong>Proof Point: </strong>
                    {activePersona.proofPoint}
                  </span>
                </div>
              </div>

              <div className="md:col-span-5 bg-brand-parchment p-6 rounded-xl border border-brand-border/60 flex flex-col justify-between h-full text-center sm:text-left">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-dark block mb-1">
                    Recommended Next Step
                  </span>
                  <h4 className="font-serif font-bold text-lg text-brand-charcoal mb-2">
                    {activePersona.role}
                  </h4>
                  <p className="text-xs text-brand-grey mb-6">
                    Connect directly with the appropriate pillar team or explore the tailored
                    offerings designed specifically for your stage.
                  </p>
                </div>

                <Button
                  href={activePersona.ctaHref}
                  variant="primary"
                  size="md"
                  className="w-full justify-center group"
                >
                  <span>{activePersona.ctaText}</span>
                  <HiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};
