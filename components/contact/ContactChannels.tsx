"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  HiArrowRight,
  HiLocationMarker,
  HiMail,
  HiPhone,
  HiChatAlt2,
  HiOfficeBuilding,
  HiSupport,
  HiCheckCircle,
} from "react-icons/hi";

/* ─── Office data ─────────────────────────────────────────────────────── */
const offices = [
  {
    name: "Global Headquarters",
    address: "14 Adeola Hopewell Street, Victoria Island, Abuja, Nigeria",
    email: "hello@lightagribusiness.com",
    phone: "+234 801 234 5678",
    mapUrl: "https://maps.google.com",
    image: "/image/lightagribusiness-gallery (22).jpg",
  },
  {
    name: "Africa Office",
    address: "3B, Bode Thomas Street, Surulere, Lagos, Nigeria",
    email: "lagos@lightagribusiness.com",
    phone: "+234 802 345 6789",
    mapUrl: "https://maps.google.com",
    image: "/image/lightagribusiness-gallery (23).jpg",
  },
];

/* ─── Contact Form ────────────────────────────────────────────────────── */
const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
        <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center">
          <HiCheckCircle className="w-8 h-8 text-brand-green" />
        </div>
        <h3 className="font-bold text-lg text-brand-charcoal">
          Message Sent!
        </h3>
        <p className="text-xs text-brand-grey max-w-xs">
          Thank you. We&apos;ll get back to you within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-bold text-brand-green hover:text-brand-green-dark underline underline-offset-2 transition-colors"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {(
        [
          { label: "Name", type: "text", placeholder: "Name", required: true },
          { label: "Company", type: "text", placeholder: "Company", required: false },
          { label: "Email", type: "email", placeholder: "Email", required: true },
          { label: "Subject", type: "text", placeholder: "Subject", required: true },
        ] as { label: string; type: string; placeholder: string; required: boolean }[]
      ).map(({ label, type, placeholder, required }) => (
        <div key={label}>
          <label className="block text-xs font-semibold text-brand-charcoal mb-1">
            {label}
          </label>
          <input
            type={type}
            required={required}
            placeholder={placeholder}
            className="w-full bg-[#FAF8F3] border border-brand-border rounded-md px-3 py-2 text-sm text-brand-charcoal placeholder:text-brand-grey/50 focus:outline-none focus:border-brand-green transition-colors"
          />
        </div>
      ))}

      <div>
        <label className="block text-xs font-semibold text-brand-charcoal mb-1">
          Message
        </label>
        <textarea
          rows={4}
          required
          placeholder="Message"
          className="w-full bg-[#FAF8F3] border border-brand-border rounded-md px-3 py-2 text-sm text-brand-charcoal placeholder:text-brand-grey/50 focus:outline-none focus:border-brand-green transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2.5 rounded-md bg-brand-green hover:bg-brand-green-dark text-white font-bold text-xs uppercase tracking-widest transition-all duration-200"
      >
        SEND
      </button>
    </form>
  );
};

/* ─── Column Header ───────────────────────────────────────────────────── */
const ColumnHeader: React.FC<{
  icon: React.ElementType;
  number: string;
  title: string;
  subtitle: string;
  iconBg: string;
  iconColor: string;
  labelColor: string;
}> = ({ icon: Icon, number, title, subtitle, iconBg, iconColor, labelColor }) => (
  <div className="mb-5">
    {/* Large circular icon */}
    <div
      className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${iconBg}`}
    >
      <Icon className={`w-6 h-6 ${iconColor}`} />
    </div>
    <p className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${labelColor}`}>
      {number}) {title}
    </p>
    <p className="text-xs text-brand-grey leading-relaxed">{subtitle}</p>
  </div>
);

/* ─── Main Component ──────────────────────────────────────────────────── */
export const ContactChannels: React.FC = () => {
  return (
    <section id="inquiry" className="py-12 sm:py-16 bg-[#FAF8F3]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* ── Column 1: Inquiry Form ─────────────────────── */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-border/80 shadow-sm">
              <ColumnHeader
                icon={HiChatAlt2}
                number="1"
                title="Inquiries"
                subtitle="Send a direct message."
                iconBg="bg-brand-green/10"
                iconColor="text-brand-green"
                labelColor="text-brand-green"
              />
              <ContactForm />
            </div>
          </div>

          {/* ── Column 2: Regional Offices ────────────────── */}
          <div id="offices" className="lg:col-span-1 flex flex-col gap-5">
            <ColumnHeader
              icon={HiOfficeBuilding}
              number="2"
              title="Regional Offices"
              subtitle="Here are contact details about our regional offices and contact methods."
              iconBg="bg-brand-gold/10"
              iconColor="text-brand-gold"
              labelColor="text-brand-charcoal"
            />

            {offices.map((office) => (
              <div
                key={office.name}
                className="bg-white rounded-2xl p-5 border border-brand-border/80 shadow-sm"
              >
                <h3 className="font-bold text-sm text-brand-charcoal mb-3 uppercase tracking-wide">
                  {office.name}
                </h3>

                {/* Map thumbnail + contact details side by side */}
                <div className="flex gap-3 mb-4">
                  <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0 border border-brand-border/60">
                    <Image
                      src={office.image}
                      alt={`${office.name} location`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-start gap-1.5 text-xs text-brand-grey">
                      <HiLocationMarker className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                      <p className="leading-tight">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-brand-grey">
                      <HiMail className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-brand-green transition-colors truncate">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-brand-grey">
                      <HiPhone className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <a href={`tel:${office.phone}`} className="hover:text-brand-green transition-colors">
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md border border-brand-border text-[11px] font-bold text-brand-charcoal uppercase tracking-wider hover:border-brand-green hover:text-brand-green transition-all group"
                >
                  <span>View on Map</span>
                  <HiArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          {/* ── Column 3: Direct Support ──────────────────── */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <ColumnHeader
              icon={HiSupport}
              number="3"
              title="Direct Support"
              subtitle="Contact channels that can help with your direct support method."
              iconBg="bg-pillar-lightagrios/10"
              iconColor="text-pillar-lightagrios"
              labelColor="text-brand-charcoal"
            />

            {/* Global Inquiries card */}
            <div className="bg-white rounded-2xl p-5 border border-brand-border/80 shadow-sm">
              <h3 className="font-roboto font-bold text-sm text-brand-charcoal mb-3 uppercase tracking-wide">
                Global Inquiries
              </h3>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-brand-grey">
                  <HiMail className="w-4 h-4 text-brand-green shrink-0" />
                  <span>hello@lightagribusiness.com</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-grey">
                  <HiPhone className="w-4 h-4 text-brand-green shrink-0" />
                  <span>+234 801 234 5678</span>
                </div>
              </div>
            </div>

            {/* Technical Support image card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-brand-border/80 shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/image/pillar1 - female instructor advising many farmers in a farm.png"
                  alt="Light Agribusiness technical support"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07130D]/80 via-[#07130D]/20 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                    Technical Support
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-brand-charcoal mb-1">
                  LightAgriOS &amp; Software Help
                </h3>
                <p className="text-xs text-brand-grey leading-relaxed">
                  Get help with LightAgriOS onboarding, software features, and
                  technical implementation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
