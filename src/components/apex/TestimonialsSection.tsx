'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus Chen',
    role: 'Porsche 911 GT3 Owner',
    rating: 5,
    text: "APEX did a full PPF wrap on my GT3 and the results are absolutely flawless. You cannot see the film at all. The attention to detail is unlike anything I've experienced. Worth every penny.",
  },
  {
    name: 'Victoria Harrington',
    role: 'Rolls-Royce Ghost Owner',
    rating: 5,
    text: "I've had my vehicles detailed at many high-end shops across the country, and APEX is simply on another level. The ceramic coating on my Ghost still looks freshly applied after two years.",
  },
  {
    name: 'David Richardson',
    role: 'Lamborghini Huracán Owner',
    rating: 5,
    text: "The paint correction they performed on my Huracán was transformative. Swirl marks I thought were permanent disappeared completely. The mirror finish is absolutely stunning.",
  },
  {
    name: 'Sarah Mitchell',
    role: 'Mercedes-AMG GT Owner',
    rating: 5,
    text: 'From the initial consultation to the final reveal, the entire experience at APEX was exceptional. Professional, knowledgeable, and genuinely passionate about their craft.',
  },
  {
    name: 'James Whitfield',
    role: 'Ferrari 488 Owner',
    rating: 5,
    text: "I fly my Ferrari from Chicago just to have APEX work on it. That should tell you everything you need to know. The quality is simply unmatched anywhere in the country.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="section-padding relative bg-surface">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Testimonials</span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            Client <span className="gold-gradient-text">Experiences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t take our word for it. Hear from the discerning vehicle owners who trust APEX with their prized automobiles.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                <div className="gold-border rounded-sm bg-background/50 p-8 sm:p-12 h-full flex flex-col justify-center">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-gold/20 mb-6" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-8 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <span className="text-gold font-semibold text-sm">
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground tracking-wider uppercase">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-gold/20 flex items-center justify-center hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 rounded-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gold" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-gold' : 'w-1.5 bg-gold/20 hover:bg-gold/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-gold/20 flex items-center justify-center hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 rounded-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
