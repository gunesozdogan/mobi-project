'use client';
import { CartItem, removeFromCart } from '@/app/store/slices/cartSlice';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
} from '@/app/store/slices/cartSlice';
import { RootState } from '@/app/store/store';

const CartProduct = ({ cartProduct }: { cartProduct: CartItem }) => {
  const { id, thumbnail, title, description, quantity, price } = cartProduct;
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const handleIncrease = () => dispatch(increaseQuantity(id));
  const handleDecrease = () => {
    if (quantity <= 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(decreaseQuantity(id));
    }
  };

  return (
    <div className="flex flex-col md:grid grid-cols-[1fr_4fr_2fr] items-center gap-4 p-4 border-b dark:border-gray-200">
      <div className="relative w-[100px] h-[100px]">
        <Image
          src={thumbnail}
          alt="product image"
          fill
          className="object-cover rounded"
        />
        <span className="absolute bottom-1 right-1 bg-bg-secondary dark:bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
          x{quantity}
        </span>
        <div className="absolute top-1 right-1 flex flex-col space-y-1">
          <button
            onClick={handleIncrease}
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white rounded p-1"
          >
            <Image
              width={14}
              height={14}
              src={
                isDark ? '/images/up-arrow-dark.svg' : '/images/up-arrow.svg'
              }
              alt="up arrow"
            />
          </button>
          <button
            onClick={handleDecrease}
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white rounded p-1"
          >
            <Image
              width={14}
              height={14}
              src={
                isDark
                  ? '/images/down-arrow-dark.svg'
                  : '/images/down-arrow.svg'
              }
              alt="down arrow"
            />
          </button>
        </div>
      </div>
      <div>
        <p className="font-medium text-text-primary dark:text-dark-text-primary">
          {title}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {description}
        </p>
      </div>
      <div className="flex gap-4 justify-between w-full">
        <div className="text-md flex items-center justify-center text-text-primary dark:text-dark-text-primary">
          <p>${price.toFixed(2)}</p>
        </div>
        <div className="text-lg font-semibold text-right text-text-primary dark:text-dark-text-primary">
          <p>${(price * quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
