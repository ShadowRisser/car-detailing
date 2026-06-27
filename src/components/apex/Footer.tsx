'use client';

import { Diamond, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const footerLinks = {
  Services: [
    'Paint Protection Film',
    'Ceramic Coating',
    'Paint Correction',
    'Interior Detailing',
    'Window Tinting',
    'Wheel Detailing',
  ],
  Company: [
    'About Us',
    'Our Process',
    'Gallery',
    'Testimonials',
    'Careers',
    'Press',
  ],
  Support: [
    'FAQ',
    'Warranty Info',
    'Maintenance Guide',
    'Appointment Policy',
    'Gift Cards',
    'Contact Us',
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-surface border-t border-white/5">
      {/* CTA Banner */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-foreground mb-2"
                style={{ fontFamily: 'var(--font-sora), sans-serif' }}
              >
                Ready to <span className="gold-gradient-text">Transform</span> Your Vehicle?
              </h3>
              <p className="text-muted-foreground">
                Book your complimentary consultation today and discover the APEX difference.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="tel:+18005551234"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50 transition-all duration-300 text-xs tracking-wider uppercase font-semibold rounded-none"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-background hover:bg-gold-light transition-all duration-300 text-xs tracking-wider uppercase font-semibold rounded-none"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Diamond className="w-7 h-7 text-gold" />
              <div className="flex flex-col">
                <span
                  className="text-xl font-bold tracking-[0.2em] text-gold-light"
                  style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                >
                  APEX
                </span>
                <span className="text-[10px] tracking-[0.35em] text-muted-foreground -mt-1 uppercase">
                  Auto Spa
                </span>
              </div>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
              The premier destination for automotive paint protection and detailing.
              Trusted by discerning vehicle owners since 2012.
            </p>
            <div className="space-y-3">
              <a href="tel:+18005551234" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-colors">
                <Phone className="w-4 h-4" />
                (800) 555-1234
              </a>
              <a href="mailto:hello@apexautospa.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-colors">
                <Mail className="w-4 h-4" />
                hello@apexautospa.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0" />
                1200 Luxury Lane, Suite 100, Beverly Hills, CA 90210
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground mb-5"
                style={{ fontFamily: 'var(--font-sora), sans-serif' }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} APEX Auto Spa. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 border border-white/10 flex items-center justify-center hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 rounded-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-muted-foreground hover:text-gold" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}