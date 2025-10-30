import { ArrowLeft, Award, Calendar, Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import AnimatedText from '@/components/AnimatedText';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import ScrollReveal from '@/components/ScrollReveal';

import type { Component } from '@/types';

const TeamMember: Component = () => {
  const { slug } = useParams();

  // Mock data - in a real app, this would come from an API or database
  const teamMembers = {
    'rajesh-patel': {
      name: 'Rajesh Patel',
      role: 'Community Lead',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Full-stack developer with 8+ years of experience in Node.js ecosystem. Passionate about building communities and helping developers grow their careers.',
      location: 'Ahmedabad, Gujarat',
      joinedDate: 'January 2020',
      expertise: ['Node.js', 'React', 'MongoDB', 'AWS', 'Community Building'],
      contributions: [
        'Founded Node Ahmedabad community',
        'Organized 50+ meetups and workshops',
        'Mentored 100+ junior developers',
        'Speaker at 20+ tech conferences',
      ],
      social: {
        github: 'https://github.com/rajeshpatel',
        linkedin: 'https://linkedin.com/in/rajeshpatel',
        twitter: 'https://twitter.com/rajeshpatel',
        email: 'rajesh@nodeahmedabad.com',
      },
      quote:
        "Building communities is not just about bringing people together; it's about creating an environment where everyone can learn, grow, and succeed together.",
    },
    'priya-shah': {
      name: 'Priya Shah',
      role: 'Event Coordinator',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b30c3651?w=400',
      bio: 'Passionate about building tech communities and organizing impactful events. With a background in project management, she ensures every event runs smoothly.',
      location: 'Ahmedabad, Gujarat',
      joinedDate: 'March 2021',
      expertise: [
        'Event Management',
        'Community Engagement',
        'Project Management',
        'Marketing',
        'Partnerships',
      ],
      contributions: [
        'Coordinated 30+ successful events',
        'Built partnerships with 15+ tech companies',
        'Managed volunteer teams of 20+ members',
        'Increased event attendance by 300%',
      ],
      social: {
        github: 'https://github.com/priyashah',
        linkedin: 'https://linkedin.com/in/priyashah',
        twitter: 'https://twitter.com/priyashah',
        email: 'priya@nodeahmedabad.com',
      },
      quote:
        'Every great event starts with understanding what the community needs and creating experiences that bring out the best in everyone.',
    },
    'amit-kumar': {
      name: 'Amit Kumar',
      role: 'Technical Mentor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      bio: 'Senior Node.js developer and open-source contributor. Dedicated to sharing knowledge and helping the next generation of developers master modern JavaScript.',
      location: 'Ahmedabad, Gujarat',
      joinedDate: 'June 2021',
      expertise: ['Node.js', 'JavaScript', 'TypeScript', 'GraphQL', 'Docker', 'Microservices'],
      contributions: [
        'Conducted 25+ technical workshops',
        'Contributed to 10+ open-source projects',
        'Mentored 50+ developers',
        'Created educational content for 1000+ developers',
      ],
      social: {
        github: 'https://github.com/amitkumar',
        linkedin: 'https://linkedin.com/in/amitkumar',
        twitter: 'https://twitter.com/amitkumar',
        email: 'amit@nodeahmedabad.com',
      },
      quote:
        'The best way to master technology is to share what you know and learn from others. Every question is an opportunity to grow.',
    },
  };

  const member = teamMembers[slug as keyof typeof teamMembers];

  if (!member) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-900">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Team Member Not Found</h1>
          <Link className="text-green-400 hover:text-green-300" href="/about">
            Back to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-20">
        {/* Back Button */}
        <section className="bg-slate-800/50 py-8">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <Link
                className="inline-flex items-center text-gray-300 transition-colors duration-300 hover:text-green-400"
                href="/about"
              >
                <ArrowLeft className="mr-2 size-5" />
                Back to Team
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <ScrollReveal>
                <div className="flex flex-col items-center gap-12 md:flex-row">
                  <div className="shrink-0">
                    <img
                      alt={member.name}
                      className="size-48 rounded-2xl border-4 border-green-400/20 object-cover"
                      src={member.image}
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <AnimatedText
                      className="mb-4 text-4xl font-bold text-white md:text-5xl"
                      text={member.name}
                    />
                    <p className="mb-6 text-2xl text-green-400">{member.role}</p>
                    <div className="flex flex-wrap justify-center gap-4 text-gray-300 md:justify-start">
                      <div className="flex items-center">
                        <MapPin className="mr-2 size-4" />
                        {member.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-2 size-4" />
                        Joined {member.joinedDate}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Bio & Quote */}
        <section className="bg-slate-800/30 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <ScrollReveal>
                <div className="mb-12 rounded-2xl border border-gray-700 bg-slate-800 p-8">
                  <h3 className="mb-6 text-2xl font-bold text-white">
                    About {member.name.split(' ')[0]}
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-gray-300">{member.bio}</p>

                  <div className="rounded-xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6">
                    <blockquote className="text-lg italic leading-relaxed text-gray-300">
                      "{member.quote}"
                    </blockquote>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Expertise & Contributions */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Expertise */}
                <ScrollReveal>
                  <div className="rounded-2xl border border-gray-700 bg-slate-800 p-8">
                    <h3 className="mb-6 flex items-center text-2xl font-bold text-white">
                      <Award className="mr-3 size-6 text-green-400" />
                      Expertise
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-green-500/30 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 text-sm text-green-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Contributions */}
                <ScrollReveal delay={200}>
                  <div className="rounded-2xl border border-gray-700 bg-slate-800 p-8">
                    <h3 className="mb-6 text-2xl font-bold text-white">Key Contributions</h3>
                    <ul className="space-y-4">
                      {member.contributions.map((contribution, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-3 mt-2 size-2 shrink-0 rounded-full bg-green-400" />
                          <span className="text-gray-300">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="bg-slate-800/30 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <ScrollReveal>
                <div className="text-center">
                  <h3 className="mb-8 text-3xl font-bold text-white">
                    Connect with {member.name.split(' ')[0]}
                  </h3>
                  <div className="flex justify-center gap-6">
                    {member.social.github ? (
                      <a
                        className="flex size-12 items-center justify-center rounded-xl border border-gray-700 bg-slate-800 transition-all duration-300 hover:border-green-500 hover:bg-green-500/10"
                        href={member.social.github}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Github className="size-5 text-gray-300" />
                      </a>
                    ) : null}
                    {member.social.linkedin ? (
                      <a
                        className="flex size-12 items-center justify-center rounded-xl border border-gray-700 bg-slate-800 transition-all duration-300 hover:border-green-500 hover:bg-green-500/10"
                        href={member.social.linkedin}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Linkedin className="size-5 text-gray-300" />
                      </a>
                    ) : null}
                    {member.social.twitter ? (
                      <a
                        className="flex size-12 items-center justify-center rounded-xl border border-gray-700 bg-slate-800 transition-all duration-300 hover:border-green-500 hover:bg-green-500/10"
                        href={member.social.twitter}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Twitter className="size-5 text-gray-300" />
                      </a>
                    ) : null}
                    {member.social.email ? (
                      <a
                        className="flex size-12 items-center justify-center rounded-xl border border-gray-700 bg-slate-800 transition-all duration-300 hover:border-green-500 hover:bg-green-500/10"
                        href={`mailto:${member.social.email}`}
                      >
                        <Mail className="size-5 text-gray-300" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamMember;
