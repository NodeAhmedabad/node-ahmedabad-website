import { Code, Star, Users } from 'lucide-react';

import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';
import communityStats from '@/data/community/communityStats';
import guidelines from '@/data/community/guidelines';
import socialMedia from '@/data/community/socialMedia';
import volunteerRoles from '@/data/community/volunteerRoles';
import MainLayout from '@/layouts/MainLayout';

import type { Component } from '@/types';

const CommunityPage: Component = () => (
  <MainLayout className="pt-20">
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <AnimatedText
              className="mb-6 text-5xl font-bold text-white md:text-6xl"
              text="Join Our Community"
            />
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Connect with passionate Node.js developers, share knowledge, and grow your career in a
              supportive community environment.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
          {communityStats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-green-400 lg:text-4xl">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Join Links */}
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
          {socialMedia.map((link, index) => (
            <ScrollReveal key={link.name} delay={index * 100}>
              <div
                className={`bg-gradient-to-br ${link.color} group relative overflow-hidden rounded-2xl p-8 text-white transition-transform duration-300 hover:scale-105`}
              >
                <div className="relative z-10">
                  <link.icon className="mb-6 h-12 w-12" />
                  <h3 className="mb-4 text-2xl font-bold">{link.name}</h3>
                  <p className="mb-6 opacity-90">{link.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="mr-2 h-5 w-5" />
                      <span className="font-semibold">{link.members} members</span>
                    </div>
                    <a
                      className="rounded-lg bg-white/20 px-6 py-2 font-semibold transition-colors hover:bg-white/30"
                      href={link.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Community Guidelines */}
    <section className="bg-slate-800/30 py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">Community Guidelines</h2>
            <p className="text-lg text-gray-300">
              Help us maintain a welcoming and productive environment for everyone
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {guidelines.map((guideline, index) => (
            <ScrollReveal key={guideline.title} delay={index * 100}>
              <div className="rounded-xl border border-gray-700 bg-slate-800 p-6 text-center transition-colors duration-300 hover:bg-slate-700">
                <guideline.icon className="mx-auto mb-4 h-12 w-12 text-green-400" />
                <h3 className="mb-3 text-xl font-bold text-white">{guideline.title}</h3>
                <p className="text-gray-300">{guideline.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Volunteer Section */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">Volunteer With Us</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Help grow our community by volunteering your time and skills. Choose a role that
              matches your interests and availability.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {volunteerRoles.map((role, index) => (
            <ScrollReveal key={role.title} delay={index * 100}>
              <div className="rounded-xl border border-gray-700 bg-slate-800 p-8 transition-colors duration-300 hover:border-green-500">
                <h3 className="mb-4 text-2xl font-bold text-white">{role.title}</h3>
                <p className="mb-6 text-gray-300">{role.description}</p>

                <div className="mb-6">
                  <div className="mb-2 flex items-center">
                    <Star className="mr-2 h-5 w-5 text-green-400" />
                    <span className="font-semibold text-white">Time Commitment:</span>
                  </div>
                  <span className="text-gray-300">{role.commitment}</span>
                </div>

                <div className="mb-6">
                  <div className="mb-2 flex items-center">
                    <Code className="mr-2 h-5 w-5 text-green-400" />
                    <span className="font-semibold text-white">Skills Needed:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="w-full rounded-lg bg-green-500 py-3 font-semibold text-white transition-colors hover:bg-green-600"
                  type="button"
                >
                  Apply Now
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-slate-800/30 py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-12 text-center">
            <Users className="mx-auto mb-6 h-16 w-16 text-white" />
            <h2 className="mb-6 text-4xl font-bold text-white">Ready to Get Started?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Join thousands of developers who are already part of our amazing community. Start your
              journey today!
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                className="rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition-colors hover:bg-gray-100"
                href="https://discord.gg/nodeahmedabad"
                rel="noopener noreferrer"
                target="_blank"
              >
                Join Discord
              </a>
              <a
                className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-green-600"
                href="/events"
              >
                View Events
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </MainLayout>
);

export default CommunityPage;
