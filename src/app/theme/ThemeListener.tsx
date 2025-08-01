'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { setDark, setLight } from '@/app/store/slices/themeSlice';

export default function ThemeListener() {
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const themeStr = localStorage.getItem('theme');
      const theme = themeStr ? JSON.parse(themeStr) : null;

      if (theme && theme.isDark) {
        dispatch(setDark());
      } else {
        dispatch(setLight());
      }
    } catch (e) {
      dispatch(setLight());
    }
    setHydrated(true);
  }, [dispatch]);

  useEffect(() => {
    if (!hydrated) return;

    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [hydrated, isDark]);

  return null;
}
