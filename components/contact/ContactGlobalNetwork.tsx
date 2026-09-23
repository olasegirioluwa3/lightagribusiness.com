"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

// Key locations on the Pan-African & global network map matching the mockup
interface NetworkLocation {
  id: string;
  name: string;
  country: string;
  role: string;
  x: number; // percentage from left (0 - 100)
  y: number; // percentage from top (0 - 100)
}

const networkPins: NetworkLocation[] = [
  // North America
  {
    id: "sf",
    name: "San Francisco",
    country: "USA",
    role: "AgTech Innovation Desk",
    x: 19.5,
    y: 35.0,
  },
  {
    id: "dc",
    name: "Washington, D.C.",
    country: "USA",
    role: "Institutional & DFI Desk",
    x: 27.5,
    y: 34.0,
  },
  // South America
  {
    id: "saopaulo",
    name: "São Paulo",
    country: "Brazil",
    role: "Tropical Ag Systems Hub",
    x: 35.0,
    y: 69.0,
  },
  // Europe
  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    role: "Global Partnerships & Capital",
    x: 47.0,
    y: 26.5,
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    role: "Agri-Logistics & Standards",
    x: 50.5,
    y: 24.5,
  },
  // Africa
  {
    id: "lagos",
    name: "Lagos",
    country: "Nigeria",
    role: "Pan-African Headquarters",
    x: 48.0,
    y: 53.5,
  },
  {
    id: "accra",
    name: "Accra",
    country: "Ghana",
    role: "West Africa Regional Desk",
    x: 45.2,
    y: 54.0,
  },
  {
    id: "nairobi",
    name: "Nairobi",
    country: "Kenya",
    role: "East Africa Hub & Academy",
    x: 56.5,
    y: 56.0,
  },
  {
    id: "joburg",
    name: "Johannesburg",
    country: "South Africa",
    role: "Southern Africa Operations",
    x: 53.2,
    y: 74.0,
  },
  // Middle East
  {
    id: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    role: "Trade & Agribusiness Finance",
    x: 61.0,
    y: 39.5,
  },
  // South Asia
  {
    id: "mumbai",
    name: "Mumbai",
    country: "India",
    role: "Outgrower Sourcing & Processing",
    x: 68.5,
    y: 44.5,
  },
  // East Asia
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    role: "Precision Farm Systems Partner",
    x: 84.5,
    y: 34.0,
  },
  // Australia
  {
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    role: "Broadacre & Livestock Research",
    x: 87.5,
    y: 77.0,
  },
];

