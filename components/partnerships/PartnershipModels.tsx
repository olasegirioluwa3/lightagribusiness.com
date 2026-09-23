"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight, HiOutlineDocumentText } from "react-icons/hi";

interface PartnershipModel {
  id: string;
  title: string;
  category: "Strategic Ventures" | "Technology Alliances" | "Research Collaboration" | "Value Chain Integration";
  year: string;
  date: string;
  description: string;
  image: string;
}

const partnershipModels: PartnershipModel[] = [
  {
    id: "strategic-ventures",
    title: "STRATEGIC VENTURES",
    category: "Strategic Ventures",
    year: "2024",
    date: "2024",
    description: "Strategic investor access of collaborative ventures to establish and grow strategic business models.",
    image: "/image/lightagribusiness-gallery (13).jpg",
  },
  {
    id: "technology-alliances",
    title: "TECHNOLOGY ALLIANCES",
    category: "Technology Alliances",
    year: "2024",
    date: "2024",
    description: "Team access via partnerships in technology, advisory assistance, enterprise, and collaboration.",
    image: "/image/middle-aged man with lighagrios tab.png",
  },
  {
    id: "agtech-adoption-east-africa",
    title: "AgTech Adoption in East Africa",
    category: "Technology Alliances",
    year: "2024",
    date: "2024",
    description: "Dashboard to collect and analysis of variations in technology business could to research network and classrooms.",
    image: "/image/female famer with lighagrios phone.png",
  },
  {
    id: "research-collaboration",
    title: "RESEARCH COLLABORATION",
    category: "Research Collaboration",
    year: "2024",
    date: "2024",
    description: "Dashboard to collect and analysis of various technology business could to research network and classrooms.",
    image: "/image/pillar1-woman in a garden with a laptop.png",
  },
  {
    id: "agtech-adoption-west",
    title: "AgTech Adoption in West Africa",
    category: "Technology Alliances",
    year: "2024",
    date: "2024",
    description: "State of connected improvements on comprehensive crops market, opportunities and strategies.",
    image: "/image/old man with lightagrios tab1.png",
  },
  {
    id: "value-chain-integration",
    title: "VALUE CHAIN INTEGRATION",
    category: "Value Chain Integration",
    year: "2024",
    date: "2024",
    description: "State of comprehensive crops enterprise programs, opportunities, and solutions.",
    image: "/image/lightagribusiness-gallery (14).jpg",
  },
];

interface PartnershipModelsProps {
  selectedCategory: string;
  onSelectCategory: (c: string) => void;
}

export const PartnershipModels: React.FC<PartnershipModelsProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState("All Dates");

  const filtered = useMemo(() => {
    return partnershipModels.filter((item) => {
      if (
        selectedCategory !== "All Categories" &&
        selectedCategory !== "" &&
        item.category !== selectedCategory
      ) return false;
      if (selectedDate !== "All Dates" && item.year !== selectedDate) return false;
      if (searchTitle.trim() !== "") {
        const q = searchTitle.toLowerCase();
        if (!item.title.toLowerCase().includes(q) && !item.description.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedDate, searchTitle]);

  return (
    <section id="partnership-models" className="py-14 sm:py-20 bg-[#FAF8F3] text-[#222222]">
      <Container size="lg">
        {/* Header + Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-4 border-b border-[#E2DCCF] gap-6">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1F5C3F] block mb-1.5">
              OUR PARTNERSHIP MODELS
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-[#222222] tracking-tight uppercase">
              OUR PARTNERSHIP MODELS
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5A5A] mt-1">
              We work with you to see all the areas of your agribusiness.
            </p>
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="Title..."
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              className="w-full sm:w-40 bg-white border border-[#D5CEBF] rounded-lg px-3.5 py-2 text-xs sm:text-sm text-[#222222] placeholder:text-[#7D7D7D] focus:outline-none focus:ring-2 focus:ring-[#1F5C3F]"
            />
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-28 bg-white border border-[#D5CEBF] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#222222] font-medium focus:outline-none focus:ring-2 focus:ring-[#1F5C3F]"
            >
              <option value="All Dates">Date</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => onSelectCategory(e.target.value)}
              className="w-44 bg-white border border-[#D5CEBF] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#222222] font-medium focus:outline-none focus:ring-2 focus:ring-[#1F5C3F]"
            >
              <option value="All Categories">Category tags</option>
              <option value="Strategic Ventures">Strategic Ventures</option>
              <option value="Technology Alliances">Technology Alliances</option>
              <option value="Research Collaboration">Research Collaboration</option>
              <option value="Value Chain Integration">Value Chain Integration</option>
            </select>
          </div>
        </div>

        {/* 5-Column Cards Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E2DCCF]">
            <HiOutlineDocumentText className="w-12 h-12 text-[#7D7D7D] mx-auto mb-3" />
            <h3 className="font-bold text-lg text-[#222222] mb-2">No models match your filters</h3>
            <button
              onClick={() => { onSelectCategory("All Categories"); setSelectedDate("All Dates"); setSearchTitle(""); }}
              className="px-4 py-2 rounded-lg bg-[#1F5C3F] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {filtered.map((model) => (
              <div
                key={model.id}
                className="bg-white rounded-xl border border-[#E2DCCF] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#152019]">
                    <Image
                      src={model.image}
                      alt={model.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#7D7D7D] mb-1.5">
                      <span className="font-medium text-[#1F5C3F]">{model.category}</span>
                      <span>→</span>
                    </div>
                    <h3 className="font-sans font-bold text-sm text-[#112015] mb-2 leading-snug group-hover:text-[#1F5C3F] transition-colors line-clamp-2">
                      {model.title}
                    </h3>
                    <p className="text-[11px] text-[#5A5A5A] leading-relaxed line-clamp-3">
                      {model.description}
                    </p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <Link
                    href="/contact"
                    className="w-full py-1.5 px-3 rounded-full bg-[#8BC34A] hover:bg-[#7cb342] text-[#112015] font-bold text-[10px] uppercase tracking-wider transition-all duration-200 text-center block shadow-xs"
                  >
                    Partner With Us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
