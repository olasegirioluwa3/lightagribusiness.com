import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const AdvisoryHero: React.FC = () => {
  return (
    <section className="bg-[#07130D] text-white overflow-hidden">
      <Container size="lg" className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[340px] sm:min-h-[380px]">

          {/* ── LEFT: Text Panel ──────────────────────────────── */}
          <div className="flex flex-col justify-center py-10 sm:py-12 pr-0 lg:pr-12">
            {/* Eyebrow */}
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-gold block mb-4">
              ADVISORY &amp; BUSINESS SYSTEMS
            </span>

            {/* Headline — all caps, following ContactHero structure */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-white uppercase tracking-tight leading-[1.15] mb-4">
              Stop Guessing What {" "}
              <br className="hidden sm:block" />
              Is Wrong With Your Agribusiness.
            </h1>

            {/* Sub-copy */}
            <p className="text-sm text-white/65 leading-[1.8] mb-7 max-w-md">
              We diagnose the systems behind performance — from operations and productivity to finance and governance — and build structures that keep operating.
            </p>

            {/* CTAs matching ContactHero button formatting */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand-green hover:bg-brand-green-dark text-white font-semibold text-xs uppercase tracking-widest transition-all duration-200 shadow-green hover:shadow-xl"
              >
                REQUEST AN ASSESSMENT
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/25 hover:border-white/50 font-semibold text-xs uppercase tracking-widest backdrop-blur-sm transition-all duration-200 group"
              >
                <span>EXPLORE OUR SERVICES</span>
                <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Image Panel Bleeding to Viewport Edge ────── */}
          <div className="relative hidden lg:block">
            {/* Bleed to the edge of viewport on the right */}
            <div className="absolute inset-0 -right-[calc((100vw-100%)/2)]">
              <Image
                src="/image/advisory-man presenting analytics2.png"
                alt="Light Agribusiness consultants reviewing farm performance analytics"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Gradient blend into the dark left panel */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#07130D] via-[#07130D]/20 to-transparent" />

              {/* Bottom text overlay matching ContactHero design */}
              <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-3 max-w-[220px]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-brand-gold mb-0.5">
                  Better Systems
                </p>
                <p className="text-xs text-white/80 leading-snug">
                  Better systems, higher productivity, stronger agribusinesses.
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
