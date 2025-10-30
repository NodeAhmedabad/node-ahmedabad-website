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
    <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-green-500/20 animate-fade-in">
      <div className="container mx-auto px-6 py-4">
        <div className="space-y-4">
          {menu.map((item) => {
            const { name, path, icon: Icon } = item;

            return (
              <Link
                key={name}
                href={path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  pathname === path
                    ? 'text-green-400 bg-green-400/10'
                    : 'text-gray-300 hover:text-green-400 hover:bg-green-400/5'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{name}</span>
              </Link>
            );
          })}
          <div className="pt-4 border-t border-gray-700">
            <Link
              className="block w-full text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
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
