import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shadow-md bg-dark text-BGwhite fixed top-0 left-0 w-full z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <a target="_blank" href="https://github.com/VyacheslavBlog" rel="noreferrer">
            <AiFillGithub
              className="  hover:text-red transition-all hover:scale-125 duration-500"
              fontSize="32px"
            />
          </a>
          <nav>
            <Link to="" className="font-semibold duration-500  transition-all hover:text-red">
              Home
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
