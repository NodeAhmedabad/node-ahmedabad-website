import { Suspense } from 'react';

import App from '@/app/app';
import constants from '@/constants';
import '@/styles/globals.css';

import type { Metadata } from 'next';

import type { Layout } from '@/types';

export const metadata: Metadata = {
  title: constants.APP_NAME,
  description: constants.APP_DESCRIPTION,
};

const RootLayout: Layout = async ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <App>{children}</App>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
