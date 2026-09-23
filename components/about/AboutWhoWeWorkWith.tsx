import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight, HiOfficeBuilding, HiCurrencyDollar, HiShieldCheck, HiUsers, HiAcademicCap } from "react-icons/hi";

const partners = [
  { title: "Agribusinesses", icon: HiOfficeBuilding },
  { title: "Investors & Financial Institutions", icon: HiCurrencyDollar },
  { title: "Government & Development Organisations", icon: HiShieldCheck },
  { title: "Corporate & Private Sector Partners", icon: HiUsers },
  { title: "Universities & Professional Institutions", icon: HiAcademicCap },
  { title: "Agribusiness Professionals", icon: HiUsers },
];

export const AboutWhoWeWorkWith: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white" id="partners">
      <Container size="lg">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-2">
            OUR PARTNERS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] font-bold text-brand-charcoal tracking-tight leading-tight mb-4">
            Who We Work With
          </h2>
          <p className="text-sm sm:text-base text-brand-grey max-w-2xl mx-auto">
            A diverse ecosystem. A shared goal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div key={index} className="bg-[#FAF8F3] rounded-xl p-6 border border-brand-border/80 hover:border-[#1F5C3F]/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#1F5C3F]" />
                </div>
                <h3 className="font-bold text-base text-brand-charcoal">
                  {partner.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/partnerships"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1F5C3F] hover:bg-[#184932] text-white font-semibold text-sm tracking-wide transition-all"
          >
            <span>Explore Partnerships</span>
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};