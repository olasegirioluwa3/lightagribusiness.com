"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        badge="Connect with Light"
        badgeVariant="gold"
        title="Consultations & Inquiries"
        subtitle="Whether you are booking a Farm Diagnostic, enrolling in an Academy certification cohort, or scheduling an enterprise LightAgriOS consultation, our advisors are ready to assist."
        imageSrc="/image/advisory-my office picture.png"
        imageAlt="Light Agribusiness consultation office"
        layout="split-card"
        breadcrumbs={[{ label: "Contact" }]}
        pills={[
          "⚡ 1-Day Response SLA",
          "Fixed-Fee Diagnostics",
          "Multi-Farm Enterprise Consults",
        ]}
        floatingCard={{
          badge: "Direct Communication",
          title: "Advisory Desk",
          description: "Connect directly with experienced agribusiness practitioners who understand African farming realities.",
        }}
      />

      <div className="py-12 sm:py-16">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card borderAccent="green" className="p-8 sm:p-10">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto text-2xl">
                    ✓
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-brand-charcoal">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-brand-grey max-w-md mx-auto">
                    Thank you. A Light Agribusiness advisor will review your inquiry and reach out
                    within one business day with practical next steps.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif font-bold text-2xl text-brand-charcoal mb-2">
                    Request an Engagement
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-grey mb-6">
                    Fill in your details below and indicate which pillar of transformation you are interested in.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Tunde Adebayo"
                        className="w-full bg-brand-parchment border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-green"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tunde@example.com"
                        className="w-full bg-brand-parchment border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+234..."
                        className="w-full bg-brand-parchment border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-green"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                        Primary Pillar of Interest *
                      </label>
                      <select
                        required
                        className="w-full bg-brand-parchment border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-green"
                      >
                        <option value="advisory">Light Advisory (Farm Diagnostic / SOPs)</option>
                        <option value="academy">Light Academy (Courses &amp; Certifications)</option>
                        <option value="lightagrios">LightAgriOS (Farm Software)</option>
                        <option value="partnerships">Institutional Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                      How Can Light Assist Your Operations? *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your current agricultural operation, acreage/flock size, and key bottlenecks..."
                      className="w-full bg-brand-parchment border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-green"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Institutional Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <Card borderAccent="gold" className="p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-dark block mb-1">
                Institutional Hub
              </span>
              <h3 className="font-serif font-bold text-xl text-brand-charcoal mb-4">
                Light Agribusiness Consultancy Limited
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-brand-grey leading-relaxed">
                <div>
                  <span className="font-bold text-brand-charcoal block">Location:</span>
                  <p>Operations Hub: Nigeria (Serving West Africa &amp; Pan-African Partners)</p>
                </div>

                <div>
                  <span className="font-bold text-brand-charcoal block">Inquiries &amp; Diagnostics:</span>
                  <p>info@lightagribusiness.com</p>
                </div>

                <div>
                  <span className="font-bold text-brand-charcoal block">Advisory Consultation Hours:</span>
                  <p>Monday – Friday: 8:00 AM – 5:00 PM (WAT)</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-brand-charcoal text-white border-brand-green/30">
              <Badge variant="gold" className="mb-3">Our Promise</Badge>
              <h4 className="font-serif font-bold text-lg text-white mb-2">
                The Clarity Checkpoint
              </h4>
              <p className="text-xs text-brand-parchment/80 leading-relaxed">
                Every consultation ends with what is now clear, what system now exists, and what
                practical actions to take starting Monday. We do not leave you more confused than we found you.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  </div>
  );
}
