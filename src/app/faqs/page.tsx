import FaqCategories from '@/components/faq/FaqCategories';
import HeroSection from '@/components/faq/HeroSection';
import ReachOut from '@/components/faq/ReachOut';
import MainLayout from '@/layouts/MainLayout';

import type { Component } from '@/types';

const FAQs: Component = () => (
  <MainLayout>
    {/* Hero Section with Background Image */}
    <HeroSection />
    {/* FAQ Categories */}
    <FaqCategories />
    {/* Still Have Questions */}
    <ReachOut />
  </MainLayout>
);

export default FAQs;
