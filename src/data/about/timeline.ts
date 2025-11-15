import { CableIcon, HistoryIcon, UsersIcon } from 'lucide-react';

const growthTimeline = {
  title: 'Growth Timeline',
  description: "Key milestones in our community's journey",
  timeline: [
    {
      year: '2022',
      event: 'Community Founded',
      content: 'Launched with a core group of 5 passionate developers in Ahmedabad.',
      icon: HistoryIcon,
      color: 'from-green-500 to-green-600',
    },
    {
      year: '2023',
      event: 'The First Meetup',
      content:
        "Our debut community event with 180+ Attendees. A platform for Ahmedabad's Node.js enthusiasts to learn, network, and grow together.",
      icon: UsersIcon,
      color: 'from-green-500 to-green-600',
    },
    {
      year: '2024',
      event: 'Full Stack Innovations Workshop',
      content:
        'Launched our first-ever conference & workshop, uniting 300+ developers for 4-day of technical growth.',
      icon: CableIcon,
      color: 'from-green-500 to-green-600',
    },
  ],
};

export default growthTimeline;
