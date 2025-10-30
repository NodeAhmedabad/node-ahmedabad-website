'use client';

import { Fragment, useState } from 'react';

import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import ScrollReveal from '@/components/ScrollReveal';
import teamMembers, { categories } from '@/data/team/teamMembers';

import type { Component } from '@/types';

const categoryOptions = [
  {
    label: 'Core Members',
    value: categories.CORE,
  },
  {
    label: 'Volunteers',
    value: categories.VOLUNTEER,
  },
];

const TeamMembers: Component = () => {
  const [activeTab, setActiveTab] = useState(categories.CORE);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategory = (value: string) => {
    setActiveTab(value);
    setSearchTerm('');
  };

  const filteredMembers = teamMembers.filter((member) => member.category === activeTab);

  return (
    <Fragment>
      <section className="bg-slate-800/50 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full rounded-lg border border-gray-700 bg-slate-800 py-3 pl-10 pr-4 text-white transition-colors placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search members..."
                type="text"
                value={searchTerm}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categoryOptions.map((tab) => {
                const { label, value } = tab;

                return (
                  <button
                    key={value}
                    className={`rounded-lg border border-green-500/30 px-6 py-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${activeTab === value ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'bg-slate-800 text-green-400 hover:bg-slate-700'}`}
                    onClick={() => handleCategory(value)}
                    type="button"
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="team-heading" className="bg-slate-800/30 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {filteredMembers.map((member, index) => (
              <ScrollReveal key={[member.name, index].join('-')} delay={index * 100}>
                <Link
                  aria-label={`View ${member.name}'s profile`}
                  className="group block w-96 rounded-xl border border-gray-700 bg-slate-800 p-6 text-center transition-all duration-300 hover:border-green-500/50 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                  href={`/team/${member.slug}`}
                >
                  <Image
                    alt={`${member.name}, ${member.role}`}
                    className="mx-auto mb-4 size-24 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                    height={96}
                    loading="lazy"
                    src={member.image}
                    width={96}
                  />
                  <h3 className="mb-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-green-400 sm:text-xl">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-sm text-green-400 sm:text-base">{member.role}</p>
                  <p className="max-w-full break-words text-xs text-gray-300 sm:text-sm">
                    {member.bio}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TeamMembers;
