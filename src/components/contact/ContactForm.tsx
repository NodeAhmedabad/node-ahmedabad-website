'use client';

import { useState } from 'react';

import { Send } from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';

import type { ChangeEvent, FormEvent } from 'react';

import type { Component } from '@/types';

const statuses = {
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  SUBMITTED: 'submitted',
  ERROR: 'error',
};

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm: Component = () => {
  const [status, setStatus] = useState(statuses.PENDING);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(statuses.IN_PROGRESS);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await res.json();

    if (res.ok) setFormData(initialState);

    setStatus(res.ok ? statuses.SUBMITTED : statuses.ERROR);
    setTimeout(() => setStatus(statuses.PENDING), 5000);
  };

  const text = (() => {
    if (status === statuses.IN_PROGRESS) return 'Loading...';
    if (status === statuses.SUBMITTED) return 'Message Sent';
    if (status === statuses.ERROR) return 'Something went wrong';
    return 'Send Message';
  })();

  return (
    <ScrollReveal>
      <div className="rounded-2xl border border-gray-700 bg-slate-800 p-8">
        <h2 className="mb-8 text-3xl font-bold text-white">Send us a Message</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium text-white" htmlFor="name">
                Full Name *
              </label>
              <input
                required
                className="w-full rounded-lg border border-gray-600 bg-slate-700 px-4 py-3 text-white transition-colors placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
                id="name"
                name="name"
                onChange={handleChange}
                placeholder="Your full name"
                type="text"
                value={formData.name}
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-white" htmlFor="email">
                Email Address *
              </label>
              <input
                required
                className="w-full rounded-lg border border-gray-600 bg-slate-700 px-4 py-3 text-white transition-colors placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="your@email.com"
                type="email"
                value={formData.email}
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium text-white" htmlFor="subject">
              Subject *
            </label>
            <input
              required
              className="w-full rounded-lg border border-gray-600 bg-slate-700 px-4 py-3 text-white transition-colors placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
              id="subject"
              name="subject"
              onChange={handleChange}
              placeholder="What's this about?"
              type="text"
              value={formData.subject}
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-white" htmlFor="message">
              Message *
            </label>
            <textarea
              required
              className="w-full rounded-lg border border-gray-600 bg-slate-700 px-4 py-3 text-white transition-colors placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
              id="message"
              name="message"
              onChange={handleChange}
              placeholder="Tell us more about your inquiry..."
              rows={6}
              value={formData.message}
            />
          </div>

          <button
            className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg enabled:hover:shadow-green-500/25 disabled:opacity-40"
            disabled={status !== statuses.PENDING}
            type="submit"
          >
            <Send className="mr-2 size-5" />
            {text}
          </button>
        </form>
      </div>
    </ScrollReveal>
  );
};

export default ContactForm;
