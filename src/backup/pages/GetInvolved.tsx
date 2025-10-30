import React, { useState } from 'react';

import { CheckCircle, Code, Heart, Mic, PenTool, Send, Star, Users } from 'lucide-react';

import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';

import type { ChangeEvent, FormEvent } from 'react';

import type { Component } from '@/types';

const GetInvolved: Component = () => {
  const [speakerForm, setSpeakerForm] = useState({
    name: '',
    email: '',
    topic: '',
    experience: '',
    bio: '',
  });

  const ways = [
    {
      icon: Mic,
      title: 'Become a Speaker',
      description:
        'Share your knowledge and expertise with the community through talks and workshops.',
      benefits: [
        'Build your personal brand',
        'Network with peers',
        'Give back to community',
        'Gain speaking experience',
      ],
      action: 'Apply to Speak',
    },
    {
      icon: PenTool,
      title: 'Write Content',
      description:
        'Contribute articles, tutorials, and guides to our community blog and documentation.',
      benefits: [
        'Improve writing skills',
        'Share knowledge',
        'Build portfolio',
        'Help others learn',
      ],
      action: 'Start Writing',
    },
    {
      icon: Code,
      title: 'Contribute Code',
      description: 'Help build and maintain our open-source projects and community tools.',
      benefits: [
        'Enhance coding skills',
        'Work on real projects',
        'Collaborate with experts',
        'Open source contributions',
      ],
      action: 'View Projects',
    },
    {
      icon: Users,
      title: 'Volunteer',
      description: 'Help organize events, moderate discussions, and support community operations.',
      benefits: [
        'Develop leadership skills',
        'Make connections',
        'Event planning experience',
        'Community impact',
      ],
      action: 'Join Team',
    },
  ];

  const openRoles = [
    {
      title: 'Event Photography Volunteer',
      commitment: '2-3 events per month',
      skills: ['Photography', 'Basic editing', 'Equipment handling'],
      description: 'Capture moments from our events and create visual content for social media.',
    },
    {
      title: 'Social Media Manager',
      commitment: '5-7 hours per week',
      skills: ['Content creation', 'Social media', 'Design basics'],
      description:
        'Manage our social media presence and create engaging content for the community.',
    },
    {
      title: 'Workshop Assistant',
      commitment: '1-2 workshops per month',
      skills: ['Technical knowledge', 'Patience', 'Communication'],
      description: 'Help instructors during workshops and provide technical support to attendees.',
    },
    {
      title: 'Community Moderator',
      commitment: '3-5 hours per week',
      skills: ['Communication', 'Conflict resolution', 'Community guidelines'],
      description:
        'Monitor our Discord and other platforms to maintain a positive community environment.',
    },
  ];

  const handleSpeakerSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Speaker application submitted:', speakerForm);
  };

  const handleSpeakerChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setSpeakerForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <AnimatedText
                className="mb-6 text-5xl font-bold text-white md:text-6xl"
                text="Get Involved"
              />
              <p className="mx-auto max-w-3xl text-xl text-gray-300">
                Help us build an amazing community by contributing your skills, knowledge, and
                passion for Node.js and JavaScript.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white">Ways to Contribute</h2>
              <p className="text-lg text-gray-300">
                Choose how you'd like to make an impact in our community
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {ways.map((way, index) => (
              <ScrollReveal key={way.title} delay={index * 100}>
                <div className="rounded-xl border border-gray-700 bg-slate-800 p-8 transition-all duration-300 hover:border-green-500">
                  <way.icon className="mb-6 h-12 w-12 text-green-400" />
                  <h3 className="mb-4 text-2xl font-bold text-white">{way.title}</h3>
                  <p className="mb-6 text-gray-300">{way.description}</p>

                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold text-white">Benefits:</h4>
                    <ul className="space-y-2">
                      {way.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="w-full rounded-lg bg-green-500 py-3 font-semibold text-white transition-colors hover:bg-green-600"
                    type="button"
                  >
                    {way.action}
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Application Form */}
      <section className="bg-slate-800/30 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <h2 className="mb-6 text-4xl font-bold text-white">Speaker Application</h2>
                <p className="text-lg text-gray-300">
                  Ready to share your knowledge? Apply to speak at our events!
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-2xl border border-gray-700 bg-slate-800 p-8">
                <form className="space-y-6" onSubmit={handleSpeakerSubmit}>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-medium text-white" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        required
                        className="w-full rounded-lg border border-gray-600 bg-slate-700 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-green-500 focus:outline-none"
                        id="name"
                        name="name"
                        onChange={handleSpeakerChange}
                        placeholder="Your full name"
                        type="text"
                        value={speakerForm.name}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block font-medium text-white" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        required
                        className="w-full rounded-lg border border-gray-600 bg-slate-700 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-green-500 focus:outline-none"
                        id="email"
                        name="email"
                        onChange={handleSpeakerChange}
                        placeholder="your@email.com"
                        type="email"
                        value={speakerForm.email}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-medium text-white" htmlFor="topic">
                      Proposed Topic *
                    </label>
                    <input
                      required
                      className="w-full rounded-lg border border-gray-600 bg-slate-700 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-green-500 focus:outline-none"
                      id="topic"
                      name="topic"
                      onChange={handleSpeakerChange}
                      placeholder="What would you like to talk about?"
                      type="text"
                      value={speakerForm.topic}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-medium text-white" htmlFor="experience">
                      Speaking Experience
                    </label>
                    <select
                      className="w-full rounded-lg border border-gray-600 bg-slate-700 px-4 py-3 text-white transition-colors focus:border-green-500 focus:outline-none"
                      id="experience"
                      name="experience"
                      onChange={handleSpeakerChange}
                      value={speakerForm.experience}
                    >
                      <option value="">Select your experience level</option>
                      <option value="first-time">First time speaker</option>
                      <option value="some">Some speaking experience</option>
                      <option value="experienced">Experienced speaker</option>
                      <option value="professional">Professional speaker</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block font-medium text-white" htmlFor="bio">
                      Brief Bio & Topic Description *
                    </label>
                    <textarea
                      required
                      className="resize-vertical w-full rounded-lg border border-gray-600 bg-slate-700 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-green-500 focus:outline-none"
                      id="bio"
                      name="bio"
                      onChange={handleSpeakerChange}
                      placeholder="Tell us about yourself and provide a detailed description of your proposed topic..."
                      rows={6}
                      value={speakerForm.bio}
                    />
                  </div>

                  <button
                    className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                    type="submit"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Open Volunteer Roles */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white">Open Volunteer Roles</h2>
              <p className="text-lg text-gray-300">
                Current opportunities to contribute to our community
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {openRoles.map((role, index) => (
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
                      <Heart className="mr-2 h-5 w-5 text-green-400" />
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
                    Apply for Role
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Contributions */}
      <section className="bg-slate-800/30 py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="rounded-2xl border border-gray-700 bg-gradient-to-r from-slate-800 to-slate-700 p-12">
              <div className="text-center">
                <Code className="mx-auto mb-6 h-16 w-16 text-green-400" />
                <h2 className="mb-6 text-4xl font-bold text-white">Contribute to Open Source</h2>
                <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300">
                  Help us build and maintain our community tools, website, and other open-source
                  projects. Perfect for developers looking to contribute to meaningful projects.
                </p>

                <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="text-center">
                    <h3 className="mb-2 text-2xl font-bold text-green-400">5+</h3>
                    <p className="text-gray-300">Active Projects</p>
                  </div>
                  <div className="text-center">
                    <h3 className="mb-2 text-2xl font-bold text-green-400">50+</h3>
                    <p className="text-gray-300">Contributors</p>
                  </div>
                  <div className="text-center">
                    <h3 className="mb-2 text-2xl font-bold text-green-400">200+</h3>
                    <p className="text-gray-300">Commits</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    className="rounded-lg bg-green-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-600"
                    href="https://github.com/nodeahmedabad"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Projects
                  </a>
                  <a
                    className="rounded-lg border-2 border-green-500 px-8 py-3 font-semibold text-green-400 transition-colors hover:bg-green-500 hover:text-white"
                    href="https://github.com/nodeahmedabad/contributing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Contribution Guide
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default GetInvolved;
