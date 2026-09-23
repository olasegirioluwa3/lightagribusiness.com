import React from "react";
import { Container } from "@/components/ui/Container";
import {
  HiUsers,
  HiSparkles,
  HiCurrencyDollar,
  HiChartBar,
  HiChip,
  HiGlobeAlt,
} from "react-icons/hi";

export const AboutSystem: React.FC = () => {
  const items = [
    {
      icon: HiUsers,
      label: "People",
      className:
        "top-0 left-1/2 -translate-x-1/2",
    },
    {
      icon: HiSparkles,
      label: "Production",
      className:
        "top-[22%] right-0 translate-x-1/2",
    },
    {
      icon: HiCurrencyDollar,
      label: "Finance",
      className:
        "bottom-[22%] right-0 translate-x-1/2",
    },
    {
      icon: HiChartBar,
      label: "Markets",
      className:
        "bottom-0 left-1/2 -translate-x-1/2",
    },
    {
      icon: HiChip,
      label: "Technology",
      className:
        "bottom-[22%] left-0 -translate-x-1/2",
    },
    {
      icon: HiGlobeAlt,
      label: "Environment",
      className:
        "top-[22%] left-0 -translate-x-1/2",
    },
  ];

  return (
    <section className="bg-[#F5F8F5] py-16 lg:py-20">
      <Container size="lg">
        <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="block mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#1F5C3F]">
              Agriculture Is A System
            </span>

            <h2 className="text-3xl lg:text-[42px] font-bold tracking-tight leading-[1.1] text-[#0D2A1E] mb-5">
              More than production.
            </h2>

            <div className="space-y-4 text-sm lg:text-[15px] leading-relaxed text-[#53625B]">
              <p>
                Agribusiness is a connected system. People affect
                production. Production affects finance. Finance
                affects investment. Markets affect production
                decisions.
              </p>

              <p>
                Technology affects visibility. The environment
                affects everything.
              </p>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-[#0D2A1E]">
                That&apos;s why we look beyond isolated problems.
              </p>

              <p className="font-semibold text-[#0D2A1E]">
                We look at the system.
              </p>
            </div>
          </div>

          {/* RIGHT DIAGRAM */}
          <div className="flex justify-center">
            <div className="relative w-[420px] h-[420px]">

              {/* OUTER RING */}
              <div className="absolute inset-10 rounded-full border border-[#C9D7CC]" />

              {/* CENTER */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-[#163B2A] flex items-center justify-center shadow-lg">
                  <span className="text-white text-center text-sm font-bold leading-tight uppercase">
                    Agriculture
                    <br />
                    Is A System
                  </span>
                </div>
              </div>

              {/* NODES */}
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`absolute ${item.className}`}
                  >
                    <div className="flex items-center gap-2">

                      {item.label === "Environment" && (
                        <span className="text-xs font-medium text-[#0D2A1E]">
                          {item.label}
                        </span>
                      )}

                      {item.label === "Technology" && (
                        <span className="text-xs font-medium text-[#0D2A1E]">
                          {item.label}
                        </span>
                      )}

                      <div className="w-12 h-12 rounded-full bg-[#EDF4EE] border border-[#C9D7CC] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#1F5C3F]" />
                      </div>

                      {[
                        "People",
                        "Production",
                        "Finance",
                        "Markets",
                      ].includes(item.label) && (
                        <span className="text-xs font-medium text-[#0D2A1E] whitespace-nowrap">
                          {item.label}
                        </span>
                      )}
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