'use client';

import { useEffect, useState } from 'react';

import { MenuIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Section from '@/app/Section';
import logo from '@/assets/logo.jpg';
import MobileHeader from '@/components/header/MobileHeader';
import Typography from '@/components/ui/Typography';
import constants from '@/constants';
import menu, { menuButtonText } from '@/data/homepage/menu';
import cn from '@/lib/cn';

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

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixedBar]);

  return (
    <Section
      as="header"
      nestedAs="nav"
      className={cn(
        'fixed inset-x-0 top-0 z-50 !scroll-mt-4 !py-4 transition-[background-color] duration-300',
        isFixedBar
          ? 'border-b border-green-500/20 bg-slate-900/95 backdrop-blur-lg'
          : 'bg-transparent',
        isMenuOpen && 'bg-slate-900/95',
      )}
    >
      <div className="flex items-center justify-between">
        <Link className="group flex items-center gap-3" href="/">
          <div className="relative">
            <Image alt="logo" className="rounded-lg" height={40} src={logo} width={40} />
          </div>
          <div className="flex flex-col">
            <Typography as="p" color="white" variant="xl">
              {constants.APP_NAME}
            </Typography>
            <Typography as="p" color="green-400" variant="xs">
              {constants.APP_COMMUNITY}
            </Typography>
          </div>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {menu.map((item) => {
            const { name, path, icon: Icon, className } = item;

            return (
              <Link
                key={name}
                href={path}
                className={cn(
                  'flex items-center gap-x-2 rounded-lg px-3 py-2 transition-all duration-300',
                  pathname === path
                    ? 'bg-green-400/10 text-green-400'
                    : 'text-gray-300 hover:bg-green-400/5 hover:text-green-400',
                  className,
                )}
              >
                <Icon className="size-4" />
                <Typography as="span" color="content" variant="content" weight="medium">
                  {name}
                </Typography>
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex">
          <Link
            className="rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            href="/community"
          >
            <Typography as="span" color="white" variant="content" weight="semibold">
              {menuButtonText}
            </Typography>
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-white transition-colors duration-300 hover:bg-gray-800 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
        >
          {isMenuOpen ? <XIcon className="size-8" /> : <MenuIcon className="size-8" />}
        </button>
      </div>

      {isMenuOpen ? <MobileHeader setIsMenuOpen={setIsMenuOpen} /> : null}
    </Section>
  );
};

export default Header;
