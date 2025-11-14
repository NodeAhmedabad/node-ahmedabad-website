'use client';

import { Fragment, useEffect, useState } from 'react';

import { Search, UserCog, UserPlus, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Section from '@/app/Section';
import Box from '@/components/ui/Box';
import Typography from '@/components/ui/Typography';
import { categories } from '@/data/persons/persons';
import teamMembers from '@/data/team/teamMembers';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const categoryOptions = [
  {
    icon: Users,
    label: 'All Members',
    value: categories.ALL,
  },
  {
    icon: UserCog,
    label: 'Core Members',
    value: categories.CORE,
  },
  {
    icon: UserPlus,
    label: 'Volunteers',
    value: categories.VOLUNTEER,
  },
];

const TeamMembers: Component = () => {
  const [activeTab, setActiveTab] = useState(categories.ALL);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMembers, setFilteredMembers] = useState(teamMembers);

  const handleCategory = (value: string) => {
    setActiveTab(value);
    setSearchTerm('');
  };

  useEffect(() => {
    const getFilteredMembers = () => {
      const selectedCategoryMembers =
        activeTab === categories.ALL
          ? teamMembers
          : teamMembers.filter((member) => member.category === activeTab);

      return selectedCategoryMembers.filter((member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    };

    setFilteredMembers(getFilteredMembers());
  }, [activeTab, searchTerm]);

  return (
    <Fragment>
      <Section className="!py-8">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="relative w-full max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full rounded-lg border border-gray-700 bg-slate-800 py-3 pl-10 pr-4 text-white transition-colors placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search members..."
              type="text"
              value={searchTerm}
            />
          </div>
          <div className="flex flex-wrap gap-3">
            {categoryOptions.map((tab) => {
              const { icon: Icon, label, value } = tab;

              return (
                <button
                  key={value}
                  onClick={() => handleCategory(value)}
                  type="button"
                  className={cn(
                    'flex items-center gap-2 rounded-lg border border-green-500/30 px-4 py-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900',
                    activeTab === value
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                      : 'bg-slate-800 text-green-400 hover:bg-slate-700',
                  )}
                >
                  <Icon className="size-4" />
                  <Typography as="span" variant="content" weight="medium">
                    {label}
                  </Typography>
                </button>
              );
            })}
          </div>
        </div>
      </Section>
      <Section>
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {filteredMembers.map((member, index) => {
              const { name, role, image, shortBio, slug } = member;

              return (
                <Link key={name} className="h-full" href={`/team/${slug}`}>
                  <Box
                    content={role}
                    contentProps={{ color: 'green-400', variant: 'content' }}
                    delay={index * 100}
                    description={shortBio}
                    label={name}
                    labelProps={{ className: 'mb-1' }}
                    scrollRevealClassName="h-full"
                    customIcon={
                      <Image
                        alt={name}
                        className="mx-auto mb-4 size-24 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                        height={96}
                        loading="lazy"
                        src={image}
                        width={96}
                      />
                    }
                  />
                </Link>
              );
            })}
          </div>
        ) : (
          <div>
            <Typography as="p" className="text-center" color="gray-400" variant="xl">
              No members found
            </Typography>
          </div>
        )}
      </Section>
    </Fragment>
  );
};

export default TeamMembers;
