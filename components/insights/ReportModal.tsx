"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HiX, HiDownload, HiCheckCircle, HiOutlineClock, HiOutlineTag, HiOutlineDocumentText } from "react-icons/hi";

export interface InsightReport {
  id: string;
  title: string;
  category: "Market Analysis" | "Policy & Trade" | "Sustainability & Regeneration" | "Technology & Innovation";
  year: string;
  date: string;
  description: string;
  fullContent?: string;
  image: string;
  pages?: number | string;
  fileSize?: string;
  topics?: string[];
}

interface ReportModalProps {
  report: InsightReport | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ report, isOpen, onClose }) => {
  const [downloadState, setDownloadState] = useState<"idle" | "downloading" | "downloaded">("idle");

  if (!isOpen || !report) return null;

  const handleDownload = () => {
    setDownloadState("downloading");
    setTimeout(() => {
      setDownloadState("downloaded");
      setTimeout(() => {
        const element = document.createElement("a");
        const fileContent = `LIGHT RESEARCH & INSIGHTS - BRIEF\n\nTitle: ${report.title}\nCategory: ${report.category}\nDate: ${report.date}\n\nEXECUTIVE ABSTRACT:\n${report.fullContent || report.description}\n\nPublished by Light Agribusiness Consultancy Limited\nData-driven Decisions for a Resilient Agricultural System.`;
        const file = new Blob([fileContent], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = `${report.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}-summary.txt`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        setDownloadState("idle");
      }, 800);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#FAF8F3] border border-[#E2DCCF] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#222222]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#152019] rounded-t-2xl">
          <Image
            src={report.image}
            alt={report.title}
            fill
            className="object-cover opacity-80"
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
            <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#8BC34A] text-[#112015] mb-2">
              {report.category}
            </span>
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-white leading-snug">
              {report.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#5A5A5A] pb-4 border-b border-[#E2DCCF]">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#E2DCCF]">
              <HiOutlineClock className="w-4 h-4 text-[#1F5C3F]" />
              <span>{report.date}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#E2DCCF]">
              <HiOutlineTag className="w-4 h-4 text-[#1F5C3F]" />
              <span>{report.category}</span>
            </div>
            {report.fileSize && (
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-[#E2DCCF]">
                <HiOutlineDocumentText className="w-4 h-4 text-[#1F5C3F]" />
                <span>{report.fileSize}</span>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1F5C3F] mb-2">
              Executive Abstract &amp; Findings
            </h4>
            <p className="text-sm sm:text-base text-[#383838] leading-relaxed">
              {report.fullContent || report.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1F5C3F] mb-2.5">
              Key Focus Areas
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#383838]">
              {(report.topics || [
                "Empirical data modeling & field survey results",
                "Supply chain cost variance and margin analysis",
                "Standard Operating Procedure implementation checklists",
                "Regional policy & market volatility recommendations",
              ]).map((topic, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#8BC34A] font-bold mt-0.5">✔</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-[#E2DCCF] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#5A5A5A]">
              Light Institutional Publication Series
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
                    <span>Preparing...</span>
                  </>
                ) : downloadState === "downloaded" ? (
                  <>
                    <HiCheckCircle className="w-4 h-4 text-[#8BC34A]" />
                    <span>Downloaded</span>
                  </>
                ) : (
                  <>
                    <HiDownload className="w-4 h-4" />
                    <span>Download Report</span>
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
