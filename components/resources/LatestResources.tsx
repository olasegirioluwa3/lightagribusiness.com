"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { HiSearch, HiOutlineDocumentText } from "react-icons/hi";
import { ResourceItem } from "./ResourceModal";

interface LatestResourcesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenResource: (resource: ResourceItem) => void;
}

export const sampleResources: ResourceItem[] = [
  // Top Row (Cards 1 to 3)
  {
    id: "soy-market-outlook",
    title: "West African Soy Market Outlook",
    category: "Market Reports",
    categoryKey: "market",
    year: "2024",
    region: "West Africa",
    date: "June 2024",
    description:
      "Comprehensive analysis of regional soybean crushing margins, yield benchmarks, export trade corridors, and supply-demand deficits across ECOWAS.",
    fullAbstract:
      "This 48-page empirical market report evaluates trade flow data across Nigeria, Ghana, Togo, and Benin. It breaks down feed-mill crushing margins, import substitution viability, port congestion dynamics, and forward-pricing contracts for regional soy producers.",
    fileSize: "18.4 MB",
    pages: 48,
    format: "PDF Market Study",
    image: "/image/pillar1- farmer explaining to a student in a farm.png",
    topics: [
      "ECOWAS regional supply-demand deficit breakdown",
      "Feed-mill crushing margins & localized price elasticity",
      "Export corridor transport logistics & port friction",
      "Contract farming & outgrower pricing models",
    ],
  },
  {
    id: "pillar-2-implementation-guide",
    title: "Pillar 2 Implementation Guide",
    category: "Technical Guides",
    categoryKey: "technical",
    year: "2024",
    region: "Pan-Africa",
    date: "June 2024",
    description:
      "Standard Operating Procedures (SOPs), farm labor management workflows, shift handover logs, and operational productivity metrics for commercial agribusinesses.",
    fullAbstract:
      "A complete tactical operational kit created by Light Advisory. Designed to replace single-person dependency with repeatable business systems, daily checklists, inventory governance, and equipment maintenance schedules.",
    fileSize: "14.2 MB",
    pages: 36,
    format: "Operations Blueprint (PDF + Checklists)",
    image: "/image/pillar1-man in an office with a laptop.png",
    topics: [
      "Shift handover logs & daily operational checklists",
      "Feed inventory audit protocols & shrinkage reduction",
      "Worker productivity incentive models",
      "Equipment maintenance cycles & biosecurity checkpoints",
    ],
  },
  {
    id: "agtech-investment-trends",
    title: "AgTech Investment Trends",
    category: "Market Reports",
    categoryKey: "market",
    year: "2024",
    region: "Pan-Africa",
    date: "May 2024",
    description:
      "Comprehensive study on venture capital flows, farm management software adoption, IoT sensor ROI, and smart agriculture capitalization across Africa.",
    fullAbstract:
      "Examines funding rounds, unit economics of digital farm tools, and real-world adoption rates of farm management software among commercial growers in Kenya, Nigeria, and South Africa.",
    fileSize: "21.0 MB",
    pages: 42,
    format: "Investment Brief (PDF)",
    image: "/image/investor-banner-exec.jpg",
    topics: [
      "Pan-African AgTech venture capital deal flow breakdown",
      "Unit economics of IoT sensors & satellite farm monitoring",
      "Software adoption friction in rural and peri-urban farms",
      "Investor due diligence checklist for African agri startups",
    ],
  },

  // Bottom Row (Cards 4 to 6)
  {
    id: "soy-executive-brief",
    title: "West African Soy Market Outlook (Digest)",
    category: "Market Reports",
    categoryKey: "market",
    year: "2024",
    region: "West Africa",
    date: "May 2024",
    description:
      "Executive summary examining regional price volatility, currency depreciation impact, and strategic grain storage buffers.",
    fullAbstract:
      "A condensed 12-page executive summary focusing on actionable commodity trading strategies, storage hedging against seasonal inflation, and local poultry feed formulation cost models.",
    fileSize: "6.5 MB",
    pages: 12,
    format: "Executive Summary PDF",
    image: "/image/lightagribusiness-gallery (2).jpg",
    topics: [
      "Seasonal price cycle index (10-year historical)",
      "Currency devaluation pass-through into feed prices",
      "Optimal grain silo storage duration & aeration protocols",
    ],
  },
  {
    id: "agtech-trends-q1",
    title: "AgTech Investment Trends (Q1 Digest)",
    category: "Market Reports",
    categoryKey: "market",
    year: "2024",
    region: "East Africa",
    date: "April 2024",
    description:
      "Quarterly chart-driven digest tracking private equity, blended finance, and smallholder digitisation platforms.",
    fullAbstract:
      "Quarterly breakdown of smart farm technology valuations, grant financing mechanisms, and data-driven credit scoring for smallholder farmer groups.",
    fileSize: "8.1 MB",
    pages: 18,
    format: "Quarterly Digest PDF",
    image: "/image/lightagribusiness-gallery (14).jpg",
    topics: [
      "Blended finance structures for irrigation technology",
      "Credit risk scoring with satellite remote sensing",
      "Key venture transactions in East and West Africa",
    ],
  },
  {
    id: "biosecurity-sop-manual",
    title: "Biosecurity & Farm Protocol Manual",
    category: "Technical Guides",
    categoryKey: "technical",
    year: "2023",
    region: "Pan-Africa",
    date: "November 2023",
    description:
      "Field guidelines for establishing physical disease barriers, footbath protocols, visitor logs, and pathogen decontamination procedures.",
    fullAbstract:
      "Essential disease risk management guide for commercial poultry, aquaculture, and swine facilities. Step-by-step audit checklists to prevent catastrophic viral outbreaks.",
    fileSize: "12.7 MB",
    pages: 32,
    format: "Field SOP Manual",
    image: "/image/pillar1- female instructor advising many farmers in a farm.png",
    topics: [
      "Perimeter fence & barrier design standards",
      "Water testing schedules and disinfection formulas",
      "Mortality disposal and incineration protocols",
      "Emergency disease containment trigger trees",
    ],
  },

  // Additional resources for filters
  {
    id: "afcfta-rules-of-origin",
    title: "AfCFTA Agricultural Rules of Origin",
    category: "Regulatory Insights",
    categoryKey: "regulatory",
    year: "2024",
    region: "Pan-Africa",
    date: "February 2024",
    description:
      "Practical guide to tariff liberalization schedules, value-addition thresholds, and documentation for cross-border agri-food trade under AfCFTA.",
    fullAbstract:
      "Detailed analysis of cross-border tariff structures, phytosanitary requirements, and country of origin certificates for intra-African food trade.",
    fileSize: "15.0 MB",
    pages: 38,
    format: "Regulatory Whitepaper",
    image: "/image/advisory-man presenting analytics2.png",
    topics: [
      "Cross-border tariff phase-out schedules",
      "Sanitary and Phytosanitary (SPS) compliance protocols",
      "Certificate of Origin filing procedures",
    ],
  },
  {
    id: "poultry-masterclass-recording",
    title: "Commercial Poultry Turnaround Masterclass",
    category: "Webinars & Videos",
    categoryKey: "webinars",
    year: "2024",
    region: "West Africa",
    date: "March 2024",
    description:
      "Video masterclass detailing how to diagnose feed waste, manage flock mortality below 3%, and maintain operational cash flow during peak input cycles.",
    fullAbstract:
      "A 90-minute recorded deep-dive session featuring Light Advisory farm diagnostics lead. Includes downloadable financial model spreadsheet and presentation slides.",
    fileSize: "Video Stream + 8 MB PDF",
    pages: "90 min Video",
    format: "HD Video + Slide Deck",
    image: "/image/pillar1- male instructor with some students having a lot of feed samples.png",
    topics: [
      "Feed conversion ratio (FCR) optimization techniques",
      "Mortality mitigation in high humidity climates",
      "Cash flow modeling for multi-tier layer operations",
    ],
  },
];

