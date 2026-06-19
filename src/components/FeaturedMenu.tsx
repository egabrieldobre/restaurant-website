'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const menuCategories = [
  {
    title: 'Bakery',
    description:
      'Homemade cakes, croissants, and pastries inspired by the public profile highlights.',
    items: ['Homemade cakes', 'Croissants', 'Pastries'],
    image: '/images/featured-bakery.jpg',
    imageClassName: 'object-center',
  },
  {
    title: 'Brunch',
    description:
      'A la carte brunch plates and relaxed daytime dishes for slow meals and long conversations.',
    items: ['A la carte', 'Brunch plates', 'Dinner-ready dishes'],
    image: '/images/featured-brunch.jpg',
    imageClassName: 'object-center',
  },
  {
    title: 'Coffee',
    description:
      'Coffee service for breakfast, brunch, and evening visits in the Amaradia 73 space.',
    items: ['Specialty coffee', 'Cappuccino', 'All-day coffee'],
    image: '/images/featured-coffee.jpg',
    imageClassName: 'object-[32%_48%]',
  },
];

export default function FeaturedMenu() {
  return (
    <section id="menu" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.28em] text-[#0097a7] uppercase">
            Featured menu
          </p>
          <h2 className="section-heading text-4xl font-semibold text-[#1f2937] sm:text-5xl">
            A simple menu built around bakery, brunch, and coffee.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {menuCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-[#e5efee] bg-white shadow-[0_18px_50px_rgba(31,41,55,0.06)]"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={category.image}
                  alt={`${category.title} at TURQUOISE.bakery&brunch`}
                  fill
                  className={`object-cover transition duration-500 group-hover:scale-105 ${category.imageClassName}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#143436]/45 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#0097a7] uppercase backdrop-blur">
                  {category.title}
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-[#6b7280]">
                  {category.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#d8f2ee] bg-[#f8fdfd] px-3 py-1.5 text-xs font-medium text-[#374151]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
