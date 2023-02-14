import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MoviesNews } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movies-news" />}></Route>
      <Route path="/movies-news" element={<MoviesNews />}></Route>
      <Route path="*" element={<Navigate to="/movies-news" />}></Route>
    </Routes>
  );
};

export default Router;
