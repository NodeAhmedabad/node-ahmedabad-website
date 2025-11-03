import { Code } from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';

import type { Component } from '@/types';

const GitHubContributions: Component = () => (
  <section className="bg-slate-800/30 py-20">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="rounded-2xl border border-gray-700 bg-gradient-to-r from-slate-800 to-slate-700 p-12">
          <div className="text-center">
            <Code className="mx-auto mb-6 size-16 text-green-400" />
            <h2 className="mb-6 text-4xl font-bold text-white">Contribute to Website</h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-300">
              Help us build and maintain our community tools, website, and other open-source
              projects. Perfect for developers looking to contribute to meaningful projects.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <h3 className="mb-2 text-2xl font-bold text-green-400">2+</h3>
                <p className="text-gray-300">Maintainers</p>
              </div>
              <div className="text-center">
                <h3 className="mb-2 text-2xl font-bold text-green-400">5+</h3>
                <p className="text-gray-300">Contributors</p>
              </div>
              <div className="text-center">
                <h3 className="mb-2 text-2xl font-bold text-green-400">200+</h3>
                <p className="text-gray-300">Commits</p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                className="rounded-lg bg-green-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-600"
                href="https://github.com/NodeAhmedabad/node-ahmedabad-website"
                rel="noopener noreferrer"
                target="_blank"
              >
                View Repository
              </a>
              <a
                className="rounded-lg border-2 border-green-500 px-8 py-3 font-semibold text-green-400 transition-colors hover:bg-green-500 hover:text-white"
                href="https://github.com/NodeAhmedabad/node-ahmedabad-website/blob/master/CONTRIBUTING.md"
                rel="noopener noreferrer"
                target="_blank"
              >
                Contribution Guide
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default GitHubContributions;
