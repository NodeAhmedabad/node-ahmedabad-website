import faqsImage from '@/assets/faqs.jpg';
import Banner from '@/components/Banner';
import CtaBlock from '@/components/CtaBlock';
import FaqCategories from '@/components/faq/FaqCategories';
import constants from '@/constants';
import ctaBlock from '@/data/faqs/ctaBlock';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: ['FAQs', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const FAQsPage: Component = () => (
  <MainLayout>
    <Banner
      description="Find answers to common questions about our Node.js community, events, and how to get involved."
      image={faqsImage.src}
      title="FAQs"
    />
    <FaqCategories />
    <CtaBlock {...ctaBlock} />
  </MainLayout>
);

export default FAQsPage;
