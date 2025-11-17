import { AlertTriangleIcon, ShieldIcon } from 'lucide-react';

import { socialMedias } from '@/data/information';

import type { BoxProps } from '@/components/ui/Box';

type PrivacyPolicyContent = Pick<BoxProps, 'label' | 'content' | 'icon' | 'variant'>;

const privacyPolicyContent = [
  {
    label: 'Our Commitment to Privacy',
    content:
      'Node Ahmedabad is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, attend our events, or interact with our community.',
    icon: ShieldIcon,
    variant: 'blue',
  },
  {
    label: 'Information We Collect',
    content: `We collect information you provide directly to us, such as when you:
      
      <ol>
        <li>Register for events or create an account</li>
        <li>Subscribe to our newsletter</li>
        <li>Contact us through our website or email</li>
        <li>Participate in surveys or feedback forms</li>
        <li>Join our Discord server or social media channels</li>
      </ol>
      We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about your usage of our website.`,
  },
  {
    label: 'How We Use Your Information',
    content: `We use the information we collect to:
      
      <ol>
        <li>Send you event notifications and community updates</li>
        <li>Respond to your inquiries and provide customer support</li>
        <li>Analyze usage patterns to improve our website and events</li>
        <li>Ensure the security</li>
        <li>Comply with legal obligations</li>
      </ol>
      We do not sell, rent, or lease your personal information to third parties.`,
  },
  {
    label: 'Information Sharing and Disclosure',
    content: `We may share your information in the following circumstances:
      
      <ol>
        <li>With your consent</li>
        <li>To comply with legal obligations or protect our rights</li>
        <li>With service providers who assist us in operating our website and events</li>
        <li>In connection with a business transfer or merger</li>
      </ol>
      We require all third parties to respect the security of your personal data and treat it in accordance with the law.`,
  },
  {
    label: 'Data Retention',
    content: `We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Specifically:
      
      <ol>
        <li>Event registration data: Retained for a reasonable period after each event to manage follow-ups and future engagement.</li>
        <li>Newsletter subscriptions: Until you unsubscribe</li>
        <li>Website usage data: Retained for analytical purposes for a limited duration to improve site performance and user experience.</li>
        <li>Contact form submissions: Retained for a reasonable period to ensure proper communication and support follow-up.</li>
      </ol>
      You can request deletion of your data at any time by contacting us.`,
  },
  {
    label: 'Your Rights',
    content: `Under applicable privacy laws, you have the right to:
      
      <ol>
        <li>Access your personal data</li>
        <li>Correct inaccurate personal data</li>
        <li>Request deletion of your personal data</li>
        <li>Object to processing of your personal data</li>
        <li>Request restriction of processing</li>
        <li>Data portability</li>
        <li>Withdraw consent where processing is based on consent</li>
      </ol>
      To exercise these rights, please contact us using the information provided below.`,
  },
  {
    label: 'Security Measures',
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
      
      <ol>
        <li>Encryption of data in transit and at rest</li>
        <li>Regular security assessments and updates</li>
        <li>Access controls and authentication</li>
        <li>Staff training on data protection</li>
      </ol>
      However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    label: 'Cookies and Tracking',
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies help us:
      
      <ol>
        <li>Remember your preferences</li>
        <li>Analyze website traffic and usage</li>
        <li>Provide social media features</li>
        <li>Deliver relevant content and advertisements</li>
      </ol>
      You can control cookies through your browser settings, but disabling cookies may affect website functionality.`,
  },
  {
    label: 'Third-Party Services',
    content: `Our website may contain links to third-party websites and services, including:
      
      <ol>
        <li>Social media platforms</li>
        <li>Event registration platforms</li>
        <li>Analytics services</li>
        <li>Payment processors</li>
      </ol>
      This privacy policy does not apply to third-party services. We encourage you to read their privacy policies before providing any information.`,
  },
  {
    label: 'Data Protection Officer',
    content: `If you have any questions about this Privacy Policy, your personal data, or would like to exercise your privacy rights, please contact our Data Protection Officer:
      
      <ol>
        <li>Email: ${socialMedias.EMAIL.url.replace('mailto:', '')}</li>
        <li>Response time: Within 30 days</li>
      </ol>
    `,
  },
  {
    label: 'Changes to This Privacy Policy',
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the Last updated' date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.",
    icon: AlertTriangleIcon,
    variant: 'red',
  },
] satisfies PrivacyPolicyContent[];

export default privacyPolicyContent;
