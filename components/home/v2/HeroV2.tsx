"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HiArrowRight, HiChevronRight } from "react-icons/hi";

export const HeroV2: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    "/video/agriculture-potential.mp4",
    "/video/practical-learning.mp4",
  ];

  const handleVideoEnd = () => setCurrentVideo((p) => (p + 1) % videos.length);
  const handleVideoLoad = () => {
    setIsLoaded(true);
    videoRef.current?.play().catch(console.error);
  };

  useEffect(() => {
    setIsLoaded(false);
    videoRef.current?.load();
  }, [currentVideo]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-charcoal">
      {/* Background video - legible with balanced contrast */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          key={currentVideo}
          src={videos[currentVideo]}
          autoPlay
          muted
          loop={false}
          playsInline
          onEnded={handleVideoEnd}
          onLoadedData={handleVideoLoad}
          className="w-full h-full object-cover"
          style={{ opacity: isLoaded ? 0.6 : 0, transition: "opacity 1.2s ease" }}
        />
        {/* Directional contrast overlay - dark on left for text legibility, clear on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal/60 to-brand-charcoal/30" />
        {/* Bottom subtle blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-charcoal/90 to-transparent" />
      </div>

      <Container size="lg" className="relative z-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
                Agriculture · Business · Innovation
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
              AGRICULTURE IS COMPLEX.{" "}
              <span className="text-brand-gold block mt-1">
                YOUR NEXT MOVE SHOULDN&apos;T BE.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl font-normal">
              Light Agribusiness Consultancy helps agribusinesses, institutions,
              and investors navigate agricultural complexity through practical
              advisory, professions capacity development and technology built
              around African realities.
            </p>

            {/* CTA cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="/advisory"
                variant="primary"
                size="lg"
                className="group bg-brand-green hover:bg-brand-green-light text-white font-semibold px-7 py-3.5 rounded-md shadow-lg shadow-black/20 flex items-center gap-2"
              >
                <span>Work With Light</span>
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/about"
                variant="outline"
                size="lg"
                className="border border-white/50 text-white bg-black/20 backdrop-blur-xs hover:bg-white/10 hover:border-white px-7 py-3.5 rounded-md font-semibold"
              >
                Explore Our Work
              </Button>
            </div>

            {/* Quick breadcrumb navigation links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 border-t border-white/15">
              {[
                { label: "Improve an Agribusiness", href: "/advisory" },
                { label: "Explore Investment Support", href: "/partnerships#investors" },
                { label: "Upskill Your Team", href: "/academy" },
                { label: "Explore LightAgriOS", href: "/lightagrios" },
                { label: "Partner With Light", href: "/partnerships" },
                { label: "Work With Light", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 text-xs text-white/60 hover:text-brand-gold transition-colors font-medium"
                >
                  <HiChevronRight className="w-3 h-3 text-brand-gold/70" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: 2x2 Visual Mosaic + Brand Statement (Matching Wireframe 2) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-md space-y-4">
              {/* 2x2 Grid of Images */}
              <div className="grid grid-cols-2 gap-3">
                {/* Tile 1: Greenhouse Agronomy */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20 shadow-xl group">
                  <Image
                    src="/image/lightagribusiness-gallery (15).jpg"
                    alt="Greenhouse agronomy inspection"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Tile 2: Poultry Production */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20 shadow-xl group">
                  <Image
                    src="/image/lightagribusiness-gallery (20).jpg"
                    alt="Poultry farm operations"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Tile 3: Technology / Analytics */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20 shadow-xl group">
                  <Image
                    src="/image/advisory-man presenting analytics1.png"
                    alt="Data analytics and decision systems"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Tile 4: Aerial Farm Landscape */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20 shadow-xl group">
                  <Image
                    src="/image/lightagribusiness-gallery (37).jpg"
                    alt="Lush agricultural landscape"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* 4-Line Brand Statement below grid */}
              <div className="text-right pt-2 space-y-1">
                <p className="text-sm font-semibold text-white/90">Better knowledge.</p>
                <p className="text-sm font-semibold text-white/90">Stronger systems.</p>
                <p className="text-sm font-semibold text-white/90">Smarter technology.</p>
                <p className="text-sm font-semibold text-brand-gold">Greater impact.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
