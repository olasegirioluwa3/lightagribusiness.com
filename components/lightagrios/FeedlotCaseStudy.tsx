"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  HiArrowRight,
  HiOutlineTrendingUp,
  HiOutlineTrash,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

export const FeedlotCaseStudy: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F3] border-b border-brand-border/60">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Real Photo with Floating Stats Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full rounded-2xl overflow-hidden shadow-xl border border-brand-border">
              <Image
                src="/image/middle-aged man with lighagrios tab.png"
                alt="2,000-Head Cattle Feedlot Manager with LightAgriOS tablet"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Metric Card Overlay on Photo */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-brand-border shadow-lg">
              <div className="grid grid-cols-2 gap-2 text-center divide-x divide-brand-border/60">
                <div className="px-1">
                  <div className="text-[10px] uppercase font-bold text-brand-grey">Feed Conversion</div>
                  <div className="text-base sm:text-lg font-bold text-brand-green font-mono">+18%</div>
                </div>
                <div className="px-1">
                  <div className="text-[10px] uppercase font-bold text-brand-grey">Waste Reduction</div>
                  <div className="text-base sm:text-lg font-bold text-emerald-600 font-mono">-12%</div>
                </div>
              </div>
              <div className="mt-2 pt-2 border-t border-brand-border/40 flex justify-between items-center text-[10px] font-medium text-brand-grey">
                <span>SOP Compliance: <strong className="text-brand-charcoal">100%</strong></span>
                <span>Payoff Period: <strong className="text-brand-charcoal">6 months</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Case Study Narrative & 3 Stat Pills */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Text narrative */}
              <div className="md:col-span-8">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-green block mb-2">
                  CASE STUDY
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-brand-charcoal tracking-tight leading-tight mb-2">
                  Scale Operations, Enhance Governance: 2,000-Head Cattle Feedlot
                </h2>
                <div className="inline-block text-xs font-semibold text-brand-gold-dark bg-brand-gold/10 px-2.5 py-1 rounded border border-brand-gold/20 mb-4">
                  Feedlot Farm | Operations & SOP manager
                </div>
                <p className="text-sm sm:text-base text-brand-grey leading-relaxed mb-6">
                  A commercial operation was experiencing high mortality, poor
                  feed conversion and inconsistent performance. Through a combined
                  diagnostic and advisory process, we redesigned operating routines,
                  improved biosecurity and introduced better feed formulations.
                  Supported improved performance and stronger operational control.
                </p>

                <Link
                  href="/advisory"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-green hover:bg-brand-green-dark text-white font-semibold text-sm transition-all shadow-md group"
                >
                  <span>View Full Case Study</span>
                  <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* 3 Metric cards on right side */}
              <div className="md:col-span-4 flex flex-col gap-3">
                <div className="bg-[#EBF7F0] border border-emerald-200/80 rounded-xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <HiOutlineTrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-emerald-900">
                      Feed Conversion
                    </div>
                    <div className="text-xl font-bold font-mono text-emerald-800">
                      +18%
                    </div>
                  </div>
                </div>

                <div className="bg-[#EBF7F0] border border-emerald-200/80 rounded-xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <HiOutlineTrash className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-emerald-900">
                      Waste Reduction
                    </div>
                    <div className="text-xl font-bold font-mono text-emerald-800">
                      -12%
                    </div>
                  </div>
                </div>

                <div className="bg-[#EBF7F0] border border-emerald-200/80 rounded-xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <HiOutlineClipboardCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-emerald-900">
                      SOP Compliance
                    </div>
                    <div className="text-xl font-bold font-mono text-emerald-800">
                      100%
                    </div>
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
