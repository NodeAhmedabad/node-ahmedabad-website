import { Calendar } from 'lucide-react';

import termsAndConditionImage from '@/assets/terms-and-conditions.jpg';
import Banner from '@/components/Banner';
import TermsAndConditionsContent from '@/components/termsAndConditions/TermsAndConditionsContent';
import TermsAndConditionsQuestions from '@/components/termsAndConditions/TermsAndConditionsQuestions';
import constants from '@/constants';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: ['Terms and Conditions', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const TermsAndConditionsPage: Component = () => {
  const lastUpdated = 'November 06, 2025';

  return (
    <MainLayout>
      <Banner
        description="Terms and conditions for using Node Ahmedabad community website and being part of community and events."
        image={termsAndConditionImage.src}
        title="Terms and Conditions"
        content={
          <div className="mt-6 flex items-center justify-center text-gray-400">
            <Calendar className="mr-2 size-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        }
      />
      <TermsAndConditionsContent />
      <TermsAndConditionsQuestions />
    </MainLayout>
  );
};

export default TermsAndConditionsPage;
