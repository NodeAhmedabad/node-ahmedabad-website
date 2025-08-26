import React from 'react';

import AboutSection from '../components/home/AboutSection';
import EventsSection from '../components/home/EventsSection';
import HeroSection from '../components/home/HeroSection';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const Index = () => (
  <div className="min-h-screen bg-slate-900">
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <EventsSection />
    </main>
    <Footer />
  </div>
);

export default Index;
