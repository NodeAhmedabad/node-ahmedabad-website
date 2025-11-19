'use client';

import Error from '@/components/Error';

import type { Component, NextErrorType } from '@/types';

const GlobalError: Component<NextErrorType> = (props) => (
  <html lang="en">
    <body>
      <Error {...props} />
    </body>
  </html>
);

export default GlobalError;
