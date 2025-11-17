import { MailIcon } from 'lucide-react';

import Section from '@/app/Section';
import ContentWrapper from '@/components/ContentWrapper';
import NewsLetterForm from '@/components/footer/NewsLetterForm';
import Typography from '@/components/ui/Typography';
import newsLetter from '@/data/footer/newsLetter';

import type { Component } from '@/types';

const NewsLetter: Component = () => {
  const { title, description, note } = newsLetter;

  return (
    <Section className="border-b border-gray-800 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 sm:mb-6">
          <MailIcon className="size-8 text-white" />
        </div>
        <ContentWrapper animation={false} description={description} title={title} />
        <NewsLetterForm />
        <Typography as="p" className="mt-4" color="gray-500" variant="xs">
          {note}
        </Typography>
      </div>
    </Section>
  );
};

export default NewsLetter;
