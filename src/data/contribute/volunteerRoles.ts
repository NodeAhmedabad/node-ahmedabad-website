import {
  CameraIcon,
  ComponentIcon,
  HandshakeIcon,
  IdCardIcon,
  Mic2Icon,
  RssIcon,
  VideoIcon,
} from 'lucide-react';

const volunteerRoles = {
  title: 'Volunteer Roles',
  description: 'Current opportunities to contribute to our community',
  roles: [
    {
      icon: ComponentIcon,
      label: 'Graphic Designer',
      commitments: ['10-12 hours per week'],
      skills: ['Graphic design', 'Branding', 'Creativity', 'Attention to detail'],
      content:
        'Design visually appealing graphics, banners, and promotional materials for our social media and event campaigns. Maintain brand consistency across all visual assets.',
    },
    {
      icon: HandshakeIcon,
      label: 'Speaker Buddy',
      commitments: ['1 day before for coordination', 'Full day during events'],
      skills: ['Communication', 'Organization', 'Time management', 'Team collaboration'],
      content:
        'Assist speakers before and during events by coordinating logistics, ensuring they have the resources they need, and helping sessions run smoothly and on time.',
    },
    {
      icon: RssIcon,
      label: 'Social Media Content Manager',
      commitments: ['1-2 hours per day', '10-12 hours per week', 'Full day during events'],
      skills: ['Content strategy', 'Social media management', 'Graphic design', 'Copywriting'],
      content:
        'Plan, create, and schedule engaging posts across our community platforms. Work closely with the team to maintain a consistent brand tone and highlight upcoming events and initiatives.',
    },
    {
      icon: CameraIcon,
      label: 'Event Photographer',
      commitments: ['Full day during events'],
      skills: ['Photography', 'Basic photo editing', 'Equipment handling'],
      content:
        'Capture memorable moments throughout our events and deliver high-quality photos for promotional and social media use.',
    },
    {
      icon: VideoIcon,
      label: 'Reel Recorder & Editor',
      commitments: ['Full day during events'],
      skills: ['Videography', 'Video editing', 'Creativity', 'Storytelling'],
      content:
        'Record event highlights, behind-the-scenes clips, and community interactions. Edit and produce short, engaging reels to showcase our activities and culture online.',
    },
    {
      icon: Mic2Icon,
      label: 'Event Anchor / Host',
      commitments: ['1 day before for rehearsal', 'Full day during events'],
      skills: ['Public speaking', 'Confidence', 'Communication', 'Event coordination'],
      content:
        'Host and guide our community events with energy and professionalism. Engage with attendees, introduce speakers, and help create an enjoyable and inclusive experience for everyone.',
    },
    {
      icon: IdCardIcon,
      label: 'Registration Desk Volunteer',
      commitments: ['Full day during events'],
      skills: ['Communication', 'Organization', 'People skills', 'Attention to detail'],
      content:
        'Welcome attendees, manage on-site registrations, distribute event materials, and provide guidance or assistance to participants as they arrive.',
    },
  ],
};

export default volunteerRoles;
