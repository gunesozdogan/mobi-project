'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { setDark, setLight } from '@/app/store/slices/themeSlice';
import Image from 'next/image';
import Link from 'next/link';
import { logout } from '@/app/store/slices/loginSlice';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const toggleTheme: () => void = () => {
    if (isDark) {
      dispatch(setLight());
      localStorage.setItem('theme', 'light');
    } else {
      dispatch(setDark());
      localStorage.setItem('theme', 'dark');
    }
  };

  const handleLogout = () => {
    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';

    dispatch(logout());
  };

  return (
    <nav className="flex justify-between items-center p-4 h-24 bg-white dark:bg-black">
      <Link href="/" className="pl-4 text-red">
        <Image
          src={
            isDark
              ? '/images/mobiversite-logo-dark.png'
              : '/images/mobiversite-logo.png'
          }
          alt="Mobiversite Logo"
          width={96}
          height={96}
        />
      </Link>
      <div className="flex items-center gap-8">
        {isLoggedIn && pathname !== '/checkout' && (
          <Link
            href="/checkout"
            className="text-text-primary dark:text-dark-text-primary hover:border-b-2 border-text-primary dark:border-white"
          >
            Checkout
          </Link>
        )}
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

        <button onClick={toggleTheme} className="cursor-pointer">
          <Image
            alt="dark mode"
            width={24}
            height={24}
            src={`/images/${isDark ? 'light' : 'dark'}-theme.svg`}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
