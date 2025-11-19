import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import cn from '@/lib/cn';

import type { ComponentProps } from 'react';

import type { Layout } from '@/types';

type MainLayoutProps = ComponentProps<'main'>;

const MainLayout: Layout<MainLayoutProps> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <div className="min-h-screen">
      <Header />
      <main {...restProps} className={cn('[&>*:nth-child(even)]:bg-slate-800/30', className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
