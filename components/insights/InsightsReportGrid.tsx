"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { HiSearch, HiOutlineDocumentText } from "react-icons/hi";
import { InsightReport } from "./ReportModal";

interface InsightsReportGridProps {
  selectedDomain: string;
  onSelectDomain: (domain: string) => void;
  onOpenReport: (report: InsightReport) => void;
}

export const sampleInsightsReports: InsightReport[] = [
  {
    id: "west-africa-poultry-2024",
    title: "State of West African Poultry Markets 2024",
    category: "Market Analysis",
    year: "2024",
    date: "2024",
    description:
      "Comprehensive benchmark assessing feed conversion ratios, localized grain costs, import substitution models, and commercial flock profitability across ECOWAS.",
    fullContent:
      "This 44-page empirical report synthesizes production data across 140 commercial poultry enterprises. It highlights feed cost management strategies, biosecurity compliance thresholds, and cold-chain logistics improvements.",
    image: "/image/pillar1- male instructor with some students having a lot of feed samples.png",
    pages: 44,
    fileSize: "16.8 MB",
    topics: [
      "Feed formulation & local ingredient substitution indices",
      "Biosecurity audit performance & disease risk scores",
      "Farm gate vs. retail margin distribution",
    ],
  },
  {
    id: "climate-risk-maize",
    title: "Climate Risk Assessment in Maize Farming",
    category: "Sustainability & Regeneration",
    year: "2024",
    date: "2024",
    description:
      "Evaluating rainfall variability, drought-tolerant seed varieties, precision soil moisture retention, and regenerative tillage practices in savanna belts.",
    fullContent:
      "Field analysis of 12 agro-ecological zones showing the yield impact of delayed onset rains, heat stress mitigation protocols, and biological soil carbon replenishment.",
    image: "/image/lightagribusiness-gallery (14).jpg",
    pages: 38,
    fileSize: "14.2 MB",
    topics: [
      "Savanna rainfall shift timeline & planting calendar adjustments",
      "Soil moisture retention via cover cropping and organic mulch",
      "Micro-dosing fertilizer efficiency models",
    ],
  },
  {
    id: "agtech-adoption-east-africa",
    title: "AgTech Adoption Rates in East Africa",
    category: "Technology & Innovation",
    year: "2024",
    date: "2024",
    description:
      "Analysis of mobile farm management adoption, IoT weather stations, satellite NDVI monitoring, and digital credit scoring across Kenyan and Tanzanian growers.",
    fullContent:
      "Examines unit economics of digital tools on commercial farms and outgrower cooperatives, highlighting software ROI and user retention factors.",
    image: "/image/female famer with lighagrios phone.png",
    pages: 32,
    fileSize: "12.5 MB",
    topics: [
      "Software adoption curves among farm managers",
      "IoT sensor deployment and data reliability",
      "Digital payment and outgrower traceability systems",
    ],
  },
  {
    id: "agtech-adoption-west-africa",
    title: "AgTech Adoption Rates in West Africa",
    category: "Technology & Innovation",
    year: "2024",
    date: "2024",
    description:
      "Field research examining precision farming penetration, automated irrigation controller adoption, and LightAgriOS deployment outcomes in commercial farms.",
    fullContent:
      "An in-depth regional study on farm digitization barriers, power infrastructure adaptation, and operational record keeping among medium-to-large agribusinesses.",
    image: "/image/middle-aged man with lighagrios tab.png",
    pages: 36,
    fileSize: "15.1 MB",
    topics: [
      "Digitization of farm records & inventory tracking",
      "Solar-powered automation and sensor durability",
      "Staff capacity building for digital farm management",
    ],
  },
  {
    id: "agri-food-developments-2024",
    title: "State of Agri-food Developments 2024",
    category: "Policy & Trade",
    year: "2024",
    date: "2024",
    description:
      "Institutional review of regional trade corridor reforms, sanitary & phytosanitary standards, AfCFTA tariffs, and institutional investment frameworks.",
    fullContent:
      "High-level policy review for DFIs, agribusiness executives, and government agencies detailing trade corridor bottlenecks and investment de-risking mechanisms.",
    image: "/image/advisory-man presenting analytics2.png",
    pages: 52,
    fileSize: "22.4 MB",
    topics: [
      "AfCFTA trade corridor tariff phase-out schedules",
      "Phytosanitary certification alignment across borders",
      "DFI investment pipelines and blended capital readiness",
    ],
  },
];

