import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const AboutHero: React.FC = () => {
  return (
    <section className="">
      <Container size="full">
        <div className="relative overflow-hidden h-[400px] lg:h-[420px]">
          {/* Background Image */}
          <Image
            src="/image/middle-aged man with lighagrios tab.png"
            alt="Light Agribusiness"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07130D]/95 via-[#07130D]/75 to-[#07130D]/30" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="w-full px-6 sm:px-8 lg:px-12">
              <div className="max-w-[520px]">
                {/* Pill */}
                <div className="inline-flex items-center rounded-full bg-brand-green px-4 py-1.5 mb-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    About Light
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-white font-bold leading-[1.1] tracking-tight text-3xl sm:text-4xl lg:text-[48px]">
                  We exist to make agriculture easier to understand, manage and
                  grow.
                </h1>

                {/* Description */}
                <p className="mt-5 text-sm lg:text-base text-white/80 leading-relaxed max-w-[460px]">
                  Light Agribusiness Consultancy Limited helps agribusinesses,
                  institutions, investors and professionals navigate
                  agricultural complexity through practical advisory, capacity
                  development and technology built around African realities.
                </p>

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href="#ecosystem"
                    className="inline-flex items-center rounded-full bg-brand-green px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-brand-green-dark"
                  >
                    What We Do
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right-side Floating Text */}
          <div className="hidden lg:block absolute right-10 bottom-10 z-10">
            <p className="text-white font-semibold text-base leading-tight text-right">
              Agribusiness.
              <br />
              Systems.
              <br />
              Knowledge.
              <br />
              Technology.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};