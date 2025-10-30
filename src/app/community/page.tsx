import { Code, Star, Users } from 'lucide-react';

import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';
import guidelines from '@/data/community/guidelines';
import socialMedia from '@/data/community/socialMedia';
import volunteerRoles from '@/data/community/volunteerRoles';
import { stats } from '@/data/stats';

import type { Component } from '@/types';

const CommunityPage: Component = () => (
  <main className="pt-20">
    {/* Hero Section */}
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <AnimatedText
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              text="Join Our Community"
            />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with passionate Node.js developers, share knowledge, and grow your career in a
              supportive community environment.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">
                  {stat.number}
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Connect With Us</h2>
            <p className="text-gray-300 text-lg">
              Choose your preferred platform to join our vibrant community
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialMedia.map((link, index) => (
            <ScrollReveal key={link.name} delay={index * 100}>
              <div
                className={`bg-gradient-to-br ${link.color} p-8 rounded-2xl text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
              >
                <div className="relative z-10">
                  <link.icon className="w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{link.name}</h3>
                  <p className="mb-6 opacity-90">{link.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      <span className="font-semibold">{link.members} members</span>
                    </div>
                    <a
                      className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg font-semibold transition-colors"
                      href={link.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Community Guidelines */}
    <section className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Community Guidelines</h2>
            <p className="text-gray-300 text-lg">
              Help us maintain a welcoming and productive environment for everyone
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guidelines.map((guideline, index) => (
            <ScrollReveal key={guideline.title} delay={index * 100}>
              <div className="bg-slate-800 p-6 rounded-xl border border-gray-700 text-center hover:bg-slate-700 transition-colors duration-300">
                <guideline.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{guideline.title}</h3>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Volunteer With Us</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Help grow our community by volunteering your time and skills. Choose a role that
              matches your interests and availability.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteerRoles.map((role, index) => (
            <ScrollReveal key={role.title} delay={index * 100}>
              <div className="bg-slate-800 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{role.title}</h3>
                <p className="text-gray-300 mb-6">{role.description}</p>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Star className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-white font-semibold">Time Commitment:</span>
                  </div>
                  <span className="text-gray-300">{role.commitment}</span>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Code className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-white font-semibold">Skills Needed:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
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
    <section className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-12 text-center">
            <Users className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already part of our amazing community. Start your
              journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                href="https://discord.gg/nodeahmedabad"
                rel="noopener noreferrer"
                target="_blank"
              >
                Join Discord
              </a>
              <a
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                href="/events"
              >
                View Events
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default CommunityPage;
