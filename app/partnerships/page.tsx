import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HiAcademicCap, HiCurrencyDollar, HiGlobeAlt, HiOfficeBuilding } from "react-icons/hi";

export default function PartnershipsPage() {
  const models = [
    {
      title: "Universities & Polytechnics",
      icon: <HiAcademicCap className="w-8 h-8 text-brand-green" />,
      tag: "Academic Tier 1",
      offer: "Structured SIWES placements, co-certified curriculum, guest instruction, and field labs.",
      gain: "Practical graduate employability and industry-aligned accreditation.",
    },
    {
      title: "Impact Investors & DFIs",
      icon: <HiCurrencyDollar className="w-8 h-8 text-brand-gold-dark" />,
      tag: "Financial Tier 1",
      offer: "Standardized investment-readiness diagnostics and portfolio-wide LightAgriOS dashboards.",
      gain: "Lower default rates, verified operational metrics, and transparent capital deployment.",
    },
    {
      title: "Government & Extension Agencies",
      icon: <HiOfficeBuilding className="w-8 h-8 text-slate-700" />,
      tag: "Public Sector Tier 2",
      offer: "Large-scale vocational training, M&E frameworks, and regional extension digitization.",
      gain: "Audited agricultural transformation and scalable youth employment programs.",
    },
    {
      title: "Cooperatives & Processors",
      icon: <HiGlobeAlt className="w-8 h-8 text-teal-700" />,
      tag: "Commercial Tier 2",
      offer: "Group training rates, outgrower traceability, and cooperative-wide software licenses.",
      gain: "Consistent off-taker quality, reduced supply chain disruption, and trained farmer members.",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="lg">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="green" className="mb-3">Institutional Collaboration</Badge>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-brand-charcoal mb-4 leading-tight">
            Institutional Partnerships
          </h1>
          <p className="text-lg text-brand-grey leading-relaxed mb-4">
            Transforming African agribusiness requires institutional integration across education,
            finance, government, and commercial supply chains. We partner deliberately with organizations
            committed to durable agricultural outcomes.
          </p>
          <div className="h-1 w-20 bg-brand-gold rounded-full" />
        </div>

        {/* Partnership Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {models.map((m) => (
            <Card key={m.title} hoverable borderAccent="gold" className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-brand-parchment rounded-xl border border-brand-border/60">
                  {m.icon}
                </div>
                <Badge variant="default">{m.tag}</Badge>
              </div>

              <h3 className="font-serif font-bold text-2xl text-brand-charcoal mb-3">{m.title}</h3>

              <div className="space-y-3 text-xs sm:text-sm mb-6">
                <div>
                  <span className="font-bold text-brand-green block">What Light Delivers:</span>
                  <p className="text-brand-grey">{m.offer}</p>
                </div>
                <div>
                  <span className="font-bold text-brand-charcoal block">Value for Partner:</span>
                  <p className="text-brand-grey">{m.gain}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border/40">
                <Button href="/contact" variant="outline" size="sm" className="w-full justify-center">
                  Initiate Partnership Discussion
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