export const ContactGlobalNetwork: React.FC = () => {
  const [activePin, setActivePin] = useState<string | null>(null);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#6EA534] text-[#0B1E11] relative overflow-hidden">
      {/* Subtle depth lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.03] via-transparent to-black/[0.04] pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Copy & Action matching mockup */}
          <div className="lg:col-span-5 space-y-5 lg:pr-4">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#0B1E11] block mb-3">
                GLOBAL NETWORK
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-[44px] text-[#0B1E11] tracking-tight leading-[1.12]">
                Simplified
                <br className="hidden sm:inline" />
                {" "}directions and key
                <br className="hidden sm:inline" />
                {" "}market insights.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#0B1E11]/85 leading-relaxed max-w-md font-medium">
              Our global presence spans active offices, affiliates, and local
              partners for action enablement, sustainable agribusiness systems,
              and strategic market insights.
            </p>

            <div className="pt-2">
              <Link
                href="/partnerships"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0B1E11] text-white hover:bg-black font-bold text-xs uppercase tracking-wider transition-all duration-200 group shadow-md"
              >
                <span>Learn more</span>
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: World Map Graphic with exact pins */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-[16/9] flex items-center justify-center select-none">
              {/* Detailed Solid White World Map SVG */}
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full fill-white filter drop-shadow-sm"
                aria-hidden="true"
              >
                {/* Greenland */}
                <path d="M355,42 C368,36 384,33 398,40 C412,47 416,62 411,76 C406,90 388,96 374,93 C360,90 350,78 348,64 C346,51 350,44 355,42 Z" />

                {/* North America */}
                <path d="M88,72 C102,68 116,65 132,68 C144,70 148,82 158,89 C168,96 182,90 196,87 C210,84 225,82 238,89 C244,92 246,104 242,112 C236,124 228,118 220,116 C214,115 210,123 214,130 C220,140 236,138 248,136 C262,134 274,120 286,114 C296,109 308,116 312,126 C316,136 308,146 298,150 C288,154 282,165 284,175 C286,185 292,196 288,206 C284,216 272,224 270,236 C268,245 274,250 270,256 C265,264 252,252 245,246 C238,240 228,245 220,242 C208,238 200,224 192,216 C186,210 178,212 174,218 C168,227 172,242 166,248 C160,254 150,238 152,228 C155,214 162,204 160,190 C158,176 148,168 144,154 C140,140 144,124 138,112 C132,100 114,106 102,108 C90,110 82,98 84,86 C85,78 86,73 88,72 Z" />

                {/* Central America & Caribbean Islands */}
                <path d="M236,252 C242,256 248,264 254,272 C258,278 266,282 272,286 C276,289 274,293 270,292 C264,290 258,284 252,278 C246,272 238,264 236,252 Z" />
                <circle cx="288" cy="242" r="3" />
                <circle cx="298" cy="248" r="2.5" />
                <circle cx="308" cy="254" r="2" />

                {/* South America */}
                <path d="M268,294 C280,290 296,288 312,289 C326,290 342,295 354,304 C366,313 378,324 384,338 C388,348 384,360 376,368 C368,376 358,382 352,392 C346,402 342,414 336,425 C330,436 322,448 316,460 C310,472 300,482 292,480 C284,478 286,464 288,452 C290,438 288,422 284,408 C280,394 274,382 270,368 C266,354 262,340 260,326 C258,312 260,300 268,294 Z" />

                {/* Iceland */}
                <path d="M428,88 C434,85 442,86 446,90 C450,95 446,102 440,104 C434,106 426,102 425,96 C424,91 426,89 428,88 Z" />

                {/* United Kingdom & Ireland */}
                <path d="M460,114 C464,110 470,112 472,118 C474,124 476,134 472,140 C468,146 462,144 460,138 C458,132 458,122 460,114 Z" />
                <path d="M448,124 C452,122 455,126 454,132 C453,138 448,142 445,138 C442,134 444,126 448,124 Z" />

                {/* Europe */}
                <path d="M482,106 C494,94 506,80 518,74 C530,68 538,78 544,90 C550,102 546,116 538,126 C530,136 516,138 506,144 C498,148 492,156 488,166 C484,176 476,188 468,192 C458,196 448,192 444,182 C440,172 448,162 456,156 C464,150 474,144 478,134 C482,124 476,112 482,106 Z" />
                {/* Italy & Mediterranean Islands */}
                <path d="M504,162 C508,160 514,166 516,174 C518,182 522,192 518,196 C514,198 510,192 506,184 C502,176 500,166 504,162 Z" />
                <circle cx="498" cy="186" r="3" />

                {/* Africa & Madagascar */}
                <path d="M450,202 C464,198 482,196 500,198 C518,200 536,204 552,212 C564,218 568,228 574,240 C580,252 590,264 602,274 C608,280 606,288 598,294 C588,302 578,312 574,324 C570,336 566,350 562,364 C558,378 554,392 546,404 C538,416 528,426 518,422 C508,418 504,402 502,390 C500,378 498,364 496,350 C494,336 490,324 484,312 C478,300 468,292 456,286 C444,280 430,278 424,266 C418,254 424,242 430,232 C436,222 442,212 450,202 Z" />
                {/* Madagascar */}
                <path d="M592,360 C596,356 602,362 604,372 C606,382 604,396 600,406 C596,412 590,408 588,398 C586,388 588,370 592,360 Z" />

                {/* Asia / Eurasia */}
                <path d="M558,92 C582,82 612,78 642,76 C678,74 718,72 754,74 C792,76 832,80 868,88 C902,96 936,108 952,126 C960,135 956,146 944,152 C932,158 920,166 912,176 C904,186 912,198 906,208 C898,218 884,212 872,210 C860,208 850,214 842,222 C834,230 828,242 818,250 C808,258 794,260 784,268 C774,276 766,288 758,298 C752,306 742,308 734,302 C726,296 728,284 724,274 C720,264 712,256 704,248 C694,238 684,230 674,222 C662,212 654,220 648,232 C642,244 646,258 648,272 C650,284 660,296 658,304 C656,310 648,310 642,302 C634,292 630,278 624,266 C618,254 612,242 602,232 C592,222 580,216 570,208 C562,200 556,188 554,176 C552,164 554,150 556,136 C558,122 556,104 558,92 Z" />

                {/* Arabian Peninsula */}
                <path d="M576,220 C588,214 602,216 614,224 C624,232 630,246 626,258 C622,270 610,278 598,276 C588,274 582,262 578,252 C574,242 572,230 576,220 Z" />

                {/* Indian Subcontinent */}
                <path d="M654,226 C668,222 682,226 694,236 C706,246 712,260 706,274 C700,288 692,300 684,310 C678,316 672,312 668,302 C664,290 660,276 658,262 C656,248 650,236 654,226 Z" />
                <circle cx="688" cy="318" r="3" />

                {/* Japan */}
                <path d="M856,160 C862,156 870,162 874,170 C878,178 884,188 880,196 C876,204 868,206 864,198 C860,190 854,180 854,170 C854,164 854,162 856,160 Z" />
                <path d="M876,142 C882,140 888,144 886,150 C884,156 878,158 874,154 C872,150 874,144 876,142 Z" />

                {/* Southeast Asia Archipelago & Indonesia */}
                <path d="M774,324 C784,320 796,328 804,336 C808,340 802,348 794,346 C784,344 776,336 774,324 Z" />
                <path d="M814,320 C824,316 836,322 840,332 C842,342 834,348 824,346 C816,344 812,332 814,320 Z" />
                <path d="M802,354 C812,352 824,354 834,358 C836,362 828,366 820,366 C810,366 800,360 802,354 Z" />
                <path d="M888,338 C902,334 918,338 930,344 C936,348 932,356 922,358 C910,360 896,354 888,338 Z" />
                <circle cx="832" cy="276" r="3.5" />
                <circle cx="838" cy="292" r="3" />

                {/* Australia */}
                <path d="M814,386 C830,374 852,370 872,374 C888,378 902,392 908,408 C912,424 908,442 896,454 C884,466 866,464 850,458 C834,452 820,440 812,426 C806,412 804,396 814,386 Z" />
                {/* Tasmania */}
                <circle cx="888" cy="474" r="4" />

                {/* New Zealand */}
                <path d="M944,444 C948,440 954,444 956,450 C958,456 952,462 948,460 C944,458 942,450 944,444 Z" />
                <path d="M936,466 C940,462 946,466 948,472 C950,478 944,484 940,482 C936,480 934,472 936,466 Z" />
              </svg>

              {/* Exact Dark Teardrop Map Pins matching mockup */}
              {networkPins.map((pin) => {
                const isActive = activePin === pin.id;
                return (
                  <div
                    key={pin.id}
                    className="absolute cursor-pointer group"
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    onMouseEnter={() => setActivePin(pin.id)}
                    onMouseLeave={() => setActivePin(null)}
                    onClick={() =>
                      setActivePin(activePin === pin.id ? null : pin.id)
                    }
                  >
                    {/* Pulsing indicator ring */}
                    <span className="absolute -inset-1.5 rounded-full bg-white/30 animate-ping opacity-60 pointer-events-none" />

                    {/* Dark Teardrop Pin Marker matching design */}
                    <div className="relative transform -translate-x-1/2 -translate-y-full transition-transform duration-200 group-hover:scale-125 group-hover:-translate-y-[115%]">
                      <svg
                        viewBox="0 0 22 28"
                        className="w-4 h-5 sm:w-5 sm:h-6 drop-shadow-md overflow-visible"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Teardrop marker body */}
                        <path
                          d="M11 0C4.925 0 0 4.925 0 11C0 18.5 11 28 11 28C11 28 22 18.5 22 11C22 4.925 17.075 0 11 0Z"
                          fill="#0B1E11"
                        />
                        {/* Centered white inner dot */}
                        <circle cx="11" cy="10.5" r="3.8" fill="#FFFFFF" />
                      </svg>
                    </div>

                    {/* High-fidelity hover / active tooltip */}
                    <div
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-30 transition-all duration-200 pointer-events-none ${
                        isActive
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-1 scale-95 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
                      }`}
                    >
                      <div className="bg-[#0B1E11] text-white text-[11px] px-3.5 py-2 rounded-lg shadow-2xl border border-white/15 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8BC34A]" />
                          <span>
                            {pin.name}, {pin.country}
                          </span>
                        </div>
                        <span className="block text-[10px] text-[#E6AF2E] font-medium mt-0.5">
                          {pin.role}
                        </span>
                      </div>
                      {/* Tooltip beak */}
                      <div className="w-2.5 h-2.5 bg-[#0B1E11] rotate-45 mx-auto -mt-1.5 border-r border-b border-white/15" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

