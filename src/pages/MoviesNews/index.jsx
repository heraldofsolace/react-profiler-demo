import React, { useEffect, useState } from 'react';
import { Header } from '@/components';
import { useQuery } from '@/hooks';
import { ALL_NEWS_API } from '@/services/api';
import MoviesNewsGroup from './MoviesNewsGroup';

const MoviesNews = () => {
  const [moviesNews, setMoviesNews] = useState([]);

  const { data, isLoading, isSuccess, isError, error } = useQuery({ url: ALL_NEWS_API });

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setMoviesNews(data?.data?.items);
    }
  }, [isLoading]);

  if (isLoading) return <>Loading movies news...</>;

  if (isError) return <h3>{error?.message}</h3>;

  return (
    <div>
      <Header />
      <MoviesNewsGroup items={moviesNews} />
    </div>
  );
};

export default MoviesNews;
