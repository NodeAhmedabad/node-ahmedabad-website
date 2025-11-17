import ContactForm from '@/components/contact/ContactForm';
import ContentWrapper from '@/components/ContentWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import Section from '@/components/Section';
import SocialLinks from '@/components/SocialLinks';
import letsConnect from '@/data/contact/letsConnect';
import socialMedia from '@/data/footer/socialMedia';

import type { Component } from '@/types';

const LetsConnect: Component = () => {
  const { title, description } = letsConnect;

  return (
    <Section>
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2">
        <ScrollReveal className="order-last lg:order-first">
          <ContactForm />
        </ScrollReveal>
        <ScrollReveal className="flex flex-col gap-3 text-center sm:gap-5 lg:text-left" delay={200}>
          <ContentWrapper
            className="mb-4 sm:mb-4 sm:text-left"
            description={description}
            title={title}
          />
          <SocialLinks className="justify-center lg:justify-start" socialMedias={socialMedia} />
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default LetsConnect;
