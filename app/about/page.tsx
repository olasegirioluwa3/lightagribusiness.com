import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  const values = [
    {
      title: "Practical Knowledge",
      desc: "Every framework must survive contact with a real farm by Friday. Theory without execution is a distraction.",
    },
    {
      title: "Integrity",
      desc: "We tell clients the truth about their farm operations even when a softer answer is easier to sell.",
    },
    {
      title: "Systems Thinking",
      desc: "We build structures, SOPs, and dashboards that keep working after our consultants leave the room.",
    },
    {
      title: "Continuous Learning",
      desc: "We hold our own team, diagnostics, and software to the exact same standards of rigor we teach.",
    },
    {
      title: "Impact & Stewardship",
      desc: "We measure our success by what actually changed on the farm floor, not the hours billed.",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="lg">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="gold" className="mb-3">Institutional Story &amp; Philosophy</Badge>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-brand-charcoal mb-4 leading-tight">
            About Light Agribusiness
          </h1>
          <p className="text-lg text-brand-grey leading-relaxed mb-4">
            Africa&apos;s Agribusiness Knowledge, Advisory, Systems and Technology Institution.
            Illuminating the path of agribusiness success through practical transformation.
          </p>
          <div className="h-1 w-20 bg-brand-gold rounded-full" />
        </div>

        {/* Canonical Company Story (Verbatim from Brand Manual Part 2) */}
        <div className="bg-brand-parchment-card p-8 sm:p-12 rounded-2xl border border-brand-border/60 mb-20 shadow-parchment">
          <Badge variant="green" className="mb-4">The Origin Narrative</Badge>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal mb-6">
            The Story Behind the Light Institution
          </h2>
          <div className="space-y-4 text-brand-charcoal-muted leading-relaxed font-sans text-sm sm:text-base">
            <p>
              Light Agribusiness Consultancy Limited began with a simple, stubborn observation:
              across African agriculture, the biggest constraint was rarely the land, the weather,
              or even the capital. It was the shortage of practical knowledge — people who knew not
              just the science of farming, but the business of running one.
            </p>
            <p>
              What started as agribusiness consulting grew into something larger, because the work
              kept revealing the same pattern: clients did not just need advice, they needed to be
              taught, mentored, and equipped with systems that would keep working long after the
              engagement ended. And increasingly, they needed technology that could turn all of that
              into something they could see and manage daily.
            </p>
            <p>
              Today, Light stands on three pillars that reflect that reality. The{" "}
              <strong>Light Agribusiness Academy</strong> trains the next generation of practitioners
              and professionals. Our <strong>Advisory practice</strong> builds the operational
              systems that turn agricultural effort into investable, scalable business. And{" "}
              <strong>LightAgriOS</strong>, our proprietary technology platform, gives farms,
              cooperatives, and enterprises the tools to manage, track, and grow with real data, not
              guesswork.
            </p>
            <p className="italic border-l-2 border-brand-gold pl-4 py-1 text-brand-charcoal font-serif">
              &ldquo;Our name is not incidental. &lsquo;Light&rsquo; reflects what we believe our role
              in African agriculture should be: illuminating a path that is often unclear, so that
              students, farmers, agripreneurs, and enterprises alike can move forward with confidence
              rather than trial and error.&rdquo;
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-20">
          <SectionHeader
            badge="Institutional Character"
            badgeVariant="gold"
            title="The Five Core Values"
            subtitle="The fundamental standards that govern every team member, course syllabus, and client engagement."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Card key={v.title} hoverable borderAccent="gold" className="p-6">
                <span className="text-2xl font-serif font-extrabold text-brand-gold block mb-2">
                  0{i + 1}
                </span>
                <h3 className="font-serif font-bold text-lg text-brand-charcoal mb-2">{v.title}</h3>
                <p className="text-xs sm:text-sm text-brand-grey leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 bg-white/60 rounded-2xl border border-brand-border/60">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal mb-4">
            Partner with Africa&apos;s Leading Agribusiness Institution
          </h2>
          <p className="text-sm text-brand-grey max-w-xl mx-auto mb-6">
            Whether you need farm operational systems, accredited vocational training, or software
            deployment, our team is ready to assist.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              Get in Touch
            </Button>
            <Button href="/partnerships" variant="outline" size="md">
              View Partnerships
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
