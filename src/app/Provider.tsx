'use client';

import { Provider, useDispatch } from 'react-redux';
import { store } from '@/app/store/store';
import { useEffect, useState } from 'react';
import { login } from '@/app/store/slices/loginSlice';
import Loading from '@/app/Loading';
import ThemeListener from '@/app/theme/ThemeListener';

function AuthListener() {
  const dispatch = useDispatch();
  const [hydrated, setLocalHydrated] = useState(false);

  useEffect(() => {
    const hasAuthCookie = document.cookie.includes('auth=true');
    if (hasAuthCookie) {
      dispatch(login());
    }
    setLocalHydrated(true);
  }, [dispatch]);

  if (!hydrated) return <Loading />;

  return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeListener />
      <AuthListener />
      {children}
    </Provider>
  );
}
