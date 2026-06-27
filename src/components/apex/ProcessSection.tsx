'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, Package, Wrench, Award } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    step: '01',
    title: 'Consultation',
    description:
      'We begin with a thorough assessment of your vehicle, discussing your goals, budget, and the best protection solutions tailored to your needs.',
  },
  {
    icon: Package,
    step: '02',
    title: 'Preparation',
    description:
      'Your vehicle undergoes an extensive multi-step wash, decontamination, and paint surface preparation to ensure perfect product adhesion.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Installation',
    description:
      'Our certified technicians perform the service with surgical precision in our climate-controlled, ISO-class clean facility.',
  },
  {
    icon: Award,
    step: '04',
    title: 'Quality Inspection',
    description:
      'Every project concludes with a meticulous 50-point quality inspection under specialized lighting to guarantee flawless results.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">How We Work</span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            Our <span className="gold-gradient-text">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A meticulous four-step process that ensures every vehicle receives the highest standard of care
            from start to finish.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              <div className="gold-border-hover rounded-sm p-6 lg:p-8 bg-surface hover:bg-surface-light transition-all duration-500 h-full">
                {/* Step Number */}
                <div
                  className="text-5xl font-bold text-gold/10 mb-4 -ml-1"
                  style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                >
                  {item.step}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center border border-gold/20 rounded-sm mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>

                {/* Content */}
                <h3
                  className="text-lg font-semibold mb-3 text-foreground group-hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>

              {/* Connector line (desktop) */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gold/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}