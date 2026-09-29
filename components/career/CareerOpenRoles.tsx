"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import {
  HiLocationMarker,
  HiBriefcase,
  HiArrowRight,
  HiFilter,
} from "react-icons/hi";

export type EmploymentCategory = "Full-Time" | "Contract" | "Project-based";
export type LocationCategory = "Nigeria" | "Hybrid" | "Field-based";

export interface JobRole {
  id: string;
  department: string;
  departmentCategory:
    | "Advisory"
    | "Academy"
    | "Projects"
    | "Business Development";
  title: string;
  location: string;
  locationCategory: LocationCategory[];
  type: string;
  typeCategory: EmploymentCategory[];
  roleLevel: string;
  description: string;
  experience: string;
  responsibilities: string[];
  qualifications: string[];
  desirable: string[];
}

export const sampleJobs: JobRole[] = [
  {
    id: "agribusiness-consultant",
    department: "ADVISORY & BUSINESS SYSTEMS",
    departmentCategory: "Advisory",
    title: "Agribusiness Consultant / Associate Consultant",
    location: "Nigeria · Field assignments as required",
    locationCategory: ["Nigeria", "Field-based"],
    type: "Full-time / Contract / Project-based",
    typeCategory: ["Full-Time", "Contract", "Project-based"],
    roleLevel: "Associate / Mid-level",
    description:
      "Support consulting assignments through business analysis, feasibility studies, farm assessments, market research, financial analysis, and implementation support.",
    experience: "Relevant professional experience is an advantage",
    responsibilities: [
      "Conduct farm and agribusiness assessments, market research, and value-chain analysis.",
      "Support business plans, feasibility studies, farm budgets, production projections, and financial models.",
      "Analyse costs, revenue, profitability, cash flow, and investment readiness.",
      "Help clients develop operational systems and standard operating procedures.",
      "Participate in field assessments, client meetings, implementation monitoring, and stakeholder engagements.",
      "Prepare consulting reports, presentations, proposals, and training materials.",
    ],
    qualifications: [
      "Bachelor's degree in Agribusiness, Agricultural Economics, Agriculture, Business Administration, Economics, or a related discipline.",
      "Strong analytical, communication, and report-writing skills.",
      "Good understanding of agriculture and agribusiness.",
      "Proficiency with Microsoft Excel and PowerPoint.",
      "Ability to turn business information into practical recommendations.",
    ],
    desirable: [
      "Business planning, feasibility study, or financial modelling experience.",
      "Farm management, market research, or value-chain experience.",
      "Project management experience or experience working with agribusinesses.",
    ],
  },
  {
    id: "capacity-development-officer",
    department: "KNOWLEDGE & CAPACITY DEVELOPMENT",
    departmentCategory: "Academy",
    title: "Knowledge & Capacity Development Officer",
    location: "Nigeria / Hybrid",
    locationCategory: ["Nigeria", "Hybrid"],
    type: "Full-time / Contract",
    typeCategory: ["Full-Time", "Contract"],
    roleLevel: "Officer / Associate",
    description:
      "Design and deliver practical learning for farmers, professionals, students, institutions, and development programmes.",
    experience:
      "Agriculture-related degree; facilitation experience is an advantage",
    responsibilities: [
      "Design training programmes, manuals, presentations, workbooks, and learning materials.",
      "Facilitate workshops, practical sessions, virtual learning, and Training of Trainers programmes.",
      "Conduct training needs assessments and develop learning evaluations.",
      "Support SCUP and other Light capacity-building programmes.",
      "Develop digital agricultural knowledge content, case studies, and knowledge products.",
      "Document training outcomes and collaborate with specialists on sector-specific courses.",
    ],
    qualifications: [
      "Bachelor's degree in Agriculture, Agribusiness, Education, Agricultural Economics, Development Studies, Business, or a related discipline.",
      "Excellent communication, presentation, and writing skills.",
      "Ability to simplify complex concepts into practical learning.",
      "Basic digital literacy.",
    ],
    desirable: [
      "Training, facilitation, adult-learning, or agricultural extension experience.",
      "Experience developing learning materials or using online learning platforms.",
      "Experience working with farmers, youth, or agribusiness professionals.",
    ],
  },
  {
    id: "agricultural-project-field-officer",
    department: "ADVISORY & IMPLEMENTATION",
    departmentCategory: "Projects",
    title: "Agricultural Project & Field Officer",
    location: "Nigeria · Field-based assignments",
    locationCategory: ["Nigeria", "Field-based"],
    type: "Full-time / Project-based",
    typeCategory: ["Full-Time", "Project-based"],
    roleLevel: "Field Officer",
    description:
      "Translate consulting recommendations into practical implementation, monitoring, and continuous improvement on farms and projects.",
    experience: "Practical agricultural experience",
    responsibilities: [
      "Conduct farm and project-site visits and monitor client activities and milestones.",
      "Support farm management systems, SOP adherence, and implementation teams.",
      "Collect field data, prepare reports, and document evidence and results.",
      "Identify operational challenges, escalate risks, and recommend corrective actions.",
      "Coordinate field contractors and service providers when required.",
      "Support farmer training, extension, and monitoring and evaluation activities.",
    ],
    qualifications: [
      "Bachelor's degree or HND in Agriculture, Agribusiness, Animal Science, Crop Science, Agricultural Engineering, or a related field.",
      "Practical agricultural experience and a strong field orientation.",
      "Good communication and report-writing skills.",
      "Ability to use Microsoft Office or Google Workspace.",
    ],
    desirable: [
      "Farm or project management experience.",
      "Experience with agricultural infrastructure, livestock, crops, or controlled-environment agriculture.",
      "Climate-smart agriculture, data collection, or monitoring experience.",
    ],
  },
  {
    id: "business-development-partnerships-officer",
    department: "BUSINESS DEVELOPMENT & PARTNERSHIPS",
    departmentCategory: "Business Development",
    title: "Business Development & Strategic Partnerships Officer",
    location: "Nigeria / Hybrid",
    locationCategory: ["Nigeria", "Hybrid"],
    type: "Full-time / Contract",
    typeCategory: ["Full-Time", "Contract"],
    roleLevel: "Officer / Executive",
    description:
      "Identify and develop opportunities with agribusinesses, institutions, financial partners, government, NGOs, and development organisations.",
    experience: "Relevant degree and commercial or partnership experience",
    responsibilities: [
      "Identify potential clients, institutional partners, tenders, grants, and consulting opportunities.",
      "Develop and maintain a business and partnership pipeline.",
      "Prepare proposals, expressions of interest, partnership concepts, pitch decks, and capability statements.",
      "Support client acquisition, partner relationships, stakeholder meetings, and negotiations.",
      "Conduct market intelligence and identify opportunities for Light's training and consulting services.",
      "Work with technical teams to develop commercially viable solutions.",
    ],
    qualifications: [
      "Bachelor's degree in Business Administration, Agribusiness, Economics, Agriculture, Marketing, Development Studies, or a related field.",
      "Strong communication, relationship-building, and presentation skills.",
      "Proposal-writing ability and commercial awareness.",
      "Ability to conduct market research.",
    ],
    desirable: [
      "Business development, consulting, or agriculture-sector experience.",
      "NGO or development-sector experience.",
      "Knowledge of grants, donor-funded projects, or B2B partnerships.",
    ],
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
  const [selectedRoleType, setSelectedRoleType] = useState<
    EmploymentCategory | "All"
  >("All");
  const [selectedDept, setSelectedDept] = useState<
    JobRole["departmentCategory"] | "All"
  >("All");
  const [selectedLoc, setSelectedLoc] = useState<LocationCategory | "All">(
    "All",
  );

  const filteredJobs = sampleJobs.filter((job) => {
    const matchesType =
      selectedRoleType === "All" || job.typeCategory.includes(selectedRoleType);
    const matchesDept =
      selectedDept === "All" || job.departmentCategory === selectedDept;
    const matchesLoc =
      selectedLoc === "All" || job.locationCategory.includes(selectedLoc);
    return matchesType && matchesDept && matchesLoc;
  });

  return (
    <section
      id="open-roles"
      className="py-16 sm:py-24 bg-[#0A160E] text-white relative"
    >
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading, Subtitle & Interactive Dropdowns matching mockup */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8BC34A] block mb-2">
                CURRENT OPPORTUNITIES
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-3">
                CURRENT OPPORTUNITIES
              </h2>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Discover positions where you can apply practical knowledge,
                build scalable business systems, and power Africa&apos;s
                agricultural transformation.
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
                  onChange={(e) =>
                    setSelectedRoleType(
                      e.target.value as EmploymentCategory | "All",
                    )
                  }
                  className="w-full bg-[#122218] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8BC34A] transition-colors"
                >
                  <option value="All">All Role Types</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Contract">Contract / Retainer</option>
                  <option value="Project-based">Project-based</option>
                </select>
              </div>

              {/* Department Filter */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/60 block mb-1">
                  Department
                </label>
                <select
                  value={selectedDept}
                  onChange={(e) =>
                    setSelectedDept(
                      e.target.value as JobRole["departmentCategory"] | "All",
                    )
                  }
                  className="w-full bg-[#122218] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8BC34A] transition-colors"
                >
                  <option value="All">All Departments</option>
                  <option value="Advisory">Advisory &amp; Systems</option>
                  <option value="Academy">Academy &amp; Capacity</option>
                  <option value="Projects">
                    Projects &amp; Implementation
                  </option>
                  <option value="Business Development">
                    Business Development &amp; Partnerships
                  </option>
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/60 block mb-1">
                  Location
                </label>
                <select
                  value={selectedLoc}
                  onChange={(e) =>
                    setSelectedLoc(e.target.value as LocationCategory | "All")
                  }
                  className="w-full bg-[#122218] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8BC34A] transition-colors"
                >
                  <option value="All">All Locations</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Field-based">Field-based</option>
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
                  Try clearing some filters or submit an open general
                  application.
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredJobs.map((job) => (
                  <article
                    key={job.id}
                    className="bg-[#122218] border border-white/10 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 group shadow-sm hover:shadow-lg hover:border-[#8BC34A]/40"
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

                      <p className="mb-4 text-[10px] text-white/55">
                        <span className="font-semibold text-white/75">
                          Level:
                        </span>{" "}
                        {job.roleLevel}
                        <span className="px-1.5 text-white/30">|</span>
                        <span className="font-semibold text-white/75">
                          Experience:
                        </span>{" "}
                        {job.experience}
                      </p>

                      <details className="group/details border-t border-white/10 pt-3">
                        <summary className="cursor-pointer list-none text-xs font-semibold text-[#8BC34A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8BC34A]">
                          View responsibilities &amp; requirements
                        </summary>
                        <div className="mt-4 space-y-4 text-xs leading-relaxed text-white/75">
                          <div>
                            <h4 className="mb-2 font-bold text-white">
                              Key responsibilities
                            </h4>
                            <ul className="list-disc space-y-1.5 pl-4">
                              {job.responsibilities.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="mb-2 font-bold text-white">
                              Qualifications
                            </h4>
                            <ul className="list-disc space-y-1.5 pl-4">
                              {job.qualifications.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="mb-2 font-bold text-white">
                              Desirable experience
                            </h4>
                            <ul className="list-disc space-y-1.5 pl-4">
                              {job.desirable.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </details>
                    </div>

                    {/* Card Footer: Type & Arrow */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                      <span className="text-white/50">{job.type}</span>
                      <button
                        type="button"
                        onClick={() => onSelectRole(job)}
                        className="text-[#8BC34A] font-bold inline-flex items-center gap-1 hover:translate-x-1 transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8BC34A]"
                      >
                        <span>Apply</span>
                        <HiArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
