"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const ApproachCTA: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0B1A10] text-white overflow-hidden border-t border-[#182B1E]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/footers image - sunset (1).jpg"
          alt="African agricultural landscape at sunset"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A10]/97 via-[#0B1A10]/80 to-[#0B1A10]/90" />
      </div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-[#C69214]/15 rounded-full blur-[100px] pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8BC34A] block mb-3">
              Let&apos;s Move Forward
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[38px] text-white leading-[1.25] mb-4">
              Ready to put a clearer plan in place for your agribusiness?
            </h2>
            <p className="text-sm text-white/70 leading-[1.85] max-w-xl">
              Whatever stage you are at, we&apos;re ready to listen, understand and help you build a stronger, more productive and more investable agribusiness.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap lg:justify-end items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-[#8BC34A] hover:bg-[#7cb342] text-[#0A170F] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-2xl group"
            >
              <span>Request an Advisory Assessment</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/advisory"
              className="inline-flex items-center px-5 sm:px-6 py-3 rounded-full bg-black/30 hover:bg-white/10 border border-white/30 hover:border-white/60 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
