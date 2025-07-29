import { Product } from '@/app/types/product';
import Image from 'next/image';
import ProductReview from '@/app/components/ProductReview';
import NotFound from '@/app/not-found';
import ProductFooter from '@/app/components/ProductFooter';

const ProductDetail = ({ product }: { product: Product }) => {
  const { images, title, description, reviews } = product;

  return product.title ? (
    <div className="flex items-start justify-start w-full pt-16  gap-24 h-full pb-32">
      <div className="flex-2">
        <Image
          src={images[0]}
          alt="product image"
          width={200}
          height={200}
          className="w-[40vw] bg-[#e7e7e7] dark:bg-dark-bg-primary"
        />
      </div>
      <div className="flex flex-col flex-3 gap-4">
        <h2 className="text-4xl font-bold text-text-primary dark:text-dark-text-primary">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <div className="flex flex-col items-start justify-start gap-4">
          <h3 className="font-bold text-lg dark:text-dark-text-primary">
            Product Reviews
          </h3>
          <ProductReview reviews={reviews} />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-bg-primary dark:bg-dark-bg-primary z-10">
        <ProductFooter product={product} />
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default ProductDetail;
