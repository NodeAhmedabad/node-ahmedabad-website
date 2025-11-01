import ScrollReveal from '@/components/ScrollReveal';
import SocialLinks from '@/components/SocialLinks';
import socialMedia from '@/data/community/socialMedia';

import type { Component } from '@/types';

const LetsConnect: Component = () => (
  <ScrollReveal delay={200}>
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-2xl font-bold text-white">Let&apos;s Connect</h3>
        <p className="mb-6 leading-relaxed text-gray-300">
          Whether you&apos;re a beginner looking to learn, an experienced developer wanting to share
          knowledge, or a company interested in sponsoring our events, we&apos;re here to help you
          connect with our community.
        </p>
        <SocialLinks socialMedias={socialMedia} />
      </div>
    </div>
  </ScrollReveal>
);

export default LetsConnect;
