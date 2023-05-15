import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../utils';
import { Volume } from '../../interface/books';
import { useQuery } from 'react-query';
import { ClockLoader } from 'react-spinners';
import { BookCard } from '../../components/BookCard';
import NotFound from '../notFound';

interface FullAuthorBooksResponce {
  items: Volume[];
}

const fetchAllAuthorBooks = async (name: string) => {
  const { data } = await axios.get<FullAuthorBooksResponce>(
    `https://www.googleapis.com/books/v1/volumes?q=inauthor:${name}&key=${API_KEY}`,
  );
  return data;
};

export const AuthorBooks = () => {
  const { name } = useParams<{ name: string }>();
  const authorName = name ?? '';
  const { data, isLoading } = useQuery(
    ['author', authorName],
    () => fetchAllAuthorBooks(authorName),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <div className="container">
        {isLoading ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ClockLoader size={50} />
          </div>
        ) : data && data.items && data.items.length >= 1 ? (
          <div>
            <h3 className=" text-center mb-10">
              Books by <span className="italic">{authorName}</span>
            </h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-14">
                {data.items.map((b) => (
                  <BookCard
                    authors={b.volumeInfo.authors}
                    key={b.id}
                    id={b.id}
                    title={b.volumeInfo.title}
                    image={b.volumeInfo.imageLinks?.thumbnail}
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
