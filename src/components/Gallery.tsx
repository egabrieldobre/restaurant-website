"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    src: "/images/gallery-photo-03.jpg",
    alt: "Turquoise interior seating and turquoise wall",
    tall: true,
  },
  {
    src: "/images/gallery-photo-02.jpg",
    alt: "Guests enjoying food on the Turquoise terrace",
    tall: true,
  },
  {
    src: "/images/gallery-photo-07.jpg",
    alt: "Pastry display with croissants and cakes",
    tall: false,
  },
  {
    src: "/images/gallery-photo-06.jpg",
    alt: "Brunch buffet spread at TURQUOISE",
    tall: false,
  },
  {
    src: "/images/gallery-photo-09.jpg",
    alt: "Guests enjoying brunch buffet and shared dishes",
    tall: false,
  },
  {
    src: "/images/gallery-photo-10.jpg",
    alt: "TURQUOISE bakery and brunch exterior sign",
    tall: false,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.28em] text-[#0097a7] uppercase">
            Real restaurant moments
          </p>
          <h2 className="section-heading text-4xl font-semibold text-[#1f2937] sm:text-5xl">
            Real dishes, coffee, and atmosphere from TURQUOISE.bakery&brunch.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-[1.75rem] shadow-[0_18px_50px_rgba(31,41,55,0.08)] ${item.tall ? "row-span-2" : ""
                }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
