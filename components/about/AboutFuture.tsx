import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const AboutFuture = () => {
  return (
    <section className="bg-white border-t border-[#E4EBE6]">
      <Container size="lg">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-center py-10">

          {/* LEFT */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#5C8968] mb-2">
              Where We Are Going
            </p>

            <h2 className="text-[38px] font-bold text-[#0F2A1D] leading-tight mb-4">
              A clearer future for African agriculture.
            </h2>

            <p className="text-[#596760] text-[15px] leading-relaxed max-w-2xl mb-8">
              We see a future where every stakeholder —
              from farmer to investor —
              has access to the knowledge, tools and support
              they need to succeed.
            </p>

            <Link
              href="/our-journey"
              className="inline-flex items-center gap-2 rounded-full bg-[#5BBF52] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#49AE40]"
            >
              Our Journey →
            </Link>
          </div>

          {/* RIGHT CARD */}
          <div className="overflow-hidden rounded-xl border border-[#DDE6DF]">
            <div className="grid grid-cols-[160px_1fr]">

              <div className="relative h-[140px]">
                <Image
                  src="/image/a plant germinating.jpg"
                  alt="Future Growth"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-gradient-to-br from-[#0A4B33] to-[#063120] text-white p-8 flex items-center">
                <p className="font-medium leading-relaxed text-lg">
                  More capable people.
                  <br />
                  Stronger agribusinesses.
                  <br />
                  A more food-secure Africa.
                </p>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};