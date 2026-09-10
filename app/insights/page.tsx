import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HiDownload, HiDocumentText, HiTrendingUp } from "react-icons/hi";

export default function InsightsPage() {
  const publications = [
    {
      title: "State of African Agribusiness Readiness Report (Annual)",
      category: "Flagship Research",
      badge: "Annual Report",
      description:
        "Combining aggregated, anonymized diagnostic benchmarks and LightAgriOS farm data to analyze real operational readiness, technology adoption, and capital risk across African agriculture.",
      cta: "Download Executive Summary",
    },
    {
      title: "The SOP Starter Kit for Commercial Poultry Farms",
      category: "Practical Guide",
      badge: "Free Toolkit",
      description:
        "A field-tested operational kit featuring standard feeding schedules, biosecurity protocols, mortality tracking checklists, and daily shift handover logs.",
      cta: "Download Starter Kit",
    },
    {
      title: "Why Agribusinesses Fail Past Year Two: The Systems Bottleneck",
      category: "Whitepaper",
      badge: "Diagnostic Insight",
      description:
        "A practical breakdown of how informal record-keeping, single-person dependency, and uncalibrated feed wastage erode farm margins during expansion.",
      cta: "Read Whitepaper",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="lg">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="gold" className="mb-3">Research &amp; Thought Leadership</Badge>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-brand-charcoal mb-4 leading-tight">
            Insights &amp; Publications
          </h1>
          <p className="text-lg text-brand-grey leading-relaxed mb-4">
            Knowledge that cannot be simplified has not yet been understood well enough to teach.
            Explore our annual readiness reports, practical toolkits, and diagnostic insights.
          </p>
          <div className="h-1 w-20 bg-brand-gold rounded-full" />
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {publications.map((item) => (
            <Card key={item.title} hoverable borderAccent="gold" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="gold">{item.badge}</Badge>
                  <span className="text-xs text-brand-grey font-medium">{item.category}</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-charcoal mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-grey leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/40">
                <Button href="/contact" variant="outline" size="sm" className="w-full justify-center">
                  <span>{item.cta}</span>
                  <HiDownload className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <SectionHeader
            badge="Visual Story"
            badgeVariant="green"
            title="Light Agribusiness in Action"
            subtitle="Explore our work across farms, training sessions, and advisory engagements across Africa."
            align="left"
          />

          {/* Featured Video */}
          {/* <div className="bg-brand-parchment-card border border-brand-border/60 rounded-2xl p-6 mb-8">
            <video
              controls
              className="w-full rounded-lg"
              poster="/image/lightagribusiness-gallery (1).jpg"
            >
              <source src="/video/gallery-tomato.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}

          {/* Educational Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-brand-parchment-card border border-brand-border/60 rounded-2xl p-6">
              <video
                controls
                className="w-full rounded-lg mb-4"
              >
                <source src="/video/agriculture-potential.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="font-serif font-bold text-lg text-brand-charcoal mb-2">
                Agriculture Does Not Lack Potential
              </h3>
              <p className="text-sm text-brand-grey">
                What we lack is access to the right knowledge.
              </p>
            </div>
            <div className="bg-brand-parchment-card border border-brand-border/60 rounded-2xl p-6">
              <video
                controls
                className="w-full rounded-lg mb-4"
              >
                <source src="/video/practical-learning.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="font-serif font-bold text-lg text-brand-charcoal mb-2">
                We Don&apos;t Just Teach Agriculture
              </h3>
              <p className="text-sm text-brand-grey">
                We make learning practical.
              </p>
            </div>
          </div>

          {/* Additional Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-parchment-card border border-brand-border/60 rounded-2xl p-6">
              <video
                controls
                className="w-full rounded-lg mb-4"
              >
                <source src="/video/farmers-with-samples.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="font-serif font-bold text-lg text-brand-charcoal mb-2">
                Farmers in LightAgribusiness
              </h3>
              <p className="text-sm text-brand-grey">
                Our farmers with samples at hand, showing practical application.
              </p>
            </div>
            <div className="bg-brand-parchment-card border border-brand-border/60 rounded-2xl p-6">
              <video
                controls
                className="w-full rounded-lg mb-4"
              >
                <source src="/video/logo-lightning-effect.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="font-serif font-bold text-lg text-brand-charcoal mb-2">
                LightAgribusiness Brand
              </h3>
              <p className="text-sm text-brand-grey">
                Our logo with a lightning effect, representing our illuminating mission.
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38].map((num) => (
              <div key={num} className="aspect-square overflow-hidden rounded-lg border border-brand-border/40 relative">
                <Image
                  src={`/image/lightagribusiness-gallery (${num}).jpg`}
                  alt={`Light Agribusiness Gallery ${num}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
