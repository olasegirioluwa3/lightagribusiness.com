"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import {
  HiUsers,
  HiBriefcase,
  HiCurrencyDollar,
  HiLibrary,
  HiOfficeBuilding,
  HiAcademicCap,
} from "react-icons/hi";

const audienceCategories = [
  { title: "Farmers & Agripreneurs", icon: HiUsers },
  { title: "Agribusiness Owners & Managers", icon: HiBriefcase },
  { title: "Investors & Financial Institutions", icon: HiCurrencyDollar },
  { title: "Government & Development Partners", icon: HiLibrary },
  { title: "Corporates & Private Sector", icon: HiOfficeBuilding },
  { title: "Students & Young Professionals", icon: HiAcademicCap },
];

export const AdvisoryWhoWeWorkWith: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF9F5] border-b border-[#E8E4DA]">
      <Container size="lg">
        {/* Header matching mockup */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32] block mb-2">
            WHO WE WORK WITH
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[34px] text-[#122216] tracking-tight leading-tight mb-3">
            Collaborating for stronger agribusinesses.
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
            We partner with organisations and individuals who are committed to building a more productive and resilient agri-food system.
          </p>
        </div>

        {/* 6 Category Tiles matching mockup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {audienceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E5E0D5] rounded-xl p-4 flex flex-col items-center text-center hover:border-[#2E7D32] hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#FAF9F5] border border-[#E8E4DA] flex items-center justify-center text-[#2E7D32] group-hover:bg-[#2E7D32] group-hover:text-white transition-colors mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-xs text-[#122216] leading-tight">
                  {cat.title}
                </h4>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
