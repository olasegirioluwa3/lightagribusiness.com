"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const PartnershipBanner: React.FC = () => {
  const partners = [
    {
      name: "Agri Agribusiness Consultancy",
      logo: "/image/partner-1.png",
      // label: "Advisory & Technical Partner",
    },
    {
      name: "AgriBusiness Hub",
      logo: "/image/partner-2.png",
      // label: "Commercial Trade Network",
    },
    {
      name: "LightAgriOS Systems",
      logo: "/image/partner-3.png",
      // label: "Digital Agriculture Platform",
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#F4F1E8]">
      <Container size="lg">
        {/* Main Dark Card Container */}
        <div className="relative bg-[#101C16] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl border border-[#1A3326]">
          {/* Detailed Vector World Map Structure Spanning Background */}
          <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-start">
            <svg
              className="w-full h-full object-cover"
              viewBox="0 0 1000 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* North America */}
              <path
                d="M70 70 Q110 40 160 55 T220 75 T260 115 T210 165 T170 175 T125 145 Z"
                fill="#8BC34A"
                fillOpacity="0.35"
              />
              {/* South America */}
              <path
                d="M185 195 Q235 205 255 245 T245 335 T205 385 T175 335 T165 255 Z"
                fill="#8BC34A"
                fillOpacity="0.35"
              />
              {/* Europe */}
              <path
                d="M435 55 Q485 45 525 75 T505 125 T455 135 T425 95 Z"
                fill="#8BC34A"
                fillOpacity="0.35"
              />
              {/* Africa */}
              <path
                d="M435 145 Q515 135 545 195 T555 285 T505 365 T455 345 T415 245 T415 175 Z"
                fill="#8BC34A"
                fillOpacity="0.5"
              />
              {/* Asia */}
              <path
                d="M545 55 Q645 35 755 65 T845 135 T795 215 T705 195 T595 165 T535 115 Z"
                fill="#8BC34A"
                fillOpacity="0.35"
              />
              {/* Australia */}
              <path
                d="M745 275 Q815 265 845 305 T825 365 T755 355 T725 305 Z"
                fill="#8BC34A"
                fillOpacity="0.35"
              />
              {/* Flight connection arcs & trade routes */}
              <path
                d="M195 125 Q345 65 475 215 T755 145"
                stroke="#8BC34A"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                strokeOpacity="0.7"
              />
              <path
                d="M225 265 Q355 285 475 235 T795 325"
                stroke="#8BC34A"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                strokeOpacity="0.7"
              />
              <circle cx="195" cy="125" r="4" fill="#8BC34A" />
              <circle cx="475" cy="215" r="6" fill="#8BC34A" />
              <circle cx="525" cy="265" r="5" fill="#8BC34A" />
              <circle cx="755" cy="145" r="4" fill="#8BC34A" />
              <circle cx="795" cy="325" r="4" fill="#8BC34A" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Heading with Map Context */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#8BC34A] block mb-1">
                INSTITUTIONAL NETWORK
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[32px] text-white tracking-tight leading-[1.1] uppercase">
                RESOURCES &amp;
                <br />
                <span className="text-white/90">PARTNERSHIPS</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/70 mt-3 leading-relaxed max-w-sm">
                Collaborating with leading research institutions, DFIs, and commercial agricultural operators across Africa.
              </p>
            </div>

            {/* Right Column: Original Partner Logos */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 items-center">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white hover:bg-[#a9d2c0] border border-white/10 hover:border-[#8BC34A]/40 rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 group min-h-[105px] shadow-sm hover:shadow-md"
                  >
                    <div className="relative w-full h-20 mb-2 flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain filter brightness-110 contrast-105 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                   
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
