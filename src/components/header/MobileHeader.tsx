'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import menu, { menuButtonText } from '@/data/homepage/menu';

import type { Dispatch, SetStateAction } from 'react';

import type { Component } from '@/types';

interface MobileHeaderProps {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileHeader: Component<MobileHeaderProps> = (props) => {
  const { setIsMenuOpen } = props;

  const pathname = usePathname();

  return (
    <div className="absolute left-0 right-0 top-full animate-fade-in border-b border-green-500/20 bg-slate-900/95 backdrop-blur-lg lg:hidden">
      <div className="container mx-auto px-6 py-4">
        <div className="space-y-4">
          {menu.map((item) => {
            const { name, path, icon: Icon } = item;

            return (
              <Link
                key={name}
                href={path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 rounded-lg px-4 py-3 transition-all duration-300 ${
                  pathname === path
                    ? 'bg-green-400/10 text-green-400'
                    : 'text-gray-300 hover:bg-green-400/5 hover:text-green-400'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{name}</span>
              </Link>
            );
          })}
          <div className="border-t border-gray-700 pt-4">
            <Link
              className="block w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              href="/community"
              onClick={() => setIsMenuOpen(false)}
            >
              {menuButtonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
