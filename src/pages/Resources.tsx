
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import AnimatedText from '../components/ui/AnimatedText';
import { Book, Video, Download, ExternalLink, Code, FileText, Play, Star } from 'lucide-react';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const learningMaterials = [
    {
      title: "Node.js Fundamentals",
      description: "Complete guide to getting started with Node.js",
      type: "tutorial",
      format: "Article Series",
      level: "Beginner",
      duration: "4 hours",
      author: "Rajesh Patel",
      url: "#",
      rating: 4.8
    },
    {
      title: "Advanced Express.js Patterns",
      description: "Deep dive into Express.js architectural patterns",
      type: "video",
      format: "Video Course",
      level: "Advanced",
      duration: "6 hours",
      author: "Priya Sharma",
      url: "#",
      rating: 4.9
    },
    {
      title: "MongoDB Integration Guide",
      description: "Best practices for MongoDB with Node.js",
      type: "guide",
      format: "PDF Guide",
      level: "Intermediate",
      duration: "2 hours",
      author: "Amit Kumar",
      url: "#",
      rating: 4.7
    }
  ];

  const communityDocs = [
    {
      title: "New Member Onboarding",
      description: "Everything you need to know to get started",
      icon: Book,
      downloadUrl: "#"
    },
    {
      title: "Event Speaker Guidelines",
      description: "Guidelines for speakers at our events",
      icon: FileText,
      downloadUrl: "#"
    },
    {
      title: "Code of Conduct",
      description: "Community standards and expectations",
      icon: FileText,
      downloadUrl: "#"
    },
    {
      title: "Volunteer Handbook",
      description: "Guide for community volunteers",
      icon: Book,
      downloadUrl: "#"
    }
  ];

  const pastSlides = [
    {
      title: "Node.js Performance Optimization",
      speaker: "Rajesh Patel",
      event: "Node Ahmedabad Meetup #15",
      date: "2024-01-20",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      title: "Building Microservices with Node.js",
      speaker: "Sarah Kumar",
      event: "Node Ahmedabad Conference 2023",
      date: "2023-12-15",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      title: "GraphQL with Node.js",
      speaker: "Amit Patel",
      event: "Node Ahmedabad Workshop",
      date: "2023-11-25",
      downloadUrl: "#",
      viewUrl: "#"
    }
  ];

  const usefulTools = [
    {
      name: "Node Version Manager (nvm)",
      description: "Manage multiple Node.js versions easily",
      category: "Development",
      url: "https://github.com/nvm-sh/nvm",
      type: "CLI Tool"
    },
    {
      name: "PM2",
      description: "Production process manager for Node.js",
      category: "Deployment",
      url: "https://pm2.keymetrics.io/",
      type: "Process Manager"
    },
    {
      name: "Nodemon",
      description: "Automatically restart Node.js applications",
      category: "Development",
      url: "https://nodemon.io/",
      type: "Development Tool"
    },
    {
      name: "Express Generator",
      description: "Quickly scaffold Express.js applications",
      category: "Scaffolding",
      url: "https://expressjs.com/en/starter/generator.html",
      type: "Generator"
    }
  ];

  const categories = ['all', 'tutorial', 'video', 'guide'];

  const filteredMaterials = learningMaterials.filter(material => 
    activeCategory === 'all' || material.type === activeCategory
  );

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
                  text="Learning Resources"
                  className="text-5xl md:text-6xl font-bold text-white mb-6"
                />
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Curated learning materials, documentation, and tools to help you master Node.js and advance your career.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Learning Materials */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Learning Materials</h2>
                <p className="text-gray-300 text-lg">High-quality tutorials and courses from our community experts</p>
              </div>
            </ScrollReveal>

            {/* Category Filter */}
            <div className="flex justify-center mb-12">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category === 'all' ? 'All Materials' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMaterials.map((material, index) => (
                <ScrollReveal key={material.title} delay={index * 100}>
                  <div className="bg-slate-800 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          material.type === 'tutorial' ? 'bg-blue-500/20 text-blue-400' :
                          material.type === 'video' ? 'bg-red-500/20 text-red-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {material.format}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-yellow-400 text-sm">{material.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{material.title}</h3>
                      <p className="text-gray-300 mb-4">{material.description}</p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-gray-400">
                          <span className="font-medium">Level:</span> {material.level}
                        </div>
                        <div className="text-sm text-gray-400">
                          <span className="font-medium">Duration:</span> {material.duration}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">by {material.author}</span>
                        <a
                          href={material.url}
                          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center"
                        >
                          {material.type === 'video' ? <Play className="w-4 h-4 mr-1" /> : <Book className="w-4 h-4 mr-1" />}
                          {material.type === 'video' ? 'Watch' : 'Read'}
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Community Documentation */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Community Documentation</h2>
                <p className="text-gray-300 text-lg">Essential guides and documentation for community members</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {communityDocs.map((doc, index) => (
                <ScrollReveal key={doc.title} delay={index * 100}>
                  <div className="bg-slate-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
                    <doc.icon className="w-12 h-12 text-green-400 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-3">{doc.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{doc.description}</p>
                    <a
                      href={doc.downloadUrl}
                      className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Past Slides & Notes */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Past Slides & Notes</h2>
                <p className="text-gray-300 text-lg">Download presentation slides and notes from our events</p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {pastSlides.map((slide, index) => (
                <ScrollReveal key={slide.title} delay={index * 100}>
                  <div className="bg-slate-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{slide.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span>Speaker: {slide.speaker}</span>
                          <span>Event: {slide.event}</span>
                          <span>Date: {new Date(slide.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-4 lg:mt-0">
                        <a
                          href={slide.viewUrl}
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </a>
                        <a
                          href={slide.downloadUrl}
                          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Useful Tools */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Recommended Tools</h2>
                <p className="text-gray-300 text-lg">Essential development tools recommended by our community</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {usefulTools.map((tool, index) => (
                <ScrollReveal key={tool.name} delay={index * 100}>
                  <div className="bg-slate-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                        <p className="text-gray-300 mb-3">{tool.description}</p>
                      </div>
                      <Code className="w-8 h-8 text-green-400 flex-shrink-0" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                          {tool.category}
                        </span>
                        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tool.type}
                        </span>
                      </div>
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Visit
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-12 text-center">
                <Book className="w-16 h-16 text-white mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-white mb-6">Contribute Resources</h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Have a great tutorial, tool, or resource to share? Help us expand our community library!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Submit Resource
                  </a>
                  <a
                    href="/get-involved"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                  >
                    Become Contributor
                  </a>
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

export default Resources;
