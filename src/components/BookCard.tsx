import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookRating from './BookRating';

interface BookCardProps {
  image: string;
  title: string;
  publishedDate?: string;
  author?: string;
  id: string;
  rating?: number;
  categories?: string | string[];
}

export const BookCard: React.FC<BookCardProps> = ({
  image,
  title,
  author,
  id,
  rating,
  categories,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex justify-center cursor-pointer" onClick={() => navigate(`/book/${id}`)}>
        <div className="flex justify-center flex-col gap-2 items-center bg-white shadow-md min-h-full w-64 px-5 py-10 duration-300  hover:shadow-xl hover:shadow-dark">
          <img className="max-w-full max-h-full w-32 h-44" src={image} alt={title} />
          <h5 className=" text-center my-5 font-semibold">{title}</h5>
          <div className="flex flex-col gap-y-3 justify-start">
            <div className=" text-left italic">{author}</div>
          </div>
          {categories && categories[0] !== '' && (
            <span className=" italic">{categories[0].replace(/\//g, ',')}</span>
          )}
          <BookRating rating={rating} />
        </div>
      </div>
    </>
  );
};
