'use client';

import { Clock3, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

const contactIcons = [MapPin, Phone, Mail, Clock3];

export default function Contact() {
  const { t } = useLanguage();

  const contactDetails = t.contact.details.map((detail, i) => ({
    ...detail,
    icon: contactIcons[i],
  }));

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.28em] text-[#0097a7] uppercase">
            {t.contact.badge}
          </p>
          <h2 className="section-heading text-4xl font-semibold text-[#1f2937] sm:text-5xl">
            {t.contact.heading}
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-[1.75rem] border border-[#e5efee] bg-white p-6 shadow-[0_18px_50px_rgba(31,41,55,0.06)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-[#e8faf7] p-3 text-[#0097a7]">
                      <Icon size={22} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold tracking-[0.18em] text-[#0097a7] uppercase">
                        {item.label}
                      </div>
                      <div className="mt-1 text-base text-[#374151]">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[2rem] border border-[#e5efee] bg-white shadow-[0_18px_50px_rgba(31,41,55,0.06)]"
          >
            <div className="border-b border-[#eef2f1] p-6">
              <h3 className="text-2xl font-semibold text-[#1f2937]">
                {t.contact.mapTitle}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#6b7280]">
                {t.contact.mapDescription}
              </p>
            </div>
            <iframe
              title="TURQUOISE bakery and brunch map placeholder"
              src="https://www.google.com/maps?q=Strada%20Amaradia%2073%2C%20Craiova%20200170&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
