'use client';

import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Essential',
    subtitle: 'Perfect for daily drivers',
    price: '499',
    features: [
      'Exterior Hand Wash',
      'Clay Bar Treatment',
      'Single-Stage Polish',
      'Tire & Wheel Dressing',
      'Interior Vacuum & Wipe',
      'Window Cleaning',
      'Dashboard Conditioner',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    subtitle: 'Our most popular package',
    price: '1,299',
    features: [
      'Everything in Essential',
      'Two-Stage Paint Correction',
      'Premium Ceramic Coating (1 Year)',
      'Interior Deep Clean',
      'Leather Conditioning',
      'Engine Bay Cleaning',
      'Door Jambs & Seals',
      'Air Purification Treatment',
    ],
    popular: true,
  },
  {
    name: 'Ultimate',
    subtitle: 'Complete vehicle transformation',
    price: '3,499',
    features: [
      'Everything in Premium',
      'Full PPF (Front End)',
      'Multi-Stage Paint Correction',
      'Pro Ceramic Coating (5 Year)',
      'Interior Full Restoration',
      'Headlight Restoration',
      'Window Tinting',
      'Wheel Ceramic Coating',
      'Paint Touch-Up & Seal',
      'Monthly Maintenance (6 Months)',
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding relative">
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
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Investment</span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            Protection <span className="gold-gradient-text">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for exceptional quality. Every package includes our satisfaction guarantee
            and complimentary vehicle inspection.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-sm overflow-hidden transition-all duration-500 ${
                plan.popular
                  ? 'border-2 border-gold/40 bg-surface shadow-xl shadow-gold/5 scale-[1.02] md:scale-105'
                  : 'gold-border bg-surface hover:border-gold/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="bg-gold text-background text-xs font-semibold tracking-wider uppercase px-4 py-2 text-center flex items-center justify-center gap-2">
                  <Crown className="w-3.5 h-3.5" />
                  Most Popular
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Plan Name */}
                <div className="mb-6">
                  <h3
                    className="text-xl font-bold text-foreground mb-1"
                    style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-white/5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">$</span>
                    <span
                      className={`text-5xl font-bold ${plan.popular ? 'text-gold' : 'text-foreground'}`}
                      style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Starting price · Final quote after inspection</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className={`w-full font-semibold tracking-wider text-xs uppercase py-5 rounded-none transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gold text-background hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20'
                      : 'border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/60'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Custom packages available. Contact us for a personalized quote on your specific vehicle and requirements.
        </p>
      </div>
    </section>
  );
}