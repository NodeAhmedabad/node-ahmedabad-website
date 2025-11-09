'use client';

import { useState } from 'react';

import { ChevronDown, ChevronUp } from 'lucide-react';

import Section from '@/app/Section';
import ScrollReveal from '@/components/ScrollReveal';
import Typography from '@/components/ui/Typography';
import faqCategories from '@/data/faqs/faqCategories';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const FaqCategories: Component = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (question: string) => {
    setOpenFAQ(openFAQ === question ? null : question);
  };

  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        {faqCategories.map((category, index, array) => {
          const { icon: Icon, name, faqs } = category;
          const isLast = array.length - 1 === index;

          return (
            <ScrollReveal key={name} className={cn(!isLast && 'mb-12')} delay={index * 100}>
              <div className="mb-8 flex items-center gap-3">
                <Icon className="size-8 text-green-400" />
                <Typography as="h2" color="white" variant="3xl">
                  {name}
                </Typography>
              </div>

              <div className="flex flex-col gap-4">
                {faqs.map((faq) => {
                  const { question, answer } = faq;
                  const isOpened = openFAQ === question;

                  return (
                    <div
                      key={question}
                      className="overflow-hidden rounded-xl border border-gray-700 bg-slate-800"
                    >
                      <button
                        className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors duration-300 hover:bg-slate-700"
                        onClick={() => toggleFAQ(question)}
                        type="button"
                      >
                        <Typography
                          as="h3"
                          color={isOpened ? 'green-400' : 'white'}
                          variant="lg"
                          weight="semibold"
                        >
                          {question}
                        </Typography>
                        {isOpened ? (
                          <ChevronUp className="size-5 shrink-0 text-green-400" />
                        ) : (
                          <ChevronDown className="size-5 shrink-0 text-gray-400" />
                        )}
                      </button>

                      {isOpened ? (
                        <div className="-mt-1 px-6 pb-6">
                          <div className="border-t border-gray-700 pt-4">
                            <Typography
                              as="p"
                              color="content"
                              dangerouslySetInnerHTML={{ __html: answer }}
                              variant="content"
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
};

export default FaqCategories;
