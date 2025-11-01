import ScrollReveal from '@/components/ScrollReveal';
import SocialLinks from '@/components/SocialLinks';
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
    <section className="bg-slate-800/50 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center">
              <h3 className="mb-8 text-3xl font-bold text-white">Connect with {name}</h3>
              <div className="flex justify-center gap-6">
                <SocialLinks socialMedias={socialMedias} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Connect;
