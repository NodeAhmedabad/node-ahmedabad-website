import { Users } from 'lucide-react';
import Link from 'next/link';

import ScrollReveal from '@/components/ScrollReveal';
import { socialMedias } from '@/data/information';

import type { Component } from '@/types';

const CtaSection: Component = () => (
  <section className="bg-slate-800/30 py-20">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-12 text-center">
          <Users className="mx-auto mb-6 size-16 text-white" />
          <h2 className="mb-6 text-4xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Join thousands of developers who are already part of our amazing community. Start your
            journey today!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              className="rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition-colors hover:bg-gray-100"
              href={socialMedias.WHATSAPP.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              Join {socialMedias.WHATSAPP.title}
            </a>
            <Link
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-green-600"
              href="/events"
            >
              View Events
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CtaSection;
