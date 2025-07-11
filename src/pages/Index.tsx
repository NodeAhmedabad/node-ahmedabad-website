
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import EventsSection from '../components/home/EventsSection';

const Index = () => {
  return (
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
};

export default Index;
