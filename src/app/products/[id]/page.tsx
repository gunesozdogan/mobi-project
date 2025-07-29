import ProductDetail from '@/app/components/ProductDetail';

const getProductById = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const param = await params;
  const product = await getProductById(param.id);

  return (
    <div className="w-full min-h-screen bg-bg-primary dark:bg-dark-bg-primary">
      <ProductDetail product={product} />
    </div>
  );
}
