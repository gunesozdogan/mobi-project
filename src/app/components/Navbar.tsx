'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { setDark, setLight } from '@/app/store/slices/themeSlice';
import Image from 'next/image';

const Navbar = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const dispatch = useDispatch();
  const toggleTheme: () => void = () => {
    if (isDark) {
      dispatch(setLight());
      localStorage.setItem('theme', 'light');
    } else {
      dispatch(setDark());
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 h-24 bg-white dark:bg-black">
      <div className="pl-4 text-red">
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
      </div>
      <div>
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
