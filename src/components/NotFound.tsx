'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { Component } from '@/types';

const NotFound: Component = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center">
      <h2 className="p-4">Not Found</h2>
      <p className="mb-4">Could not find requested resource &quot;{pathname}&quot;</p>
      <Link href="/">
        <button className="w-fit mx-auto my-0 py-2 px-4 cursor-pointer" type="button">
          Return Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
