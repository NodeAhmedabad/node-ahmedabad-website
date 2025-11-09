import Link from 'next/link';

import Typography from '@/components/ui/Typography';

import type { Component } from '@/types';

const NotFound: Component = () => (
  <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="flex flex-col gap-4 p-4 text-center">
      <Typography as="h1" variant="title">
        404
      </Typography>
      <Typography as="p" color="gray-600" variant="xl" weight="normal">
        Oops! Page not found
      </Typography>
      <Link className="font-bold text-blue-700 underline hover:text-blue-900" href="/">
        Return to Home
      </Link>
    </div>
  </div>
);

export default NotFound;
