import Header from '@/components/header/Header';

import type { Layout } from '@/types';

const NotFoundLayout: Layout = (props) => {
  const { children, ...restProps } = props;

  return (
    <div className="min-h-screen bg-slate-900">
      <Header fixedBar />
      <main {...restProps}>{children}</main>
    </div>
  );
};

export default NotFoundLayout;
