import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, updateBooksData } from '../../utils';
import { Volume } from '../booksInfo';
import { useQuery } from 'react-query';
import { ClockLoader } from 'react-spinners';
import { BookCard } from '../../components/BookCard';
import NotFound from '../notFound';
import { useScroll } from '../../hooks/useScroll';

interface FullAuthorBooksResponce {
  items: Volume[];
}

const fetchAllAuthorBooks = async (name: string) => {
  const { data } = await axios.get<FullAuthorBooksResponce>(`${BASE_URL}&q=inauthor:${name}`);
  updateBooksData(data);
  return data;
};

export const AuthorBooks = () => {
  const { name } = useParams<{ name: string }>();
  const authorName = name ?? '';
  const { data, isLoading, isSuccess } = useQuery(
    ['author', authorName],
    () => fetchAllAuthorBooks(authorName),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );

  useScroll();
  return (
    <>
      <div className="container">
        {isLoading ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ClockLoader size={50} />
          </div>
        ) : isSuccess && data.items.length > 0 ? (
          <div>
            <h3 className=" text-center mb-10">
              Books by <span className="italic">{authorName}</span>
            </h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-14">
                {data.items.map((b) => (
                  <BookCard
                    key={b.id}
                    id={b.id}
                    title={b.volumeInfo.title}
                    image={b.volumeInfo.imageLinks.thumbnail}
                    rating={b.volumeInfo.averageRating}
                    categories={b.volumeInfo.categories}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <NotFound />
        )}
      </div>
      ;
    </>
  );
};
