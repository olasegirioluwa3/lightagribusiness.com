"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import {
  HiLocationMarker,
  HiBriefcase,
  HiArrowRight,
  HiFilter,
} from "react-icons/hi";

export interface JobRole {
  id: string;
  department: string;
  departmentCategory: "Advisory" | "Technology" | "Academy" | "Research";
  title: string;
  location: string;
  locationCategory: "Lagos" | "Nairobi" | "Accra" | "Remote";
  type: string;
  typeCategory: "Full-Time" | "Contract" | "Internship";
  description: string;
  experience: string;
}

export const sampleJobs: JobRole[] = [
  {
    id: "job-1",
    department: "ADVISORY",
    departmentCategory: "Advisory",
    title: "Senior Agri-Analyst",
    location: "Lagos, Nigeria (HQ)",
    locationCategory: "Lagos",
    type: "Full-Time",
    typeCategory: "Full-Time",
    description:
      "Lead farm diagnostic audits, design customized operational SOPs, and evaluate commercial agribusiness feasibility models.",
    experience: "3+ years advisory / agribusiness experience",
  },
  {
    id: "job-2",
    department: "ADVISORY",
    departmentCategory: "Advisory",
    title: "Farm Diagnostics & Biosecurity Lead",
    location: "Nairobi, Kenya",
    locationCategory: "Nairobi",
    type: "Full-Time",
    typeCategory: "Full-Time",
    description:
      "Execute hands-on clinical and biosecurity audits across large poultry, livestock, and greenhouse operations in East Africa.",
    experience: "4+ years animal science / agronomy",
  },
  {
    id: "job-3",
    department: "TECHNOLOGY",
    departmentCategory: "Technology",
    title: "LightAgriOS Systems Engineer",
    location: "Remote / Hybrid (West Africa)",
    locationCategory: "Remote",
    type: "Full-Time",
    typeCategory: "Full-Time",
    description:
      "Architect and ship core digital recordkeeping, inventory modules, and AI decision support tools for African farm managers.",
    experience: "TypeScript, React, Next.js, Node.js",
  },
  {
    id: "job-4",
    department: "ACADEMY",
    departmentCategory: "Academy",
    title: "Agricultural Curriculum Specialist",
    location: "Lagos, Nigeria",
    locationCategory: "Lagos",
    type: "Full-Time",
    typeCategory: "Full-Time",
    description:
      "Design practical, market-tested vocational training modules and certification assessments for students and agripreneurs.",
    experience: "Education / Agribusiness instructional design",
  },
  {
    id: "job-5",
    department: "ADVISORY",
    departmentCategory: "Advisory",
    title: "Outgrower Supply-Chain Coordinator",
    location: "Accra, Ghana",
    locationCategory: "Accra",
    type: "Contract",
    typeCategory: "Contract",
    description:
      "Manage smallholder outgrower schemes, quality-control field stations, and aggregator logistics for partner processors.",
    experience: "Supply chain / smallholder coordination",
  },
  {
    id: "job-6",
    department: "RESEARCH",
    departmentCategory: "Research",
    title: "Agribusiness Intelligence Researcher",
    location: "Remote / Pan-African",
    locationCategory: "Remote",
    type: "Full-Time",
    typeCategory: "Full-Time",
    description:
      "Author our flagship Annual Agribusiness Readiness Report, analyze regional trade corridors, and publish benchmark metrics.",
    experience: "Applied economics / agricultural research",
  },
];

interface CareerOpenRolesProps {
  onSelectRole: (role: JobRole) => void;
  onOpenGeneralApply: () => void;
}

