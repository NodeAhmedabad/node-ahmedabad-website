import { AlertTriangle, Shield } from 'lucide-react';

import { socialMedias } from '@/data/information';

const privacyPolicyContent = [
  {
    title: 'Our Commitment to Privacy',
    content:
      'Node Ahmedabad is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, attend our events, or interact with our community.',
    className: 'border-blue-500/20 bg-blue-500/10',
    icon: Shield,
    iconClassName: 'text-blue-400',
  },
  {
    title: 'Information We Collect',
    content: `We collect information you provide directly to us, such as when you:

      • Register for events or create an account
      • Subscribe to our newsletter
      • Contact us through our website or email
      • Participate in surveys or feedback forms
      • Join our Discord server or social media channels
      
      We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about your usage of our website.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information we collect to:

      • Send you event notifications and community updates
      • Respond to your inquiries and provide customer support
      • Analyze usage patterns to improve our website and events
      • Ensure the security
      • Comply with legal obligations
      
      We do not sell, rent, or lease your personal information to third parties.`,
  },
  {
    title: 'Information Sharing and Disclosure',
    content: `We may share your information in the following circumstances:

      • With your consent
      • To comply with legal obligations or protect our rights
      • With service providers who assist us in operating our website and events
      • In connection with a business transfer or merger
      
      We require all third parties to respect the security of your personal data and treat it in accordance with the law.`,
  },
  {
    title: 'Data Retention',
    content: `We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Specifically:

      • Event registration data: Retained for a reasonable period after each event to manage follow-ups and future engagement.
      • Newsletter subscriptions: Until you unsubscribe
      • Website usage data: Retained for analytical purposes for a limited duration to improve site performance and user experience.
      • Contact form submissions: Retained for a reasonable period to ensure proper communication and support follow-up.
      
      You can request deletion of your data at any time by contacting us.`,
  },
  {
    title: 'Your Rights',
    content: `Under applicable privacy laws, you have the right to:

      • Access your personal data
      • Correct inaccurate personal data
      • Request deletion of your personal data
      • Object to processing of your personal data
      • Request restriction of processing
      • Data portability
      • Withdraw consent where processing is based on consent
      
      To exercise these rights, please contact us using the information provided below.`,
  },
  {
    title: 'Security Measures',
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

      • Encryption of data in transit and at rest
      • Regular security assessments and updates
      • Access controls and authentication
      • Staff training on data protection
      
      However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: 'Cookies and Tracking',
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies help us:

      • Remember your preferences
      • Analyze website traffic and usage
      • Provide social media features
      • Deliver relevant content and advertisements
      
      You can control cookies through your browser settings, but disabling cookies may affect website functionality.`,
  },
  {
    title: 'Third-Party Services',
    content: `Our website may contain links to third-party websites and services, including:

      • Social media platforms
      • Event registration platforms
      • Analytics services
      • Payment processors
      
      This privacy policy does not apply to third-party services. We encourage you to read their privacy policies before providing any information.`,
  },
  {
    title: 'Data Protection Officer',
    content: `If you have any questions about this Privacy Policy, your personal data, or would like to exercise your privacy rights, please contact our Data Protection Officer:
    
      • Email: ${socialMedias.EMAIL.url.replace('mailto:', '')}
      • Response time: Within 30 days
    `,
  },
  {
    title: 'Changes to This Privacy Policy',
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the Last updated' date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.",
    className: 'border-red-500/20 bg-red-500/10',
    icon: AlertTriangle,
    iconClassName: 'text-red-400',
  },
];

export default privacyPolicyContent;
