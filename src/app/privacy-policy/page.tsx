import { Calendar } from 'lucide-react';

import privacyPolicyImage from '@/assets/privacy-policy.jpg';
import Banner from '@/components/Banner';
import CollectedData from '@/components/privacyPolicy/CollectedData';
import PrivacyPolicyContent from '@/components/privacyPolicy/PrivacyPolicyContent';
import PrivacyQuestions from '@/components/privacyPolicy/PrivacyQuestions';
import Typography from '@/components/ui/Typography';
import constants from '@/constants';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: ['Privacy Policy', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const PrivacyPolicyPage: Component = () => {
  const lastUpdated = 'November 06, 2025';

  return (
    <MainLayout>
      <Banner
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
        image={privacyPolicyImage.src}
        title="Privacy Policy"
        content={
          <div className="mt-6 flex items-center justify-center text-gray-400">
            <Calendar className="mr-2 size-4" />
            <Typography as="span" variant="p">
              Last updated: {lastUpdated}
            </Typography>
          </div>
        }
      />
      <CollectedData />
      <PrivacyPolicyContent />
      <PrivacyQuestions />
    </MainLayout>
  );
};

export default PrivacyPolicyPage;
