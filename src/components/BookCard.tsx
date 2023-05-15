import React from 'react';
import NoImage from '../assets/images/NoImage.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import BookRating from './BookRating';

interface BookCardProps {
  image?: string;
  title?: string;
  publishedDate?: string;
  authors?: string[];
  id: string;
  rating?: number;
  categories?: string | string[];
}

export const BookCard: React.FC<BookCardProps> = ({
  image,
  title,
  authors,
  id,
  rating,
  categories,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const imageCard = image ? image : NoImage;
  const ratingBook = rating ? rating : 0;
  let authorCard = 'unknow';
  /** if the name is very long, the component shorten title or author */
  if (authors && authors[0].length >= 15) {
    authorCard = authors[0].slice(0, 15) + '…';
  } else if (authors) {
    authorCard = authors[0];
  }

  if (title && title.length >= 15) {
    title = title.slice(0, 15) + '…';
  } else if (!title) {
    title = 'unknown';
  }
  return (
    <>
      <div className=" flex justify-center cursor-pointer" onClick={() => navigate(`/book/${id}`)}>
        <div className="flex justify-center flex-col gap-2 items-center shadow-md min-h-full w-64 px-5 py-10 duration-300 hover:shadow-xl hover:shadow-dark">
          <img className="max-w-full max-h-full w-32 h-44" src={imageCard} alt={title} />
          <h5 className=" text-center my-5 font-semibold">{title}</h5>
          <div className="flex flex-col gap-y-3 justify-start">
            {/** Author is taked from the url */}
            {!location.pathname.includes('/author/') && (
              <div className=" text-left italic">{authorCard}</div>
            )}
          </div>
          {categories && categories[0] !== '' && (
            <span className=" italic">{categories[0].replace(/\//g, ',')}</span>
          )}
          <BookRating rating={ratingBook} />
        </div>
      </div>
    </>
  );
};
