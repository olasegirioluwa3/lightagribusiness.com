import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

export const AboutIdea: React.FC = () => {
  return (
    <section className="bg-[#FAF8F3] py-12 lg:py-16">
      <Container size="lg">
        <div className="grid lg:grid-cols-[0.9fr_1.3fr] gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="block mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#1F5C3F]">
              The Idea Behind Light
            </span>

            <h2 className="text-3xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-brand-charcoal mb-4">
              Practical illumination.
            </h2>

            <p className="text-sm lg:text-[15px] leading-relaxed text-brand-grey max-w-md mb-6">
              People make better decisions when they can clearly see what
              matters. We simply help reveal the important signals beneath the
              noise so practical action becomes easier.
            </p>

            <Link
              href="#approach"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F5C3F] hover:text-[#184932] transition-colors"
            >
              <span>Our Philosophy</span>
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Image Card */}
          <div className="relative h-[240px] sm:h-[280px] lg:h-[300px] overflow-hidden rounded-xl">
            <Image
              src="/image/a plant germinating.jpg"
              alt="Practical illumination"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/20 to-black/55" />

            {/* Quote */}
            <div className="absolute inset-y-0 right-0 flex items-center">
  <div className="max-w-[320px] rounded-2xl bg-black/45 backdrop-blur-md border border-white/10 px-6 py-6 lg:px-8 lg:py-8 text-white shadow-xl">
                <div className="text-5xl leading-none mb-2 opacity-80">
                  “
                </div>

                <p className="text-base lg:text-lg font-medium leading-relaxed">
                  We don&apos;t just provide information or prescribe solutions. We
                  help you understand, decide and take practical action.
                </p>

                <p className="mt-4 text-xs uppercase tracking-wider text-white/70">
                  Light Agribusiness Consultancy
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};