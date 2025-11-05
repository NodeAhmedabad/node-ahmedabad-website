import { Calendar } from 'lucide-react';

import termsImage from '@/assets/terms.jpg';
import Banner from '@/components/Banner';
import TermsContent from '@/components/terms/TermsContent';
import TermsQuestions from '@/components/terms/TermsQuestions';
import constants from '@/constants';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: ['Terms of Use', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const TermsPage: Component = () => {
  const lastUpdated = 'November 06, 2025';

  return (
    <MainLayout className="pt-20">
      <Banner
        description="Terms and conditions for using Node Ahmedabad community services and participating in our events."
        image={termsImage.src}
        title="Terms of Use"
        content={
          <div className="mt-6 flex items-center justify-center text-gray-400">
            <Calendar className="mr-2 size-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        }
      />
      <TermsContent />
      <TermsQuestions />
    </MainLayout>
  );
};

export default TermsPage;
