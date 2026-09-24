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
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <div className="relative w-full h-full">
                 <Image
    src="/image/lightagribusiness logo.png"
    alt="Light Agribusiness Logo"
    fill
    className="object-contain"
  />
</div>
              </div>
              <div className="flex items-center gap-2">
                <span className=" font-bold text-4xl text-brand-parchment tracking-tight leading-none">
                  LIGHT
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold uppercase tracking-widest text-brand-parchment/80 leading-tight">
                    Agribusiness
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-brand-parchment/80 leading-tight">
                    Consultancy Limited
                  </span>
                </div>
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
            <h4 className=" text-lg sm:text-xl font-bold text-white mb-2">
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
            <h5 className=" font-bold text-white mb-4 tracking-wide">
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
            <h5 className=" font-bold text-white mb-4 tracking-wide">
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
            <h5 className=" font-bold text-white mb-4 tracking-wide">
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
            <h5 className=" font-bold text-white mb-4 tracking-wide">
              Locations & Reach
            </h5>
            <p className="text-xs text-brand-parchment/70 mb-3 leading-relaxed">
              Serving commercial farms, students, cooperatives, and agribusiness investors across
              West Africa and expanding continent-wide.
            </p>
            <div className="space-y-1.5 text-xs text-brand-parchment/60 mb-4">
              <p> Operations Hub: Nigeria</p>
              <p> info@lightagribusiness.com</p>
              <p>lightagribusiness.com</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/light-agribusiness/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-parchment/60 hover:text-brand-gold transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/19QKVKMtTX/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-parchment/60 hover:text-brand-gold transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://x.com/LAB_Consultz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-parchment/60 hover:text-brand-gold transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lightagribusiness/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-parchment/60 hover:text-brand-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@LIGHTAGRIBUSINESS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-parchment/60 hover:text-brand-gold transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Taglines */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-parchment/50">
          <p>
            © {new Date().getFullYear()} Light Agribusiness Consultancy Limited. All rights reserved.
          </p>
          <p className="italic  text-brand-gold/80">
            &ldquo;Lightening Your Path in Agriculture — Practical Illumination.&rdquo;
          </p>
        </div>
      </Container>
    </footer>
  );
};
