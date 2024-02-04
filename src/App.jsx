import { useEffect, useState, useRef } from 'react';
import { fetchArticles } from './articles-api';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Loader } from './components/Loader/Loader';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { Toaster } from 'react-hot-toast';
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // const totalPages = useRef(0);

  const searchImages = async newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setArticles([]);
    // totalPages.current = 1;
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

        const fetchedData = await fetchArticles(query.split('/')[1], page);
        setArticles(prevArticles => [...prevArticles, ...fetchedData]);
        // totalPages.current = fetchedData.total_pages;
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
      {articles.length > 0 && !loading && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
