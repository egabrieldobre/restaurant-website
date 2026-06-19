'use client';

import { Coffee, Heart, Sparkles, Sunrise } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

const icons = [Sunrise, Heart, Coffee, Sparkles];

export default function Experience() {
  const { t } = useLanguage();

  const experiences = t.experience.items.map((item, i) => ({
    ...item,
    icon: icons[i],
  }));

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.28em] text-[#0097a7] uppercase">
            {t.experience.badge}
          </p>
          <h2 className="section-heading text-4xl font-semibold text-[#1f2937] sm:text-5xl">
            {t.experience.heading}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[1.75rem] border border-[#e5efee] bg-white p-6 shadow-[0_18px_50px_rgba(31,41,55,0.06)]"
              >
                <div className="inline-flex rounded-2xl bg-[#e8faf7] p-3 text-[#0097a7]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#1f2937]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6b7280]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
