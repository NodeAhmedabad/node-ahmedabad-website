'use client';

import React from 'react';

import GlobalStyles from '@/styles/GlobalStyles';
import { Layout } from '@/types';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

const Providers: Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Providers;
