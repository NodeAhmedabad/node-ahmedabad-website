import type { Metadata } from 'next';
import { Layout } from '@/types';
import Providers from '@/app/providers';
import StyledComponentsRegistry from '@/app/registry';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext', 'devanagari'],
  weight: ['300', '400', '500', '600', '700'],
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'Node Ahmedabad',
  description:
    'Node Ahmedabad is a community that helps developers to understand the Node programming language and their respective frameworks.',
};

const RootLayout: Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
