
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import AnimatedText from '../components/ui/AnimatedText';
import { Mail, Phone, MapPin, Send, MessageCircle, Github, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@nodeahmedabad.com",
      description: "Send us an email and we'll get back to you within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      description: "Available Monday to Friday, 10 AM to 6 PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Ahmedabad, Gujarat, India",
      description: "Our events are hosted at various locations across the city"
    }
  ];

  const socialLinks = [
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discord.gg/nodeahmedabad",
      color: "hover:text-indigo-400"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/nodeahmedabad",
      color: "hover:text-gray-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/nodeahmedabad",
      color: "hover:text-blue-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/nodeahmedabad",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <AnimatedText 
                  text="Get In Touch"
                  className="text-5xl md:text-6xl font-bold text-white mb-6"
                />
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Have questions, suggestions, or want to collaborate? We'd love to hear from you and help you get involved in our community.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={info.title} delay={index * 100}>
                  <div className="bg-slate-800 p-8 rounded-xl border border-gray-700 text-center hover:bg-slate-700 transition-colors duration-300">
                    <info.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-green-400 font-semibold mb-3">{info.content}</p>
                    <p className="text-gray-300 text-sm">{info.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <ScrollReveal>
                <div className="bg-slate-800 p-8 rounded-2xl border border-gray-700">
                  <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-white font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors resize-vertical"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </ScrollReveal>

              {/* Additional Info */}
              <ScrollReveal delay={200}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Whether you're a beginner looking to learn, an experienced developer wanting to share knowledge, 
                      or a company interested in sponsoring our events, we're here to help you connect with our community.
                    </p>
                    
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 bg-slate-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                          aria-label={social.name}
                        >
                          <social.icon className="w-6 h-6" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-800 p-6 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-bold text-white mb-3">Quick Response Times</h4>
                    <div className="space-y-2 text-gray-300">
                      <p>• Email inquiries: Within 24 hours</p>
                      <p>• Event queries: Within 12 hours</p>
                      <p>• Partnership proposals: Within 48 hours</p>
                      <p>• Technical support: Within 6 hours</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-xl border border-green-500/30">
                    <h4 className="text-lg font-bold text-white mb-3">Office Hours</h4>
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
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Find Us</h2>
                <p className="text-gray-300 text-lg">Our events are hosted at various tech hubs across Ahmedabad</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-slate-800 rounded-2xl overflow-hidden border border-gray-700">
                <div className="h-96 bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Interactive Map</h3>
                    <p className="text-gray-300">Map integration coming soon</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
