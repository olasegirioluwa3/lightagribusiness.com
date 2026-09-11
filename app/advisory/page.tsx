import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HiCheckCircle, HiArrowRight, HiClipboardCheck, HiDocumentText } from "react-icons/hi";

export default function AdvisoryPage() {
  const advisoryServices = [
    {
      title: "Fixed-Fee Farm Diagnostic & Audit",
      timeline: "5 to 10 Business Days",
      scope: "On-site audit mapping exact yield leaks, feed waste, mortality causes, and informal cashflow drains.",
      deliverable: "A prioritized 1-page 'What To Do Next' action sheet + full benchmark audit.",
      bundle: "Includes 6 months of LightAgriOS Starter Tier.",
      badge: "Flagship Entry",
      popular: true,
    },
    {
      title: "Custom SOP Development & Workflow Design",
      timeline: "2 to 4 Weeks",
      scope: "Engineering plain-language Standard Operating Procedures that farm floor workers actually follow.",
      deliverable: "Visual checklists, biosecurity protocols, feeding schedules, and inventory controls.",
      bundle: "Configured directly into LightAgriOS daily task workflows.",
      badge: "Systems Design",
    },
    {
      title: "Enterprise Transformation & Investment Readiness",
      timeline: "2 to 6 Months Retainer",
      scope: "End-to-end restructuring for commercial estates, multi-site outgrowers, and bank/DFI financing.",
      deliverable: "Institutional governance, audited financial models, investor-grade dashboards, and management coaching.",
      bundle: "Includes full LightAgriOS Enterprise multi-farm deployment.",
      badge: "Enterprise",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="lg">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="advisory" className="mb-3">
            Pillar Two: Advisory &amp; Business Systems
          </Badge>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-brand-charcoal mb-4 leading-tight">
            Light Advisory
          </h1>
          <p className="text-lg text-brand-grey leading-relaxed mb-4">
            We turn agricultural effort into a business that runs on systems, not guesswork.
            A farm without a system depends entirely on one person&apos;s memory. We build structures
            that keep operating when the owner is not in the room.
          </p>
          <div className="h-1 w-20 bg-brand-gold rounded-full" />
        </div>

        {/* Service Ladder */}
        <div className="mb-20">
          <SectionHeader
            badge="Offer Ladder"
            badgeVariant="gold"
            title="Operational Advisory Packages"
            subtitle="Priced for transformation and verified ROI, never simple billable hours. Every engagement includes a concrete, tangible deliverable."
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advisoryServices.map((service) => (
              <Card
                key={service.title}
                hoverable
                borderAccent="advisory"
                className={`flex flex-col justify-between ${
                  service.popular ? "ring-2 ring-brand-green" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="advisory">{service.badge}</Badge>
                    <span className="text-xs text-brand-grey font-semibold">{service.timeline}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-grey mb-5 leading-relaxed">
                    {service.scope}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-brand-border/40 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-brand-charcoal block">Key Deliverable:</span>
                      <span className="text-brand-charcoal-muted">{service.deliverable}</span>
                    </div>

                    <div className="bg-brand-parchment p-3 rounded-lg border border-brand-border/60">
                      <span className="font-bold text-brand-green block">Bundled Technology:</span>
                      <span className="text-brand-charcoal-muted">{service.bundle}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-border/40">
                  <Button
                    href="/contact"
                    variant={service.popular ? "secondary" : "outline"}
                    size="md"
                    className="w-full justify-center group"
                  >
                    <span>Request Proposal</span>
                    <HiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisory Team Visuals */}
        <div className="mb-20">
          <SectionHeader
            badge="Our Team in Action"
            badgeVariant="advisory"
            title="Expert Advisory at Work"
            subtitle="Our consultants bring decades of combined experience in African agribusiness operations."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/60 p-4 rounded-xl border border-brand-border/60 relative aspect-video">
              <Image
                src="/image/advisory-man presenting analytics1.png"
                alt="Advisory consultant presenting analytics"
                fill
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="bg-white/60 p-4 rounded-xl border border-brand-border/60 relative aspect-video">
              <Image
                src="/image/advisory-man presenting analytics2.png"
                alt="Advisory consultant presenting data insights"
                fill
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="bg-white/60 p-4 rounded-xl border border-brand-border/60 relative aspect-video">
              <Image
                src="/image/advisory-my office picture.png"
                alt="Advisory office environment"
                fill
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* The 5D Framework Breakdown */}
        <div className="bg-brand-parchment-card border border-brand-border/60 rounded-2xl p-8 sm:p-12 mb-16 shadow-parchment">
          <Badge variant="green" className="mb-3">Our Disciplined Methodology</Badge>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal mb-4">
            The 5D Delivery Framework
          </h2>
          <p className="text-sm text-brand-grey max-w-2xl mb-8">
            Every consulting engagement follows this non-negotiable five-stage discipline to guarantee
            that change takes root on the ground.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-brand-parchment p-5 rounded-xl border border-brand-border/60">
              <span className="text-xs font-bold uppercase text-brand-gold-dark block mb-1">Stage 01</span>
              <h4 className="font-serif font-bold text-base text-brand-charcoal mb-2">Diagnose</h4>
              <p className="text-xs text-brand-grey">On-site audit of yield, mortality, feed efficiency, and cash leaks.</p>
            </div>

            <div className="bg-brand-parchment p-5 rounded-xl border border-brand-border/60">
              <span className="text-xs font-bold uppercase text-brand-gold-dark block mb-1">Stage 02</span>
              <h4 className="font-serif font-bold text-base text-brand-charcoal mb-2">Design</h4>
              <p className="text-xs text-brand-grey">Tailored operational workflows, supervision tiers, and daily checklists.</p>
            </div>

            <div className="bg-brand-parchment p-5 rounded-xl border border-brand-border/60">
              <span className="text-xs font-bold uppercase text-brand-gold-dark block mb-1">Stage 03</span>
              <h4 className="font-serif font-bold text-base text-brand-charcoal mb-2">Document</h4>
              <p className="text-xs text-brand-grey">Plain-language SOPs that field workers understand and execute.</p>
            </div>

            <div className="bg-brand-parchment p-5 rounded-xl border border-brand-border/60">
              <span className="text-xs font-bold uppercase text-brand-gold-dark block mb-1">Stage 04</span>
              <h4 className="font-serif font-bold text-base text-brand-charcoal mb-2">Deploy</h4>
              <p className="text-xs text-brand-grey">Hands-on farm floor training and live supervision rollout.</p>
            </div>

            <div className="bg-brand-parchment p-5 rounded-xl border-2 border-brand-green">
              <span className="text-xs font-bold uppercase text-brand-green block mb-1">Stage 05</span>
              <h4 className="font-serif font-bold text-base text-brand-charcoal mb-2">Sustain</h4>
              <p className="text-xs text-brand-grey">LightAgriOS integration so the new systems run automatically.</p>
            </div>
          </div>

          {/* Framework Blueprint Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-brand-charcoal to-brand-green-dark text-white p-8 rounded-2xl shadow-xl border border-brand-green/30 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="gold">Institutional Methodology</Badge>
                  <span className="text-xs uppercase tracking-wider text-brand-parchment/70 font-semibold">Diagnostic to Execution</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  The Transformation Roadmap
                </h3>
                <p className="text-sm text-brand-parchment/80 leading-relaxed mb-6">
                  Unlike traditional consultants who deliver paper reports and disappear, Light stays through the messy implementation phase until processes are embedded in your daily workflow.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                    <span className="text-brand-gold font-bold text-xs uppercase px-2 py-0.5 bg-brand-gold/20 rounded">Week 1-2</span>
                    <div>
                      <h5 className="font-semibold text-white">Full On-Site Forensic Diagnostic</h5>
                      <p className="text-xs text-brand-parchment/70">Pinpointing feed waste, labor leakage, biosecurity breaches, and inventory shrinkage.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                    <span className="text-brand-gold font-bold text-xs uppercase px-2 py-0.5 bg-brand-gold/20 rounded">Week 3-4</span>
                    <div>
                      <h5 className="font-semibold text-white">SOP Architecture & Protocol Design</h5>
                      <p className="text-xs text-brand-parchment/70">Custom standard operating procedures tailored for the operational literacy of your team.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                    <span className="text-brand-gold font-bold text-xs uppercase px-2 py-0.5 bg-brand-gold/20 rounded">Week 5-8</span>
                    <div>
                      <h5 className="font-semibold text-white">Floor Deployment & Staff Coaching</h5>
                      <p className="text-xs text-brand-parchment/70">Hands-on farm floor training until supervisors execute protocols independently.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between text-xs text-brand-parchment/70">
                <span>Deliverable: Verified Operational Blueprint</span>
                <span className="text-brand-gold font-semibold">Zero Paperwork Inertia</span>
              </div>
            </div>

            <div className="bg-brand-parchment-card p-8 rounded-2xl border border-brand-border/60 shadow-parchment flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="lightagrios">Sustain Phase Integration</Badge>
                  <span className="text-xs uppercase tracking-wider text-brand-grey font-semibold">Long-Term Control</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-3">
                  Sustaining Systems with LightAgriOS
                </h3>
                <p className="text-sm text-brand-grey leading-relaxed mb-6">
                  A business without a system depends entirely on one person&apos;s memory. Once your operational protocols are stabilized, we lock them into LightAgriOS so that accountability is automated.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-white/80 rounded-xl border border-brand-border/50">
                    <h5 className="font-serif font-bold text-brand-charcoal text-sm mb-1">Daily Log Automation</h5>
                    <p className="text-xs text-brand-grey">Floor workers log mortality, feed usage, and sales in seconds, offline or online.</p>
                  </div>
                  <div className="p-4 bg-white/80 rounded-xl border border-brand-border/50">
                    <h5 className="font-serif font-bold text-brand-charcoal text-sm mb-1">Audit Scorecard</h5>
                    <p className="text-xs text-brand-grey">Automated variance alerts notify managers immediately when feed conversion drifts.</p>
                  </div>
                  <div className="p-4 bg-white/80 rounded-xl border border-brand-border/50">
                    <h5 className="font-serif font-bold text-brand-charcoal text-sm mb-1">P&amp;L Transparency</h5>
                    <p className="text-xs text-brand-grey">Investor-ready batch costing and true margins calculated automatically.</p>
                  </div>
                  <div className="p-4 bg-white/80 rounded-xl border border-brand-border/50">
                    <h5 className="font-serif font-bold text-brand-charcoal text-sm mb-1">Continuous Retainer</h5>
                    <p className="text-xs text-brand-grey">Quarterly governance reviews by Light advisors ensure standard compliance.</p>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-brand-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-brand-grey font-medium">Diagnostic package includes 6 months of LightAgriOS</span>
                <Button href="/contact" variant="primary" size="sm">
                  Book Diagnostic
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
