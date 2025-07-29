'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import CartProduct from '@/app/components/CartProduct';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CartItemContainer = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <p className="p-4 text-center text-gray-500">Your cart is empty.</p>;
  }

  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <CartProduct cartProduct={item} key={item.id} />
      ))}

      <div className="p-4 flex flex-col justify-center items-end gap-4">
        <p className="text-xl font-semibold text-text-primary dark:text-dark-text-primary">
          Total: ${totalPrice.toFixed(2)}
        </p>
        <Link href="/checkout">
          <button className="cursor-pointer mt-4 sm:mt-0 bg-bg-secondary dark:bg-blue-600 text-bg-primary px-6 py-2 rounded transition">
            Go to Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartItemContainer;
