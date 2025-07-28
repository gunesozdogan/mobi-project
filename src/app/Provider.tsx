'use client';

import { Provider, useSelector } from 'react-redux';
import { RootState, store } from '@/app/store/store';
import { useEffect } from 'react';

function ThemeListener() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeListener />
      {children}
    </Provider>
  );
}
