import { ArrowRight, Users } from 'lucide-react';

import ScrollReveal from '@/backup/components/ui/ScrollReveal';
import homeAboutValues from '@/data/homeAboutValues';

import type { Component } from '@/types';
import Link from 'next/link';

const AboutSection: Component = () => (
  <section className="py-20 bg-slate-800 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About
              </span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                {' '}
                Node Ahmedabad
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We&apos;re a passionate community of JavaScript developers in Ahmedabad, dedicated to
              fostering learning, collaboration, and innovation in the Node.js ecosystem.
            </p>
          </div>
        </ScrollReveal>

        {/* Mission Statement */}
        <ScrollReveal delay={200}>
          <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                To create an inclusive platform where developers can enhance their skills, share
                knowledge, build meaningful connections, and contribute to the growth of the
                JavaScript community in Ahmedabad and beyond.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {homeAboutValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <ScrollReveal key={value.title} delay={300 + index * 100}>
                <div className="group bg-slate-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Stats Section */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">2000+</div>
                <div className="text-gray-300">Active Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Events Hosted</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">100+</div>
                <div className="text-gray-300">Speakers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">5+</div>
                <div className="text-gray-300">Years Strong</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Join Our Journey?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a seasoned developer or just starting out, there&apos;s a place
              for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                href="/about"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                className="group border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
                href="/community"
              >
                Join Community
                <Users className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
