import { Suspense } from 'react';

import App from '@/app/app';
import constants from '@/constants';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';

import type { Metadata } from 'next';

import type { Layout } from '@/types';

export const metadata: Metadata = {
  title: constants.APP_NAME,
  description: constants.APP_DESCRIPTION,
};

const RootLayout: Layout = async ({ children }) => (
  <html lang="en">
    <body>
      <Suspense fallback={null}>
        <App>{children}</App>
      </Suspense>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
