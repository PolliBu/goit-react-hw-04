import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button className={css.btn} onClick={handleLoadMore}>
      Load More
    </button>
  );
};
