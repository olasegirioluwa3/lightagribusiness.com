"use client";

import React, { useState } from "react";
import { ResourcesHero } from "@/components/resources/ResourcesHero";
import { CategoryCards } from "@/components/resources/CategoryCards";
import { LatestResources } from "@/components/resources/LatestResources";
import { FeaturedResource } from "@/components/resources/FeaturedResource";
import { PartnershipBanner } from "@/components/resources/PartnershipBanner";
import { ElevateCTABanner } from "@/components/resources/ElevateCTABanner";
import {
  ResourceModal,
  ResourceItem,
} from "@/components/resources/ResourceModal";

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Categories");
  const [activeResource, setActiveResource] = useState<ResourceItem | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenResource = (resource: ResourceItem) => {
    setActiveResource(resource);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveResource(null);
  };

  return (
    <main className="min-h-screen bg-[#F4F1E8]">
      {/* 1. Hero Section */}
      <ResourcesHero />

      {/* 2. Resources by Category Quick Bar */}
      <CategoryCards
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 3. Latest Resources with Interactive Filter Bar */}
      <LatestResources
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onOpenResource={handleOpenResource}
      />

      {/* 4. Featured Resource Spotlight */}
      <FeaturedResource />

      {/* 5. Resources & Partnerships Institutional Strip */}
      <PartnershipBanner />

      {/* 6. Ready to Elevate Strategy CTA Banner */}
      <ElevateCTABanner />

      {/* Interactive Download/Preview Modal */}
      <ResourceModal
        resource={activeResource}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