export const LatestResources: React.FC<LatestResourcesProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenResource,
}) => {
  const [selectedYear, setSelectedYear] = useState<string>("All Years");
  const [selectedRegion, setSelectedRegion] = useState<string>("All Regions");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");

  // Filtered resources
  const filteredResources = useMemo(() => {
    return sampleResources.filter((item) => {
      // Category filter
      if (
        selectedCategory !== "All Categories" &&
        selectedCategory !== "" &&
        item.category !== selectedCategory
      ) {
        return false;
      }
      // Year filter
      if (selectedYear !== "All Years" && item.year !== selectedYear) {
        return false;
      }
      // Region filter
      if (selectedRegion !== "All Regions" && item.region !== selectedRegion) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchCategory = item.category.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchCategory) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedYear, selectedRegion, searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  const handleResetFilters = () => {
    onSelectCategory("All Categories");
    setSelectedYear("All Years");
    setSelectedRegion("All Regions");
    setSearchQuery("");
    setSearchInput("");
  };

  // Top 3 featured cards vs remaining cards
  const topCards = filteredResources.slice(0, 3);
  const bottomCards = filteredResources.slice(3, 6);
  const additionalCards = filteredResources.slice(6);

  return (
    <section id="latest-resources" className="py-14 sm:py-20 bg-[#FAF8F3] text-[#222222]">
      <Container size="lg">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#E2DCCF] gap-4">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1F5C3F] block mb-1.5">
              CURATED PUBLICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] tracking-tight">
              LATEST RESOURCES
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-[#5A5A5A]">
            Showing <strong className="text-[#1F5C3F]">{filteredResources.length}</strong> available publications
          </div>
        </div>

        {/* Resources Grid */}
        {filteredResources.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E2DCCF] my-8 shadow-sm">
            <HiOutlineDocumentText className="w-12 h-12 text-[#7D7D7D] mx-auto mb-3" />
            <h3 className="font-bold text-lg text-[#222222] mb-1">
              No Resources Match Your Filter
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5A5A] max-w-md mx-auto mb-4">
              Try adjusting your category, year, region, or search keyword to view available documents.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 rounded-lg bg-[#1F5C3F] text-white text-xs font-semibold hover:bg-[#15402C] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-8 mb-12">
            {/* Top Row: 3 Large Cards */}
            {topCards.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {topCards.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-[#E2DCCF] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#152019]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        <div className="absolute top-3 left-3">
                          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#101b15]/80 backdrop-blur-md text-[#8BC34A] border border-[#8BC34A]/30">
                            {item.category}
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-3">
                          <span className="text-[11px] font-medium text-white/90">
                            {item.date}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <h3 className="font-bold text-lg sm:text-xl text-[#222222] mb-2.5 leading-snug group-hover:text-[#1F5C3F] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5A5A5A] leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => onOpenResource(item)}
                        className="w-full py-2.5 px-4 rounded-lg bg-[#EAE5D8] group-hover:bg-[#1F5C3F] text-[#1F5C3F] group-hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 text-center shadow-xs"
                      >
                        DOWNLOAD/VIEW
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Row: 3 Horizontal/Compact Cards */}
            {bottomCards.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {bottomCards.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-[#E2DCCF] p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div className="flex gap-4 items-start mb-4">
                      {/* Square Thumbnail */}
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-[#152019]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Text Column */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F5C3F] block mb-1">
                          {item.category}
                        </span>
                        <h3 className="font-bold text-base text-[#222222] mb-1.5 leading-snug group-hover:text-[#1F5C3F] transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#5A5A5A] leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => onOpenResource(item)}
                      className="w-full py-2 px-4 rounded-lg bg-[#EAE5D8] group-hover:bg-[#1F5C3F] text-[#1F5C3F] group-hover:text-white font-bold text-[11px] uppercase tracking-wider transition-all duration-200 text-center"
                    >
                      DOWNLOAD/VIEW
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Additional cards if filters reveal more */}
            {additionalCards.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
                {additionalCards.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-[#E2DCCF] p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div className="flex gap-4 items-start mb-4">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-[#152019]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F5C3F] block mb-1">
                          {item.category}
                        </span>
                        <h3 className="font-bold text-base text-[#222222] mb-1.5 leading-snug group-hover:text-[#1F5C3F] transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#5A5A5A] leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => onOpenResource(item)}
                      className="w-full py-2 px-4 rounded-lg bg-[#EAE5D8] group-hover:bg-[#1F5C3F] text-[#1F5C3F] group-hover:text-white font-bold text-[11px] uppercase tracking-wider transition-all duration-200 text-center"
                    >
                      DOWNLOAD/VIEW
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Filter Bar Component at Bottom */}
        <div className="bg-[#EAE5D8]/80 border border-[#D5CEBF] rounded-2xl p-4 sm:p-6 shadow-sm">
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4"
          >
            {/* Filter by prefix */}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#222222] shrink-0">
              Filter by
            </div>

            {/* Dropdown 1: Category */}
            <div className="flex-1 min-w-[160px]">
              <select
                value={selectedCategory}
                onChange={(e) => onSelectCategory(e.target.value)}
                className="w-full bg-white border border-[#D5CEBF] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#222222] font-medium focus:outline-none focus:ring-2 focus:ring-[#1F5C3F]"
              >
                <option value="All Categories">All Categories</option>
                <option value="Market Reports">Market Reports</option>
                <option value="Technical Guides">Technical Guides</option>
                <option value="Regulatory Insights">Regulatory Insights</option>
                <option value="Webinars & Videos">Webinars & Videos</option>
              </select>
            </div>

            {/* Dropdown 2: Year */}
            <div className="w-full lg:w-36 shrink-0">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full bg-white border border-[#D5CEBF] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#222222] font-medium focus:outline-none focus:ring-2 focus:ring-[#1F5C3F]"
              >
                <option value="All Years">All Years</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>

            {/* Dropdown 3: Region */}
            <div className="w-full lg:w-40 shrink-0">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full bg-white border border-[#D5CEBF] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#222222] font-medium focus:outline-none focus:ring-2 focus:ring-[#1F5C3F]"
              >
                <option value="All Regions">All Regions</option>
                <option value="West Africa">West Africa</option>
                <option value="East Africa">East Africa</option>
                <option value="Pan-Africa">Pan-Africa</option>
              </select>
            </div>

            {/* Search Input & Button */}
            <div className="flex-1 flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search Field..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full bg-white border border-[#D5CEBF] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#222222] placeholder:text-[#7D7D7D] focus:outline-none focus:ring-2 focus:ring-[#1F5C3F]"
                />
              </div>
              <button
                type="submit"
                className="p-2.5 sm:px-4 rounded-lg bg-[#112015] hover:bg-[#1F5C3F] text-white transition-colors flex items-center justify-center shrink-0"
                aria-label="Search resources"
              >
                <HiSearch className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};
