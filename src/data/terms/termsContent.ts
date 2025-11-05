import { AlertCircle } from 'lucide-react';

import { socialMedias } from '@/data/information';

const termsContent = [
  {
    title: 'Important Notice',
    content:
      'These Terms of Use ("Terms") govern your use of the Node Ahmedabad website and participation in our community events and activities. Please read these terms carefully before attending our events.',
    className: 'border-blue-500/20 bg-blue-500/10',
    icon: AlertCircle,
    iconClassName: 'text-blue-400',
  },
  {
    title: '1. Acceptance of Terms',
    content:
      'By accessing and using the Node Ahmedabad website and participating in our community activities, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not attend our events.',
  },
  {
    title: '2. Community Participation',
    content:
      'Participation in Node Ahmedabad events and activities is subject to our Code of Conduct. Members are expected to behave respectfully and professionally. We reserve the right to remove any participant who violates our community standards.',
  },
  {
    title: '3. Event Registration and Attendance',
    content:
      'Event registration is typically required and may be subject to availability. Registration confirmations will be sent via email. Attendees are responsible for their own transportation, accommodation, and any personal expenses unless explicitly stated otherwise.',
  },
  {
    title: '4. Intellectual Property',
    content:
      'All content provided at Node Ahmedabad events, including presentations, materials, and recordings, remain the intellectual property of their respective creators. Redistribution or commercial use of such content requires explicit permission from the content creators.',
  },
  {
    title: '5. Photography and Recording',
    content:
      'By attending our events, you consent to being photographed or recorded for promotional purposes. These materials may be used on our website, social media, and marketing materials. If you prefer not to be included, please inform our team.',
  },
  {
    title: '6. Limitation of Liability',
    content:
      'Node Ahmedabad and its organizers are not liable for any damages, losses, or injuries that may occur during participation in our events or activities. Participants attend events at their own risk and are responsible for their personal safety.',
  },
  {
    title: '7. Privacy and Data Protection',
    content:
      'We collect and process personal information in accordance with our Privacy Policy. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.',
  },
  {
    title: '8. Cancellations and Refunds',
    content:
      'Event cancellations will be communicated as soon as possible via email and social media. For paid events, refund policies will be clearly stated during registration. Force majeure events may result in cancellations without refunds.',
  },
  {
    title: '9. Modifications to Terms',
    content:
      'We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the modified terms.',
  },
  {
    title: '10. Contact Information',
    content: `For questions about these Terms of Service, please contact us at ${socialMedias.EMAIL.url.replace('mailto:', '')} or through our contact form on the website.`,
  },
  {
    title: '11. Governing Law',
    content:
      'These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your use of our services will be subject to the jurisdiction of the courts in Ahmedabad, Gujarat, India.',
  },
  {
    title: '12. Severability',
    content:
      'If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect.',
  },
  {
    title: '13. Entire Agreement',
    content:
      'These Terms, along with our Privacy Policy and Code of Conduct, constitute the entire agreement between you and Node Ahmedabad regarding participation in our community.',
  },
];

export default termsContent;
