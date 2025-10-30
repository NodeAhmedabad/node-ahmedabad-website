import { Mail } from 'lucide-react';

import type { Component } from '@/types';

const NewsLetter: Component = () => (
  <div className="border-b border-gray-800 bg-gradient-to-r from-slate-900 to-slate-800">
    <div className="container mx-auto px-6 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500">
          <Mail className="h-8 w-8 text-white" />
        </div>
        <h3 className="mb-4 text-3xl font-bold text-white">Stay Updated</h3>
        <p className="mx-auto mb-8 max-w-2xl text-gray-400">
          Get the latest news about our events, workshops, and community updates delivered to your
          inbox.
        </p>
        <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
          <input
            className="flex-1 rounded-lg border border-gray-700 bg-slate-800 px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 focus:border-green-500 focus:outline-none"
            placeholder="Enter your email"
            type="email"
          />
          <button
            className="rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            type="button"
          >
            Subscribe
          </button>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  </div>
);

export default NewsLetter;
