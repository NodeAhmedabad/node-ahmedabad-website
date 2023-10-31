import type { Metadata } from 'next';
import { Layout } from '@/types';

export const metadata: Metadata = {
  title: 'Node Ahmedabad',
  description:
    'Node Ahmedabad is a community that helps developers to understand the Node programming language and their respective frameworks.',
};

const RootLayout: Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
