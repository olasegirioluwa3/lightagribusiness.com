import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

const pillars = [
  {
    number: "01",
    title: "Knowledge &\nCapacity Development",
    titleSingleLine: "Knowledge & Capacity Development",
    body: "Build the people behind better agribusinesses.",
    cta: "Explore Knowledge & Capacity",
    href: "/academy",
    image: "/image/lightagribusiness-gallery (22).jpg",
    numberBg: "bg-[#1F5C3F]", // Brand forest green
    ctaColor: "text-brand-green group-hover:text-brand-green-light",
  },
  {
    number: "02",
    title: "Advisory &\nBusiness Systems",
    titleSingleLine: "Advisory & Business Systems",
    body: "Fix the systems behind performance.",
    cta: "Explore Advisory & Business Systems",
    href: "/advisory",
    image: "/image/lightagribusiness-gallery (21).jpg",
    numberBg: "bg-[#C69214]", // Brand gold / amber
    ctaColor: "text-brand-gold-dark group-hover:text-brand-gold",
  },
  {
    number: "03",
    title: "LightAgriOS",
    titleSingleLine: "LightAgriOS",
    body: "See your agribusiness clearly.",
    cta: "Explore LightAgriOS",
    href: "/lightagrios",
    image: "/image/middle-aged man with lighagrios tab.png",
    numberBg: "bg-[#0D6B63]", // Deep teal
    ctaColor: "text-[#0D6B63] group-hover:text-teal-600",
  },
];

export const EcosystemPillars: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-22 lg:py-24 overflow-hidden bg-[#0B1D14]">
      {/* Subtle Agricultural Landscape Texture Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/lightagribusiness-gallery (37).jpg"
          alt="Agricultural landscape background"
          fill
          className="object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D14]/95 via-[#0B1D14]/85 to-[#0B1D14]/95" />
      </div>

      <Container size="lg" className="relative z-10">
        {/* Top Header Block: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start lg:items-end mb-12 sm:mb-16">
          {/* Left: Eyebrow + Headline */}
          <div className="lg:col-span-7">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-emerald-400/90 block mb-2.5">
              The Light Ecosystem
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2]">
              One ecosystem. Three ways
              <span className="block mt-1 sm:mt-1.5">
                to move agribusiness forward.
              </span>
            </h2>
          </div>

          {/* Right: Paragraph + CTA Link */}
          <div className="lg:col-span-5 lg:pb-1 space-y-3">
            <p className="text-sm sm:text-[15px] text-white/80 leading-relaxed max-w-xl">
              Our three pillars work together &mdash; building capability, fixing
              systems and creating visibility &mdash; to help agribusinesses grow,
              become more investable, and create lasting impact.
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-brand-gold transition-colors group"
              >
                <span>Explore the Light Ecosystem</span>
                <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/20 hover:shadow-2xl transition-all duration-300 group flex flex-col hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                <Image
                  src={pillar.image}
                  alt={pillar.titleSingleLine}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Number Badge lying in between the image section and text section */}
              <div className="relative px-6 sm:px-7 -mt-6 sm:-mt-7 z-10">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${pillar.numberBg} flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-105`}
                >
                  {pillar.number}
                </div>
              </div>

              {/* White Card Body - 100% Leftfully Aligned */}
              <div className="bg-white px-6 sm:px-7 pt-4 pb-6 sm:pb-7 flex flex-col flex-1 justify-between text-left">
                <div>
                  {/* Pillar Title */}
                  <h3 className="font-serif font-bold text-xl sm:text-[22px] text-gray-900 leading-snug group-hover:text-brand-green transition-colors duration-200 text-left">
                    {pillar.titleSingleLine}
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="text-xs sm:text-[14px] text-gray-600 leading-relaxed mt-2.5 sm:mt-3 text-left">
                    {pillar.body}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-6 mt-6 border-t border-gray-100 text-left">
                  <Link
                    href={pillar.href}
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold ${pillar.ctaColor} transition-colors group/link`}
                  >
                    <span>{pillar.cta}</span>
                    <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
