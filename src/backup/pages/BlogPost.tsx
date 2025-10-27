import React from 'react';

import { ArrowLeft, Calendar, Clock, Heart, MessageCircle, Share2, Tag } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import ScrollReveal from '../components/ui/ScrollReveal';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in real app, this would come from API/database
  const blogPost = {
    id: 1,
    title: 'Advanced Node.js Performance Optimization Techniques',
    slug: 'advanced-nodejs-performance-optimization',
    excerpt:
      'Learn how to optimize your Node.js applications for maximum performance and scalability.',
    content: `
      <p>Node.js has revolutionized server-side development, but as your applications grow, performance optimization becomes crucial. In this comprehensive guide, we'll explore advanced techniques to make your Node.js applications lightning-fast.</p>
      
      <h2>Understanding the Event Loop</h2>
      <p>The event loop is the heart of Node.js's non-blocking I/O model. Understanding how it works is essential for writing performant applications.</p>
      
      <h3>Key Concepts:</h3>
      <ul>
        <li>Call Stack</li>
        <li>Event Queue</li>
        <li>Microtask Queue</li>
        <li>Timer Queue</li>
      </ul>
      
      <h2>Memory Management</h2>
      <p>Memory leaks can severely impact your application's performance. Here are some strategies to manage memory effectively:</p>
      
      <pre><code>// Use streaming for large data processing
const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('large-file.txt');
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  // Process line by line instead of loading entire file
  console.log(line);
});
      </code></pre>
      
      <h2>Database Optimization</h2>
      <p>Database queries are often the bottleneck in web applications. Consider these optimization strategies:</p>
      
      <ol>
        <li>Use connection pooling</li>
        <li>Implement proper indexing</li>
        <li>Use query optimization</li>
        <li>Consider caching strategies</li>
      </ol>
      
      <h2>Caching Strategies</h2>
      <p>Implement different levels of caching to reduce server load and improve response times.</p>
      
      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process. Regular monitoring and profiling will help you identify bottlenecks and maintain optimal performance as your application scales.</p>
    `,
    author: {
      name: 'Priya Sharma',
      role: 'Senior Node.js Developer',
      avatar: '/api/placeholder/64/64',
      bio: 'Full-stack developer with 8+ years of experience in Node.js and scalable web applications.',
    },
    publishedAt: '2024-12-08',
    readTime: '8 min read',
    tags: ['Node.js', 'Performance', 'Optimization', 'Backend'],
    likes: 42,
    comments: 12,
    views: 1250,
    featured: true,
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Building RESTful APIs with Express.js',
      slug: 'building-restful-apis-express',
      excerpt: 'Complete guide to creating robust APIs with Express.js framework.',
      publishedAt: '2024-12-05',
      readTime: '6 min read',
      author: 'Rahul Patel',
    },
    {
      id: 3,
      title: 'Understanding Async/Await in JavaScript',
      slug: 'understanding-async-await-javascript',
      excerpt: 'Master asynchronous programming with async/await patterns.',
      publishedAt: '2024-12-03',
      readTime: '5 min read',
      author: 'Amit Kumar',
    },
    {
      id: 4,
      title: 'Docker for Node.js Applications',
      slug: 'docker-nodejs-applications',
      excerpt: 'Containerize your Node.js apps for better deployment and scaling.',
      publishedAt: '2024-12-01',
      readTime: '7 min read',
      author: 'Sneha Gupta',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Back Navigation */}
      <section className="pt-24 pb-8 bg-slate-900">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <Link
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 group"
              to="/blog"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-8">
                {blogPost.featured ? (
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                    Featured Article
                  </span>
                ) : null}

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {blogPost.title}
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">{blogPost.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {blogPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-800 border border-gray-700 rounded-full text-gray-300 text-sm hover:border-green-500/50 transition-colors duration-300"
                    >
                      <Tag className="w-3 h-3 inline mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author & Meta Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
                  <div className="flex items-center">
                    <img
                      alt={blogPost.author.name}
                      className="w-12 h-12 rounded-full mr-3 border-2 border-gray-700"
                      src={blogPost.author.avatar}
                    />
                    <div className="text-left">
                      <div className="text-white font-medium">{blogPost.author.name}</div>
                      <div className="text-sm text-gray-400">{blogPost.author.role}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-green-400" />
                      {new Date(blogPost.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-green-400" />
                      {blogPost.readTime}
                    </div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1 text-red-400" />
                    {blogPost.likes} likes
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1 text-blue-400" />
                    {blogPost.comments} comments
                  </div>
                  <div>{blogPost.views} views</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                style={
                  {
                    '--tw-prose-body': 'rgb(203 213 225)',
                    '--tw-prose-headings': 'rgb(255 255 255)',
                    '--tw-prose-links': 'rgb(34 197 94)',
                    '--tw-prose-code': 'rgb(34 197 94)',
                    '--tw-prose-pre-bg': 'rgb(15 23 42)',
                    '--tw-prose-pre-code': 'rgb(203 213 225)',
                  } as React.CSSProperties
                }
              />
            </ScrollReveal>

            {/* Share Section */}
            <ScrollReveal delay={200}>
              <div className="mt-12 pt-8 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-300 font-medium">Share this article:</span>
                    <button className="p-2 bg-slate-700 hover:bg-green-500/20 border border-gray-600 hover:border-green-500/50 rounded-lg transition-all duration-300">
                      <Share2 className="w-4 h-4 text-gray-300" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-red-500/20 border border-gray-600 hover:border-red-500/50 rounded-lg transition-all duration-300 text-gray-300 hover:text-red-400">
                      <Heart className="w-4 h-4" />
                      Like ({blogPost.likes})
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-slate-800/50 border border-gray-700 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    alt={blogPost.author.name}
                    className="w-24 h-24 rounded-full border-4 border-green-500/20"
                    src={blogPost.author.avatar}
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">{blogPost.author.name}</h3>
                    <p className="text-green-400 font-medium mb-3">{blogPost.author.role}</p>
                    <p className="text-gray-300 leading-relaxed">{blogPost.author.bio}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white text-center mb-12">Related Articles</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={100 * index}>
                  <Link
                    className="block bg-slate-900/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:transform hover:translate-y-[-2px] group"
                    to={`/blog/${post.slug}`}
                  >
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>by {post.author}</span>
                      <div className="flex items-center gap-3">
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
