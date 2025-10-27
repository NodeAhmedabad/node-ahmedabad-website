import constants from '@/constants';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: `Homepage | ${constants.APP_NAME}`,
} satisfies Metadata;

const HomePage: Component = () => <h1 className="text-center">Coming Soon...</h1>;

export default HomePage;
