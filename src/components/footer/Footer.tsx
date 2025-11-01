import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.jpg';
import NewsLetter from '@/components/footer/NewsLetter';
import StatBlock from '@/components/footer/StatBlock';
import constants from '@/constants';
import footerLinks from '@/data/footer/footerLinks';
import socialMedia from '@/data/footer/socialMedia';
import statLinks from '@/data/footer/statLinks';
import cn from '@/lib/cn';

import type { Component } from '@/types';

const Footer: Component = () => (
  <footer className="border-t border-gray-800 bg-slate-900">
    <NewsLetter />
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Link className="group mb-6 flex items-center space-x-3" href="/">
            <div className="relative">
              <Image alt="logo" className="rounded-lg" height={40} src={logo} width={40} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{constants.APP_NAME}</h2>
              <p className="text-sm text-green-400">{constants.APP_COMMUNITY}</p>
            </div>
          </Link>
          <p className="mb-6 leading-relaxed text-gray-400">{constants.APP_DESCRIPTION}</p>
          <div className="mb-6 grid grid-cols-3 gap-4">
            {statLinks.map((state) => (
              <StatBlock {...state} key={state.name} />
            ))}
          </div>

          <div className="flex space-x-4">
            {socialMedia.map((social) => {
              const { title, icon: Icon, url, color } = social;

              return (
                <a
                  key={title}
                  aria-label={title}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={cn(
                    'rounded-lg bg-slate-800 p-3 text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-lg',
                    color,
                  )}
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-4">
          {footerLinks.map((item) => {
            const { id, name, links } = item;

            return (
              <div key={id}>
                <h3 className="mb-4 font-semibold text-white">{name}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        className="group flex items-center text-gray-400 transition-colors duration-300 hover:text-green-400"
                        href={link.path}
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="ml-1 size-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} ${constants.APP_NAME}. All rights reserved. Built with ❤️
            by the community.
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="size-2 animate-pulse rounded-full bg-green-400" />
            <span>Made in Ahmedabad ❤️</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
