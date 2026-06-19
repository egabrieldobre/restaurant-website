'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-[#d8f2ee] bg-white px-4 py-2 text-xs font-semibold tracking-[0.28em] text-[#0097a7] uppercase shadow-sm">
            Fresh Bakery • Specialty Coffee • Brunch Experience
          </p>
          <h1 className="text-5xl leading-[0.98] font-semibold text-[#1f2937] sm:text-6xl lg:text-7xl">
            TURQUOISE.
            <span className="block text-[#0097a7]">bakery&brunch</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6b7280] sm:text-xl">
            A bright Mediterranean-inspired café in Craiova where homemade
            cakes, a la carte brunch, dinner service, and specialty coffee come
            together in a calm, modern space.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-[#0097a7] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0097a7]/20 transition hover:-translate-y-0.5 hover:bg-[#007f8c]"
            >
              View Menu
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#d6e8e7] bg-white px-6 py-3.5 text-sm font-semibold text-[#1f2937] transition hover:border-[#0097a7] hover:text-[#0097a7]"
            >
              Visit Us
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-center">
            {[
              { value: '1,614', label: 'Instagram followers' },
              { value: 'Amaradia 73', label: 'Craiova location' },
              { value: '9-22', label: 'open daily' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1), duration: 0.45 }}
                className="rounded-3xl border border-white/80 bg-white/90 px-4 py-5 shadow-[0_20px_40px_rgba(31,41,55,0.06)] backdrop-blur"
              >
                <div className="text-sm font-semibold text-[#0097a7]">
                  {item.value}
                </div>
                <div className="mt-1 text-xs text-[#6b7280]">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-[#40e0d0]/25 blur-2xl" />
          <div className="absolute -bottom-4 right-4 h-28 w-28 rounded-full bg-[#0097a7]/15 blur-2xl" />

          <div className="relative h-[540px] overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(31,41,55,0.16)]">
            <Image
              src="/images/gallery-photo-04.jpg"
              alt="TURQUOISE bakery and brunch hero image placeholder"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#143436]/65 via-transparent to-white/10" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="max-w-sm rounded-3xl border border-white/25 bg-white/20 p-5 text-white backdrop-blur-md">
                <p className="text-xs font-semibold tracking-[0.24em] uppercase text-white/85">
                  Signature atmosphere
                </p>
                <p className="mt-3 text-sm leading-6 text-white/90">
                  A light-filled setting designed for slow mornings, colorful
                  plates, and effortless social moments.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
