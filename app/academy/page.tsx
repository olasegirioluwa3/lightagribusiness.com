import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HiCheckCircle, HiAcademicCap, HiBriefcase, HiSparkles } from "react-icons/hi";

export default function AcademyPage() {
  const certTiers = [
    {
      level: "Foundation Certificate",
      audience: "Students, Graduates, New Agripreneurs",
      duration: "1 to 3 Weeks",
      focus: "Single-topic mastery (e.g., Poultry Business Basics, Farm Record-Keeping, Greenhouse Operations).",
      standard: "Assessed completion quiz + short practical farm assignment submitted within 7 days.",
      badge: "Entry Tier",
    },
    {
      level: "Professional Certificate",
      audience: "Working Farm Managers, Commercial Operators",
      duration: "6 to 8 Weeks",
      focus: "Role-oriented commercial management (e.g., Certified Farm Operations Manager, Feed & Inventory Controller).",
      standard: "Assessed live project/case study + demonstrated workflow on the learner's own farm floor.",
      badge: "Practitioner Tier",
      popular: true,
    },
    {
      level: "Advanced / Executive Certificate",
      audience: "Corporate Executives, Agribusiness Investors, Consultants",
      duration: "10 to 12 Weeks",
      focus: "Enterprise transformation, outgrower management, and investment-readiness diagnostic specialist.",
      standard: "Comprehensive capstone project evaluated by an expert panel of agribusiness practitioners.",
      badge: "Executive Tier",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="lg">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="academy" className="mb-3">
            Pillar One: Knowledge &amp; Capacity Development
          </Badge>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-brand-charcoal mb-4 leading-tight">
            Light Agribusiness Academy
          </h1>
          <p className="text-lg text-brand-grey leading-relaxed mb-4">
            We turn agricultural ambition into practical, employable, applicable competence.
            No theoretical lectures that gather dust — our curriculum is built backward from the exact
            tasks a farm manager must execute on Monday morning.
          </p>
          <div className="h-1 w-20 bg-brand-gold rounded-full" />
        </div>

        {/* Certification Tiers */}
        <div className="mb-20">
          <SectionHeader
            badge="Rigorous Credentials"
            badgeVariant="gold"
            title="The Three Certification Tiers"
            subtitle="Credibility depends on assessment rigor, not the mode of delivery. Every tier is built on practical testing rather than mere attendance."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certTiers.map((cert) => (
              <Card
                key={cert.level}
                hoverable
                borderAccent="academy"
                className={`flex flex-col justify-between ${
                  cert.popular ? "ring-2 ring-brand-gold" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="academy">{cert.badge}</Badge>
                    <span className="text-xs text-brand-grey font-semibold">{cert.duration}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-2">
                    {cert.level}
                  </h3>

                  <p className="text-xs font-semibold uppercase text-amber-800 mb-4">
                    Target: {cert.audience}
                  </p>

                  <div className="space-y-3 mb-6 text-xs sm:text-sm text-brand-charcoal-muted">
                    <div>
                      <span className="font-bold text-brand-charcoal block">Focus Area:</span>
                      <span>{cert.focus}</span>
                    </div>
                    <div>
                      <span className="font-bold text-brand-green block">Assessment Standard:</span>
                      <span>{cert.standard}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border/40">
                  <Button
                    href="/contact"
                    variant={cert.popular ? "primary" : "outline"}
                    size="md"
                    className="w-full justify-center"
                  >
                    Enroll / Inquire
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* SIWES & Student Industrial Training Callout */}
        <div className="bg-brand-parchment-card border border-brand-green/20 rounded-2xl p-8 sm:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="green">SIWES &amp; University Partnerships</Badge>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal">
                The Bridge Between the Classroom and Commercial Competence
              </h2>
              <p className="text-sm text-brand-grey leading-relaxed">
                Agriculture degrees produce graduates who know the biology of crops, but employers need
                people who know inventory control, mortality management, staff supervision, and digital
                records. We partner with universities to place students in structured, mentored
                internships where they manage live operations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-brand-charcoal-muted">
                <div className="flex items-center gap-2">
                  <HiCheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                  <span>Curriculum aligned with operating farm managers</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                  <span>Hands-on LightAgriOS digital record training</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                  <span>Employability certification upon completion</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                  <span>Direct alumni network &amp; job board access</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-brand-parchment p-6 rounded-xl border border-brand-border/60 text-center">
              <HiAcademicCap className="w-12 h-12 text-brand-green mx-auto mb-3" />
              <h3 className="font-serif font-bold text-lg text-brand-charcoal mb-2">
                University Partner?
              </h3>
              <p className="text-xs text-brand-grey mb-4">
                Partner with Light to strengthen your faculty&apos;s practical training outcomes and
                student employability.
              </p>
              <Button href="/partnerships#academic" variant="primary" size="md" className="w-full">
                Partner with the Academy
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
