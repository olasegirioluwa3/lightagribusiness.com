"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HiX } from "react-icons/hi";
import { Container } from "@/components/ui/Container";

const journeyText = `The Story Behind the Light Institution

Light Agribusiness Consultancy Limited began with a simple, stubborn observation: across African agriculture, the biggest constraint was rarely the land, the weather, or even the capital. It was the shortage of practical knowledge — people who knew not just the science of farming, but the business of running one.

What started as agribusiness consulting grew into something larger, because the work kept revealing the same pattern: clients did not just need advice, they needed to be taught, mentored, and equipped with systems that would keep working long after the engagement ended. And increasingly, they needed technology that could turn all of that into something they could see and manage daily.

Today, Light stands on three pillars that reflect that reality. The Light Agribusiness Academy trains the next generation of practitioners and professionals. Our Advisory practice builds the operational systems that turn agricultural effort into investable, scalable business. And LightAgriOS, our proprietary technology platform, gives farms, cooperatives, and enterprises the tools to manage, track, and grow with real data, not guesswork.

“Our name is not incidental. ‘Light’ reflects what we believe our role in African agriculture should be: illuminating a path that is often unclear, so that students, farmers, agripreneurs, and enterprises alike can move forward with confidence rather than trial and error.”`;

export const AboutFuture = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-white border-t border-[#E4EBE6]">
        <Container size="lg">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-center py-10">
            {/* LEFT */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#5C8968] mb-2">
                Where We Are Going
              </p>

              <h2 className="text-[38px] font-bold text-[#0F2A1D] leading-tight mb-4">
                A clearer future for African agriculture.
              </h2>

              <p className="text-[#596760] text-[15px] leading-relaxed max-w-2xl mb-8">
                We see a future where every stakeholder — from farmer to
                investor — has access to the knowledge, tools and support they
                need to succeed.
              </p>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#5BBF52] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#49AE40]"
              >
                Our Journey →
              </button>
            </div>

            {/* RIGHT CARD */}
            <div className="overflow-hidden rounded-xl border border-[#DDE6DF]">
              <div className="grid grid-cols-[160px_1fr]">
                <div className="relative h-[140px]">
                  <Image
                    src="/image/a plant germinating.jpg"
                    alt="Future Growth"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-gradient-to-br from-[#0A4B33] to-[#063120] text-white p-8 flex items-center">
                  <p className="font-medium leading-relaxed text-lg">
                    More capable people.
                    <br />
                    Stronger agribusinesses.
                    <br />A more food-secure Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-3xl rounded-[28px] border border-[#E3E9E4] bg-white p-6 shadow-[0_30px_80px_rgba(15,42,29,0.18)] sm:p-8 md:p-10">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-[#0F2A1D] transition hover:bg-[#EAF3ED] hover:text-[#0A4B33]"
              aria-label="Close our journey popup"
            >
              <HiX className="h-5 w-5" />
            </button>

            <div className="mb-6 pr-10">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#5C8968]">
                Our Journey
              </p>
              <h3 className="text-3xl font-bold tracking-tight text-[#0F2A1D] sm:text-4xl">
                The Story Behind the Light Institution
              </h3>
            </div>

            <div className="max-h-[70vh] overflow-y-auto pr-2 text-[15px] leading-8 text-[#3E4E47] [&_strong]:text-[#0F2A1D]">
              <div className="whitespace-pre-line">{journeyText}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
