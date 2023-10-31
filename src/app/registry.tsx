'use client';

import React, { Fragment, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Layout } from '@/types';
import { isServer } from '@/utils/utils';

const StyledComponentsRegistry: Layout = ({ children }) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <Fragment>{styles}</Fragment>;
  });

  if (!isServer) return <Fragment>{children}</Fragment>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
