'use client';

import { useState } from 'react';
import { Review } from '@/app/types/product';
import StarRating from '@/app/components/StarRating';

const ProductReview = ({ reviews }: { reviews: Review[] }) => {
  reviews = [...reviews, ...reviews];
  const [showAll, setShowAll] = useState(false);

  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <div className="w-full flex flex-col justify-between gap-8">
      {visibleReviews.map((review, index) => (
        <div className="flex flex-col" key={`${review.comment}-${index}`}>
          <div className="flex items-center justify-start mb-2">
            <span className="w-48 font-bold dark:text-dark-text-primary">
              {review.reviewerName}
            </span>
            <StarRating rating={review.rating} />
          </div>
          <p className="dark:text-gray-400">{review.comment}</p>
        </div>
      ))}

      {reviews.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#1E293B] text-dark-text-primary w-fit self-start px-4 py-2 rounded-md cursor-pointer"
        >
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      )}
    </div>
  );
};

export default ProductReview;
