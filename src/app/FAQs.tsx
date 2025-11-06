import React, { useState } from 'react';

import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Code,
  HelpCircle,
  MessageCircle,
  Search,
  Users,
} from 'lucide-react';

import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';
import MainLayout from '@/layouts/MainLayout';

import type { Component } from '@/types';

const FAQs: Component = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqCategories = [
    {
      id: 'general',
      name: 'General',
      icon: HelpCircle,
      faqs: [
        {
          id: 'what-is-node-ahmedabad',
          question: 'What is Node Ahmedabad?',
          answer:
            "Node Ahmedabad is Gujarat's largest Node.js developer community. We organize regular meetups, workshops, conferences, and networking events to help developers learn, grow, and connect with fellow Node.js enthusiasts.",
        },
        {
          id: 'who-can-join',
          question: 'Who can join the community?',
          answer:
            'Anyone interested in Node.js, JavaScript, and related technologies can join our community. We welcome developers of all skill levels, from beginners to experts, as well as students, professionals, and tech enthusiasts.',
        },
        {
          id: 'is-it-free',
          question: 'Is it free to join?',
          answer:
            'Yes, joining our community is completely free! Most of our events are also free to attend. Occasionally, we may charge a nominal fee for workshops that include materials or refreshments.',
        },
        {
          id: 'how-to-stay-updated',
          question: 'How do I stay updated about events?',
          answer:
            'You can join our Discord server, follow us on social media, subscribe to our newsletter, or check our website regularly for the latest updates about upcoming events and community news.',
        },
      ],
    },
    {
      id: 'events',
      name: 'Events',
      icon: Calendar,
      faqs: [
        {
          id: 'event-frequency',
          question: 'How often do you organize events?',
          answer:
            'We organize events regularly throughout the year. Typically, we have monthly meetups, quarterly workshops, and an annual conference. Special events and hackathons are organized based on community interest and opportunities.',
        },
        {
          id: 'event-registration',
          question: 'How do I register for events?',
          answer:
            'Event registration is usually done through our website, Eventbrite, or announced on our Discord server. We recommend following our social media channels and joining our mailing list to get notified about registration openings.',
        },
        {
          id: 'event-formats',
          question: 'What types of events do you organize?',
          answer:
            'We organize various types of events including technical meetups, hands-on workshops, conferences, hackathons, networking sessions, and social gatherings. Events can be in-person, online, or hybrid depending on the situation.',
        },
        {
          id: 'speak-at-event',
          question: 'Can I speak at your events?',
          answer:
            "Absolutely! We're always looking for speakers to share their knowledge and experiences. You can apply through our speaker application form on the website or reach out to us directly with your topic proposal.",
        },
      ],
    },
    {
      id: 'technical',
      name: 'Technical',
      icon: Code,
      faqs: [
        {
          id: 'skill-level-required',
          question: 'What skill level is required to attend?',
          answer:
            'Our events cater to all skill levels. We have beginner-friendly sessions for those new to Node.js, as well as advanced technical talks for experienced developers. Event descriptions usually indicate the target audience and skill level.',
        },
        {
          id: 'learning-resources',
          question: 'Do you provide learning resources?',
          answer:
            'Yes! We maintain a comprehensive resource library with tutorials, code samples, slides from past presentations, and curated learning materials. These are available on our website and shared in our community channels.',
        },
        {
          id: 'get-help',
          question: 'Can I get help with Node.js problems?',
          answer:
            'Definitely! Our Discord server has dedicated channels for technical discussions and Q&A. Community members are always willing to help with Node.js questions, code reviews, and troubleshooting.',
        },
        {
          id: 'project-showcase',
          question: 'Can I showcase my Node.js project?',
          answer:
            'Yes! We encourage members to showcase their projects during our events. We have dedicated sessions for project demos and also welcome project showcases on our Discord server and social media.',
        },
      ],
    },
    {
      id: 'community',
      name: 'Community',
      icon: Users,
      faqs: [
        {
          id: 'community-size',
          question: 'How big is the community?',
          answer:
            "Our community has over 2,000 active members across various platforms including Discord, social media, and event attendees. We're one of the largest and most active tech communities in Gujarat.",
        },
        {
          id: 'volunteer-opportunities',
          question: 'How can I volunteer or contribute?',
          answer:
            'There are many ways to contribute! You can help with event organization, content creation, mentoring newcomers, speaking at events, or contributing to our open-source projects. Check our "Get Involved" page for current opportunities.',
        },
        {
          id: 'networking-opportunities',
          question: 'Are there networking opportunities?',
          answer:
            'Absolutely! Networking is a core part of our community. Every event includes networking sessions, and we organize special networking meetups. Our Discord server is also a great place to connect with other developers.',
        },
        {
          id: 'mentorship-program',
          question: 'Do you have a mentorship program?',
          answer:
            'Yes, we have informal mentorship opportunities where experienced developers help newcomers. We also pair speakers with first-time presenters and have senior members who are always willing to guide others in their career journey.',
        },
      ],
    },
  ];

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0);

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <MainLayout>
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden py-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=1080&fit=crop)',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/80" />
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)]" />

        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <AnimatedText
                className="mb-6 text-5xl font-bold text-white md:text-6xl"
                text="Frequently Asked Questions"
              />
              <p className="mx-auto max-w-3xl text-xl text-gray-300">
                Find answers to common questions about our Node.js community, events, and how to get
                involved.
              </p>
            </div>
          </ScrollReveal>

          {/* Search */}
          <ScrollReveal delay={200}>
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                <input
                  className="w-full rounded-xl border border-gray-700 bg-slate-800 py-4 pl-12 pr-4 text-white transition-colors placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search FAQs..."
                  type="text"
                  value={searchTerm}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            {filteredFAQs.map((category, categoryIndex) => (
              <ScrollReveal key={category.id} delay={categoryIndex * 100}>
                <div className="mb-12">
                  <div className="mb-8 flex items-center">
                    <category.icon className="mr-3 size-8 text-green-400" />
                    <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <div
                        key={faq.id}
                        className="overflow-hidden rounded-xl border border-gray-700 bg-slate-800"
                      >
                        <button
                          className="flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-slate-700"
                          onClick={() => toggleFAQ(faq.id)}
                          type="button"
                        >
                          <h3 className="pr-4 text-lg font-semibold text-white">{faq.question}</h3>
                          {openFAQ === faq.id ? (
                            <ChevronUp className="size-5 shrink-0 text-green-400" />
                          ) : (
                            <ChevronDown className="size-5 shrink-0 text-gray-400" />
                          )}
                        </button>

                        {openFAQ === faq.id && (
                          <div className="px-6 pb-6">
                            <div className="border-t border-gray-700 pt-4">
                              <p className="leading-relaxed text-gray-300">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-slate-800/30 py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-12 text-center">
              <MessageCircle className="mx-auto mb-6 size-16 text-white" />
              <h2 className="mb-6 text-4xl font-bold text-white">Still Have Questions?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Can't find what you're looking for? We're here to help! Reach out to us through any
                of these channels.
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
    </MainLayout>
  );
};

export default FAQs;
