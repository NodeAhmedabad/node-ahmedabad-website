import { Mail } from 'lucide-react';

import type { Component } from '@/types';

const NewsLetter: Component = () => (
  <div className="border-b border-gray-800 bg-gradient-to-r from-slate-900 to-slate-800">
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Get the latest news about our events, workshops, and community updates delivered to your
          inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            className="flex-1 px-4 py-3 bg-slate-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-300"
            placeholder="Enter your email"
            type="email"
          />
          <button
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
            type="button"
          >
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  </div>
);

export default NewsLetter;
