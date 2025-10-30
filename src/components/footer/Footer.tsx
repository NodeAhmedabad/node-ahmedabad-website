import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.jpg';
import NewsLetter from '@/components/footer/NewsLetter';
import StatBlock from '@/components/footer/StatBlock';
import constants from '@/constants';
import footerLinks from '@/data/footer/footerLinks';
import statLinks from '@/data/footer/statLinks';
import { socialMedia } from '@/data/stats';

import type { Component } from '@/types';

const Footer: Component = () => (
  <footer className="bg-slate-900 border-t border-gray-800">
    <NewsLetter />
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        <div className="lg:col-span-2">
          <Link className="flex items-center space-x-3 mb-6 group" href="/">
            <div className="relative">
              <Image alt="logo" className="rounded-lg" height={40} src={logo} width={40} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{constants.APP_NAME}</h2>
              <p className="text-sm text-green-400">{constants.APP_COMMUNITY}</p>
            </div>
          </Link>
          <p className="text-gray-400 mb-6 leading-relaxed">{constants.APP_DESCRIPTION}</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {statLinks.map((state) => (
              <StatBlock {...state} key={state.name} />
            ))}
          </div>

          <div className="flex space-x-4">
            {socialMedia.map((social) => {
              const { name, icon: Icon, url, color } = social;

              return (
                <a
                  key={name}
                  aria-label={name}
                  className={`p-3 bg-slate-800 rounded-lg text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((item) => {
            const { id, name, links } = item;

            return (
              <div key={id}>
                <h3 className="text-white font-semibold mb-4">{name}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center group"
                        href={link.path}
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ${constants.APP_NAME}. All rights reserved. Built with ❤️
            by the community.
          </div>
          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Made in Ahmedabad ❤️</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
