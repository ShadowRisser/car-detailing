'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How long does a full PPF installation take?',
    a: 'A full front-end PPF installation typically takes 2-3 days. A full-body wrap requires 4-7 days depending on the vehicle size and complexity. We never rush the process — precision is our priority.',
  },
  {
    q: 'What is the difference between ceramic coating and PPF?',
    a: 'PPF is a physical urethane film that provides rock chip and scratch protection. Ceramic coating is a liquid polymer that creates a hydrophobic, glossy surface. For maximum protection, we recommend both — PPF for impact protection and ceramic coating over it for the ultimate gloss and ease of cleaning.',
  },
  {
    q: 'How long does ceramic coating last?',
    a: 'Longevity depends on the coating grade. Our entry-level coatings last 1-2 years, professional-grade coatings last 3-5 years, and our premium coatings can last up to 7+ years with proper maintenance. All packages include maintenance guidelines.',
  },
  {
    q: 'Can PPF be removed without damaging the paint?',
    a: 'Absolutely. High-quality PPF is designed to be fully removable. When installed correctly on factory paint, it can be removed years later without any residue or damage. This is why we only work on original, well-maintained paint.',
  },
  {
    q: 'Do you offer pickup and delivery services?',
    a: 'Yes, we offer complimentary white-glove pickup and delivery for all Premium and Ultimate package clients within a 30-mile radius. For other packages, pickup/delivery can be arranged for a nominal fee.',
  },
  {
    q: 'What warranty do you provide?',
    a: 'All PPF installations come with the manufacturer\'s warranty (up to 10 years for XPEL Ultimate Plus). Our ceramic coatings include a performance warranty. Additionally, we stand behind every service with our own satisfaction guarantee.',
  },
  {
    q: 'Do I need to schedule an appointment?',
    a: 'Yes, we operate by appointment only to ensure each vehicle receives our undivided attention. We recommend scheduling at least 2 weeks in advance, though we do accommodate urgent requests when possible.',
  },
];

export default function FAQSection() {
  return (
    <section className="section-padding relative bg-surface">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-3xl mx-auto">
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
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">FAQ</span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            Common <span className="gold-gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about our premium automotive services.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-white/5 rounded-sm px-6 data-[state=open]:border-gold/20 data-[state=open]:bg-surface-light/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground hover:text-gold transition-colors duration-300 py-5 [&>svg]:text-gold/60">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}