import codeOfConductImage from '@/assets/code-of-conduct.jpg';
import Banner from '@/components/Banner';
import BehaviorBlock from '@/components/codeOfConduct/BehaviorBlock';
import Commitment from '@/components/codeOfConduct/Commitment';
import CopiedFrom from '@/components/codeOfConduct/CopiedFrom';
import CoreValues from '@/components/codeOfConduct/CoreValues';
import Enforcement from '@/components/codeOfConduct/Enforcement';
import ReportingProcess from '@/components/codeOfConduct/ReportingProcess';
import CtaBlock from '@/components/CtaBlock';
import constants from '@/constants';
import ctaBlock from '@/data/codeOfConduct/ctaBlock';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: ['Code of Conduct', constants.APP_NAME].join(' | '),
} satisfies Metadata;

const CodeOfConductPage: Component = () => (
  <MainLayout>
    <Banner
      description="Our commitment to creating a welcoming, safe, and inclusive environment for all community members."
      image={codeOfConductImage.src}
      title="Code of Conduct"
    />
    <Commitment />
    <CoreValues />
    <BehaviorBlock />
    <ReportingProcess />
    <CtaBlock {...ctaBlock} />
    <Enforcement />
    <CopiedFrom />
  </MainLayout>
);

export default CodeOfConductPage;
