import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

const pillars = [
  {
    number: "01",
    title: "Knowledge & Capacity Development",
    description: "Build the people behind better agribusinesses.",
    image:
      "/image/pillar1- male instructor with some students having a lot of feed samples.png",
    link: "/academy",
    cta: "Explore Knowledge & Capacity",
    accent: "border-[#43A047]",
    badge: "bg-[#43A047]",
  },
  {
    number: "02",
    title: "Advisory & Business Systems",
    description: "Fix the systems behind performance.",
    image: "/image/advisory-man presenting analytics1.png",
    link: "/advisory",
    cta: "Explore Advisory & Business Systems",
    accent: "border-[#D4AF37]",
    badge: "bg-[#D4AF37]",
  },
  {
    number: "03",
    title: "LightAgriOS",
    description: "See your agribusiness clearly.",
    image: "/image/lightAgriOs (1).jpg",
    link: "/lightagrios",
    cta: "Explore LightAgriOS",
    accent: "border-[#204838]",
    badge: "bg-[#204838]",
  },
];

export const AboutEcosystem: React.FC = () => {
  return (
    <section
      id="light-ecosystem"
      className="scroll-mt-24 bg-[#FAF8F3] py-14 lg:py-16"
    >
      <Container size="lg">
        {/* Heading */}
        <div className="mb-10">
          <span className="block mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#1F5C3F]">
            The Light Ecosystem
          </span>

          <h2 className="text-3xl lg:text-[42px] font-bold leading-tight text-[#0D2A1E] mb-3">
            Three pillars. One purpose.
          </h2>

          <p className="max-w-2xl text-[#53625B] text-sm lg:text-[15px]">
            An integrated ecosystem to build capability, fix systems and create
            visibility.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className={`overflow-hidden rounded-xl border ${pillar.accent} bg-white`}
            >
              {/* Image */}
              <div className="relative h-[170px]">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />

                {/* Number Badge */}
                <div
                  className={`absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-md text-sm font-bold text-white ${pillar.badge}`}
                >
                  {pillar.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold leading-snug text-[#0D2A1E]">
                  {pillar.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-[#53625B]">
                  {pillar.description}
                </p>

                <Link
                  href={pillar.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F5C3F] hover:text-[#184932]"
                >
                  <span>{pillar.cta}</span>
                  <HiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
