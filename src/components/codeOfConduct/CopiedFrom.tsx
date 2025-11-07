import ScrollReveal from '@/components/ScrollReveal';

import type { Component } from '@/types';

const CopiedFrom: Component = () => (
  <section className="py-12">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm text-gray-400">
            This Code of Conduct is adapted from the{' '}
            <a
              className="text-green-400 transition-colors hover:text-green-300"
              href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Contributor Covenant, version 2.1
            </a>{' '}
            and other community standards.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CopiedFrom;
