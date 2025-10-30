import { Award, Target } from 'lucide-react';

import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';
import constants from '@/constants';
import coreValues from '@/data/about/coreValues';
import timeline from '@/data/about/timeline';
import MainLayout from '@/layouts/MainLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: `About | ${constants.APP_NAME}`,
} satisfies Metadata;

const AboutPage: Component = () => (
  <MainLayout className="pt-20">
    {/* Hero Section */}
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <AnimatedText
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              text="About Node Ahmedabad"
            />
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Empowering developers in Ahmedabad through knowledge sharing, networking, and
              collaborative learning in the Node.js ecosystem.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal>
            <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl border border-gray-700">
              <Target
                aria-hidden="true"
                className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mb-4 sm:mb-6"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                To create a thriving community of Node.js developers in Ahmedabad by providing
                high-quality learning opportunities, fostering collaboration, and supporting career
                growth in the JavaScript ecosystem.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl border border-gray-700">
              <Award
                aria-hidden="true"
                className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mb-4 sm:mb-6"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                To establish Ahmedabad as a leading hub for Node.js innovation in India, where
                developers of all levels can learn, grow, and contribute to the global JavaScript
                community.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Our Story */}
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Node Ahmedabad was born out of a simple observation: Ahmedabad had incredible
                JavaScript talent, but lacked a dedicated community for Node.js developers to
                connect, learn, and grow together.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                What started as informal meetups among friends has evolved into Gujarat's largest
                Node.js community, hosting regular workshops, conferences, and networking events
                that have helped hundreds of developers advance their careers.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Today, we're proud to be a platform where beginners find mentorship, experienced
                developers share knowledge, and innovative ideas come to life through collaboration.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              These values guide everything we do and shape the culture of our community.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {coreValues.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 100}>
              <div className="bg-slate-800 p-6 rounded-xl border border-gray-700 text-center hover:bg-slate-700 transition-colors duration-300 focus-within:ring-2 focus-within:ring-green-400">
                <value.icon
                  aria-hidden="true"
                  className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mx-auto mb-4"
                />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Growth Timeline */}
    <section aria-labelledby="timeline-heading" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6"
              id="timeline-heading"
            >
              Growth Timeline
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Key milestones in our community&apos;s journey
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - positioned to go through center of icons */}
            <div
              aria-hidden="true"
              className="absolute left-8 sm:left-12 lg:left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-emerald-500"
            />

            {timeline.map((item, index) => {
              const { year, event, description, icon: Icon, color } = item;

              return (
                <ScrollReveal key={year} delay={index * 150}>
                  <div className="relative flex items-center mb-12 sm:mb-16 lg:mb-20 last:mb-0">
                    {/* Timeline icon - centered on the line */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${color} rounded-full flex items-center justify-center absolute left-8 sm:left-12 lg:left-16 -translate-x-1/2 z-10 shadow-lg border-4 border-slate-900`}
                    >
                      <Icon
                        aria-hidden="true"
                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex-1 min-w-0 pl-24 sm:pl-28 lg:pl-32">
                      <div className="bg-slate-800 p-6 mb-7 sm:p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-colors duration-300 shadow-lg">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                          <h3 className="text-xl sm:text-2xl font-bold text-white">{event}</h3>
                          <span className="text-green-400 font-semibold text-lg sm:text-xl mt-1 sm:mt-0">
                            {year}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
);

export default AboutPage;
