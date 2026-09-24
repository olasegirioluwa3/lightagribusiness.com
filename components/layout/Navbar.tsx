"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { headerNavigation } from "@/data/navigation";
import {
  HiMenu,
  HiX,
  HiChevronDown,
  HiArrowRight,
  HiAcademicCap,
  HiChartBar,
  HiChip,
} from "react-icons/hi";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobilePillarsOpen, setIsMobilePillarsOpen] = useState(false);
  const pathname = usePathname();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown and mobile menu on page navigation
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    if (
      pathname.startsWith("/academy") ||
      pathname.startsWith("/advisory") ||
      pathname.startsWith("/lightagrios")
    ) {
      setIsMobilePillarsOpen(true);
    }
  }, [pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  const getPillarIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "academy":
        return <HiAcademicCap className="w-5 h-5 text-amber-700" />;
      case "advisory":
        return <HiChartBar className="w-5 h-5 text-slate-800" />;
      case "lightagrios":
        return <HiChip className="w-5 h-5 text-teal-700" />;
      default:
        return null;
    }
  };

  const getPillarTheme = (label: string) => {
    switch (label.toLowerCase()) {
      case "academy":
        return {
          iconBg: "bg-amber-100 group-hover/item:bg-amber-200/80",
          badge: "bg-amber-50 text-amber-800 border-amber-200/80",
          hoverBorder: "hover:border-amber-300",
        };
      case "advisory":
        return {
          iconBg: "bg-slate-100 group-hover/item:bg-slate-200/80",
          badge: "bg-slate-100 text-slate-800 border-slate-200/80",
          hoverBorder: "hover:border-slate-300",
        };
      case "lightagrios":
        return {
          iconBg: "bg-teal-100 group-hover/item:bg-teal-200/80",
          badge: "bg-teal-50 text-teal-800 border-teal-200/80",
          hoverBorder: "hover:border-teal-300",
        };
      default:
        return {
          iconBg: "bg-brand-parchment",
          badge: "bg-brand-border/50 text-brand-charcoal",
          hoverBorder: "hover:border-brand-green/30",
        };
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-brand-parchment/95 backdrop-blur-md shadow-sm border-b border-brand-border/60 py-3"
          : "bg-brand-parchment border-b border-brand-border/40 py-4"
      }`}
    >
      <Container size="full">
        <div className="flex items-center justify-between">
          {/* Institutional Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-green group-hover:scale-105 transition-transform duration-200">
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
              <span className="font-bold text-2xl sm:text-3xl text-brand-charcoal tracking-tight leading-none group-hover:text-brand-green transition-colors">
                LIGHT
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-brand-grey leading-tight">
                  Agribusiness
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-brand-grey leading-tight">
                  Consultancy Limited
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {headerNavigation.map((item) => {
              if (item.children && item.children.length > 0) {
                const isAnyChildActive = item.children.some((child) =>
                  pathname.startsWith(child.href)
                );

                return (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-md text-sm font-medium transition-colors ${
                        isAnyChildActive || isDropdownOpen
                          ? "text-brand-green font-bold underline underline-offset-4 decoration-2"
                          : "text-brand-charcoal hover:text-brand-green hover:bg-brand-green/5"
                      }`}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <HiChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isDropdownOpen
                            ? "rotate-180 text-brand-green"
                            : "text-brand-grey"
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown Panel */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1.5 w-[380px] bg-[#FAF8F3] border border-brand-border/90 rounded-2xl shadow-xl p-3.5 z-50 animate-fadeIn transition-all duration-200">
                        <div className="px-2 pt-1 pb-2 border-b border-brand-border/60 mb-2 flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-grey">
                            Transformation Pillars
                          </span>
                          <span className="text-[10px] font-medium text-brand-grey/80">
                            Knowledge · Advisory · Tech
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          {item.children.map((child) => {
                            const isChildActive = pathname === child.href;
                            const theme = getPillarTheme(child.label);

                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsDropdownOpen(false)}
                                className={`group/item block p-2.5 rounded-xl border transition-all duration-200 ${
                                  isChildActive
                                    ? "bg-white border-brand-green shadow-sm ring-1 ring-brand-green/30"
                                    : `bg-white/70 border-brand-border/50 hover:bg-white ${theme.hoverBorder} hover:shadow-sm`
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${theme.iconBg}`}
                                  >
                                    {getPillarIcon(child.label)}
                                  </div>
                                  <div className="flex items-center justify-between flex-1">
                                    <span className="text-sm font-semibold text-brand-charcoal group-hover/item:text-brand-green transition-colors">
                                      {child.label}
                                    </span>
                                    {child.badge && (
                                      <span
                                        className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border ${theme.badge}`}
                                      >
                                        {child.badge}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-2.5 pt-2.5 border-t border-brand-border/60 px-2 flex items-center justify-between">
                          <Link
                            href="/approach"
                            onClick={() => setIsDropdownOpen(false)}
                            className="text-xs font-semibold text-brand-green hover:text-brand-green-dark flex items-center gap-1.5 group/link"
                          >
                            <span>Our 5-Step Approach</span>
                            <HiArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                          </Link>
                          <Link
                            href="/partnerships"
                            onClick={() => setIsDropdownOpen(false)}
                            className="text-xs text-brand-grey hover:text-brand-charcoal transition-colors"
                          >
                            Partnerships &rarr;
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand-green font-bold underline underline-offset-4 decoration-2"
                      : "text-brand-charcoal hover:text-brand-green hover:bg-brand-green/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/advisory"
              variant="outline"
              size="sm"
              className="text-xs uppercase tracking-wider"
            >
              Diagnostic
            </Button>
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="text-xs uppercase tracking-wider shadow-gold"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-brand-charcoal hover:text-brand-green hover:bg-brand-green/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-brand-border/60 pb-3 space-y-2 animate-fadeIn">
            {headerNavigation.map((item) => {
              if (item.children && item.children.length > 0) {
                const isAnyChildActive = item.children.some((child) =>
                  pathname.startsWith(child.href)
                );

                return (
                  <div key={item.label} className="rounded-lg overflow-hidden">
                    <button
                      onClick={() => setIsMobilePillarsOpen((prev) => !prev)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        isAnyChildActive
                          ? "text-brand-green font-bold underline underline-offset-4 decoration-2"
                          : "text-brand-charcoal hover:bg-brand-green/5"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.label}</span>
                        <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 bg-brand-border/50 text-brand-charcoal rounded">
                          3 Pillars
                        </span>
                      </div>
                      <HiChevronDown
                        className={`w-5 h-5 text-brand-grey transition-transform duration-200 ${
                          isMobilePillarsOpen ? "rotate-180 text-brand-green" : ""
                        }`}
                      />
                    </button>

                    {/* Accordion Sub-items */}
                    {isMobilePillarsOpen && (
                      <div className="pl-3 pr-1 py-1.5 space-y-1.5 border-l-2 border-brand-green/30 ml-3 my-1">
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href;
                          const theme = getPillarTheme(child.label);

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className={`block p-2.5 rounded-lg transition-colors ${
                                isChildActive
                                  ? "bg-white font-bold text-brand-green border border-brand-green/40 shadow-sm underline decoration-2 decoration-brand-green underline-offset-4"
                                  : "bg-white/60 hover:bg-white text-brand-charcoal border border-brand-border/40"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div
                                    className={`w-6 h-6 rounded flex items-center justify-center shrink-0 ${theme.iconBg}`}
                                  >
                                    {getPillarIcon(child.label)}
                                  </div>
                                  <span className="text-sm font-semibold">
                                    {child.label}
                                  </span>
                                </div>
                                {child.badge && (
                                  <span
                                    className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border ${theme.badge}`}
                                  >
                                    {child.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                    isActive
                      ? "text-brand-green font-bold underline underline-offset-4 decoration-2"
                      : "text-brand-charcoal hover:bg-brand-green/5"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="pt-4 flex flex-col gap-2.5 border-t border-brand-border/40 mt-3">
              <Button href="/advisory" variant="outline" size="md" className="w-full">
                Diagnostic
              </Button>
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Contact
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
