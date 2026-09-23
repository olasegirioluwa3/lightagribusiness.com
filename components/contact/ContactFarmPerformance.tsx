"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const ContactFarmPerformance: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF9F5] border-b border-[#E8E4DA]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Card: Dark Overlay Farm Photo with Heading, Copy & Light Green CTA */}
          <div className="relative rounded-2xl overflow-hidden min-h-[420px] sm:min-h-[480px] flex flex-col justify-end p-6 sm:p-10 shadow-md border border-black/10 group">
            {/* Background Farm Photo */}
            <Image
              src="/image/poultry (1).jpg"
              alt="Agricultural diagnostics and sustainable farm systems"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              priority
            />

            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />

            {/* Card Content matching mockup */}
            <div className="relative z-10 space-y-4 max-w-lg">
              <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-[34px] text-white tracking-tight leading-snug">
                Dedicated support for
                <br className="hidden sm:inline" />
                {" "}sustainable growth.
              </h3>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                Our customer support team and advisory desk provide dedicated
                support for sustainable growth, connection of systems, continuous
                operational performance, and hands-on farm diagnostics.
              </p>

              <div className="pt-2">
                <Link
                  href="/advisory"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#8BC34A] hover:bg-[#7CB342] text-[#0B1E11] font-bold text-xs uppercase tracking-wider transition-all duration-200 group shadow-md"
                >
                  <span>Learn more</span>
                  <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Card: Headline, Diagnostic Tag, Copy & Support Team Photo */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E0D5] shadow-sm flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="font-sans font-black text-2xl sm:text-3xl text-[#122216] tracking-tight leading-snug mb-1.5">
                Improving farm performance through better systems
              </h3>

              <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777] block mb-3">
                Poultry Farm • Diagnostics &amp; Management
              </span>

              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Assisting operational development, helping your farm customize
                and troubleshoot challenges through systematic diagnostic systems
                and senior consultants, guaranteeing improved operational control
                and increased field returns.
              </p>
            </div>

            {/* Customer Support Desk Photo matching mockup */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#E5E0D5] shadow-inner bg-[#F4F1E8]">
              <Image
                src="/image/customer-support-team.jpg"
                alt="Light Agribusiness customer support and technical advisory team"
                fill
                className="object-cover hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

