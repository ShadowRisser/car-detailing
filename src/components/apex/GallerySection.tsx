'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  { src: '/images/hero-car.png', title: 'Lamborghini Aventador', category: 'Full PPF' },
  { src: '/images/gallery-1.png', title: 'Rolls-Royce Ghost', category: 'Ceramic Coating' },
  { src: '/images/gallery-2.png', title: 'Bentley Continental GT', category: 'Paint Correction' },
  { src: '/images/gallery-3.png', title: 'Mercedes AMG GT', category: 'Full Detail' },
  { src: '/images/ceramic-coating.png', title: 'Ferrari 488', category: 'Ceramic Coating' },
  { src: '/images/ppf-service.png', title: 'Porsche 911 GT3', category: 'PPF Install' },
];

const categories = ['All', 'Full PPF', 'Ceramic Coating', 'Paint Correction', 'Full Detail', 'PPF Install'];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding relative bg-surface">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Portfolio</span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            Our <span className="gold-gradient-text">Recent Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of transformations that speak for themselves. Every vehicle is a masterpiece.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs tracking-wider uppercase border rounded-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-white/10 text-muted-foreground hover:border-gold/30 hover:text-gold/70'
              }`}
              style={{ fontFamily: 'var(--font-sora), sans-serif' }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img, i) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden cursor-pointer gold-border rounded-sm"
              onClick={() => setLightbox(i)}
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <ZoomIn className="w-8 h-8 text-gold mb-3" />
                  <h3
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                  >
                    {img.title}
                  </h3>
                  <span className="text-xs tracking-wider uppercase text-gold/80 mt-1">{img.category}</span>
                </div>
              </div>

              {/* Gold line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={filtered[lightbox]?.src}
            alt={filtered[lightbox]?.title}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 text-center">
            <h3
              className="text-xl font-semibold text-white"
              style={{ fontFamily: 'var(--font-sora), sans-serif' }}
            >
              {filtered[lightbox]?.title}
            </h3>
            <span className="text-xs tracking-wider uppercase text-gold/80 mt-1 block">
              {filtered[lightbox]?.category}
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
}