export const InsightsReportGrid: React.FC<InsightsReportGridProps> = ({
  selectedDomain,
  onSelectDomain,
  onOpenReport,
}) => {
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("All Dates");

  const filteredReports = useMemo(() => {
    return sampleInsightsReports.filter((item) => {
      if (
        selectedDomain !== "All Categories" &&
        selectedDomain !== "" &&
        item.category !== selectedDomain
      ) {
        return false;
      }
      if (selectedDate !== "All Dates" && item.year !== selectedDate) {
        return false;
      }
      if (searchTitle.trim() !== "") {
        const q = searchTitle.toLowerCase();
        if (
          !item.title.toLowerCase().includes(q) &&
          !item.description.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      return true;
    });
  }, [selectedDomain, selectedDate, searchTitle]);

  return (
    <section id="reports-grid" className="py-14 sm:py-20 bg-[#FAF8F3] text-[#222222]">
      <Container size="lg">
        {/* Section Header + Filters on Top Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-4 border-b border-[#E2DCCF] gap-6">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1F5C3F] block mb-1.5">
              OUR INSIGHTS &amp; REPORTS
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-[#222222] tracking-tight uppercase">
              INSIGHTS &amp; REPORTS
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5A5A] mt-1">
              We work with you to see all key areas of your agribusiness.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="w-full sm:w-44">
              <input
                type="text"
                placeholder="Title..."
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                className="w-full bg-white border border-[#D5CEBF] rounded-lg px-3.5 py-2 text-xs sm:text-sm text-[#222222] placeholder:text-[#7D7D7D] focus:outline-none focus:ring-2 focus:ring-[#1F5C3F]"
              />
            </div>

            {/* Date Filter */}
            <div className="w-28">
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-white border border-[#D5CEBF] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#222222] font-medium focus:outline-none focus:ring-2 focus:ring-[#1F5C3F]"
              >
                <option value="All Dates">Date</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>

            {/* Category Tags Filter */}
            <div className="w-40">
              <select
                value={selectedDomain}
                onChange={(e) => onSelectDomain(e.target.value)}
                className="w-full bg-white border border-[#D5CEBF] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#222222] font-medium focus:outline-none focus:ring-2 focus:ring-[#1F5C3F]"
              >
                <option value="All Categories">Category tags</option>
                <option value="Market Analysis">Market Analysis</option>
                <option value="Policy & Trade">Policy & Trade</option>
                <option value="Sustainability & Regeneration">Sustainability</option>
                <option value="Technology & Innovation">Technology</option>
              </select>
            </div>
          </div>
        </div>

        {/* 5-Column Cards Grid */}
        {filteredReports.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E2DCCF]">
            <HiOutlineDocumentText className="w-12 h-12 text-[#7D7D7D] mx-auto mb-3" />
            <h3 className="font-bold text-lg text-[#222222] mb-1">
              No reports match your filters
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5A5A] max-w-sm mx-auto mb-4">
              Try adjusting your search query, date, or category filters.
            </p>
            <button
              onClick={() => {
                onSelectDomain("All Categories");
                setSelectedDate("All Dates");
                setSearchTitle("");
              }}
              className="px-4 py-2 rounded-lg bg-[#1F5C3F] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {filteredReports.map((report) => (
              <div
                key={report.id}
                className="bg-white rounded-xl border border-[#E2DCCF] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#152019]">
                    <Image
                      src={report.image}
                      alt={report.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <h3 className="font-sans font-bold text-sm text-[#112015] mb-2 leading-snug group-hover:text-[#1F5C3F] transition-colors line-clamp-2">
                      {report.title}
                    </h3>

                    {/* Date & Category Tag */}
                    <div className="flex items-center gap-1.5 text-[10px] text-[#7D7D7D] mb-2">
                      <span>Date - {report.year}</span>
                      <span>•</span>
                      <span className="font-medium text-[#1F5C3F]">{report.category}</span>
                    </div>

                    <p className="text-[11px] text-[#5A5A5A] leading-relaxed line-clamp-3">
                      {report.description}
                    </p>
                  </div>
                </div>

                {/* Read More Pill Button */}
                <div className="p-4 pt-0">
                  <button
                    onClick={() => onOpenReport(report)}
                    className="w-full py-1.5 px-3 rounded-full bg-[#8BC34A] hover:bg-[#7cb342] text-[#112015] font-bold text-[10px] uppercase tracking-wider transition-all duration-200 text-center shadow-xs"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
