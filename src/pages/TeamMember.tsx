
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';
import AnimatedText from '../components/ui/AnimatedText';
import { ArrowLeft, Github, Linkedin, Twitter, Mail, MapPin, Calendar, Award } from 'lucide-react';

const TeamMember = () => {
  const { slug } = useParams();
  
  // Mock data - in a real app, this would come from an API or database
  const teamMembers = {
    'rajesh-patel': {
      name: "Rajesh Patel",
      role: "Community Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      bio: "Full-stack developer with 8+ years of experience in Node.js ecosystem. Passionate about building communities and helping developers grow their careers.",
      location: "Ahmedabad, Gujarat",
      joinedDate: "January 2020",
      expertise: ["Node.js", "React", "MongoDB", "AWS", "Community Building"],
      contributions: [
        "Founded Node Ahmedabad community",
        "Organized 50+ meetups and workshops",
        "Mentored 100+ junior developers",
        "Speaker at 20+ tech conferences"
      ],
      social: {
        github: "https://github.com/rajeshpatel",
        linkedin: "https://linkedin.com/in/rajeshpatel",
        twitter: "https://twitter.com/rajeshpatel",
        email: "rajesh@nodeahmedabad.com"
      },
      quote: "Building communities is not just about bringing people together; it's about creating an environment where everyone can learn, grow, and succeed together."
    },
    'priya-shah': {
      name: "Priya Shah",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1494790108755-2616b30c3651?w=400",
      bio: "Passionate about building tech communities and organizing impactful events. With a background in project management, she ensures every event runs smoothly.",
      location: "Ahmedabad, Gujarat",
      joinedDate: "March 2021",
      expertise: ["Event Management", "Community Engagement", "Project Management", "Marketing", "Partnerships"],
      contributions: [
        "Coordinated 30+ successful events",
        "Built partnerships with 15+ tech companies",
        "Managed volunteer teams of 20+ members",
        "Increased event attendance by 300%"
      ],
      social: {
        github: "https://github.com/priyashah",
        linkedin: "https://linkedin.com/in/priyashah",
        twitter: "https://twitter.com/priyashah",
        email: "priya@nodeahmedabad.com"
      },
      quote: "Every great event starts with understanding what the community needs and creating experiences that bring out the best in everyone."
    },
    'amit-kumar': {
      name: "Amit Kumar",
      role: "Technical Mentor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Senior Node.js developer and open-source contributor. Dedicated to sharing knowledge and helping the next generation of developers master modern JavaScript.",
      location: "Ahmedabad, Gujarat",
      joinedDate: "June 2021",
      expertise: ["Node.js", "JavaScript", "TypeScript", "GraphQL", "Docker", "Microservices"],
      contributions: [
        "Conducted 25+ technical workshops",
        "Contributed to 10+ open-source projects",
        "Mentored 50+ developers",
        "Created educational content for 1000+ developers"
      ],
      social: {
        github: "https://github.com/amitkumar",
        linkedin: "https://linkedin.com/in/amitkumar",
        twitter: "https://twitter.com/amitkumar",
        email: "amit@nodeahmedabad.com"
      },
      quote: "The best way to master technology is to share what you know and learn from others. Every question is an opportunity to grow."
    }
  };

  const member = teamMembers[slug as keyof typeof teamMembers];

  if (!member) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Team Member Not Found</h1>
          <Link to="/about" className="text-green-400 hover:text-green-300">
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
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <Link 
                to="/about"
                className="inline-flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Team
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="flex-shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-48 h-48 rounded-2xl object-cover border-4 border-green-400/20"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <AnimatedText 
                      text={member.name}
                      className="text-4xl md:text-5xl font-bold text-white mb-4"
                    />
                    <p className="text-2xl text-green-400 mb-6">{member.role}</p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-300">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {member.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
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
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="bg-slate-800 p-8 rounded-2xl border border-gray-700 mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6">About {member.name.split(' ')[0]}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">{member.bio}</p>
                  
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                    <blockquote className="text-gray-300 italic text-lg leading-relaxed">
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
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Expertise */}
                <ScrollReveal>
                  <div className="bg-slate-800 p-8 rounded-2xl border border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Award className="w-6 h-6 text-green-400 mr-3" />
                      Expertise
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {member.expertise.map((skill, index) => (
                        <span 
                          key={skill}
                          className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-4 py-2 rounded-lg text-green-300 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Contributions */}
                <ScrollReveal delay={200}>
                  <div className="bg-slate-800 p-8 rounded-2xl border border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-6">Key Contributions</h3>
                    <ul className="space-y-4">
                      {member.contributions.map((contribution, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-8">Connect with {member.name.split(' ')[0]}</h3>
                  <div className="flex justify-center gap-6">
                    {member.social.github && (
                      <a 
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-slate-800 border border-gray-700 rounded-xl flex items-center justify-center hover:border-green-500 hover:bg-green-500/10 transition-all duration-300"
                      >
                        <Github className="w-5 h-5 text-gray-300" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-slate-800 border border-gray-700 rounded-xl flex items-center justify-center hover:border-green-500 hover:bg-green-500/10 transition-all duration-300"
                      >
                        <Linkedin className="w-5 h-5 text-gray-300" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-slate-800 border border-gray-700 rounded-xl flex items-center justify-center hover:border-green-500 hover:bg-green-500/10 transition-all duration-300"
                      >
                        <Twitter className="w-5 h-5 text-gray-300" />
                      </a>
                    )}
                    {member.social.email && (
                      <a 
                        href={`mailto:${member.social.email}`}
                        className="w-12 h-12 bg-slate-800 border border-gray-700 rounded-xl flex items-center justify-center hover:border-green-500 hover:bg-green-500/10 transition-all duration-300"
                      >
                        <Mail className="w-5 h-5 text-gray-300" />
                      </a>
                    )}
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
