import Section from '@/app/Section';
import Box from '@/components/ui/Box';
import contactInformation from '@/data/contact/contactInformation';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const ContactInformation: Component = () => (
  <Section>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {contactInformation.map((item, index, array) => {
        const { icon, label, content, description } = item;
        const isLast = array.length - 1 === index;

        return (
          <Box
            key={label}
            content={content}
            contentProps={{ color: 'green-400', weight: 'semibold' }}
            delay={index * 100}
            description={description}
            h3Props={{ className: 'mb-2' }}
            icon={icon}
            label={label}
            scrollRevealClassName={cn(isLast && 'md:col-span-full lg:col-span-1')}
          />
        );
      })}
    </div>
  </Section>
);

export default ContactInformation;
