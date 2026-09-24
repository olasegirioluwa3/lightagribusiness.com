import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const audienceLinks = [
  {
    label: "Improve an Agribusiness",
    sub: "Get advisory support",
    href: "/advisory",
  },
  {
    label: "Explore Investment Support",
    sub: "Build investment readiness",
    href: "/partnerships#investors",
  },
  {
    label: "Train My Team",
    sub: "Explore training programmes",
    href: "/academy",
  },
  {
    label: "Explore LightAgriOS",
    sub: "Request a demo",
    href: "/lightagrios",
  },
  {
    label: "Partner With Light",
    sub: "Start a conversation",
    href: "/partnerships",
  },
  {
    label: "Work With Light",
    sub: "Join our team",
    href: "/contact",
  },
];

export const FinalCTABanner: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#141d15] text-white overflow-hidden">
      {/* Background image with clear visibility and balanced contrast */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/lightagribusiness-gallery (11).jpg"
          alt="Agriculture landscape background"
          fill
          className="object-cover object-center opacity-70 sm:opacity-80"
          priority={false}
        />
        {/* Soft contrast gradient to keep text legible while preserving image clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
      </div>

      <Container size="lg" className="relative z-10">
        {/* Header copy */}
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#d4e9c7] block mb-2.5">
            LET&apos;S LIGHTEN THE PATH FORWARD
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight leading-tight mb-3">
            WHAT ARE YOU TRYING TO BUILD?
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl mx-auto">
            Tell us what you need. We&apos;ll help you find the right path forward.
          </p>
        </div>

        {/* 6 Pathway Cards Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {audienceLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-xl bg-white hover:bg-emerald-50/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[96px]"
            >
              <span className="text-xs sm:text-[13px] font-bold text-gray-900 group-hover:text-brand-green transition-colors leading-tight mb-1">
                {link.label}
              </span>
              <span className="text-[10px] sm:text-[11px] text-gray-500 font-normal leading-tight">
                {link.sub}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
