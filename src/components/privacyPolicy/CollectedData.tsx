import ScrollReveal from '@/components/ScrollReveal';
import collectedData from '@/data/privacyPolicy/collectedData';

import type { Component } from '@/types';

const CollectedData: Component = () => (
  <section className="bg-slate-800/30 py-20">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">Types of Data We Collect</h2>
          <p className="text-lg text-gray-300">Understanding what information we gather and why</p>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {collectedData.map((item, index) => {
          const { icon: Icon, title, description } = item;

          return (
            <ScrollReveal key={title} delay={index * 100}>
              <div className="h-full rounded-xl border border-gray-700 bg-slate-800 p-8 text-center">
                <Icon className="mx-auto mb-6 size-12 text-green-400" />
                <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
                <p className="leading-relaxed text-gray-300">{description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default CollectedData;
