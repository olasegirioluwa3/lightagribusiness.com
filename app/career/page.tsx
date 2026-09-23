import React from "react";
import type { Metadata } from "next";
import { CareerPageClient } from "@/components/career/CareerPageClient";

export const metadata: Metadata = {
  title: "Careers & Professional Network | Light Agribusiness",
  description:
    "Build your future in agribusiness. Join Africa's Knowledge, Advisory, and Technology Institution. Explore open roles across Advisory, Technology (LightAgriOS), Academy, and Research.",
};

export default function CareerPage() {
  return <CareerPageClient />;
}
