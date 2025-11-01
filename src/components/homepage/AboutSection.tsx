import { ArrowRight, Users } from 'lucide-react';
import Link from 'next/link';

import ScrollReveal from '@/components/ScrollReveal';
import communityStats from '@/data/community/communityStats';
import aboutValues from '@/data/homepage/aboutValues';

import type { Component } from '@/types';

const AboutSection: Component = () => (
  <section className="relative overflow-hidden bg-slate-800 py-20">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)]" />

    <div className="container relative z-10 mx-auto px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About
              </span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                {' '}
                Node Ahmedabad
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
              We&apos;re a passionate community of JavaScript developers in Ahmedabad, dedicated to
              fostering learning, collaboration, and innovation in the Node.js ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mb-16 rounded-2xl border border-gray-700 bg-gradient-to-r from-slate-900/50 to-slate-800/50 p-8 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold text-white">Our Mission</h3>
              <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300">
                To create an inclusive platform where developers can enhance their skills, share
                knowledge, build meaningful connections, and contribute to the growth of the
                JavaScript community in Ahmedabad and beyond.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {aboutValues.map((value, index) => {
            const { icon: Icon, title, description, color } = value;

            return (
              <ScrollReveal key={title} delay={300 + index * 100}>
                <div className="group rounded-xl border border-gray-700 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-green-500/50">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`size-12 bg-gradient-to-r ${color} flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="size-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 text-xl font-semibold text-white">{title}</h4>
                      <p className="leading-relaxed text-gray-300">{description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="mb-16 rounded-2xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-8">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              {communityStats.map((stat) => (
                <div key={stat.label}>
                  <div className="mb-2 text-4xl font-bold text-green-400">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center">
            <h3 className="mb-6 text-3xl font-bold text-white">Ready to Join Our Journey?</h3>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Whether you&apos;re a seasoned developer or just starting out, there&apos;s a place
              for you in our community.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                className="group flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                href="/about"
              >
                Learn More About Us
                <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                className="group flex items-center justify-center rounded-lg border border-gray-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-green-500 hover:bg-green-500/10"
                href="/community"
              >
                Join Community
                <Users className="ml-2 size-5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
