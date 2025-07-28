import Categories from './components/Categories';
import ProductList from '@/app/components/ProductList';

const getCategories: () => Promise<string[]> = async () => {
  const response = await fetch('https://dummyjson.com/products/category-list');
  return response.json();
};

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="flex font-sans bg-background p-4 bg-bg-primary dark:bg-dark-bg-primary gap-32">
      <Categories categoryList={categories} />
      <ProductList />
    </div>
  );
}
