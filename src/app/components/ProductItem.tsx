import Image from 'next/image';
import { Product } from '@/app/types/product';
import StarRating from '@/app/components/StarRating';
import Link from 'next/link';

const ProductItem = ({ product }: { product: Product }) => {
  const { thumbnail, title, description, price, rating, id } = product;

  return (
    <Link
      href={`/products/${id}`}
      className="flex flex-col bg-bg-primary dark:bg-dark-bg-secondary rounded-lg
    cursor-pointer p-4 shadow-md shadow-gray-300 dark:shadow-md dark:shadow-black/50"
    >
      <Image
        src={thumbnail}
        alt="product-image"
        width={120}
        height={120}
        className="self-center"
      />
      <div className="h-32 flex flex-col gap-2">
        <p className="font-bold dark:text-dark-text-primary">{title}</p>
        <p
          className="text-sm overflow-hidden text-ellipsis text-gray-600 dark:text-gray-400"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {description}
        </p>
      </div>
      <p className="font-bold mb-2 dark:text-dark-text-primary">
        {'$ ' + price}
      </p>
      <StarRating rating={rating} />
      <button className="bg-bg-secondary dark:bg-blue-600  h-8 text-white rounded-sm mt-2 cursor-pointer font-bold">
        Add to Cart
      </button>
    </Link>
  );
};

export default ProductItem;
