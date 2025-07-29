'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CartLink() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalQuantity = mounted
    ? cartItems.reduce((sum, item) => sum + item.quantity, 0)
    : 0;

  const iconSrc = mounted
    ? isDark
      ? '/images/cart-dark.svg'
      : '/images/cart.svg'
    : '/images/cart.svg';

  return (
    <Link href="/checkout" className="relative group">
      <Image
        className="w-6 h-6 text-text-primary dark:text-dark-text-primary hover:scale-105 transition-transform"
        height={20}
        width={20}
        src={iconSrc}
        alt="cart icon"
      />
      {mounted && totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}
