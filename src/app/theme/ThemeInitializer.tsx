'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDark, setLight } from '@/app/store/slices/themeSlice';

export default function ThemeInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      dispatch(setDark());
    } else {
      dispatch(setLight());
    }
  }, [dispatch]);

  return null;
}
