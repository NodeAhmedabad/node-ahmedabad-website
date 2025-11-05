import { Lock, Mail } from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';
import { socialMedias } from '@/data/information';

import type { Component } from '@/types';

const TermsQuestions: Component = () => (
  <section className="bg-slate-800/30 py-20">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="rounded-2xl border-gray-700 bg-gradient-to-r from-slate-800 to-slate-700 p-12 text-center">
          <Lock className="mx-auto mb-6 size-16 text-white" />
          <h2 className="mb-6 text-4xl font-bold text-white">Questions About These Terms?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            If you have any questions about these Terms of Service, please don&apos;t hesitate to
            contact us.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-black transition-colors hover:bg-gray-100"
              href={socialMedias.EMAIL.url}
            >
              <Mail className="mr-2 size-4" />
              {socialMedias.EMAIL.url.replace('mailto:', '')}
            </a>
            <a
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
              href="/contact"
            >
              Contact Form
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TermsQuestions;
