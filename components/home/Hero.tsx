import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import Link from "next/link";
import { HiArrowRight, HiShieldCheck } from "react-icons/hi";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 bg-radiating-rays border-b border-brand-border/40">
      {/* Background Decorative Rings / Radiating Light Rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-brand-gold/15 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <Container size="lg">
        <div className="max-w-4xl mx-auto text-center">
          {/* Institutional Pill Tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge variant="gold">Institutional Identity</Badge>
            <span className="text-xs font-semibold text-brand-grey uppercase tracking-widest hidden sm:inline">
              Knowledge · Systems · Technology
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-brand-charcoal tracking-tight leading-[1.15] mb-6">
            Light illuminates the path of{" "}
            <span className="text-brand-green underline decoration-brand-gold decoration-4 underline-offset-8">
              agribusiness success
            </span>
          </h1>

          {/* Core Master Promise */}
          <p className="text-lg sm:text-xl text-brand-charcoal-muted leading-relaxed mb-8 max-w-3xl mx-auto">
            Whatever path you are on in agribusiness — learning, building, or scaling — Light meets
            you with practical knowledge, a workable system, or the right technology.{" "}
            <span className="font-semibold text-brand-charcoal">
              And we will not leave you more confused than we found you.
            </span>
          </p>

          {/* Primary Action Button Cluster */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              href="/advisory"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-gold group"
            >
              <span>Request a Farm Diagnostic</span>
              <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              href="/academy"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto shadow-green"
            >
              Explore Academy Certifications
            </Button>
            <Button
              href="/lightagrios"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Discover LightAgriOS
            </Button>
          </div>

          {/* Trust Highlights Grid */}
          <div className="pt-8 border-t border-brand-border/60 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="bg-white/60 p-4 rounded-lg border border-brand-border/40">
              <span className="block text-2xl font-serif font-bold text-brand-green">3 Pillars</span>
              <span className="text-xs text-brand-grey leading-tight">
                Integrated Academy, Advisory &amp; Software
              </span>
            </div>

            <div className="bg-white/60 p-4 rounded-lg border border-brand-border/40">
              <span className="block text-2xl font-serif font-bold text-brand-gold-dark">5D Model</span>
              <span className="text-xs text-brand-grey leading-tight">
                Diagnose, Design, Document, Deploy, Sustain
              </span>
            </div>

            <div className="bg-white/60 p-4 rounded-lg border border-brand-border/40">
              <span className="block text-2xl font-serif font-bold text-brand-green">Monday-Ready</span>
              <span className="text-xs text-brand-grey leading-tight">
                Frameworks designed for instant farm application
              </span>
            </div>

            <div className="bg-white/60 p-4 rounded-lg border border-brand-border/40">
              <span className="block text-2xl font-serif font-bold text-brand-charcoal">Pan-African</span>
              <span className="text-xs text-brand-grey leading-tight">
                Engineered for African operational conditions
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
