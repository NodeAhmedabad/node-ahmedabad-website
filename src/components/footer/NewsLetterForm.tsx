'use client';

import { useState } from 'react';

import { toast } from 'sonner';

import Typography from '@/components/ui/Typography';
import { statuses } from '@/constants';

import type { FormEvent } from 'react';

import type { Component } from '@/types';

const NewsLetterForm: Component = () => {
  const [status, setStatus] = useState(statuses.PENDING);

  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(statuses.IN_PROGRESS);

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await res.json();

    if (res.ok) {
      setEmail('');
      toast.success('Subscription successful — welcome to the event loop 💚');
    } else {
      toast.error('Oops! Your message threw an unhandled rejection 😅 Try again!');
    }

    setStatus(statuses.PENDING);
  };

  const text = (() => {
    if (status === statuses.IN_PROGRESS) return 'Loading...';
    return 'Subscribe';
  })();

  return (
    <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row" onSubmit={handleSubmit}>
      <input
        required
        className="flex-1 rounded-lg border border-gray-700 bg-slate-800 px-4 py-3 text-white transition-colors duration-300 placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        type="email"
        value={email}
      />
      <button
        className="rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
        disabled={status === statuses.IN_PROGRESS}
        type="submit"
      >
        <Typography as="span" variant="content">
          {text}
        </Typography>
      </button>
    </form>
  );
};

export default NewsLetterForm;
