import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.jpg';
import NewsLetter from '@/components/footer/NewsLetter';
import StatBlock from '@/components/footer/StatBlock';
import SocialLinks from '@/components/SocialLinks';
import Typography from '@/components/ui/Typography';
import constants from '@/constants';
import footerLinks from '@/data/footer/footerLinks';
import socialMedia from '@/data/footer/socialMedia';
import statLinks from '@/data/footer/statLinks';
import cn from '@/lib/cn';
import packageJson from '~/package.json';

import type { Component } from '@/types';

const Footer: Component = () => (
  <footer className="border-t border-gray-800 bg-slate-900">
    <NewsLetter />
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-12">
        <div className="lg:col-span-2 xl:col-span-4">
          <Link
            className="group mb-6 flex items-center justify-center space-x-3 md:justify-start"
            href="/"
          >
            <div className="relative">
              <Image alt="logo" className="rounded-lg" height={40} src={logo} width={40} />
            </div>
            <div>
              <Typography as="h2" color="white" variant="xl">
                {constants.APP_NAME}
              </Typography>
              <Typography as="p" color="green-400" variant="xs">
                {constants.APP_COMMUNITY}
              </Typography>
            </div>
          </Link>
          <Typography
            as="p"
            className="mb-6 text-center md:text-left"
            color="gray-400"
            variant="content"
          >
            {constants.APP_DESCRIPTION}
          </Typography>
          <div className="mb-6 grid grid-cols-3 gap-4">
            {statLinks.map((state) => (
              <StatBlock {...state} key={state.name} />
            ))}
          </div>
          <SocialLinks className="justify-center md:justify-start" socialMedias={socialMedia} />
        </div>
        <div className="grid grid-cols-1 gap-8 min-[400px]:grid-cols-2 lg:col-span-4 lg:grid-cols-4 xl:col-span-7 xl:col-start-6">
          {footerLinks.map((item) => {
            const { id, name, links } = item;

            return (
              <div key={id} className="flex flex-col items-center md:items-start">
                <Typography
                  as="h3"
                  className="-ml-4 mb-4 md:ml-0"
                  color="white"
                  variant="content"
                  weight="semibold"
                >
                  {name}
                </Typography>
                <ul className="flex flex-col gap-y-3">
                  {links.map((link) => {
                    const { name: subName, path, contentClassName } = link;

                    return (
                      <li key={subName}>
                        <Link
                          className="group flex items-center justify-center transition-colors duration-300 hover:text-green-400 md:justify-start"
                          href={path}
                        >
                          <Typography
                            as="span"
                            className={cn('hover:text-green-400', contentClassName)}
                            color="gray-400"
                            variant="content"
                          >
                            {subName}
                          </Typography>
                          <ExternalLink className="ml-1 size-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Typography as="p" className="text-center md:text-left" color="gray-400" variant="sm">
            © {new Date().getFullYear()} {constants.APP_NAME}. All rights reserved. Built with ❤️
            by the community.
          </Typography>
          <div className="flex items-center gap-4">
            <div className="size-2 animate-pulse rounded-full bg-green-400" />
            <Typography as="p" color="gray-400" variant="sm">
              V{packageJson.version}
            </Typography>
            <Typography as="p" color="gray-400" variant="sm">
              Made in Ahmedabad ❤️
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
