import ScrollReveal from '@/components/ScrollReveal';
import { commitment } from '@/data/codeOfConduct/codeOfConduct';

import type { Component } from '@/types';

const Commitment: Component = () => {
  const { title, description } = commitment;

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">{title}</h2>
            <p className="text-lg leading-relaxed text-gray-300">{description}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Commitment;
