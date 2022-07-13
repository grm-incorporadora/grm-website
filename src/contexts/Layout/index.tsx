import { createContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@globalStyles';
import { defaultTheme } from '@globalStyles/themes/default';

import type { iLayoutContext } from './iLayoutContext';

export const LayoutContext = createContext<iLayoutContext>(
  {} as iLayoutContext,
);

interface LayoutProviderProps {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [currWidth, setCurrWidth] = useState(0);
  const { pathname } = useRouter();
  const isSpecialPage =
    pathname.includes('/admin') || pathname.includes('_error');

  useEffect(() => {
    setCurrWidth(window.innerWidth);
    window.addEventListener('resize', () => setCurrWidth(window.innerWidth));

    return () => window.removeEventListener('resize', () => setCurrWidth(0));
  }, []);

  const contextValue = useMemo(
    () => ({ currTheme: defaultTheme, currWidth, isSpecialPage }),
    [currWidth, isSpecialPage],
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles.ColorsCSS />
      <GlobalStyles.FontsCSS />
      <GlobalStyles.RootCSS />

      <LayoutContext.Provider value={contextValue}>
        {children}
      </LayoutContext.Provider>
    </ThemeProvider>
  );
};
