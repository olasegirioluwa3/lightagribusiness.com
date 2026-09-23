"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const CareerPartnerships: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF9F5] border-b border-[#E8E4DA]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading and narrative matching mockup */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32] block">
              CAREER PARTNERSHIPS
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-[#122216] tracking-tight leading-tight">
              CAREER PARTNERSHIPS
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              We partner with top agricultural faculties, SIWES departments, regional research centers, and international agencies to recruit, train, and deploy top agribusiness talent.
            </p>
          </div>

          {/* Right Column: Institutional & University Partner Badges matching mockup */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {/* Partner 1 Image */}
              <div className="bg-white rounded-xl p-3 border border-[#E5E0D5] flex items-center justify-center aspect-[3/2] shadow-sm hover:shadow-md transition-shadow relative">
                <Image
                  src="/image/partner-1.png"
                  alt="Institutional Career Partner"
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Partner 2 Image */}
              <div className="bg-white rounded-xl p-3 border border-[#E5E0D5] flex items-center justify-center aspect-[3/2] shadow-sm hover:shadow-md transition-shadow relative">
                <Image
                  src="/image/partner-2.png"
                  alt="Agricultural University Partner"
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Partner 3 Image */}
              <div className="bg-white rounded-xl p-3 border border-[#E5E0D5] flex items-center justify-center aspect-[3/2] shadow-sm hover:shadow-md transition-shadow relative">
                <Image
                  src="/image/partner-3.png"
                  alt="Ecosystem Innovation Partner"
                  fill
                  className="object-contain p-2"
                />
              </div>

            

             
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
