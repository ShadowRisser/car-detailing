'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-car.png"
          alt="Luxury car in showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              Premium Automotive Care
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            Where{' '}
            <span className="gold-gradient-text">Perfection</span>
            <br />
            Meets{' '}
            <span className="gold-gradient-text">Protection</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Unrivaled paint protection film, ceramic coatings, and detailing services
            crafted exclusively for those who demand nothing but the absolute finest for their vehicles.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gold text-background hover:bg-gold-light font-semibold tracking-wider text-sm uppercase px-8 py-6 rounded-none transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 group"
            >
              <a href="#contact">
                <Shield className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                Get Free Quote
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/60 font-semibold tracking-wider text-sm uppercase px-8 py-6 rounded-none transition-all duration-300 group"
            >
              <a href="#services">
                <Sparkles className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
                Explore Services
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/5"
          >
            {[
              { value: '5,000+', label: 'Cars Protected' },
              { value: '12+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl sm:text-3xl font-bold text-gold"
                  style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gold/60" />
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t border-l border-gold/10 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-gold/10 hidden lg:block" />
    </section>
  );
}