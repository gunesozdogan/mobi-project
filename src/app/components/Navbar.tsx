'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { setDark, setLight } from '@/app/store/slices/themeSlice';
import Image from 'next/image';
import Link from 'next/link';
import { logout } from '@/app/store/slices/loginSlice';
import CartLink from '@/app/components/CartLink';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      dispatch(setLight());
    } else {
      dispatch(setDark());
    }
  };

  const handleLogout = () => {
    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';

    dispatch(logout());
  };

  return (
    <nav className="flex justify-between items-center p-4 h-24 bg-white dark:bg-black">
      <Link href="/" className="text-red">
        {hydrated && (
          <Image
            src={
              isDark
                ? '/images/mobiversite-logo-dark.png'
                : '/images/mobiversite-logo.png'
            }
            alt="Mobiversite Logo"
            width={140} // try width larger than height, adjust as needed
            height={40} // make height smaller to fit navbar
            priority
          />
        )}
      </Link>
      <div className="flex items-center gap-4 md:gap-8">
        <CartLink />
        {isLoggedIn ? (
          <Link
            onClick={handleLogout}
            href="/"
            className="text-text-primary dark:text-dark-text-primary hover:border-b-2 border-text-primary dark:border-white"
          >
            Logout
          </Link>
        ) : (
          <Link
            href="/login"
            className="text-text-primary dark:text-dark-text-primary hover:border-b-2 border-text-primary dark:border-white"
          >
            Login
          </Link>
        )}

        {hydrated && (
          <button onClick={toggleTheme} className="cursor-pointer">
            <Image
              alt="dark mode"
              width={24}
              height={24}
              src={`/images/${isDark ? 'light' : 'dark'}-theme.svg`}
            />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
