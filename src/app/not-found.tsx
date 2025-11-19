import NotFound from '@/components/NotFound';
import constants from '@/constants';
import NotFoundLayout from '@/layouts/NotFoundLayout';

import type { Metadata } from 'next';

import type { Component } from '@/types';

export const metadata = {
  title: `404 | ${constants.APP_NAME}`,
} satisfies Metadata;

const NotFoundPage: Component = () => (
  <NotFoundLayout>
    <NotFound />
  </NotFoundLayout>
);

export default NotFoundPage;
