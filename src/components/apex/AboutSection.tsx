'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-surface/50" />
      <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-gold/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/images/studio.png"
                alt="APEX Auto Spa Studio"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 border border-gold/10 m-4 pointer-events-none" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 sm:right-6 bg-surface border border-gold/20 p-5 sm:p-6"
              >
                <div className="text-3xl font-bold text-gold" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                  12+
                </div>
                <div className="text-xs tracking-wider uppercase text-muted-foreground mt-1">
                  Years of Excellence
                </div>
              </motion.div>
            </div>

            {/* Decorative corner */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold/20" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/40" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Our Story</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-sora), sans-serif' }}
            >
              The Art of{' '}
              <span className="gold-gradient-text">Automotive</span>
              <br />
              Perfection
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Founded in 2012, APEX Auto Spa was born from an uncompromising passion for automotive
                excellence. What began as a small detailing studio has evolved into one of the nation&apos;s
                most respected paint protection and detailing facilities.
              </p>
              <p>
                Our team of XPEL and Gyeon certified technicians treat every vehicle as if it were their
                own. We invest in continuous training, state-of-the-art equipment, and only the finest
                products — because nothing less will do for the vehicles entrusted to us.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: Award,
                  title: 'Certified',
                  desc: 'XPEL & Gyeon Certified Installers',
                },
                {
                  icon: Users,
                  title: 'Dedicated Team',
                  desc: '25+ Expert Technicians',
                },
                {
                  icon: Clock,
                  title: 'Punctual',
                  desc: 'On-Time Delivery Guarantee',
                },
              ].map((item) => (
                <div key={item.title} className="group">
                  <item.icon className="w-6 h-6 text-gold mb-2" />
                  <div
                    className="text-sm font-semibold text-foreground mb-1"
                    style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                  >
                    {item.title}
                  </div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="flex flex-wrap gap-3">
              {['Precision', 'Integrity', 'Innovation', 'Excellence'].map((val) => (
                <span
                  key={val}
                  className="px-4 py-2 text-xs tracking-wider uppercase border border-gold/15 text-gold/70 hover:border-gold/40 hover:text-gold transition-all duration-300 cursor-default"
                >
                  {val}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}