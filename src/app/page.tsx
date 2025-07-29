import Categories from './components/Categories';
import ProductList from '@/app/components/ProductList';

const getCategories: () => Promise<string[]> = async () => {
  const response = await fetch('https://dummyjson.com/products/category-list');
  return response.json();
};

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="flex flex-col md:flex-row font-sans bg-background md:p-4 bg-bg-primary dark:bg-dark-bg-primary md:gap-32">
      <Categories categoryList={categories} />
      <ProductList />
    </div>
  );
}
