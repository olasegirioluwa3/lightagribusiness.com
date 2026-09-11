import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HiCheckCircle, HiDeviceMobile, HiChartBar, HiLockClosed, HiCloud } from "react-icons/hi";

export default function LightAgriOSPage() {
  const tiers = [
    {
      name: "Starter / Free",
      badge: "Adoption Driver",
      price: "₦0",
      period: "forever free",
      description: "Basic digital record-keeping for individual smallholders, students, and Academy alumni.",
      features: [
        "Digital flock & crop logbooks",
        "Daily expense & revenue tracker",
        "Offline-capable mobile entry",
        "Embedded Academy training tips",
      ],
      cta: "Get Free Access",
      popular: false,
    },
    {
      name: "SME Growth",
      badge: "Commercial Farms",
      price: "₦15,000",
      period: "per month",
      description: "Full operations control for commercial poultry, catfish, greenhouse, or arable farms.",
      features: [
        "All Starter features included",
        "Automated feed conversion & mortality analytics",
        "Inventory re-order alerts & batch costing",
        "Staff task checklists & biosecurity logs",
        "Standardized P&L and cashflow reports",
      ],
      cta: "Start 30-Day Trial",
      popular: true,
    },
    {
      name: "Enterprise Multi-Farm",
      badge: "Corporates & DFIs",
      price: "Custom",
      period: "annual licensing",
      description: "Multi-site visibility, benchmarking, and investor-grade governance dashboards.",
      features: [
        "All SME Growth features",
        "Multi-farm / multi-estate aggregate dashboards",
        "Outgrower network management & tracking",
        "Investor Dashboard & DFI compliance reporting",
        "Dedicated account manager & on-farm training",
      ],
      cta: "Schedule Enterprise Demo",
      popular: false,
    },
  ];

  const modules = [
    {
      name: "Core Farm Operations",
      desc: "Digital flock records, crop cycle logs, feed formulations, biosecurity checklists, and warehouse inventory.",
      icon: "🌱",
    },
    {
      name: "Financial Intelligence",
      desc: "Batch profitability, daily operational cost tracking, yield benchmarking, and automated cashflow sheets.",
      icon: "📊",
    },
    {
      name: "Offline-First Sync",
      desc: "Input records in low-connectivity farm environments without mobile data; auto-syncs when online.",
      icon: "⚡",
    },
    {
      name: "Academy Training Integration",
      desc: "Built-in micro-courses, SOP templates, and diagnostic recommendations right inside the software.",
      icon: "🎓",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="lg">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="lightagrios" className="mb-3">
            Pillar Three: Agricultural Technology
          </Badge>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-brand-charcoal mb-4 leading-tight">
            LightAgriOS
          </h1>
          <p className="text-lg text-brand-grey leading-relaxed mb-4">
            We turn farm data into decisions you can actually see and act on. The single operating
            system built for how African agribusinesses actually function: offline-ready, multi-enterprise,
            and simple enough for farm floor staff to use daily.
          </p>
          <div className="h-1 w-20 bg-brand-gold rounded-full" />
        </div>

        {/* Product Modules Grid */}
        <div className="mb-20">
          <SectionHeader
            badge="Platform Architecture"
            badgeVariant="green"
            title="Engineered for Daily Usability, Not Feature Bloat"
            subtitle="Technology should reduce the burden of decision-making, not add to it. LightAgriOS puts critical numbers in front of the operator."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m) => (
              <Card key={m.name} hoverable borderAccent="lightagrios" className="p-6">
                <div className="text-3xl mb-3">{m.icon}</div>
                <h4 className="font-serif font-bold text-lg text-brand-charcoal mb-2">{m.name}</h4>
                <p className="text-xs sm:text-sm text-brand-grey leading-relaxed">{m.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology in the Field Visual Showcase */}
        <div className="mb-20">
          <SectionHeader
            badge="Field Usability"
            badgeVariant="lightagrios"
            title="Built for the Reality of the African Farm Floor"
            subtitle="Technology that sits in a boardroom is useless. LightAgriOS is engineered for daily record logging by supervisors, farm owners, and field workers in active production environments."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/60 p-4 rounded-xl border border-brand-border/60 flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full mb-3 rounded-lg overflow-hidden">
                <Image
                  src="/image/female famer with lighagrios phone.png"
                  alt="Farmer entering flock records on mobile phone"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h5 className="font-serif font-bold text-sm text-brand-charcoal mb-1">Mobile Offline Logging</h5>
                <p className="text-xs text-brand-grey">Instant data capture in remote pens without needing a cellular connection.</p>
              </div>
            </div>

            <div className="bg-white/60 p-4 rounded-xl border border-brand-border/60 flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full mb-3 rounded-lg overflow-hidden">
                <Image
                  src="/image/middle-aged man with lighagrios tab.png"
                  alt="Operations manager analyzing metrics on tablet"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h5 className="font-serif font-bold text-sm text-brand-charcoal mb-1">Executive Visibility</h5>
                <p className="text-xs text-brand-grey">Managers inspect feed conversion ratios, production cycles, and labor logs.</p>
              </div>
            </div>

            <div className="bg-white/60 p-4 rounded-xl border border-brand-border/60 flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full mb-3 rounded-lg overflow-hidden">
                <Image
                  src="/image/old man with lightagrios tab1.png"
                  alt="Commercial farm owner reviewing inventory and costs"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h5 className="font-serif font-bold text-sm text-brand-charcoal mb-1">Intuitive for Every Age</h5>
                <p className="text-xs text-brand-grey">No complex training required. Simple high-contrast buttons and guided prompts.</p>
              </div>
            </div>

            <div className="bg-white/60 p-4 rounded-xl border border-brand-border/60 flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full mb-3 rounded-lg overflow-hidden">
                <Image
                  src="/image/old man with lightagrios tab2.png"
                  alt="Commercial farmer reviewing batch profitability analytics"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h5 className="font-serif font-bold text-sm text-brand-charcoal mb-1">Batch Cost Tracking</h5>
                <p className="text-xs text-brand-grey">Understand exact margins per pen, pond, or greenhouse before harvest day.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-20">
          <SectionHeader
            badge="Pricing &amp; Access"
            badgeVariant="gold"
            title="Accessible for Smallholders. Rigorous for Enterprises."
            subtitle="Free tier to build industry-wide adoption; enterprise tier to power commercial multi-site estates."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                hoverable
                borderAccent="lightagrios"
                className={`flex flex-col justify-between ${
                  tier.popular ? "ring-2 ring-teal-600 shadow-parchment-hover" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="lightagrios">{tier.badge}</Badge>
                    <span className="text-xs text-brand-grey font-semibold">{tier.period}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-1">
                    {tier.name}
                  </h3>

                  <div className="mb-4">
                    <span className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-charcoal">
                      {tier.price}
                    </span>
                    <span className="text-xs text-brand-grey ml-1 font-medium">/{tier.period}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-grey mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="space-y-2.5 mb-8 pt-4 border-t border-brand-border/40">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                      Included Capabilities:
                    </h5>
                    {tier.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-brand-charcoal-muted">
                        <HiCheckCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border/40">
                  <Button
                    href="/contact"
                    variant={tier.popular ? "primary" : "outline"}
                    size="md"
                    className="w-full justify-center"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
