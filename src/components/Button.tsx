import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children }, ref) => {
  return (
    <button
      ref={ref}
      className="
     bg-dark
      text-white 
      py-3 px-10
      disabled:opacity-50 
      duration-500 ease-in-out
      transition
      hover:bg-red">
      {children}
    </button>
  );
});
