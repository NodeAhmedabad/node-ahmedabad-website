import ScrollReveal from '@/components/ScrollReveal';
import Section from '@/components/Section';
import SocialLinks from '@/components/SocialLinks';
import Typography from '@/components/ui/Typography';
import socialMedia from '@/data/footer/socialMedia';

import type { SocialMedias } from '@/components/SocialLinks';
import type teamMembers from '@/data/team/teamMembers';
import type { Component } from '@/types';

interface ConnectProps {
  teamMember: (typeof teamMembers)[number];
}

const Connect: Component<ConnectProps> = (props) => {
  const { teamMember } = props;
  const { name, socialMedia: social } = teamMember;

  const socialMedias = socialMedia.reduce<SocialMedias[]>((acc, item) => {
    const { slug } = item;

    const url = social[slug as keyof typeof social];

    if (url) {
      acc.push({
        ...item,
        url,
      });
    }

    return acc;
  }, []);

  return (
    <Section>
      <ScrollReveal className="text-center">
        <Typography as="h2" className="mb-4 sm:mb-8" color="white" variant="title">
          Connect with {name}
        </Typography>
        <div className="flex justify-center gap-6">
          <SocialLinks socialMedias={socialMedias} />
        </div>
      </ScrollReveal>
    </Section>
  );
};

export default Connect;
