'use client';

import { useState } from 'react';

import { ChevronDown, ChevronUp } from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';
import { faqCategories } from '@/data/faq/faqs';

import type { Component } from '@/types';

const FaqCategories: Component = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.id} delay={categoryIndex * 100}>
              <div className="mb-12">
                <div className="mb-8 flex items-center">
                  <category.icon className="mr-3 size-8 text-green-400" />
                  <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                </div>

                <div className="space-y-4">
                  {category.faqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="overflow-hidden rounded-xl border border-gray-700 bg-slate-800"
                    >
                      <button
                        className="flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-slate-700"
                        onClick={() => toggleFAQ(faq.id)}
                        type="button"
                      >
                        <h3 className="pr-4 text-lg font-semibold text-white">{faq.question}</h3>
                        {openFAQ === faq.id ? (
                          <ChevronUp className="size-5 shrink-0 text-green-400" />
                        ) : (
                          <ChevronDown className="size-5 shrink-0 text-gray-400" />
                        )}
                      </button>

                      {openFAQ === faq.id && (
                        <div className="px-6 pb-6">
                          <div className="border-t border-gray-700 pt-4">
                            <p className="leading-relaxed text-gray-300">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqCategories;
