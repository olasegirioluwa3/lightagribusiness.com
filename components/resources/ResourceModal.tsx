"use client";

import React, { useState } from "react";
import { HiX, HiDownload, HiDocumentText, HiCheckCircle, HiOutlineClock, HiOutlineBookOpen, HiOutlineTag } from "react-icons/hi";
import Image from "next/image";

export interface ResourceItem {
  id: string;
  title: string;
  category: "Market Reports" | "Technical Guides" | "Regulatory Insights" | "Webinars & Videos";
  categoryKey: "market" | "technical" | "regulatory" | "webinars";
  year: string;
  region: "West Africa" | "East Africa" | "Pan-Africa";
  date: string;
  description: string;
  fullAbstract?: string;
  fileSize?: string;
  pages?: string | number;
  format?: string;
  image: string;
  downloadUrl?: string;
  topics?: string[];
  author?: string;
}

interface ResourceModalProps {
  resource: ResourceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({ resource, isOpen, onClose }) => {
  const [downloadState, setDownloadState] = useState<"idle" | "downloading" | "downloaded">("idle");

  if (!isOpen || !resource) return null;

  const handleDownload = () => {
    setDownloadState("downloading");
    setTimeout(() => {
      setDownloadState("downloaded");
      setTimeout(() => {
        // Create a synthetic file download for the resource brief
        const element = document.createElement("a");
        const fileContent = `LIGHT AGRIBUSINESS INSTITUTION - RESOURCE BRIEF\n\nTitle: ${resource.title}\nCategory: ${resource.category}\nRegion: ${resource.region}\nDate: ${resource.date}\nFormat: ${resource.format || "PDF Report"}\n\nOVERVIEW:\n${resource.description}\n\nKEY INSIGHTS & METHODOLOGY:\n${resource.fullAbstract || resource.description}\n\nPublished by Light Agribusiness Consultancy Limited\nIlluminating the Path in African Agriculture.`;
        const file = new Blob([fileContent], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = `${resource.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}-brief.txt`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        setDownloadState("idle");
      }, 900);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#FAF8F3] border border-[#E2DCCF] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#222222]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden bg-[#152019] rounded-t-2xl">
          <Image
            src={resource.image}
            alt={resource.title}
            fill
            className="object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#152019] via-[#152019]/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors z-10"
            aria-label="Close modal"
          >
            <HiX className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#8BC34A] text-[#132018] mb-2">
              {resource.category}
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white leading-snug">
              {resource.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#5A5A5A] pb-4 border-b border-[#E2DCCF]">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#E2DCCF]">
              <HiOutlineClock className="w-4 h-4 text-[#1F5C3F]" />
              <span>{resource.date}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#E2DCCF]">
              <HiOutlineTag className="w-4 h-4 text-[#1F5C3F]" />
              <span>{resource.region}</span>
            </div>
            {resource.pages && (
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#E2DCCF]">
                <HiOutlineBookOpen className="w-4 h-4 text-[#1F5C3F]" />
                <span>{resource.pages} Pages</span>
              </div>
            )}
            {resource.fileSize && (
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#E2DCCF]">
                <HiDocumentText className="w-4 h-4 text-[#1F5C3F]" />
                <span>{resource.fileSize}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1F5C3F] mb-2">
              Executive Summary
            </h4>
            <p className="text-sm sm:text-base text-[#383838] leading-relaxed">
              {resource.fullAbstract || resource.description}
            </p>
          </div>

          {/* Key Topics / Methodology */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1F5C3F] mb-2.5">
              Included In This Publication
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#383838]">
              {(resource.topics || [
                "Empirical field benchmarks & dataset analysis",
                "Step-by-step Standard Operating Procedures (SOPs)",
                "Financial feasibility models & risk matrices",
                "Regional trade corridor price projections",
              ]).map((topic, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#8BC34A] font-bold mt-0.5">✔</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Bar */}
          <div className="pt-4 border-t border-[#E2DCCF] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#5A5A5A]">
              Format: <strong className="text-[#222222]">{resource.format || "High-Res PDF & Data Brief"}</strong>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg border border-[#E2DCCF] text-xs font-semibold text-[#5A5A5A] hover:bg-black/5 transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleDownload}
                disabled={downloadState === "downloading"}
                className="w-1/2 sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#1F5C3F] hover:bg-[#15402C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 disabled:opacity-75"
              >
                {downloadState === "downloading" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Preparing Document...</span>
                  </>
                ) : downloadState === "downloaded" ? (
                  <>
                    <HiCheckCircle className="w-4 h-4 text-[#8BC34A]" />
                    <span>Downloaded!</span>
                  </>
                ) : (
                  <>
                    <HiDownload className="w-4 h-4" />
                    <span>Download Resource</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
