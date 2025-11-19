import Link from 'next/link';

import ScrollReveal from '@/components/ScrollReveal';
import Section from '@/components/Section';
import Typography from '@/components/ui/Typography';

import type { Component } from '@/types';

const CopiedFrom: Component = () => (
  <Section className="py-8 sm:py-12">
    <ScrollReveal>
      <Typography as="p" className="text-center" color="content" variant="sm">
        This Code of Conduct is adapted from the{' '}
        <Link
          className="text-green-400 transition-colors hover:text-green-300"
          href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          Contributor Covenant, v2.1
        </Link>{' '}
        and other community standards.
      </Typography>
    </ScrollReveal>
  </Section>
);

export default CopiedFrom;
