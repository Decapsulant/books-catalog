import axios from 'axios';
import React from 'react';
import { API_KEY } from '../../utils';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ClockLoader } from 'react-spinners';
import { marked } from 'marked';
import NoImage from '../../assets/images/NoImage.jpg';
import { Button } from '../../components/Button';
import BookRating from '../../components/BookRating';
import NotFound from '../notFound';
import { FullBookInfoResponse } from './fullBookInfo';

const fetchFullBook = async (id: string) => {
  const { data } = await axios.get<FullBookInfoResponse>(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`,
  );

  return data.volumeInfo;
};

const FullBook = () => {
  const { id } = useParams<{ id: string }>();
  const bookId = id ?? '';

  const { data, isLoading } = useQuery(['books', bookId], () => fetchFullBook(bookId), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  type MarkdownDescProps = {
    content: string;
  };
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  //this function makes it render the description with some html tags
  const MarkdownDesc = ({ content }: MarkdownDescProps) => (
    <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
  );

  //this handleClick returns users at the previues page
  const handleGoBack = () => {
    window.history.go(-1);
  };

  const mainImage = data?.imageLinks?.thumbnail ? data?.imageLinks?.thumbnail : NoImage;
  const publishedDate = data?.publishedDate ? data?.publishedDate : 'unknown';
  const title = data?.title ? data?.title : 'unknown';
  return (
    <>
      <div className="container pb-10">
        {isLoading ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ClockLoader size={50} />
          </div>
        ) : (
          <div>
            <Link onClick={handleGoBack} to="/" className=" hidden sm:block">
              <Button>Back</Button>
            </Link>
            {data ? (
              <div className="mb-10 sm:py-5 sm:pr-28 flex justify-center sm:justify-stretch items-center flex-col sm:flex-row gap-5 ">
                <div className="mr-10 mb-5 w-40 h-56">
                  <img className="block w-40 h-56" src={mainImage} alt="" />
                </div>
                <div>
                  <h3 className="font-bold pr-2 uppercase mb-5 text-2xl text-center md:text-left max-w-xl">
                    {title}
                  </h3>
                  <div>
                    <div className="font-bold pr-2">
                      <BookRating rating={data.averageRating} />
                    </div>
                    <span className="font-bold pr-2">Authors: </span>{' '}
                    {data.authors ? (
                      <span>
                        {data.authors &&
                          data.authors.slice(0, -1).map((a) => (
                            <Link
                              className="transition-all duration-500 hover:text-red"
                              to={`/author/${a}`}>
                              {`${a}, `}
                            </Link>
                          ))}
                        <Link
                          className="transition-all duration-500 hover:text-red"
                          to={`/author/${data.authors[data.authors.length - 1]}`}>
                          {data.authors[data.authors.length - 1]}
                        </Link>
                      </span>
                    ) : (
                      <span>unknown</span>
                    )}
                  </div>
                  {data && data.categories && data.categories[0] !== '' && (
                    <div>
                      <span className="font-bold pr-2">Genre:</span>{' '}
                      {data.categories[0].replace(/\//g, ',')}
                    </div>
                  )}
                  <div>
                    <span className="font-bold pr-2">Language:</span> {data.language}
                  </div>
                  <div>
                    <span className="font-bold pr-2">Pages:</span> {data.pageCount}
                  </div>
                  <div>
                    <span className="font-bold pr-2">Published Date:</span> {publishedDate}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <NotFound />
              </div>
            )}
            {data && data.description && (
              <div>
                <div className="font-bold text-center uppercase max-w-sm mx-auto">
                  About the book{' '}
                </div>
                <hr className=" pt-5 opacity-50" />
                <div className=" pr-10">
                  <MarkdownDesc content={data.description} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default FullBook;
