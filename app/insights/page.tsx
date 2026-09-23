"use client";

import React, { useState } from "react";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { ResearchDomains } from "@/components/insights/ResearchDomains";
import { InsightsReportGrid } from "@/components/insights/InsightsReportGrid";
import { GlobalExpertiseBanner } from "@/components/insights/GlobalExpertiseBanner";
import { PublicationAndTechSection } from "@/components/insights/PublicationAndTechSection";
import { EngageWithUs } from "@/components/insights/EngageWithUs";
import { InsightsCTA } from "@/components/insights/InsightsCTA";
import { ReportModal, InsightReport } from "@/components/insights/ReportModal";

export default function InsightsPage() {
  const [selectedDomain, setSelectedDomain] = useState<string>("All Categories");
  const [activeReport, setActiveReport] = useState<InsightReport | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenReport = (report: InsightReport) => {
    setActiveReport(report);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveReport(null);
  };

  return (
    <main className="min-h-screen bg-[#F4F1E8]">
      {/* 1. Hero Section */}
      <InsightsHero />

      {/* 2. Research Domains Quick Filter Bar */}
      <ResearchDomains
        selectedDomain={selectedDomain}
        onSelectDomain={setSelectedDomain}
      />

      {/* 3. Insights & Reports (5-Column Grid with Top Right Filters) */}
      <InsightsReportGrid
        selectedDomain={selectedDomain}
        onSelectDomain={setSelectedDomain}
        onOpenReport={handleOpenReport}
      />

      {/* 4. Global Expertise, Local Context Banner */}
      <GlobalExpertiseBanner />

      {/* 5. Publication Timeline + Data & Tech Integration + Case Study */}
      <PublicationAndTechSection />

      {/* 6. Engage With Us Action Cards */}
      <EngageWithUs />

      {/* 7. Strategic Bottom CTA */}
      <InsightsCTA />

      {/* Interactive Report Reader & Download Modal */}
      <ReportModal
        report={activeReport}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
