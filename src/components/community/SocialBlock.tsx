import Link from 'next/link';

import ScrollReveal from '@/components/ScrollReveal';
import socialMedia from '@/data/community/socialMedia';

import type { Component } from '@/types';

const SocialBlock: Component = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">Connect With Us</h2>
          <p className="text-lg text-gray-300">
            Choose your preferred platform to join our vibrant community
          </p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {socialMedia.map((item, index) => {
          const { title, url, icon: Icon, color, description } = item;

          return (
            <ScrollReveal key={title} delay={index * 100}>
              <div
                className={`bg-gradient-to-br ${color} group relative overflow-hidden rounded-2xl p-8 text-white transition-transform duration-300 hover:scale-105`}
              >
                <div className="relative z-10">
                  <Icon className="mb-6 size-12" />
                  <h3 className="mb-4 text-2xl font-bold">{title}</h3>
                  <p className="mb-6 opacity-90">{description}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      className="rounded-lg bg-white/20 px-6 py-2 font-semibold transition-colors hover:bg-white/30"
                      href={url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Join Now
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default SocialBlock;
