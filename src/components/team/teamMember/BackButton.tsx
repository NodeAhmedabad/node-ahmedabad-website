import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import ScrollReveal from '@/components/ScrollReveal';

import type { Component } from '@/types';

const BackButton: Component = () => (
  <section className="bg-slate-800/50 py-8">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <Link
          className="inline-flex items-center text-gray-300 transition-colors duration-300 hover:text-green-400"
          href="/team"
        >
          <ArrowLeft className="mr-2 size-5" />
          Back to Team
        </Link>
      </ScrollReveal>
    </div>
  </section>
);

export default BackButton;
