import ScrollReveal from '@/components/ScrollReveal';

import type { Component } from '@/types';

const OurStory: Component = () => (
  <section className="py-12 sm:py-16 lg:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl">Our Story</h2>
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-base leading-relaxed text-gray-300 sm:mb-6 sm:text-lg">
              Node Ahmedabad was born out of a simple observation: Ahmedabad had incredible
              JavaScript talent, but lacked a dedicated community for Node.js developers to connect,
              learn, and grow together.
            </p>
            <p className="mb-4 text-base leading-relaxed text-gray-300 sm:mb-6 sm:text-lg">
              What started as informal meetups among friends has evolved into Gujarat&apos;s largest
              Node.js community, hosting regular workshops, conferences, and networking events that
              have helped hundreds of developers advance their careers.
            </p>
            <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
              Today, we&apos;re proud to be a platform where beginners find mentorship, experienced
              developers share knowledge, and innovative ideas come to life through collaboration.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default OurStory;
