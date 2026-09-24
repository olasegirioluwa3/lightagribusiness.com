import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TawkTo } from "@/components/layout/TawkTo";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Light Agribusiness | Africa's Agribusiness Knowledge, Advisory & Technology Institution",
  description:
    "Light Agribusiness Consultancy Limited equips people and organizations with practical agricultural training, business systems, diagnostics, and LightAgriOS software.",
  keywords: [
    "agribusiness consulting Africa",
    "farm management software Nigeria",
    "LightAgriOS",
    "agribusiness academy",
    "farm diagnostics",
    "agricultural SOPs",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="min-h-screen flex flex-col bg-brand-parchment text-brand-charcoal antialiased selection:bg-brand-green selection:text-white font-roboto">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <TawkTo />
      </body>
    </html>
  );
}