export const CareerOpenRoles: React.FC<CareerOpenRolesProps> = ({
  onSelectRole,
  onOpenGeneralApply,
}) => {
  const [selectedRoleType, setSelectedRoleType] = useState<string>("All");
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [selectedLoc, setSelectedLoc] = useState<string>("All");

  const filteredJobs = sampleJobs.filter((job) => {
    const matchesType =
      selectedRoleType === "All" || job.typeCategory === selectedRoleType;
    const matchesDept =
      selectedDept === "All" || job.departmentCategory === selectedDept;
    const matchesLoc =
      selectedLoc === "All" || job.locationCategory === selectedLoc;
    return matchesType && matchesDept && matchesLoc;
  });

  return (
    <section id="open-roles" className="py-16 sm:py-24 bg-[#0A160E] text-white relative">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading, Subtitle & Interactive Dropdowns matching mockup */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8BC34A] block mb-2">
                FILTERABLE JOB OPENINGS
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-3">
                CURRENT JOB OPENINGS
              </h2>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Discover positions where you can apply practical knowledge, build scalable business systems, and power Africa&apos;s agricultural transformation.
              </p>
            </div>

            {/* Filter Dropdowns matching mockup */}
            <div className="space-y-3.5 pt-2">
              {/* Role Type Filter */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/60 block mb-1">
                  Role Type
                </label>
                <select
                  value={selectedRoleType}
                  onChange={(e) => setSelectedRoleType(e.target.value)}
                  className="w-full bg-[#122218] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8BC34A] transition-colors"
                >
                  <option value="All">All Role Types</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Contract">Contract / Retainer</option>
                  <option value="Internship">Internship / Fellowship</option>
                </select>
              </div>

              {/* Department Filter */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/60 block mb-1">
                  Department
                </label>
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="w-full bg-[#122218] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8BC34A] transition-colors"
                >
                  <option value="All">All Departments</option>
                  <option value="Advisory">Advisory &amp; Systems</option>
                  <option value="Technology">Technology (LightAgriOS)</option>
                  <option value="Academy">Academy &amp; Capacity</option>
                  <option value="Research">Research &amp; Insights</option>
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/60 block mb-1">
                  Location
                </label>
                <select
                  value={selectedLoc}
                  onChange={(e) => setSelectedLoc(e.target.value)}
                  className="w-full bg-[#122218] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8BC34A] transition-colors"
                >
                  <option value="All">All Locations</option>
                  <option value="Lagos">Lagos, Nigeria (HQ)</option>
                  <option value="Nairobi">Nairobi, Kenya</option>
                  <option value="Accra">Accra, Ghana</option>
                  <option value="Remote">Remote / Field Based</option>
                </select>
              </div>

              {/* Reset filter option if filtered */}
              {(selectedRoleType !== "All" ||
                selectedDept !== "All" ||
                selectedLoc !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRoleType("All");
                    setSelectedDept("All");
                    setSelectedLoc("All");
                  }}
                  className="text-[11px] text-[#8BC34A] underline hover:text-white transition-colors"
                >
                  Reset filters ({filteredJobs.length} roles found)
                </button>
              )}
            </div>

            {/* General Apply Now Button matching mockup */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenGeneralApply}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#8BC34A] hover:bg-[#7CB342] text-[#0B150F] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#8BC34A]/20"
              >
                <span>Apply Now</span>
                <HiArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 6 Job Cards Grid matching mockup */}
          <div className="lg:col-span-8">
            {filteredJobs.length === 0 ? (
              <div className="bg-[#122218] rounded-2xl p-10 text-center border border-white/10">
                <HiFilter className="w-8 h-8 text-[#8BC34A] mx-auto mb-3 opacity-60" />
                <h3 className="font-bold text-base text-white mb-1">
                  No roles match the selected filters
                </h3>
                <p className="text-xs text-white/60 mb-4">
                  Try clearing some filters or submit an open general application.
                </p>
                <button
                  type="button"
                  onClick={onOpenGeneralApply}
                  className="px-5 py-2 rounded-full bg-[#8BC34A] text-[#0B150F] text-xs font-bold uppercase tracking-wider"
                >
                  Submit General Application
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    onClick={() => onSelectRole(job)}
                    className="bg-[#122218] hover:bg-[#162B1E] border border-white/10 hover:border-[#8BC34A]/60 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer group shadow-sm hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <div>
                      {/* Department Tag */}
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8BC34A] block mb-2">
                        {job.department}
                      </span>

                      {/* Job Title */}
                      <h3 className="font-sans font-black text-sm text-white group-hover:text-[#8BC34A] transition-colors leading-snug mb-2">
                        {job.title}
                      </h3>

                      {/* Location with Pin */}
                      <div className="flex items-center gap-1.5 text-[11px] text-white/70 mb-3">
                        <HiLocationMarker className="w-3.5 h-3.5 text-[#8BC34A] shrink-0" />
                        <span className="truncate">{job.location}</span>
                      </div>

                      {/* Short Description */}
                      <p className="text-[11px] text-white/60 leading-relaxed line-clamp-3 mb-4">
                        {job.description}
                      </p>
                    </div>

                    {/* Card Footer: Type & Arrow */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                      <span className="text-white/50">{job.type}</span>
                      <span className="text-[#8BC34A] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Details</span>
                        <HiArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
