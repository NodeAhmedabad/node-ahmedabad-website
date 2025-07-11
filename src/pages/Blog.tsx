
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import AnimatedText from '../components/ui/AnimatedText';
import { Calendar, User, Tag, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const featuredPost = {
    id: 1,
    title: "Building High-Performance Node.js Applications: A Complete Guide",
    excerpt: "Learn advanced techniques for optimizing Node.js applications, from memory management to clustering and beyond.",
    author: "Rajesh Patel",
    date: "2024-01-25",
    category: "Tutorial",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800",
    tags: ["Node.js", "Performance", "Optimization"]
  };

  const blogPosts = [
    {
      id: 2,
      title: "Understanding Event Loop in Node.js",
      excerpt: "Deep dive into how Node.js event loop works and how to write efficient asynchronous code.",
      author: "Priya Sharma",
      date: "2024-01-20",
      category: "Tutorial",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      tags: ["Node.js", "Event Loop", "Async"]
    },
    {
      id: 3,
      title: "Node Ahmedabad Meetup Recap - January 2024",
      excerpt: "Highlights from our recent meetup featuring talks on microservices and GraphQL.",
      author: "Community Team",
      date: "2024-01-18",
      category: "Event Recap",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600",
      tags: ["Meetup", "Community", "GraphQL"]
    },
    {
      id: 4,
      title: "Getting Started with TypeScript in Node.js",
      excerpt: "A beginner's guide to integrating TypeScript into your Node.js projects.",
      author: "Amit Kumar",
      date: "2024-01-15",
      category: "Tutorial",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
      tags: ["TypeScript", "Node.js", "Beginner"]
    },
    {
      id: 5,
      title: "MongoDB Best Practices for Node.js Developers",
      excerpt: "Essential tips for working with MongoDB in Node.js applications.",
      author: "Sarah Patel",
      date: "2024-01-12",
      category: "Tutorial",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
      tags: ["MongoDB", "Database", "Best Practices"]
    },
    {
      id: 6,
      title: "Community Spotlight: Rising Stars of 2023",
      excerpt: "Meet the outstanding contributors who made significant impact in our community.",
      author: "Community Team",
      date: "2024-01-08",
      category: "Community",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
      tags: ["Community", "Spotlight", "Contributors"]
    }
  ];

  const categories = ['all', 'Tutorial', 'Event Recap', 'Community', 'News'];

  const filteredPosts = blogPosts.filter(post => 
    (selectedCategory === 'all' || post.category === selectedCategory) &&
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
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
                  text="Community Blog"
                  className="text-5xl md:text-6xl font-bold text-white mb-6"
                />
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Stay updated with the latest tutorials, event recaps, and insights from the Node.js ecosystem.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Featured Post</h2>
                <div className="w-20 h-1 bg-green-500"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Link to={`/blog/${featuredPost.id}`} className="group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-slate-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-gray-400">{featuredPost.author}</span>
                        <span className="text-gray-500 mx-2">•</span>
                        <span className="text-gray-400">{featuredPost.readTime}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category === 'all' ? 'All Posts' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 100}>
                  <Link to={`/blog/${post.id}`} className="group">
                    <article className="bg-slate-800 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
                      <div className="relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <span className="text-gray-400 text-sm">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <User className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-gray-400 text-sm">{post.author}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag, tagIndex) => (
                              <span key={tagIndex} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-12 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter and never miss the latest articles, tutorials, and community updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
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

export default Blog;
