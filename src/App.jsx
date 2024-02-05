import { useEffect, useState } from 'react';
import { fetchArticles } from './articles-api';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Loader } from './components/Loader/Loader';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { Toaster } from 'react-hot-toast';
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const searchImages = async newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      try {
        setError(false);
        setLoading(true);

        const { images, totalPages } = await fetchArticles(
          query.split('/')[1],
          page,
        );
        setArticles(prevArticles => [...prevArticles, ...images]);
        setTotalPages(totalPages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {error && <ErrorMessage />}
      {articles.length > 0 && <ImageGallery items={articles} />}
      {loading && <Loader />}
      {articles.length > 0 && !loading && totalPages > page && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      <Toaster position="top-right" />
    </div>
  );
};
