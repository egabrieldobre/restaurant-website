'use client';

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="TURQUOISE.bakery&brunch logo"
            width={48}
            height={48}
            className="h-12 w-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#374151] transition hover:text-[#0097a7]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setLang('ro')}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${lang === 'ro'
                ? 'bg-[#0097a7] text-white'
                : 'border border-[#d6e8e7] text-[#374151] hover:border-[#0097a7] hover:text-[#0097a7]'
              }`}
          >
            RO
          </button>
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${lang === 'en'
                ? 'bg-[#0097a7] text-white'
                : 'border border-[#d6e8e7] text-[#374151] hover:border-[#0097a7] hover:text-[#0097a7]'
              }`}
          >
            EN
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[#d6e8e7] bg-white p-2 text-[#1f2937] shadow-sm md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden border-t border-[#eef2f1] bg-white md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[#1f2937] transition hover:bg-[#f7f4ef] hover:text-[#0097a7]"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 flex gap-2 px-4">
                <button
                  type="button"
                  onClick={() => setLang('ro')}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${lang === 'ro'
                      ? 'bg-[#0097a7] text-white'
                      : 'border border-[#d6e8e7] text-[#374151]'
                    }`}
                >
                  RO
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${lang === 'en'
                      ? 'bg-[#0097a7] text-white'
                      : 'border border-[#d6e8e7] text-[#374151]'
                    }`}
                >
                  EN
                </button>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
