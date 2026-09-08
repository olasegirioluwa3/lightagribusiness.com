import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HiArrowRight, HiHome } from "react-icons/hi";

export default function NotFound() {
  const quickLinks = [
    {
      title: "Light Agribusiness Academy",
      desc: "Courses, practical certifications & SIWES placements",
      href: "/academy",
      badge: "Pillar 1",
    },
    {
      title: "Light Advisory Services",
      desc: "Farm diagnostics, plain-language SOPs & systems",
      href: "/advisory",
      badge: "Pillar 2",
    },
    {
      title: "LightAgriOS Platform",
      desc: "Farm management software & operational records",
      href: "/lightagrios",
      badge: "Pillar 3",
    },
  ];

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 bg-radiating-subtle">
      <Container size="md">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          {/* Brand illumination icon */}
          <div className="w-16 h-16 rounded-2xl bg-brand-green text-brand-gold flex items-center justify-center mx-auto shadow-green">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-9 h-9"
            >
              <path d="M12 2v4" />
              <path d="M4.93 4.93l2.83 2.83" />
              <path d="M2 12h4" />
              <path d="M19.07 4.93l-2.83 2.83" />
              <path d="M22 12h-4" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M5 20h14" />
              <path d="M8 16h8" />
            </svg>
          </div>

          <div className="inline-block">
            <Badge variant="gold">Error 404 · Page Not Found</Badge>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
            We will not leave you in the dark.
          </h1>

          <p className="text-base sm:text-lg text-brand-grey leading-relaxed">
            The page you are looking for has either moved, was renamed, or does not exist.
            Let us illuminate the right path forward.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button href="/" variant="primary" size="md" className="w-full sm:w-auto shadow-gold group">
              <HiHome className="mr-2 w-4 h-4" />
              <span>Return to Homepage</span>
            </Button>
            <Button href="/contact" variant="outline" size="md" className="w-full sm:w-auto">
              Contact Support
            </Button>
          </div>

          {/* Quick Pillar Pathways */}
          <div className="pt-8 mt-8 border-t border-brand-border/60 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-4 text-center sm:text-left">
              Or explore the Three Pillars:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="bg-brand-parchment-card p-4 rounded-xl border border-brand-border/60 hover:border-brand-green/50 hover:shadow-sm transition-all group block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-dark block mb-1">
                    {link.badge}
                  </span>
                  <h3 className="font-serif font-bold text-sm text-brand-charcoal group-hover:text-brand-green transition-colors mb-1">
                    {link.title}
                  </h3>
                  <p className="text-xs text-brand-grey leading-tight">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
