import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { HiCheckCircle, HiArrowRight } from "react-icons/hi";

export const DiagnosticCTA: React.FC = () => {
  return (
    <section className="py-20 bg-radiating-subtle">
      <Container size="lg">
        <div className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white rounded-3xl p-8 sm:p-14 shadow-green border border-brand-gold/30 relative overflow-hidden">
          {/* Subtle glow elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="gold">Flagship Engagement</Badge>
                <span className="text-xs uppercase font-bold tracking-wider text-brand-gold">
                  High-Leverage Bundle
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Turn agricultural effort into a business that runs on systems.
              </h2>

              <p className="text-sm sm:text-base text-brand-parchment/90 leading-relaxed">
                Book a fixed-fee, scoped <strong>Farm &amp; Business Diagnostic</strong>. Our team visits
                your farm floor, pinpoints exactly where money and yield are leaking, delivers a 1-page
                Monday action plan, and bundles <strong>6 to 12 months of LightAgriOS</strong> so the new
                systems keep working after we leave.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-parchment/90">
                  <HiCheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>Fixed-fee, scoped engagement</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-parchment/90">
                  <HiCheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>1-Page &ldquo;What To Do Next&rdquo; Action Sheet</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-parchment/90">
                  <HiCheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>Custom SOPs for farm staff</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-brand-parchment/90">
                  <HiCheckCircle className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>LightAgriOS setup &amp; onboarding</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button
                  href="/advisory"
                  variant="primary"
                  size="lg"
                  className="shadow-gold justify-center group"
                >
                  <span>Book Your Farm Diagnostic</span>
                  <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="border-brand-parchment text-brand-parchment hover:bg-white/10 justify-center"
                >
                  Speak with an Advisor
                </Button>
              </div>
            </div>

            {/* 5-Stage Framework Visual Pillar */}
            <div className="lg:col-span-5 bg-brand-charcoal/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/15">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold block mb-2">
                Our 5D Delivery Framework
              </span>
              <h4 className="font-serif font-bold text-xl text-white mb-6">
                How We Deliver Every Engagement
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-gold text-brand-charcoal font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h5 className="text-sm font-bold text-white">Diagnose</h5>
                    <p className="text-xs text-brand-parchment/70">On-site audit of records, mortality, yield, and financial leaks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-gold text-brand-charcoal font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h5 className="text-sm font-bold text-white">Design</h5>
                    <p className="text-xs text-brand-parchment/70">Engineered workflows, staffing controls, and cashflow checkpoints.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-gold text-brand-charcoal font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h5 className="text-sm font-bold text-white">Document</h5>
                    <p className="text-xs text-brand-parchment/70">Plain-language SOPs and visual checklists for daily floor execution.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-gold text-brand-charcoal font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h5 className="text-sm font-bold text-white">Deploy</h5>
                    <p className="text-xs text-brand-parchment/70">On-site team training and live system rollout on the farm floor.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-brand-gold text-brand-charcoal font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h5 className="text-sm font-bold text-brand-gold">Sustain (LightAgriOS)</h5>
                    <p className="text-xs text-brand-parchment/70">Software handoff to automate record-keeping and track ROI continuously.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
