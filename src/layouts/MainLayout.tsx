import Footer from '@/components/footer/Footer';
import Header from '@/components/Header';

import type { ComponentProps } from 'react';

import type { Layout } from '@/types';

type MainLayout = ComponentProps<'main'>;

const MainLayout: Layout<MainLayout> = (props) => {
  const { children, ...restProps } = props;

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main {...restProps}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
