import { useEffect, useState } from 'react';
import axios from 'axios';

const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: 'https://imdb8.p.rapidapi.com/',
  timeout: 36000,
  headers: {
    'X-RapidAPI-Key': 'bca2b93978msh3ed7f52680c3ed7p1b38d1jsn3a8f64e114c2',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  },
  crossdomain: true
});

export const useQuery = ({ type = 'get', payload = {}, url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await instance[type](url, payload);

      setData(response);
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    type === 'get' && fetchData();
  }, []);

  return { error, isLoading, isSuccess, isError, data, mutate: fetchData };
};
