import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const AboutCommitment = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B150F] text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/footers image - sunset (1).jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B150F]/95 via-[#0B150F]/75 to-[#0B150F]/90" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="py-16 text-center sm:py-20 lg:py-24">

          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8BC34A]">
            Our Commitment
          </p>

          <h2 className="mb-4 text-3xl font-bold text-white sm:text-[42px]">
            LET&apos;S LIGHTEN THE PATH FORWARD.
          </h2>

          <p className="mx-auto mb-10 max-w-4xl text-[15px] leading-relaxed text-white/80">
            Whether you need to improve an agribusiness,
            build capability, explore investment readiness,
            strengthen an institution or understand how
            technology can help — there is a clearer next step.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">

            <Link
              href="/advisory"
              className="px-7 py-3 rounded-full bg-[#2EA64D] text-white font-medium hover:bg-[#249040]"
            >
              Improve an Agribusiness
            </Link>

            <Link
              href="/training"
              className="px-7 py-3 rounded-full bg-[#0E4B34] text-white font-medium hover:bg-[#0A3820]"
            >
              Explore Training
            </Link>

            <Link
              href="/lightagrios"
              className="px-7 py-3 rounded-full bg-[#0E3F67] text-white font-medium hover:bg-[#083453]"
            >
              Explore LightAgriOS
            </Link>

            <Link
              href="/partnerships"
              className="px-7 py-3 rounded-full border-2 border-[#153122] bg-white/80 text-[#153122] font-medium hover:bg-white"
            >
              Discuss a Partnership
            </Link>

          </div>
        </div>
      </Container>
    </section>
  );
};