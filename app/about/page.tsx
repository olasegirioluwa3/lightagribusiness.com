import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";

export default function AboutPage() {
  const values = [
    {
      title: "Practical Knowledge",
      desc: "Every framework must survive contact with a real farm by Friday. Theory without execution is a distraction.",
      image: "/image/pillar1- farmer explaining to a student in a farm.png",
      tag: "Actionable Competence",
    },
    {
      title: "Integrity",
      desc: "We tell clients the truth about their farm operations even when a softer answer is easier to sell.",
      image: "/image/advisory-man presenting analytics2.png",
      tag: "Uncompromising Honesty",
    },
    {
      title: "Systems Thinking",
      desc: "We build structures, SOPs, and dashboards that keep working after our consultants leave the room.",
      image: "/image/middle-aged man with lighagrios tab.png",
      tag: "Durable Structures",
    },
    {
      title: "Continuous Learning",
      desc: "We hold our own team, diagnostics, and software to the exact same standards of rigor we teach.",
      image: "/image/pillar1- male instructor with some students having a lot of feed samples.png",
      tag: "Institutional Rigor",
    },
    {
      title: "Impact & Stewardship",
      desc: "We measure our success by what actually changed on the farm floor, not the hours billed.",
      image: "/image/lightagribusiness-gallery (37).jpg",
      tag: "Lasting Transformation",
    },
  ];

  return (
    <div>
      <PageHero
        badge="Institutional Story & Philosophy"
        badgeVariant="gold"
        title="About Light Agribusiness"
        subtitle="Africa's Agribusiness Knowledge, Advisory, Systems and Technology Institution. Illuminating the path of agribusiness success through practical transformation."
        imageSrc="/image/lightagribusiness-gallery (12).jpg"
        imageAlt="Light Agribusiness institution leadership and field operations"
        layout="montage"
        secondaryImageSrc="/image/advisory-my office picture.png"
        secondaryImageAlt="Advisory consultation center"
        breadcrumbs={[{ label: "About" }]}
        pills={[
          "Sage-Creator Archetype",
          "5 Governing Beliefs",
          "Pan-African Vision",
        ]}
        statBox={{
          number: "5 Core",
          label: "Institutional Values",
        }}
        actions={
          <>
            <Button href="#story" variant="primary" size="md">
              The Origin Narrative
            </Button>
            <Button href="#values" variant="outline" size="md">
              5 Core Values
            </Button>
          </>
        }
      />

      <div className="py-12 sm:py-16">
        <Container size="lg">
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

        {/* Core Values Grid with Rich Imagery */}
        <div id="values" className="mb-20">
          <SectionHeader
            badge="Institutional Character"
            badgeVariant="gold"
            title="The Five Core Values"
            subtitle="The fundamental standards that govern every team member, course syllabus, and client engagement."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <Card
                key={v.title}
                hoverable
                borderAccent="gold"
                className="overflow-hidden flex flex-col p-0 group"
              >
                {/* Value Image Header with Number Overlay */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-charcoal">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Floating Number Badge */}
                  <div className="absolute top-3 left-3 bg-brand-charcoal/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-brand-gold/50 shadow-md">
                    <span className="text-xs font-serif font-bold text-brand-gold tracking-wider">
                      VALUE 0{i + 1}
                    </span>
                  </div>

                  {/* Value Tag */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-brand-green/80 backdrop-blur-xs px-2.5 py-0.5 rounded">
                      {v.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-brand-charcoal mb-2.5 group-hover:text-brand-green transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-charcoal-muted leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                  <div className="h-0.5 w-12 bg-brand-gold/40 rounded-full mt-4 group-hover:w-20 group-hover:bg-brand-gold transition-all duration-300" />
                </div>
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
  </div>
  );
}
