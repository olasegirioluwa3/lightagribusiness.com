import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HiArrowRight } from "react-icons/hi";

const insights = [
  {
    tag: "ARTICLE",
    title: "The agrifood talent gap: Why people matter more than ever.",
    image: "/image/pillar1 - female instructor advising many farmers in a farm.png",
    href: "/insights",
  },
  {
    tag: "GUIDE",
    title: "A practical guide to investment readiness for agribusinesses.",
    image: "/image/lightagribusiness-gallery (14).jpg",
    href: "/insights",
  },
  {
    tag: "RESEARCH",
    title: "Technology adoption in African agriculture: Opportunities and challenges.",
    image: "/image/female famer with lighagrios phone.png",
    href: "/insights",
  },
];

export const InsightsPreview: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-100">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Eyebrow + Headline + Description + CTA */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-green block mb-3">
              INSIGHTS & KNOWLEDGE
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 tracking-tight leading-[1.25] mb-4">
              Thought leadership for a stronger agrifood future.
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
              Articles, research, guides, reports and practical tools to help you
              stay informed and make better decisions.
            </p>

            <Link
              href="/insights"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a3820] hover:bg-[#062615] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm group"
            >
              <span>Explore Insights</span>
              <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: 3 Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {insights.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-100 mb-3 border border-gray-100 shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 250px"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-1">
                    {/* Tag Pill */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                      <span className="text-[10px] font-bold tracking-wider text-brand-green uppercase">
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-xs sm:text-sm font-bold text-gray-900 leading-snug mb-3 group-hover:text-brand-green transition-colors line-clamp-3">
                      {item.title}
                    </h3>

                    {/* Read More Link */}
                    <div className="mt-auto pt-1">
                      <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-gray-500 group-hover:text-brand-green transition-colors">
                        <span>Read More</span>
                        <HiArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
