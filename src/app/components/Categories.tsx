'use client';

import { useDispatch } from 'react-redux';
import { selectCategory } from '@/app/store/slices/productsSlice';
import { formatCategoryName } from '@/app/util/util';

const Categories = ({ categoryList }: { categoryList: string[] }) => {
  const dispatch = useDispatch();

  const selectCategoryHandler = (category: string) => {
    dispatch(selectCategory(category));
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-start justify-start w-full">
        <input type="text" className="bg-white border-black border" />
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <span>Category Lists</span>
        {categoryList.map((category) => (
          <button
            onClick={() => selectCategoryHandler(category)}
            key={category}
            className="cursor-pointer text-text-primary dark:text-dark-text-primary"
          >
            {formatCategoryName(category)}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Categories;
