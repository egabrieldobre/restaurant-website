"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const galleryImages = [
  "/images/foam-1.jpg",
  "/images/foam-2.jpg",
  "/images/foam-3.jpg",
  "/images/foam-4.jpg",
  "/images/foam-5.jpg",
  "/images/foam-6.webp",
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const hasActiveImage = activeIndex !== null;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const nextImage = () => {
    setActiveIndex((current) => {
      if (current === null) {
        return 0;
      }

      return (current + 1) % galleryImages.length;
    });
  };

  const previousImage = () => {
    setActiveIndex((current) => {
      if (current === null) {
        return 0;
      }

      return (current - 1 + galleryImages.length) % galleryImages.length;
    });
  };

  return (
    <section id="galerie" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold tracking-wider text-[#2563EB] uppercase">Galerie</p>
        <h2 className="text-4xl font-bold text-[#0F172A] sm:text-5xl">Lucrări recente</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {galleryImages.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative h-36 overflow-hidden rounded-2xl sm:h-48 md:h-56"
            aria-label={`Deschide imaginea ${index + 1}`}
          >
            <Image
              src={image}
              alt={`Imagine lucrare de izolație ${index + 1}`}
              fill
              unoptimized
              className="object-cover transition duration-300 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-[#0F172A]/0 transition group-hover:bg-[#0F172A]/30" />
          </button>
        ))}
      </div>

      {hasActiveImage ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4">
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-5 top-5 rounded-full bg-white p-2 text-slate-800"
            aria-label="Închide galeria"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={previousImage}
            className="absolute left-3 rounded-full bg-white/90 p-2 text-slate-800 sm:left-8"
            aria-label="Imaginea anterioară"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="relative h-[68vh] w-full max-w-4xl overflow-hidden rounded-2xl">
            <Image
              src={galleryImages[activeIndex]}
              alt={`Imagine mărită lucrare ${activeIndex + 1}`}
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-3 rounded-full bg-white/90 p-2 text-slate-800 sm:right-8"
            aria-label="Imaginea următoare"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      ) : null}
    </section>
  );
}
