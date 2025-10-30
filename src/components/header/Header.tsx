'use client';

import { useEffect, useState } from 'react';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import logo from '@/assets/logo.jpg';
import MobileHeader from '@/components/header/MobileHeader';
import constants from '@/constants';
import menu, { menuButtonText } from '@/data/homepage/menu';

import type { Component } from '@/types';

interface HeaderProps {
  fixedBar?: boolean;
}

const Header: Component<HeaderProps> = (props) => {
  const { fixedBar = false } = props;

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixedBar, setIsFixedBar] = useState(fixedBar);

  useEffect(() => {
    if (fixedBar) return;

    const handleScroll = () => {
      setIsFixedBar(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixedBar]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isFixedBar
          ? 'border-b border-green-500/20 bg-slate-900/95 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link className="group flex items-center space-x-3" href="/">
            <div className="relative">
              <Image alt="logo" className="rounded-lg" height={40} src={logo} width={40} />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-white">{constants.APP_NAME}</h1>
              <p className="text-xs text-green-400">{constants.APP_COMMUNITY}</p>
            </div>
          </Link>

          <div className="hidden items-center space-x-8 lg:flex">
            {menu.map((item) => {
              const { name, path, icon: Icon } = item;

              return (
                <Link
                  key={name}
                  href={path}
                  className={`flex items-center space-x-2 rounded-lg px-3 py-2 transition-all duration-300 ${
                    pathname === path
                      ? 'bg-green-400/10 text-green-400'
                      : 'text-gray-300 hover:bg-green-400/5 hover:text-green-400'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{name}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link
              className="rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              href="/community"
            >
              {menuButtonText}
            </Link>
          </div>

          <button
            className="rounded-lg p-2 text-white transition-colors duration-300 hover:bg-gray-800 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen ? <MobileHeader setIsMenuOpen={setIsMenuOpen} /> : null}
      </nav>
    </header>
  );
};

export default Header;
