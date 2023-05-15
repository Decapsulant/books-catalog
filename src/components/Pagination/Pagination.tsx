import React from 'react';
import { ButtonPaginate } from './ButtonPaginate';
import { BOOKS_IN_PAGE, ButtonPaginateSign } from '../../utils';

interface PaginationProps {
  page: number;
  pageNow: number;
  isLastPage: boolean;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
export const Pagination: React.FC<PaginationProps> = ({
  page,
  pageNow,
  isLastPage,
  setPage,
  totalPages,
}) => {
  /**
   * this function takes a text character and makes a request to the server if "+",
   * or returns -20 books back if the sign is not "+"
   */
  const onClickButtonPagination = (sign: ButtonPaginateSign) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    sign === '+' ? setPage((p) => p + BOOKS_IN_PAGE) : setPage((p) => p - BOOKS_IN_PAGE);
  };

  return (
    <>
      <div className="flex justify-center sm:gap-14 gap-3 pb-10 items-center">
        <ButtonPaginate
          onClick={() => onClickButtonPagination(ButtonPaginateSign.minus)}
          disabled={!page}>
          Prev
        </ButtonPaginate>
        {pageNow} of {totalPages}
        <ButtonPaginate
          onClick={() => onClickButtonPagination(ButtonPaginateSign.plus)}
          disabled={isLastPage}>
          Next
        </ButtonPaginate>
      </div>
    </>
  );
};
