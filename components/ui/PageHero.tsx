import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Badge, BadgeProps } from "./Badge";
import { HiChevronRight } from "react-icons/hi";

export interface PageHeroProps {
  badge?: string;
  badgeVariant?: BadgeProps["variant"];
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  layout?: "split-right" | "split-left" | "split-card" | "editorial" | "tech" | "montage";
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  actions?: React.ReactNode;
  floatingCard?: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    badge?: string;
  };
  pills?: string[];
  statBox?: {
    number: string;
    label: string;
  };
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  badgeVariant = "gold",
  title,
  subtitle,
  imageSrc,
  imageAlt,
  layout = "split-right",
  secondaryImageSrc,
  secondaryImageAlt,
  breadcrumbs,
  actions,
  floatingCard,
  pills,
  statBox,
}) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-76px)] flex items-center overflow-hidden bg-brand-charcoal text-white py-12 lg:py-16 border-b border-brand-border/20">
      {/* Ambient background glow and watermark effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl" />
        {/* Subtle radial pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <Container size="lg" className="relative z-10 w-full">
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-white/60 mb-6 font-medium flex-wrap">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <HiChevronRight className="w-3.5 h-3.5 text-white/40" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-brand-gold transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-brand-gold font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left / Content Column (Swapped if layout === 'split-left') */}
          <div
            className={`space-y-6 ${
              layout === "split-left"
                ? "lg:col-span-6 lg:order-2"
                : layout === "editorial"
                ? "lg:col-span-7"
                : "lg:col-span-7"
            }`}
          >
            {badge && (
              <div>
                <Badge variant={badgeVariant} className="shadow-md text-xs tracking-wider">
                  {badge}
                </Badge>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.12] tracking-tight">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-white/85 leading-relaxed font-sans max-w-xl">
              {subtitle}
            </p>

            <div className="h-1 w-20 bg-brand-gold rounded-full" />

            {/* Feature Pills */}
            {pills && pills.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/15 backdrop-blur-xs"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            )}

            {/* Actions Cluster */}
            {actions && <div className="pt-2 flex flex-wrap items-center gap-4">{actions}</div>}
          </div>

          {/* Right / Visual Column */}
          <div
            className={`relative flex items-center justify-center ${
              layout === "split-left"
                ? "lg:col-span-6 lg:order-1"
                : layout === "editorial"
                ? "lg:col-span-5"
                : "lg:col-span-5"
            }`}
          >
            {/* Pattern 1: Standard Split with Floating Card */}
            {layout === "split-right" && (
              <div className="relative w-full max-w-lg">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/40 group">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                </div>

                {floatingCard && (
                  <div className="absolute -bottom-6 -left-4 sm:-left-6 max-w-[280px] sm:max-w-xs bg-brand-parchment text-brand-charcoal p-4 rounded-xl shadow-2xl border border-brand-gold/40 animate-fadeIn">
                    {floatingCard.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold-dark bg-brand-gold/15 px-2 py-0.5 rounded block mb-1.5 w-fit">
                        {floatingCard.badge}
                      </span>
                    )}
                    <h4 className="font-bold text-sm text-brand-charcoal mb-1">
                      {floatingCard.title}
                    </h4>
                    <p className="text-xs text-brand-grey leading-snug">
                      {floatingCard.description}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Pattern 2: Split Left (Image on left side) */}
            {layout === "split-left" && (
              <div className="relative w-full max-w-lg">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/40 group">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                </div>

                {statBox && (
                  <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-brand-green text-white p-4 rounded-xl shadow-2xl border border-brand-green-light/40 animate-fadeIn">
                    <p className="font-extrabold text-2xl text-brand-gold">
                      {statBox.number}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                      {statBox.label}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Pattern 3: Tech Hero Layout (Glow Frame + UI Tag Pills) */}
            {layout === "tech" && (
              <div className="relative w-full max-w-lg">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-brand-gold/40 shadow-2xl shadow-brand-green/20 group">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-brand-charcoal/20" />
                </div>

                {floatingCard && (
                  <div className="absolute -bottom-6 -right-4 sm:-right-6 max-w-[280px] sm:max-w-xs bg-brand-charcoal/95 backdrop-blur-md text-white p-4 rounded-xl shadow-2xl border border-teal-400/40 animate-fadeIn">
                    {floatingCard.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-900/50 px-2 py-0.5 rounded block mb-1.5 w-fit">
                        {floatingCard.badge}
                      </span>
                    )}
                    <h4 className="font-bold text-sm text-white mb-1">
                      {floatingCard.title}
                    </h4>
                    <p className="text-xs text-white/70 leading-snug">
                      {floatingCard.description}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Pattern 4: Asymmetric 2-Image Montage Layout */}
            {layout === "montage" && (
              <div className="relative w-full max-w-md h-[340px] sm:h-[400px]">
                {/* Main Image */}
                <div className="absolute top-0 right-0 w-[80%] aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-10 group">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Secondary Offset Image */}
                {secondaryImageSrc && (
                  <div className="absolute bottom-0 left-0 w-[65%] aspect-[4/3] rounded-2xl overflow-hidden border-2 border-brand-gold/60 shadow-2xl z-20 group">
                    <Image
                      src={secondaryImageSrc}
                      alt={secondaryImageAlt || "Secondary view"}
                      fill
                      sizes="(max-width: 1024px) 60vw, 30vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                )}

                {statBox && (
                  <div className="absolute top-4 left-0 z-30 bg-brand-charcoal/90 backdrop-blur-md p-3 rounded-lg border border-brand-gold/50 shadow-lg">
                    <span className="font-bold text-lg text-brand-gold block leading-none">
                      {statBox.number}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-white/80">
                      {statBox.label}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Pattern 5: Editorial Research Feature */}
            {layout === "editorial" && (
              <div className="relative w-full max-w-md">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent" />
                  
                  {floatingCard && (
                    <div className="absolute bottom-6 left-6 right-6 bg-brand-charcoal/90 backdrop-blur-md p-4 rounded-xl border border-brand-gold/40">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold block mb-1">
                        {floatingCard.badge || "Featured Publication"}
                      </span>
                      <h4 className="font-bold text-sm text-white leading-snug">
                        {floatingCard.title}
                      </h4>
                      <p className="text-xs text-white/70 mt-1">
                        {floatingCard.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Pattern 6: Card / Contact Direct Format */}
            {layout === "split-card" && (
              <div className="relative w-full max-w-md">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group mb-4">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {floatingCard && (
                  <div className="bg-brand-parchment text-brand-charcoal p-5 rounded-xl border border-brand-green/30 shadow-xl">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-green">
                        {floatingCard.badge}
                      </span>
                    </div>
                    <h4 className="font-bold text-base text-brand-charcoal mb-1">
                      {floatingCard.title}
                    </h4>
                    <p className="text-xs text-brand-grey leading-relaxed">
                      {floatingCard.description}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
