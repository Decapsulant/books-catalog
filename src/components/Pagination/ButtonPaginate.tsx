import React from 'react';

interface ButtonPaginateProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonPaginate = React.forwardRef<HTMLButtonElement, ButtonPaginateProps>(
  (props, ref) => {
    return (
      <button
        className=" border- bg-dark text-red hover:text-dark font-semibold py-3 px-10 hover:bg-red disabled:opacity-50 duration-500 ease-in-out transition"
        ref={ref}
        {...props}
      />
    );
  },
);
