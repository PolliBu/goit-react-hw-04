import { useState } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';
import css from './ImageCard.module.css';

export const ImageCard = ({ item }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <img
        className={css.card}
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => setModalIsOpen(true)}
      />
      <ImageModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        photoModal={item.urls.regular}
        description={item.alt_description}
        author={item.user.name}
        likes={item.likes}
      ></ImageModal>
    </div>
  );
};
