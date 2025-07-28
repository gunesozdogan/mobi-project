'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { useEffect } from 'react';
import { setProducts } from '@/app/store/slices/productsSlice';
import Loading from '@/app/Loading';
import ProductItem from '@/app/components/ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();
  const { selectedCategory, selectedProducts } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${selectedCategory}`
        );
        const data = await response.json();
        dispatch(setProducts(data.products));
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [dispatch, selectedCategory]);

  return selectedProducts ? (
    <div className="flex-1 h-full">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {selectedProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex-1 self-center">
      <Loading />
    </div>
  );
};

export default ProductList;
