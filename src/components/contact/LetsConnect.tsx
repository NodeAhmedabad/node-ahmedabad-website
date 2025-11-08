import Section from '@/app/Section';
import ContactForm from '@/components/contact/ContactForm';
import ContentWrapper from '@/components/ContentWrapper';
import ScrollReveal from '@/components/ScrollReveal';
import SocialLinks from '@/components/SocialLinks';
import Typography from '@/components/ui/Typography';
import socialMedia from '@/data/community/socialMedia';
import letsConnect from '@/data/contact/letsConnect';

import type { Component } from '@/types';

const LetsConnect: Component = () => {
  const { title, description } = letsConnect;

  return (
    <Section>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <ScrollReveal className="order-last lg:order-first">
          <ContactForm />
        </ScrollReveal>
        <ScrollReveal className="flex flex-col gap-5 text-center lg:text-left" delay={200}>
          <div className="hidden flex-col gap-5 lg:flex">
            <Typography as="h2" color="white" variant="2xl">
              {title}
            </Typography>
            <Typography as="p" color="content" variant="content">
              {description}
            </Typography>
          </div>
          <div className="flex flex-col gap-5 lg:hidden">
            <ContentWrapper className="mb-4" description={description} title={title} />
          </div>
          <SocialLinks className="justify-center lg:justify-start" socialMedias={socialMedia} />
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default LetsConnect;
