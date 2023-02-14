import React, { useCallback } from 'react';
import './_movie-news-item.scss';

const MoviesNewsItem = ({ item, onClick }) => {
  const { image, body, head, publishDateTime } = item;
  return (
    <div className="movie-news__body" onClick={useCallback(() => onClick(item))}>
      <div className="movie-news__image">
        <img loading="lazy" src={image.url} width="100%" height="100%" alt="" />
      </div>
      <h3>{head}</h3>
      <span className="movie-news__publish-date">
        Published on {new Date(publishDateTime).toLocaleDateString()}
      </span>
    </div>
  );
};

export default MoviesNewsItem;
