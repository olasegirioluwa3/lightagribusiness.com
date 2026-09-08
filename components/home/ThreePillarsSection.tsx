import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { pillarsData, flywheelSteps } from "@/data/pillars";
import { HiCheckCircle, HiArrowRight } from "react-icons/hi";

export const ThreePillarsSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-parchment border-b border-brand-border/40">
      <Container size="lg">
        <SectionHeader
          badge="Brand Architecture"
          badgeVariant="green"
          title="The Three Pillars of Institutional Transformation"
          subtitle="Consultancy alone was never enough. Light integrates capacity building, operational systems design, and farm management software into a single institution."
        />

        {/* 3 Pillars Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pillarsData.map((pillar) => {
            return (
              <Card
                key={pillar.id}
                hoverable
                borderAccent={pillar.id}
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={pillar.id}>{pillar.badge}</Badge>
                    <span className="text-xs font-semibold text-brand-grey uppercase">
                      {pillar.id === "academy"
                        ? "People"
                        : pillar.id === "advisory"
                        ? "Systems"
                        : "Technology"}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-2">
                    {pillar.name}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-green mb-3">
                    {pillar.subtitle}
                  </p>

                  <p className="italic text-sm text-brand-charcoal-muted border-l-2 border-brand-gold pl-3 mb-5">
                    &ldquo;{pillar.tagline}&rdquo;
                  </p>

                  <p className="text-sm text-brand-grey mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                      Core Offerings &amp; Standards:
                    </h4>
                    {pillar.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-brand-charcoal-muted">
                        <HiCheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border/40">
                  <Button
                    href={pillar.ctaHref}
                    variant={pillar.id === "academy" ? "primary" : pillar.id === "advisory" ? "secondary" : "outline"}
                    size="md"
                    className="w-full justify-between group"
                  >
                    <span>{pillar.ctaText}</span>
                    <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* The Institutional Flywheel Banner */}
        <div className="bg-brand-parchment-card border border-brand-green/20 rounded-2xl p-8 sm:p-10 shadow-parchment">
          <div className="max-w-2xl mb-8">
            <Badge variant="gold" className="mb-2">Cross-Pillar Reinforcement</Badge>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal mb-2">
              How the Three Pillars Power One Another
            </h3>
            <p className="text-sm text-brand-grey">
              The pillars are not isolated services; they are deliberate cross-referral engines that
              de-risk agribusiness growth for students, farm owners, and institutional lenders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {flywheelSteps.map((step) => (
              <div
                key={step.step}
                className="bg-brand-parchment p-6 rounded-xl border border-brand-border/60 relative"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-serif font-extrabold text-brand-gold">
                    {step.step}
                  </span>
                  <Badge variant="green">{step.pillar}</Badge>
                </div>
                <h4 className="font-serif font-bold text-lg text-brand-charcoal mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-brand-grey leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
