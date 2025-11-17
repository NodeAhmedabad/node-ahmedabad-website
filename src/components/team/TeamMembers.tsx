'use client';

import { Fragment, useEffect, useState } from 'react';

import { SearchIcon, SearchIcon, UserCogIcon, UserPlusIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import Section from '@/app/Section';
import Box from '@/components/ui/Box';
import Select from '@/components/ui/Select';
import Typography from '@/components/ui/Typography';
import { categories } from '@/data/persons/persons';
import teamMembers from '@/data/team/teamMembers';

import type { Component } from '@/types';

const categoryOptions = [
  {
    icon: UsersIcon,
    label: 'All Members',
    value: categories.ALL,
  },
  {
    icon: UserCogIcon,
    label: 'Core Members',
    value: categories.CORE,
  },
  {
    icon: UserPlusIcon,
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
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="relative w-full flex-1 sm:max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full rounded-lg border border-gray-700 bg-slate-800 py-3 pl-10 pr-4 text-white transition-colors placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search members..."
              type="text"
              value={searchTerm}
            />
          </div>
          <div className="flex w-full shrink-0 flex-wrap gap-3 sm:w-auto">
            <div className="w-full min-w-52">
              <Select
                onValueChange={handleCategory}
                options={categoryOptions}
                placeholder="Select category"
                value={activeTab}
              />
            </div>
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
