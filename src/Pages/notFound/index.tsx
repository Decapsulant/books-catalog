import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

const NotFound = () => {
  return (
    <section className="container text-center h-96 flex items-center justify-center flex-col gap-20">
      <h2 className=" text-4xl">404 Page Not Found</h2>
      <Link to="/">
        <Button>Return to home page</Button>
      </Link>
    </section>
  );
};

export default NotFound;
