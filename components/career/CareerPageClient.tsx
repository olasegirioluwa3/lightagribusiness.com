"use client";

import React, { useState } from "react";
import { CareerHero } from "@/components/career/CareerHero";
import { WhyGrowWithLight } from "@/components/career/WhyGrowWithLight";
import { CareerJourney } from "@/components/career/CareerJourney";
import { CareerOpenRoles, JobRole } from "@/components/career/CareerOpenRoles";
import { CareerFutureTalent } from "@/components/career/CareerFutureTalent";
import { CareerFrameworkAndStories } from "@/components/career/CareerFrameworkAndStories";
import { CareerPartnerships } from "@/components/career/CareerPartnerships";
import { CareerCTA } from "@/components/career/CareerCTA";
import { CareerApplyModal } from "@/components/career/CareerApplyModal";

export const CareerPageClient: React.FC = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);

  const handleSelectRole = (role: JobRole) => {
    setSelectedRole(role);
    setIsApplyModalOpen(true);
  };

  const handleOpenGeneralApply = () => {
    setSelectedRole(null);
    setIsApplyModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsApplyModalOpen(false);
    setSelectedRole(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section matching mockup */}
      <CareerHero />

      {/* 2. Why Grow With Light Section matching mockup */}
      <WhyGrowWithLight />

      {/* 3. Professional Development Journey (Five Steps Stepper) matching mockup */}
      <CareerJourney />

      {/* 4. Filterable Current Job Openings matching mockup */}
      <CareerOpenRoles
        onSelectRole={handleSelectRole}
        onOpenGeneralApply={handleOpenGeneralApply}
      />

      <CareerFutureTalent onOpenGeneralApply={handleOpenGeneralApply} />

      {/* 5. Career Framework + Global Impact Stories & Professional Network matching mockup */}
      <CareerFrameworkAndStories />

      {/* 6. Career Partnerships (Academic & Institutional Logos) matching mockup */}
      <CareerPartnerships />

      {/* 7. Bottom CTA Banner matching mockup */}
      <CareerCTA onOpenApply={handleOpenGeneralApply} />

      {/* Interactive Application Modal */}
      <CareerApplyModal
        isOpen={isApplyModalOpen}
        selectedRole={selectedRole}
        onClose={handleCloseModal}
      />
    </div>
  );
};
