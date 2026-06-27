'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Shield, Droplets, Sparkles, Paintbrush, Eye, CircleDot } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Paint Protection Film',
    description:
      'Premium self-healing PPF from XPEL and SunTek. Invisible armor that preserves your factory finish against rock chips, scratches, and environmental damage.',
    image: '/images/ppf-service.png',
    features: ['Self-Healing Technology', '10-Year Warranty', 'XPEL & SunTek Certified'],
  },
  {
    icon: Droplets,
    title: 'Ceramic Coating',
    description:
      'Professional-grade ceramic coatings that deliver unmatched gloss, hydrophobic protection, and years of effortless maintenance.',
    image: '/images/ceramic-coating.png',
    features: ['9H Hardness', '5-Year Durability', 'Superior Gloss'],
  },
  {
    icon: Sparkles,
    title: 'Interior Detailing',
    description:
      'Meticulous restoration and protection of every interior surface. Leather conditioning, dashboard restoration, and premium air purification.',
    image: '/images/interior-detail.png',
    features: ['Leather Restoration', 'Surface Sanitization', 'Odor Elimination'],
  },
  {
    icon: Paintbrush,
    title: 'Paint Correction',
    description:
      'Multi-stage paint correction eliminates swirl marks, scratches, and oxidation. Restoring your paint to better-than-factory condition.',
    image: '/images/paint-correction.png',
    features: ['Multi-Stage Process', 'Swirl Removal', 'Mirror Finish'],
  },
  {
    icon: Eye,
    title: 'Window Tinting',
    description:
      'Premium ceramic window films offering superior heat rejection, UV protection, and privacy without compromising visibility.',
    image: '/images/window-tint.png',
    features: ['99% UV Protection', 'Heat Rejection', 'Premium Privacy'],
  },
  {
    icon: CircleDot,
    title: 'Wheel & Brake Detail',
    description:
      'Deep cleaning, decontamination, and ceramic protection for your wheels and brake calipers. Restoring that factory-fresh look.',
    image: '/images/wheel-detail.png',
    features: ['Brake Dust Removal', 'Ceramic Sealant', 'Caliper Restoration'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Our Expertise</span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            Premium <span className="gold-gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Every service is performed by certified technicians using only the finest products
            and cutting-edge techniques in our climate-controlled facility.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative gold-border-hover rounded-sm overflow-hidden bg-surface hover:bg-surface-light transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-sm">
                  <service.icon className="w-5 h-5 text-gold" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-lg font-semibold mb-3 text-foreground group-hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-[11px] tracking-wider uppercase px-2.5 py-1 bg-gold/5 text-gold/70 border border-gold/10 rounded-sm"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-gold/70 hover:text-gold transition-colors duration-300 group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>

              {/* Hover gold line at top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}