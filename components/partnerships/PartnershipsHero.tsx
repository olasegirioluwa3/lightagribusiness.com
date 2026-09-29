"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const PartnershipsHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-brand-green/20 bg-[#07130D] pb-8 pt-6 text-white lg:pb-10 lg:pt-8">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/image/pillar1 - female instructor advising many farmers in a farm.png"
          alt=""
          fill
          priority
          className="object-cover object-right opacity-35 transition-opacity duration-700 lg:object-[80%_center] lg:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07130D] via-[#07130D]/92 via-35% to-[#07130D]/40" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07130D] via-[#07130D]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07130D] via-[#07130D]/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(31,92,63,0.38)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(198,146,20,0.14)_0%,transparent_50%)]" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="lg:col-span-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-emerald-500/40 bg-brand-green/25 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-300 sm:text-sm">
                PARTNERSHIPS &gt; COLLABORATION FOR GROWTH
              </span>
            </div>

            <h1 className="mb-6 text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl xl:text-[52px]">
              Partnering for
              <span className="mt-1 block text-[#D4AF37]">
                sustainable growth.
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
              Collaborating to strengthen agri-food systems and unlock
              agribusiness potential across Africa.
            </p>

            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <a
                href="#partnership-models"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#1F5C3F] px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02] hover:bg-[#184932] active:scale-[0.98] sm:text-base"
              >
                <span>Explore Partnerships</span>
                <HiArrowRight className="h-4 w-4 text-emerald-300" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium tracking-wide text-white/90 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 hover:text-white sm:text-base"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/20 shadow-2xl shadow-black/90">
                <Image
                  src="/image/pillar1 - female instructor advising many farmers in a farm.png"
                  alt="Light Agribusiness partnership team collaborating with farmers in the field"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

                <div className="absolute right-4 top-4 space-y-1 rounded-xl border border-white/15 bg-black/60 p-3 text-right shadow-lg backdrop-blur-md sm:p-4">
                  <p className="text-xs font-bold tracking-wide text-white sm:text-sm">
                    Shared Expertise
                  </p>
                  <p className="text-xs font-bold tracking-wide text-emerald-300 sm:text-sm">
                    Stronger Systems
                  </p>
                  <p className="text-xs font-bold tracking-wide text-[#D4AF37] sm:text-sm">
                    Greater Impact
                  </p>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2.5 rounded-lg border border-emerald-500/30 bg-[#071710]/90 px-4 py-2.5 shadow-lg backdrop-blur-md sm:right-auto">
                  <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-slate-200 sm:text-sm">
                    Built together for African agriculture.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
