'use client';

import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, setProducts } from '@/app/store/slices/productsSlice';
import { formatCategoryName } from '@/app/util/util';
import Image from 'next/image';
import { useState } from 'react';
import { RootState } from '@/app/store/store';

const Categories = ({ categoryList }: { categoryList: string[] }) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const selectedCategory = useSelector(
    (state: RootState) => state.products.selectedCategory
  );
  const selectCategoryHandler = (category: string) => {
    dispatch(selectCategory(category));
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const getSearchedProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchValue}`
    );
    const data = await response.json();

    dispatch(setProducts(data.products));
  };

  return (
    <div className="flex flex-col sticky top-16 h-fit self-start">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search Product"
          className="w-full bg-white border border-black rounded pl-2 pr-10 focus:outline-none h-8"
          onChange={(e) => handleSearchChange(e.target.value)}
          onKeyDown={async (e) => {
            if (e.key === 'Enter') {
              await getSearchedProducts();
            }
          }}
        />
        <button
          onClick={async () => await getSearchedProducts()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 cursor-pointer"
        >
          <Image src="/images/search.svg" alt="Search" width={20} height={20} />
        </button>
      </div>

      <div className="flex flex-col items-start justify-start gap-2 mt-4">
        <span className="text-text-primary dark:text-dark-text-primary font-bold border-b-2 border-black dark:border-white  pb-2 mb-4">
          Category Lists
        </span>
        {categoryList.map((category) => (
          <button
            onClick={() => selectCategoryHandler(category)}
            key={category}
            className={`cursor-pointer text-text-primary dark:text-dark-text-primary text-sm ${category === selectedCategory ? 'border-b-2 border-black dark:border-white' : ''}`}
          >
            {formatCategoryName(category)}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Categories;
