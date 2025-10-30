import { useState } from 'react';

import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Twitter } from 'lucide-react';

import AnimatedText from '@/components/AnimatedText';
import ScrollReveal from '@/components/ScrollReveal';

import type { ChangeEvent, FormEvent } from 'react';

import type { Component } from '@/types';

const Contact: Component = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@nodeahmedabad.com',
      description: "Send us an email and we'll get back to you within 24 hours",
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 98765 43210',
      description: 'Available Monday to Friday, 10 AM to 6 PM IST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Ahmedabad, Gujarat, India',
      description: 'Our events are hosted at various locations across the city',
    },
  ];

  const socialLinks = [
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.gg/nodeahmedabad',
      color: 'hover:text-indigo-400',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/nodeahmedabad',
      color: 'hover:text-gray-400',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/nodeahmedabad',
      color: 'hover:text-blue-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/nodeahmedabad',
      color: 'hover:text-blue-500',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <AnimatedText
                className="mb-6 text-5xl font-bold text-white md:text-6xl"
                text="Get In Touch"
              />
              <p className="mx-auto max-w-3xl text-xl text-gray-300">
                Have questions, suggestions, or want to collaborate? We'd love to hear from you and
                help you get involved in our community.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} delay={index * 100}>
                <div className="rounded-xl border border-gray-700 bg-slate-800 p-8 text-center transition-colors duration-300 hover:bg-slate-700">
                  <info.icon className="mx-auto mb-4 size-12 text-green-400" />
                  <h3 className="mb-2 text-xl font-bold text-white">{info.title}</h3>
                  <p className="mb-3 font-semibold text-green-400">{info.content}</p>
                  <p className="text-sm text-gray-300">{info.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-slate-800/30 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Form */}
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
                      className="resize-vertical w-full rounded-lg border border-gray-600 bg-slate-700 px-4 py-3 text-white transition-colors placeholder:text-gray-400 focus:border-green-500 focus:outline-none"
                      id="message"
                      name="message"
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                    />
                  </div>

                  <button
                    className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                    type="submit"
                  >
                    <Send className="mr-2 size-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Additional Info */}
            <ScrollReveal delay={200}>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-white">Let's Connect</h3>
                  <p className="mb-6 leading-relaxed text-gray-300">
                    Whether you're a beginner looking to learn, an experienced developer wanting to
                    share knowledge, or a company interested in sponsoring our events, we're here to
                    help you connect with our community.
                  </p>

                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        aria-label={social.name}
                        className={`rounded-lg bg-slate-800 p-3 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                        href={social.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <social.icon className="size-6" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-gray-700 bg-slate-800 p-6">
                  <h4 className="mb-3 text-lg font-bold text-white">Quick Response Times</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>• Email inquiries: Within 24 hours</p>
                    <p>• Event queries: Within 12 hours</p>
                    <p>• Partnership proposals: Within 48 hours</p>
                    <p>• Technical support: Within 6 hours</p>
                  </div>
                </div>

                <div className="rounded-xl border border-green-500/30 bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6">
                  <h4 className="mb-3 text-lg font-bold text-white">Office Hours</h4>
                  <div className="space-y-1 text-gray-300">
                    <p>Monday - Friday: 10:00 AM - 6:00 PM IST</p>
                    <p>Saturday: 10:00 AM - 2:00 PM IST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white">Find Us</h2>
              <p className="text-lg text-gray-300">
                Our events are hosted at various tech hubs across Ahmedabad
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="overflow-hidden rounded-2xl border border-gray-700 bg-slate-800">
              <div className="flex h-96 items-center justify-center bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 size-16 text-green-400" />
                  <h3 className="mb-2 text-2xl font-bold text-white">Interactive Map</h3>
                  <p className="text-gray-300">Map integration coming soon</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
