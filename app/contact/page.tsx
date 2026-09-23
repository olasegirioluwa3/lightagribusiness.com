import React from "react";
import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactGlobalNetwork } from "@/components/contact/ContactGlobalNetwork";
import { ContactFarmPerformance } from "@/components/contact/ContactFarmPerformance";
import { ContactCTA } from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Us | Light Agribusiness",
  description:
    "Get in touch with Light Agribusiness. Reach our advisory team, find regional offices, or submit a direct inquiry — we're here to help your agribusiness grow.",
};

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactChannels />
      <ContactGlobalNetwork />
      <ContactFarmPerformance />
      <ContactCTA />
    </div>
  );
}
