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
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={onClose}>
        <img src={photoModal} alt={description} />
        <p>Author: {author}</p>
        <p>
          <FcLike /> {likes}
        </p>
        <p>{description}</p>
      </Modal>
    </div>
  );
};
