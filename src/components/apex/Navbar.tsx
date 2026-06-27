'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Diamond } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong border-b border-gold/10 shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <Diamond className="w-7 h-7 text-gold transition-transform duration-300 group-hover:rotate-12" />
              <div className="flex flex-col">
                <span
                  className="text-xl font-bold tracking-[0.2em] text-gold-light"
                  style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                >
                  APEX
                </span>
                <span
                  className="text-[10px] tracking-[0.35em] text-muted-foreground -mt-1 uppercase"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                >
                  Auto Spa
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-wider text-muted-foreground hover:text-gold transition-colors duration-300 uppercase"
                  style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(800) 555-1234</span>
              </a>
              <Button
                asChild
                className="bg-gold text-background hover:bg-gold-light font-semibold tracking-wider text-xs uppercase px-6 py-2.5 rounded-none transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                <a href="#contact">Book Now</a>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass-strong pt-24 lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 pt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg tracking-widest text-muted-foreground hover:text-gold transition-colors uppercase"
                  style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Button
                  asChild
                  className="bg-gold text-background hover:bg-gold-light font-semibold tracking-wider text-sm uppercase px-8 py-3 rounded-none"
                >
                  <a href="#contact" onClick={() => setMobileOpen(false)}>
                    Book Now
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}