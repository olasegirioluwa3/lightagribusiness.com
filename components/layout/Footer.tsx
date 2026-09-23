"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { footerNavigation } from "@/data/navigation";
import Image from "next/image";

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-brand-charcoal text-brand-parchment pt-16 pb-12 border-t border-brand-green/30">
      <Container size="lg">
        {/* Top Section: Institutional Brand & Readiness Report Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-brand-charcoal-muted">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
             <div className="relative h-20 w-[240px]">
  <Image
    src="/image/lightagribusiness logo with name.png"
    alt="Light Agribusiness Consultancy Limited"
    fill
    className="object-contain"
    priority
  />
</div>
            </div>

            <p className="text-sm text-brand-parchment/80 leading-relaxed max-w-md">
              Africa&apos;s Agribusiness Knowledge, Advisory, Systems and Technology Institution.
              Transforming agricultural potential into disciplined, investable, and resilient operations.
            </p>

            <blockquote className="border-l-2 border-brand-gold pl-3 py-1 text-xs italic text-brand-parchment/70">
              &ldquo;Darkness in agribusiness is not a lack of effort. It is a lack of light — clear
              knowledge, workable systems, and usable technology.&rdquo;
            </blockquote>
          </div>

          {/* Readiness Report Lead Capture */}
          <div className="lg:col-span-7 bg-brand-charcoal-muted/60 p-6 sm:p-8 rounded-xl border border-brand-green/20">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-1">
              Annual Flagship Publication
            </span>
            <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
              State of African Agribusiness Readiness Report
            </h4>
            <p className="text-xs sm:text-sm text-brand-parchment/70 mb-4">
              Get data-driven benchmarks on operational readiness, technology adoption, and
              investment-preparedness across commercial agriculture in Africa.
            </p>
            {subscribed ? (
              <p className="text-xs sm:text-sm text-brand-gold font-semibold py-2">
                ✓ Thank you! You have been added to the Readiness Report release list.
              </p>
            ) : (
              <form
                className="flex flex-col sm:flex-row gap-2.5 max-w-lg"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your professional email"
                  className="bg-brand-charcoal border border-brand-border/30 px-4 py-2.5 rounded-md text-sm text-white placeholder-brand-parchment/40 focus:outline-none focus:border-brand-gold flex-1"
                  required
                />
                <button
                  type="submit"
                  className="bg-brand-gold text-brand-charcoal px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-brand-gold-light transition-colors whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-brand-charcoal-muted text-sm">
          <div>
            <h5 className="font-serif font-bold text-white mb-4 tracking-wide">
              The Three Pillars
            </h5>
            <ul className="space-y-2.5 text-brand-parchment/70 text-xs sm:text-sm">
              {footerNavigation.pillars.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-brand-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-serif font-bold text-white mb-4 tracking-wide">
              The Institution
            </h5>
            <ul className="space-y-2.5 text-brand-parchment/70 text-xs sm:text-sm">
              {footerNavigation.institution.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-brand-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-serif font-bold text-white mb-4 tracking-wide">
              By Audience
            </h5>
            <ul className="space-y-2.5 text-brand-parchment/70 text-xs sm:text-sm">
              {footerNavigation.audiences.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-brand-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-serif font-bold text-white mb-4 tracking-wide">
              Locations & Reach
            </h5>
            <p className="text-xs text-brand-parchment/70 mb-3 leading-relaxed">
              Serving commercial farms, students, cooperatives, and agribusiness investors across
              West Africa and expanding continent-wide.
            </p>
            <div className="space-y-1.5 text-xs text-brand-parchment/60">
              <p>📍 Operations Hub: Nigeria</p>
              <p>✉️ info@lightagribusiness.com</p>
              <p>🌐 lightagribusiness.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Taglines */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-parchment/50">
          <p>
            © {new Date().getFullYear()} Light Agribusiness Consultancy Limited. All rights reserved.
          </p>
          <p className="italic font-serif text-brand-gold/80">
            &ldquo;Lightening Your Path in Agriculture — Practical Illumination.&rdquo;
          </p>
        </div>
      </Container>
    </footer>
  );
};
