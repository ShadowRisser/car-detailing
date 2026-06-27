'use client';

import Navbar from '@/components/apex/Navbar';
import HeroSection from '@/components/apex/HeroSection';
import TrustBar from '@/components/apex/TrustBar';
import ServicesSection from '@/components/apex/ServicesSection';
import AboutSection from '@/components/apex/AboutSection';
import GallerySection from '@/components/apex/GallerySection';
import ProcessSection from '@/components/apex/ProcessSection';
import StatsSection from '@/components/apex/StatsSection';
import TestimonialsSection from '@/components/apex/TestimonialsSection';
import PricingSection from '@/components/apex/PricingSection';
import FAQSection from '@/components/apex/FAQSection';
import ContactSection from '@/components/apex/ContactSection';
import Footer from '@/components/apex/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}