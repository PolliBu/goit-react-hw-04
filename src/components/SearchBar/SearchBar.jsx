import toast from 'react-hot-toast';
import { CiSearch } from 'react-icons/ci';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === '') {
      toast.error('EMPTY STRING');
      return;
    }
    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit">
          <CiSearch className={css.icon} />
        </button>
        <input
          className={css.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
