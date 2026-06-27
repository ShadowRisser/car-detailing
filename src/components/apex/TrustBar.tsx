'use client';

import { motion } from 'framer-motion';

const brands = [
  'PORSCHE', 'FERRARI', 'LAMBORGHINI', 'ROLLS ROYCE', 'BENTLEY',
  'MERCEDES-BENZ', 'BMW', 'MASERATI', 'ASTON MARTIN', 'McLAREN',
];

export default function TrustBar() {
  return (
    <section className="relative py-12 border-y border-white/5 overflow-hidden bg-surface">
      <div className="absolute inset-0 animate-shimmer" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Trusted by owners of the world&apos;s most prestigious automobiles
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="mx-8 sm:mx-12 text-sm sm:text-base tracking-[0.2em] text-white/15 font-semibold select-none"
              style={{ fontFamily: 'var(--font-sora), sans-serif' }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}