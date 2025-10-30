'use client';

import { useState } from 'react';

import { Search } from 'lucide-react';
import Link from 'next/link';

import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';
import teamMembers from '@/data/team/teamMembers';

import type { Component } from '@/types';

const TeamPage: Component = () => {
  const [activeTab, setActiveTab] = useState('Core');
  const [searchTerm, setSearchTerm] = useState('');

  const tabOptions = [
    {
      label: 'Core Members',
      value: 'Core',
    },
    {
      label: 'Mentors',
      value: 'Mentor',
    },
    {
      label: 'Volunteers',
      value: 'Volunteer',
    },
  ];

  const filteredMembers = teamMembers.filter((member) => member.category === activeTab);

  return (
    <main className="pt-20">
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 lg:mb-16">
              <AnimatedText
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
                text="Meet Our Team"
              />
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                The passionate individuals who make our community thrive
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-8 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search members..."
                type="text"
                value={searchTerm}
              />
            </div>

            {/* Team Filters */}
            <div className="flex flex-wrap gap-2">
              {tabOptions.map((tab) => (
                <button
                  key={tab.value}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 border border-green-500/30 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${activeTab === tab.value ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'text-green-400 bg-slate-800 hover:bg-slate-700'}`}
                  onClick={() => setActiveTab(tab.value)}
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="team-heading" className="py-12 sm:py-16 lg:py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {filteredMembers.map((member, index) => (
              <ScrollReveal key={[member.name, index].join('-')} delay={index * 100}>
                <Link
                  aria-label={`View ${member.name}'s profile`}
                  className="group bg-slate-800 p-6 rounded-xl border border-gray-700 text-center hover:bg-slate-700 hover:border-green-500/50 transition-all duration-300 block focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900 w-96"
                  href={`/team/${member.slug}`}
                >
                  <img
                    alt={`${member.name}, ${member.role}`}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    src={member.image}
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-green-400 mb-3 text-sm sm:text-base">{member.role}</p>
                  <p className="text-gray-300 text-xs sm:text-sm break-words max-w-full">
                    {member.bio}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
