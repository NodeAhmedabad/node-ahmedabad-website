
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import AnimatedText from '../components/ui/AnimatedText';
import { Users, Target, History, Award, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: "Rajesh Patel",
      role: "Community Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      bio: "Passionate about building tech communities and organizing impactful events",
      slug: "rajesh-patel",
      category: "Core"
    },
    {
      name: "Rajesh Patel",
      role: "Community Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      bio: "Passionate about building tech communities and organizing impactful events",
      slug: "rajesh-patel",
      category: "Core"
    },
    {
      name: "Priya Shah",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      bio: "Passionate about building tech communities and organizing impactful events.",
      slug: "priya-shah",
      category: "Core"
    },
    {
      name: "Priya Shah",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      bio: "Passionate about building tech communities and organizing impactful events.",
      slug: "priya-shah",
      category: "Core"
    },
    {
      name: "Priya Shah",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      bio: "Passionate about building tech communities and organizing impactful events.",
      slug: "priya-shah",
      category: "Core"
    },
    {
      name: "Amit Kumar",
      role: "Technical Mentor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Passionate about building tech communities and organizing impactful events.",
      slug: "amit-kumar",
      category: "Mentor"
    },
    {
      name: "Amit Kumar",
      role: "Technical Mentor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Passionate about building tech communities and organizing impactful events.",
      slug: "amit-kumar",
      category: "Mentor"
    },
    {
      name: "Amit Kumar",
      role: "Technical Mentor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Passionate about building tech communities and organizing impactful events.",
      slug: "amit-kumar",
      category: "Mentor"
    },
    {
      name: "Amit Kumar",
      role: "Technical Mentor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Passionate about building tech communities and organizing impactful events.",
      slug: "amit-kumar",
      category: "Mentor"
    },
    {
      name: "Amit Kumar",
      role: "Technical Mentor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Passionate about building tech communities and organizing impactful events.",
      slug: "amit-kumar",
      category: "Mentor"
    },
    {
      name: "John Volunteer",
      role: "Volunteer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Helps organize and run community events.",
      slug: "john-volunteer",
      category: "Volunteer"
    },
    {
      name: "John Volunteer",
      role: "Volunteer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Helps organize and run community events.",
      slug: "john-volunteer",
      category: "Volunteer"
    },
    {
      name: "John Volunteer",
      role: "Volunteer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Helps organize and run community events.",
      slug: "john-volunteer",
      category: "Volunteer"
    },
    {
      name: "John Volunteer",
      role: "Volunteer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Helps organize and run community events.",
      slug: "john-volunteer",
      category: "Volunteer"
    },
    {
      name: "John Volunteer",
      role: "Volunteer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Helps organize and run community events.",
      slug: "john-volunteer",
      category: "Volunteer"
    }
  ];

  const timeline = [
    { 
      year: "2020", 
      event: "Community Founded", 
      description: "Started with 25 passionate developers in Ahmedabad",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    { 
      year: "2021", 
      event: "First Meetup", 
      description: "Hosted our inaugural Node.js workshop with 50+ attendees",
      icon: Target,
      color: "from-green-500 to-green-600"
    },
    { 
      year: "2022", 
      event: "100+ Members", 
      description: "Reached our first major milestone with active community participation",
      icon: Award,
      color: "from-purple-500 to-purple-600"
    },
    { 
      year: "2023", 
      event: "Tech Conference", 
      description: "Organized the first Node Ahmedabad Conference with 300+ developers",
      icon: History,
      color: "from-orange-500 to-orange-600"
    },
    { 
      year: "2024", 
      event: "2000+ Members", 
      description: "Became the largest Node.js community in Gujarat with monthly events",
      icon: Heart,
      color: "from-red-500 to-red-600"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Inclusion",
      description: "We welcome developers of all skill levels and backgrounds"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in learning together and supporting each other"
    },
    {
      icon: Target,
      title: "Growth",
      description: "We focus on continuous learning and skill development"
    },
    {
      icon: Shield,
      title: "Respect",
      description: "We maintain a safe and respectful environment for all"
    }
  ];

  const [activeTab, setActiveTab] = useState('Core');
  const tabOptions = [
    { label: 'Core Members', value: 'Core' },
    { label: 'Mentors', value: 'Mentor' },
    { label: 'Volunteers', value: 'Volunteer' },
  ];
  const filteredMembers = teamMembers.filter(member => member.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12 lg:mb-16">
                <AnimatedText 
                  text="About Node Ahmedabad"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
                />
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                  Empowering developers in Ahmedabad through knowledge sharing, networking, and collaborative learning in the Node.js ecosystem.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16 lg:py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <ScrollReveal>
                <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl border border-gray-700">
                  <Target className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mb-4 sm:mb-6" aria-hidden="true" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Our Mission</h2>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    To create a thriving community of Node.js developers in Ahmedabad by providing high-quality learning opportunities, fostering collaboration, and supporting career growth in the JavaScript ecosystem.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="bg-slate-800 p-6 sm:p-8 rounded-2xl border border-gray-700">
                  <Award className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mb-4 sm:mb-6" aria-hidden="true" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Our Vision</h2>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    To establish Ahmedabad as a leading hub for Node.js innovation in India, where developers of all levels can learn, grow, and contribute to the global JavaScript community.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Our Story</h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    Node Ahmedabad was born out of a simple observation: Ahmedabad had incredible JavaScript talent, but lacked a dedicated community for Node.js developers to connect, learn, and grow together.
                  </p>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    What started as informal meetups among friends has evolved into Gujarat's largest Node.js community, hosting regular workshops, conferences, and networking events that have helped hundreds of developers advance their careers.
                  </p>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Today, we're proud to be a platform where beginners find mentorship, experienced developers share knowledge, and innovative ideas come to life through collaboration.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12 sm:py-16 lg:py-20 bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Our Core Values</h2>
                <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                  These values guide everything we do and shape the culture of our community.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 100}>
                  <div className="bg-slate-800 p-6 rounded-xl border border-gray-700 text-center hover:bg-slate-700 transition-colors duration-300 focus-within:ring-2 focus-within:ring-green-400">
                    <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mx-auto mb-4" aria-hidden="true" />
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Timeline */}
        <section className="py-12 sm:py-16 lg:py-20" role="region" aria-labelledby="timeline-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12 lg:mb-16">
                <h2 id="timeline-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Growth Timeline</h2>
                <p className="text-gray-300 text-base sm:text-lg">Key milestones in our community's journey</p>
              </div>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line - positioned to go through center of icons */}
                <div className="absolute left-8 sm:left-12 lg:left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-emerald-500" aria-hidden="true"></div>
                
                {timeline.map((item, index) => (
                  <ScrollReveal key={item.year} delay={index * 150}>
                    <div className="relative flex items-center mb-12 sm:mb-16 lg:mb-20 last:mb-0">
                      {/* Timeline icon - centered on the line */}
                      <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center absolute left-8 sm:left-12 lg:left-16 -translate-x-1/2 z-10 shadow-lg border-4 border-slate-900`}>
                        <item.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" aria-hidden="true" />
                      </div>
                      {/* Content */}
                      <div className="flex-1 min-w-0 pl-24 sm:pl-28 lg:pl-32">
                        <div className="bg-slate-800 p-6 mb-7 sm:p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-colors duration-300 shadow-lg">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">{item.event}</h3>
                            <span className="text-green-400 font-semibold text-lg sm:text-xl mt-1 sm:mt-0">{item.year}</span>
                          </div>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 sm:py-16 lg:py-20 bg-slate-800/30" role="region" aria-labelledby="team-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12 lg:mb-16">
                <h2 id="team-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Meet Our Team</h2>
                <p className="text-gray-300 text-base sm:text-lg">The passionate individuals who make our community thrive</p>
              </div>
            </ScrollReveal>
            <h3 className="text-3xl font-bold text-white mb-4">Team</h3>
            <div className="flex justify-center mb-8 gap-4">
              {tabOptions.map(tab => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 border border-green-500/30 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${activeTab === tab.value ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'text-green-400 bg-slate-800 hover:bg-slate-700'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {filteredMembers.map((member, index) => (
                <ScrollReveal key={member.name + index} delay={index * 100}>
                  <Link 
                    to={`/team/${member.slug}`}
                    className="group bg-slate-800 p-6 rounded-xl border border-gray-700 text-center hover:bg-slate-700 hover:border-green-500/50 transition-all duration-300 block focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900 w-96"
                    aria-label={`View ${member.name}'s profile`}
                  >
                    <img 
                      src={member.image} 
                      alt={`${member.name}, ${member.role}`}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">{member.name}</h3>
                    <p className="text-green-400 mb-3 text-sm sm:text-base">{member.role}</p>
                    <p className="text-gray-300 text-xs sm:text-sm break-words max-w-full">{member.bio}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
