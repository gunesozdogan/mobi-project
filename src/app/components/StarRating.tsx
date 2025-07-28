import Image from 'next/image';

type StarProps = { filled: 'full' | 'half' | 'empty' };

const Star = ({ filled }: StarProps) => {
  if (filled === 'full') {
    return (
      <span>
        <Image
          src="/images/full-star.svg"
          width={16}
          height={16}
          alt="half-star"
        />
      </span>
    );
  } else if (filled === 'half') {
    return (
      <span>
        <Image
          src="/images/half-star.svg"
          width={16}
          height={16}
          alt="half-star"
        />
      </span>
    );
  } else {
    return (
      <span>
        <Image
          src="/images/empty-star.svg"
          width={16}
          height={16}
          alt="half-star"
        />
      </span>
    );
  }
};

const StarRating = ({ rating }: { rating: number }) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<Star key={i} filled="full" />);
    } else if (i - 0.5 === roundedRating) {
      stars.push(<Star key={i} filled="half" />);
    } else {
      stars.push(<Star key={i} filled="empty" />);
    }
  }

  return <div className="flex gap-2">{stars}</div>;
};

export default StarRating;
