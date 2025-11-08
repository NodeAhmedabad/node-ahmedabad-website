'use client';

import { useState } from 'react';

import type { FormEvent } from 'react';

import type { Component } from '@/types';

const NewsLetterForm: Component = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log(e);
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await res.json();

    if (res.ok) setEmail('');
  };

  return (
    <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row" onSubmit={handleSubmit}>
      <input
        className="flex-1 rounded-lg border border-gray-700 bg-slate-800 px-4 py-3 text-white transition-colors duration-300 placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        type="email"
        value={email}
      />
      <button
        className="rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsLetterForm;
