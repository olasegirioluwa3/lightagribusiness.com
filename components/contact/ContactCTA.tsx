"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight, HiShieldCheck, HiLightningBolt, HiChip } from "react-icons/hi";

const valueProps = [
  { icon: HiShieldCheck, label: "Proven frameworks" },
  { icon: HiLightningBolt, label: "Fast engagements" },
  { icon: HiChip, label: "Technology-backed" },
];

export const ContactCTA: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0B1A10] text-white overflow-hidden border-t border-emerald-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/footers image - sunset (1).jpg"
          alt="African agricultural landscape at sunset"
          fill
          className="object-cover opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A10]/97 via-[#0B1A10]/80 to-[#0B1A10]/90" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-brand-gold/15 rounded-full blur-[100px] pointer-events-none z-0" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold block mb-3">
                Let&apos;s Move Forward
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2] mb-4">
                Ready to transform your agribusiness?
              </h2>
              <p className="text-sm text-white/70 leading-[1.85] max-w-xl">
                Let&apos;s find the right solutions for your unique challenges.
                Whether you need a farm diagnostic, certification, or a software
                demo — we&apos;re one conversation away.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-green hover:bg-brand-green-dark text-white font-bold text-xs uppercase tracking-wider shadow-green transition-all duration-200 hover:shadow-xl group"
              >
                <span>Request a Call</span>
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/advisory"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-black/30 hover:bg-white/10 border border-white/30 hover:border-white/60 text-white font-semibold text-xs uppercase tracking-wider backdrop-blur-sm transition-all duration-200"
              >
                View Solutions
              </Link>
            </div>
          </div>

          {/* Right: Value Props */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {valueProps.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-green/30 text-emerald-300 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
