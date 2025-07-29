'use client';

import { Product } from '@/app/types/product';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { addToCart } from '@/app/store/slices/cartSlice';

const ProductFooter = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const handleAdd = () => {
    console.log(product);
    dispatch(addToCart({ ...product, quantity: 1 }));
    console.log(cart);
  };

  return (
    <div className="flex gap-4 items-center justify-center h-24 border-t-2 border-gray-200">
      <div className="hidden md:flex flex-2 items-center justify-center font-bold border-r-2 border-gray-200 h-full text-center p-2 dark:text-dark-text-primary">
        Order Summary
      </div>
      <div className="hidden md:flex flex-col flex-6 border-r-2 border-gray-200 h-full align-center justify-center p-4">
        <p className="font-bold dark:text-dark-text-primary">{product.title}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {product.description}
        </p>
      </div>
      <div className="flex flex-3 gap-4 items-center justify-around p-4">
        <span className="text-2xl font-bold dark:text-dark-text-primary">
          $ {product.price}
        </span>
        <button
          onClick={handleAdd}
          className="bg-bg-secondary dark:bg-blue-600 text-bg-primary font-bold px-4 py-2 rounded-md cursor-pointer text-md text-center"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductFooter;
