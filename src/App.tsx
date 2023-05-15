import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './Layouts/MainLayout';
import Home from './Pages/home';
import NotFound from './Pages/notFound';
import FullBook from './Pages/fullBook';
import { AuthorBooks } from './Pages/authorBooks';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="book/:id" element={<FullBook />} />
          <Route path="author/:name" element={<AuthorBooks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
