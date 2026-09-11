"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { headerNavigation } from "@/data/navigation";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-brand-parchment/95 backdrop-blur-md shadow-sm border-b border-brand-border/60 py-3"
          : "bg-brand-parchment border-b border-brand-border/40 py-4"
      }`}
    >
      <Container size="lg">
        <div className="flex items-center justify-between">
          {/* Institutional Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-green group-hover:scale-105 transition-transform duration-200">
              <img
                src="/image/lightagribusiness logo.png"
                alt="Light Agribusiness Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl sm:text-2xl text-brand-charcoal tracking-tight leading-none group-hover:text-brand-green transition-colors">
                LIGHT
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-brand-grey leading-tight mt-0.5">
                Agribusiness Institution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {headerNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand-green font-bold bg-brand-green/10"
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
              href="/academy"
              variant="primary"
              size="sm"
              className="text-xs uppercase tracking-wider shadow-gold"
            >
              Academy
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
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                    isActive
                      ? "text-brand-green font-bold bg-brand-green/10"
                      : "text-brand-charcoal hover:bg-brand-green/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 bg-brand-border/50 text-brand-charcoal rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-xs text-brand-grey mt-0.5 font-normal">
                      {item.description}
                    </p>
                  )}
                </Link>
              );
            })}

            <div className="pt-4 flex flex-col gap-2.5 border-t border-brand-border/40 mt-3">
              <Button href="/advisory" variant="outline" size="md" className="w-full">
                Request a Farm Diagnostic
              </Button>
              <Button href="/academy" variant="primary" size="md" className="w-full">
                Explore Academy Courses
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
