
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import AnimatedText from '../components/ui/AnimatedText';
import { Mic, Code, PenTool, Users, Heart, Star, Send, CheckCircle } from 'lucide-react';

const GetInvolved = () => {
  const [speakerForm, setSpeakerForm] = useState({
    name: '',
    email: '',
    topic: '',
    experience: '',
    bio: ''
  });

  const ways = [
    {
      icon: Mic,
      title: "Become a Speaker",
      description: "Share your knowledge and expertise with the community through talks and workshops.",
      benefits: ["Build your personal brand", "Network with peers", "Give back to community", "Gain speaking experience"],
      action: "Apply to Speak"
    },
    {
      icon: PenTool,
      title: "Write Content",
      description: "Contribute articles, tutorials, and guides to our community blog and documentation.",
      benefits: ["Improve writing skills", "Share knowledge", "Build portfolio", "Help others learn"],
      action: "Start Writing"
    },
    {
      icon: Code,
      title: "Contribute Code",
      description: "Help build and maintain our open-source projects and community tools.",
      benefits: ["Enhance coding skills", "Work on real projects", "Collaborate with experts", "Open source contributions"],
      action: "View Projects"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Help organize events, moderate discussions, and support community operations.",
      benefits: ["Develop leadership skills", "Make connections", "Event planning experience", "Community impact"],
      action: "Join Team"
    }
  ];

  const openRoles = [
    {
      title: "Event Photography Volunteer",
      commitment: "2-3 events per month",
      skills: ["Photography", "Basic editing", "Equipment handling"],
      description: "Capture moments from our events and create visual content for social media."
    },
    {
      title: "Social Media Manager",
      commitment: "5-7 hours per week",
      skills: ["Content creation", "Social media", "Design basics"],
      description: "Manage our social media presence and create engaging content for the community."
    },
    {
      title: "Workshop Assistant",
      commitment: "1-2 workshops per month",
      skills: ["Technical knowledge", "Patience", "Communication"],
      description: "Help instructors during workshops and provide technical support to attendees."
    },
    {
      title: "Community Moderator",
      commitment: "3-5 hours per week",
      skills: ["Communication", "Conflict resolution", "Community guidelines"],
      description: "Monitor our Discord and other platforms to maintain a positive community environment."
    }
  ];

  const handleSpeakerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Speaker application submitted:', speakerForm);
  };

  const handleSpeakerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSpeakerForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
                  text="Get Involved"
                  className="text-5xl md:text-6xl font-bold text-white mb-6"
                />
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Help us build an amazing community by contributing your skills, knowledge, and passion for Node.js and JavaScript.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Ways to Contribute */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Ways to Contribute</h2>
                <p className="text-gray-300 text-lg">Choose how you'd like to make an impact in our community</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ways.map((way, index) => (
                <ScrollReveal key={way.title} delay={index * 100}>
                  <div className="bg-slate-800 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
                    <way.icon className="w-12 h-12 text-green-400 mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">{way.title}</h3>
                    <p className="text-gray-300 mb-6">{way.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {way.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                      {way.action}
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Speaker Application Form */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-6">Speaker Application</h2>
                  <p className="text-gray-300 text-lg">Ready to share your knowledge? Apply to speak at our events!</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-slate-800 p-8 rounded-2xl border border-gray-700">
                  <form onSubmit={handleSpeakerSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={speakerForm.name}
                          onChange={handleSpeakerChange}
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
                          value={speakerForm.email}
                          onChange={handleSpeakerChange}
                          required
                          className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="topic" className="block text-white font-medium mb-2">
                        Proposed Topic *
                      </label>
                      <input
                        type="text"
                        id="topic"
                        name="topic"
                        value={speakerForm.topic}
                        onChange={handleSpeakerChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="What would you like to talk about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-white font-medium mb-2">
                        Speaking Experience
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={speakerForm.experience}
                        onChange={handleSpeakerChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                      >
                        <option value="">Select your experience level</option>
                        <option value="first-time">First time speaker</option>
                        <option value="some">Some speaking experience</option>
                        <option value="experienced">Experienced speaker</option>
                        <option value="professional">Professional speaker</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="bio" className="block text-white font-medium mb-2">
                        Brief Bio & Topic Description *
                      </label>
                      <textarea
                        id="bio"
                        name="bio"
                        value={speakerForm.bio}
                        onChange={handleSpeakerChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors resize-vertical"
                        placeholder="Tell us about yourself and provide a detailed description of your proposed topic..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Submit Application
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Open Volunteer Roles */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Open Volunteer Roles</h2>
                <p className="text-gray-300 text-lg">Current opportunities to contribute to our community</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openRoles.map((role, index) => (
                <ScrollReveal key={role.title} delay={index * 100}>
                  <div className="bg-slate-800 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-colors duration-300">
                    <h3 className="text-2xl font-bold text-white mb-4">{role.title}</h3>
                    <p className="text-gray-300 mb-6">{role.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <Star className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-white font-semibold">Time Commitment:</span>
                      </div>
                      <span className="text-gray-300">{role.commitment}</span>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <Heart className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-white font-semibold">Skills Needed:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                      Apply for Role
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* GitHub Contributions */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-gray-700">
                <div className="text-center">
                  <Code className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-white mb-6">Contribute to Open Source</h2>
                  <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
                    Help us build and maintain our community tools, website, and other open-source projects. Perfect for developers looking to contribute to meaningful projects.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-green-400 mb-2">5+</h3>
                      <p className="text-gray-300">Active Projects</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-green-400 mb-2">50+</h3>
                      <p className="text-gray-300">Contributors</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-green-400 mb-2">200+</h3>
                      <p className="text-gray-300">Commits</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://github.com/nodeahmedabad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                    >
                      View Projects
                    </a>
                    <a
                      href="https://github.com/nodeahmedabad/contributing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-green-500 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors"
                    >
                      Contribution Guide
                    </a>
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

export default GetInvolved;
