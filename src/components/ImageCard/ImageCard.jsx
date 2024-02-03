import { useState } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';

export const ImageCard = ({ item }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => setModalIsOpen(true)}
      />
      <ImageModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        photoModal={item.urls.regular}
        description={item.alt_description}
      ></ImageModal>
    </div>
  );
};
