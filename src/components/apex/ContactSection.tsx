'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Our Studio',
    lines: ['1200 Luxury Lane, Suite 100', 'Beverly Hills, CA 90210'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['(800) 555-1234', 'Mon-Sat: 8AM - 6PM'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['hello@apexautospa.com', 'quotes@apexautospa.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Monday - Saturday: 8AM - 6PM', 'Sunday: By Appointment Only'],
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      vehicle: (form.elements.namedItem('vehicle') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        toast({
          title: 'Booking request sent!',
          description: 'We\'ll get back to you within 24 hours.',
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or call us directly.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
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
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Get in Touch</span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
          >
            Book Your <span className="gold-gradient-text">Appointment</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your vehicle? Fill out the form below or contact us directly.
            We respond to all inquiries within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-gold/20 rounded-sm">
                  <item.icon className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4
                    className="text-sm font-semibold text-foreground mb-1"
                    style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                  >
                    {item.title}
                  </h4>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="gold-border rounded-sm h-48 bg-surface flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-surface-light" />
              <div className="relative text-center">
                <MapPin className="w-8 h-8 text-gold/40 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground tracking-wider uppercase">Beverly Hills, CA</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="gold-border rounded-sm bg-surface p-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-4" />
                <h3
                  className="text-2xl font-bold text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                >
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your booking request has been received. Our team will contact you within 24 hours
                  to confirm your appointment.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="border-gold/30 text-gold hover:bg-gold/10 rounded-none tracking-wider text-xs uppercase"
                >
                  Send Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="gold-border rounded-sm bg-surface p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs tracking-wider uppercase text-muted-foreground">Full Name *</label>
                    <Input
                      name="name"
                      required
                      placeholder="John Doe"
                      className="bg-surface-light border-white/10 rounded-none h-11 text-sm focus:border-gold/50 placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-wider uppercase text-muted-foreground">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="bg-surface-light border-white/10 rounded-none h-11 text-sm focus:border-gold/50 placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs tracking-wider uppercase text-muted-foreground">Phone</label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="bg-surface-light border-white/10 rounded-none h-11 text-sm focus:border-gold/50 placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-wider uppercase text-muted-foreground">Vehicle</label>
                    <Input
                      name="vehicle"
                      placeholder="2024 Porsche 911 GT3"
                      className="bg-surface-light border-white/10 rounded-none h-11 text-sm focus:border-gold/50 placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-wider uppercase text-muted-foreground">Service Interested In *</label>
                  <Select name="service" required>
                    <SelectTrigger className="bg-surface-light border-white/10 rounded-none h-11 text-sm focus:border-gold/50 text-muted-foreground">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-surface-light border-white/10">
                      <SelectItem value="ppf">Paint Protection Film (PPF)</SelectItem>
                      <SelectItem value="ceramic">Ceramic Coating</SelectItem>
                      <SelectItem value="correction">Paint Correction</SelectItem>
                      <SelectItem value="detailing">Full Detailing</SelectItem>
                      <SelectItem value="tinting">Window Tinting</SelectItem>
                      <SelectItem value="interior">Interior Restoration</SelectItem>
                      <SelectItem value="wheel">Wheel & Brake Detail</SelectItem>
                      <SelectItem value="package">Custom Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-wider uppercase text-muted-foreground">Message</label>
                  <Textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your vehicle and what you're looking for..."
                    className="bg-surface-light border-white/10 rounded-none text-sm focus:border-gold/50 placeholder:text-muted-foreground/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold text-background hover:bg-gold-light font-semibold tracking-wider text-xs uppercase py-5 rounded-none transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Request Free Quote
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}