import { Calendar, Code2, ExternalLink, Mail, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

import { socialMedia } from '@/data/stats';

import type { Component } from '@/types';

const Footer: Component = () => {
  const footerLinks = {
    community: [
      { name: 'About Us', path: '/about' },
      { name: 'Events', path: '/events' },
    ],
    getInvolved: [
      { name: 'Join Community', path: '/community' },
      { name: 'Volunteer', path: '/get-involved' },
      { name: 'Become Speaker', path: '/get-involved#speaker' },
      { name: 'Sponsor Us', path: '/sponsors' },
    ],
    resources: [
      { name: 'Learning Materials', path: '/resources' },
      { name: 'Code of Conduct', path: '/code-of-conduct' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Contact', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Use', path: '/terms' },
    ],
  };

  return (
    <footer className="bg-slate-900 border-t border-gray-800">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest news about our events, workshops, and community updates delivered to
              your inbox.
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

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link className="flex items-center space-x-3 mb-6 group" href="/">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg opacity-25 group-hover:opacity-75 blur transition-opacity duration-300" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Node Ahmedabad</h2>
                <p className="text-sm text-green-400">JavaScript Community</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering developers in Ahmedabad through knowledge sharing, networking, and
              collaborative learning in the Node.js ecosystem.
            </p>

            {/* Community Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-slate-800 rounded-lg">
                <Users className="w-5 h-5 text-green-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-white">2K+</div>
                <div className="text-xs text-gray-400">Members</div>
              </div>
              <div className="text-center p-3 bg-slate-800 rounded-lg">
                <Calendar className="w-5 h-5 text-green-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-white">50+</div>
                <div className="text-xs text-gray-400">Events</div>
              </div>
              <div className="text-center p-3 bg-slate-800 rounded-lg">
                <MapPin className="w-5 h-5 text-green-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-white">AMD</div>
                <div className="text-xs text-gray-400">City</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  aria-label={social.name}
                  className={`p-3 bg-slate-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  href={social.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center group"
                      href={link.path}
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-3">
                {footerLinks.getInvolved.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center group"
                      href={link.path}
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center group"
                      href={link.path}
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center group"
                      href={link.path}
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Node Ahmedabad. All rights reserved. Built with ❤️ by
              the community.
            </div>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>Made in Ahmedabad</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Powered by Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
