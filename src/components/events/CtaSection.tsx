import { Lightbulb } from 'lucide-react';
import Link from 'next/link';

import ScrollReveal from '@/components/ScrollReveal';

import type { Component } from '@/types';

const CtaSection: Component = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-12 text-center">
          <Lightbulb className="mx-auto mb-6 size-16 text-white" />
          <h2 className="mb-6 text-4xl font-bold text-white">Want to Speak or be Volunteer?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Have an idea for a workshop or want to share your knowledge with the community?
            We&apos;d love to hear from you!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              className="rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition-colors hover:bg-gray-100"
              href="/get-involved"
            >
              Join the community
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CtaSection;
