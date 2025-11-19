import { AlertCircleIcon } from 'lucide-react';

import { socialMedias } from '@/data/information';

import type { BoxProps } from '@/components/ui/Box';

type TermsAndConditionsContent = Pick<BoxProps, 'label' | 'content' | 'icon' | 'variant'>;

const termsAndConditionsContent = [
  {
    label: 'Important Notice',
    content:
      'These Terms and Conditions ("Terms") govern your use of the Node Ahmedabad website and participation in our community events and activities. Please read these Terms carefully before attending or engaging with our events or platforms.',
    icon: AlertCircleIcon,
    variant: 'blue',
  },
  {
    label: '1. Acceptance of Terms and Conditions',
    content:
      'By accessing and using the Node Ahmedabad website and participating in our community activities, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms, please refrain from attending our events or using our community.',
  },
  {
    label: '2. Community Participation',
    content:
      'Participation in Node Ahmedabad events and activities is subject to our <b>Code of Conduct</b>. Members are expected to behave respectfully and professionally at all times. We reserve the right to remove or restrict participation of any individual who violates our community standards.',
  },
  {
    label: '3. Event Registration and Attendance',
    content:
      'Event registration may be required and is subject to availability. Confirmation details will be sent via email. Attendees are responsible for their own transportation, accommodation, and any personal expenses unless explicitly stated otherwise.',
  },
  {
    label: '4. Intellectual Property',
    content:
      'All content provided at Node Ahmedabad events, including but not limited to presentations, materials, and recordings, remains the intellectual property of their respective creators. Redistribution or commercial use of such content without prior written permission is strictly prohibited.',
  },
  {
    label: '5. Photography and Recording',
    content:
      'By attending our events, you consent to being photographed or recorded for promotional and documentation purposes. These materials may be used on our website, social media channels, or marketing materials. If you prefer not to be included, please notify our team before or during the event.',
  },
  {
    label: '6. Limitation of Liability',
    content:
      'Node Ahmedabad and its organizers are not liable for any damages, losses, injuries, stampede or any accidental events that may occur during participation in our events or activities. Participants attend events at their own discretion and risk and are responsible for their personal safety and belongings.',
  },
  {
    label: '7. Privacy and Data Protection',
    content:
      'Node Ahmedabad Team collect and process personal information in accordance with our Privacy Policy. By using our website or being a part of our community or events, you consent to the collection and use of your information as outlined in our Privacy Policy.',
  },
  {
    label: '8. Cancellations and Refunds',
    content:
      'Event cancellations will be communicated as soon as possible via email and social media channels. For paid events, refund policies will be clearly stated during registration. Force majeure events may result in cancellations without refunds.',
  },
  {
    label: '9. Modifications to Terms and Conditions',
    content:
      'Node Ahmedabad Team reserve the right to modify these Terms and Conditions at any time. Updates will be posted on this page with a revised effective date. Continued participation in our activities or use of our website after such updates constitutes acceptance of the modified Terms.',
  },
  {
    label: '10. Contact Information',
    content: `For questions regarding these Terms and Conditions, please contact us at <b>${socialMedias.EMAIL.url.replace(
      'mailto:',
      '',
    )}</b> or through the contact form available on our website.`,
  },
  {
    label: '11. Governing Law',
    content:
      'These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of our services will be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.',
  },
  {
    label: '12. Severability',
    content:
      'If any provision of these Terms and Conditions is found to be invalid or unenforceable, that provision will be limited or removed to the minimum extent necessary so that the remaining Terms will continue in full force and effect.',
  },
  {
    label: '13. Entire Agreement',
    content:
      'These Terms and Conditions, along with our <b>Privacy Policy</b> and <b>Code of Conduct</b>, constitute the entire agreement between you and Node Ahmedabad regarding participation in our community and events.',
  },
] satisfies TermsAndConditionsContent[];

export default termsAndConditionsContent;
