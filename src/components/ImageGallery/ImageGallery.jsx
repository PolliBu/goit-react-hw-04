import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ items }) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <li className={css.itemCard} key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};
