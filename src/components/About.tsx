"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  "Fresh pastries baked every day",
  "Artisan bakery with quality ingredients",
  "Specialty coffee crafted with care",
  "Relaxed brunch atmosphere for slow mornings",
  "Warm, friendly service",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.28em] text-[#0097a7] uppercase">
            Welcome to TURQUOISE
          </p>
          <h2 className="section-heading text-4xl font-semibold text-[#1f2937] sm:text-5xl">
            A bakery and brunch café shaped around fresh, beautiful moments.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#6b7280] sm:text-lg">
            TURQUOISE.bakery&brunch brings together buttery pastries, artisan breads,
            specialty coffee, and a Mediterranean-inspired brunch rhythm in a space
            that feels premium yet welcoming.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#e5efee] bg-white px-4 py-4 text-sm text-[#374151] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="relative"
        >
          <div className="absolute -left-4 top-6 h-24 w-24 rounded-full bg-[#40e0d0]/20 blur-2xl" />
          <div className="relative h-[440px] overflow-hidden rounded-[2.25rem] bg-white shadow-[0_20px_60px_rgba(31,41,55,0.12)] sm:h-[520px]">
            <Image
              src="/images/people.jpg"
              alt="Guests dining on the TURQUOISE terrace"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
