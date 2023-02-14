import { Dialog, Header } from '@/components';
import React, { useRef, useState } from 'react';
import MoviesNewsItem from './MovieNewsItem';
import './_movies-news-group.scss';

const MoviesNewsGroup = ({ items }) => {
  const modalRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState({});

  const handleSelectedMovieNews = (item) => {
    setSelectedItem(item);
    modalRef.current.showModal();
  };

  const closeModal = () => modalRef.current.close();

  return (
    <>
      <Header />
      <div className="movies-news__wrapper ">
        {items.map((item) => (
          <MoviesNewsItem key={item.id} item={item} onClick={handleSelectedMovieNews} />
        ))}
        <Dialog ref={modalRef} onClose={closeModal}>
          <div>
            <div className="movie-news__image">
              <img
                loading="lazy"
                src={selectedItem?.image?.url}
                width="100%"
                height="100%"
                alt=""
              />
            </div>
            <span className="movie-news__publish-date">
              Published on {new Date(selectedItem?.publishDateTime).toLocaleDateString()}
            </span>
            <h3>{selectedItem?.head}</h3>
            <span>{selectedItem?.body}</span>
          </div>
          <button onClick={closeModal}>Close</button>
        </Dialog>
      </div>
    </>
  );
};

export default MoviesNewsGroup;
