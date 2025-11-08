import { MessageCircle } from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';

import type { Component } from '@/types';

const ReachOut: Component = () => (
  <section className="bg-slate-800/30 py-20">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-12 text-center">
          <MessageCircle className="mx-auto mb-6 size-16 text-white" />
          <h2 className="mb-6 text-4xl font-bold text-white">Still Have Questions?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Can&apos;t find what you&apos;re looking for? We&apos;re here to help! Reach out to of
            these channels.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              className="rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition-colors hover:bg-gray-100"
              href="/contact"
            >
              Contact Us
            </a>
            <a
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-green-600"
              href="https://discord.gg/nodeahmedabad"
              rel="noopener noreferrer"
              target="_blank"
            >
              Join Discord
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ReachOut;
