import Section from '@/app/Section';
import ContentWrapper from '@/components/ContentWrapper';
import Box from '@/components/ui/Box';
import { reportingProcess } from '@/data/codeOfConduct/codeOfConduct';

import type { Component } from '@/types';

const ReportingProcess: Component = () => {
  const { title, description, steps } = reportingProcess;

  return (
    <Section>
      <ContentWrapper description={description} title={title} />
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const { label, content } = step;

            return (
              <Box
                key={label}
                content={content}
                delay={index * 100}
                label={label}
                customIcon={
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
                    {index + 1}
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ReportingProcess;
