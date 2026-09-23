import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const AboutCommitment = () => {
  return (
    <section className="relative overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/image/agricultural-landscape.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]" />

      <Container size="lg" className="relative z-10">
        <div className="py-20 text-center">

          <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#6C8A72] mb-3">
            Our Commitment
          </p>

          <h2 className="text-[42px] font-bold text-[#123122] mb-4">
            LET&apos;S LIGHTEN THE PATH FORWARD.
          </h2>

          <p className="max-w-4xl mx-auto text-[#4F5D56] text-[15px] leading-relaxed mb-10">
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
              className="px-7 py-3 rounded-full bg-[#E2B632] text-white font-medium hover:bg-[#D4A820]"
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