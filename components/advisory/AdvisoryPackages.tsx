"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";

interface AdvisoryPackage {
  title: string;
  timeline: string;
  scope: string;
  deliverable: string;
  bundle: string;
  badge: string;
  popular?: boolean;
}

const packages: AdvisoryPackage[] = [
  {
    title: "Fixed-Fee Farm Diagnostic & Audit",
    timeline: "5 to 10 Business Days",
    scope: "On-site audit mapping exact yield leaks, feed waste, mortality causes, and informal cashflow drains.",
    deliverable: "A prioritized 1-page 'What To Do Next' action sheet + full benchmark audit.",
    bundle: "Includes 6 months of LightAgriOS Starter Tier.",
    badge: "Flagship Entry",
    popular: true,
  },
  {
    title: "Custom SOP Development & Workflow Design",
    timeline: "2 to 4 Weeks",
    scope: "Engineering plain-language Standard Operating Procedures that farm floor workers actually follow.",
    deliverable: "Visual checklists, biosecurity protocols, feeding schedules, and inventory controls.",
    bundle: "Configured directly into LightAgriOS daily task workflows.",
    badge: "Systems Design",
  },
  {
    title: "Enterprise Transformation & Investment Readiness",
    timeline: "2 to 6 Months Retainer",
    scope: "End-to-end restructuring for commercial estates, multi-site outgrowers, and bank/DFI financing.",
    deliverable: "Institutional governance, audited financial models, investor-grade dashboards, and management coaching.",
    bundle: "Includes full LightAgriOS Enterprise multi-farm deployment.",
    badge: "Enterprise",
  },
];

export const AdvisoryPackages: React.FC = () => {
  return (
    <section className="py-4 sm:py-6 bg-[#FAF9F5] border-b border-[#E8E4DA]">
      <Container size="lg">
        {/* Header */}
        <div className="max-w-2xl mb-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32] block mb-1">
            OFFER LADDER
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[34px] text-[#122216] tracking-tight leading-tight mb-2">
            Operational Advisory Packages
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] leading-snug">
            Priced for transformation and verified ROI, never simple billable hours. Every engagement includes a concrete, tangible deliverable.
          </p>
        </div>

        {/* 3 Package Cards matching mockup & retained content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`bg-white rounded-2xl p-4 sm:p-5 border flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md ${
                pkg.popular
                  ? "border-[#2E7D32] ring-2 ring-[#2E7D32]/20"
                  : "border-[#E5E0D5] hover:border-[#2E7D32]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                      pkg.popular
                        ? "bg-[#2E7D32] text-white"
                        : "bg-[#EAF3EC] text-[#2E7D32]"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#777777]">
                    {pkg.timeline}
                  </span>
                </div>

                <h3 className="font-sans font-black text-lg text-[#122216] leading-snug mb-2">
                  {pkg.title}
                </h3>

                <p className="text-xs text-[#555555] leading-snug mb-4">
                  {pkg.scope}
                </p>

                <div className="space-y-2 pt-3 border-t border-[#F0ECE3] text-xs">
                  <div>
                    <span className="font-bold text-[#122216] block mb-0.5">
                      Key Deliverable:
                    </span>
                    <span className="text-[#666666] leading-snug block">
                      {pkg.deliverable}
                    </span>
                  </div>

                  <div className="bg-[#FAF9F5] p-2 rounded-lg border border-[#E8E4DA]">
                    <span className="font-bold text-[#2E7D32] block mb-0.5">
                      Bundled Technology:
                    </span>
                    <span className="text-[#666666] leading-snug block">
                      {pkg.bundle}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#F0ECE3]">
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 group ${
                    pkg.popular
                      ? "bg-[#2E7D32] hover:bg-[#1E5D22] text-white shadow-md"
                      : "bg-[#FAF9F5] hover:bg-white text-[#122216] border border-[#E0DCD3] hover:border-[#2E7D32]"
                  }`}
                >
                  <span>Request Proposal</span>
                  <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
