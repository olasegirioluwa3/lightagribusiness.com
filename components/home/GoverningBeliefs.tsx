import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export const GoverningBeliefs: React.FC = () => {
  const beliefs = [
    {
      num: "01",
      title: "Agriculture is the domain. Transformation is the product.",
      body: "If a proposed offering does not transform a person's capability or a business's operating reality, it does not fit Light — even if it is agricultural.",
    },
    {
      num: "02",
      title: "Knowledge should be practical or it should not be published.",
      body: "Our contribution is knowledge a farm manager can apply within days, not knowledge that exists solely to demonstrate academic expertise for its own sake.",
    },
    {
      num: "03",
      title: "Systems outlast advice.",
      body: "We always leave something durable behind: a Standard Operating Procedure (SOP), a diagnostic dashboard, a checklist, or software — never just a verbal conversation.",
    },
    {
      num: "04",
      title: "Technology should serve the practitioner, not impress the funder.",
      body: "LightAgriOS privileges daily on-the-ground usability in low-connectivity rural environments over unnecessary feature-bloat.",
    },
    {
      num: "05",
      title: "Make ourselves replaceable in the field, irreplaceable in the industry.",
      body: "Our success is measured by how capable and resilient a client becomes without Light in the room.",
    },
  ];

  return (
    <section className="py-20 bg-brand-parchment border-b border-brand-border/40">
      <Container size="lg">
        <SectionHeader
          badge="Brand Philosophy"
          badgeVariant="green"
          title="The Five Governing Beliefs"
          subtitle="Darkness in agribusiness is not a lack of effort. It is a lack of light — clear knowledge, workable systems, and usable technology. These beliefs serve as our non-negotiable decision filters."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {beliefs.map((belief, idx) => (
            <Card
              key={belief.num}
              hoverable
              className={`flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <span className="text-3xl font-extrabold text-brand-gold-dark block mb-3">
                  {belief.num}
                </span>
                <h4 className="font-bold text-lg text-brand-charcoal mb-3 leading-snug">
                  {belief.title}
                </h4>
                <p className="text-xs sm:text-sm text-brand-grey leading-relaxed">
                  {belief.body}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-brand-border/40 flex items-center justify-between text-xs text-brand-green font-semibold">
                <span>Decision Filter {belief.num}</span>
                <span>✓ Non-Negotiable</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Sage-Creator Archetype Callout */}
        <div className="bg-brand-charcoal text-white rounded-2xl p-8 sm:p-10 border border-brand-gold/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="gold">Institutional Archetype</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              The Sage-Creator: Mentor &amp; Practical Builder
            </h3>
            <p className="text-sm text-brand-parchment/80 leading-relaxed">
              We combine the wisdom and mentoring rigor of the <strong>Sage</strong> (who teaches,
              simplifies, and illuminates) with the practical bias of the <strong>Creator</strong> (who
              ships durable systems, field SOPs, and operating software).
            </p>
          </div>

          <div className="text-center md:text-right shrink-0">
            <span className="block text-4xl font-extrabold text-brand-gold">
              100%
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-parchment/70">
              Practical Implementation Focus
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
