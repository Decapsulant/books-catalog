import React from 'react';
import { BsStarFill } from 'react-icons/bs';

interface StarsRatingProps {
  rating: number | undefined;
}

const BookRating: React.FC<StarsRatingProps> = ({ rating }) => {
  const ratingBook = rating ? `${rating}/5` : 'N/A';
  return (
    <div className="flex gap-5 items-center">
      <BsStarFill color="#F2BF03" />
      {ratingBook}
    </div>
  );
};
export default BookRating;
