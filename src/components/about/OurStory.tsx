import ScrollReveal from '@/components/ScrollReveal';

import type { Component } from '@/types';

const OurStory: Component = () => (
  <section className="py-12 sm:py-16 lg:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Node Ahmedabad was born out of a simple observation: Ahmedabad had incredible
              JavaScript talent, but lacked a dedicated community for Node.js developers to connect,
              learn, and grow together.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              What started as informal meetups among friends has evolved into Gujarat&apos;s largest
              Node.js community, hosting regular workshops, conferences, and networking events that
              have helped hundreds of developers advance their careers.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
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
