import FaqCategories from '@/components/faq/FaqCategories';
import HeroSection from '@/components/faq/HeroSection';
import ReachOut from '@/components/faq/ReachOut';
import MainLayout from '@/layouts/MainLayout';

import type { Component } from '@/types';

const FAQs: Component = () => (
  <MainLayout>
    <HeroSection />
    <FaqCategories />
    <ReachOut />
  </MainLayout>
);

export default FAQs;
