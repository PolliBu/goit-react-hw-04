import css from './ImageModal.module.css';
import Modal from 'react-modal';
import { FcLike } from 'react-icons/fc';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({
  photoModal,
  description,
  isOpen,
  onClose,
  author,
  likes,
}) => {
  return (
    <div>
      <Modal
        className={css.Modal}
        overlayClassName={css.Overlay}
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={onClose}
      >
        <img src={photoModal} alt={description} width="1000" height="800" />
        <div className={css.text}>
          <p>
            <b>Author: </b>
            {author}
          </p>
          <p>
            <FcLike /> {likes}
          </p>
        </div>
        <p className={css.description}>
          <b>Description: </b> {description}
        </p>
      </Modal>
    </div>
  );
};
