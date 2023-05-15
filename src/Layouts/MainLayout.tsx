import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

export const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
        <div className="pt-28">
          <Outlet />
        </div>
      </div>
    </>
  );
};
