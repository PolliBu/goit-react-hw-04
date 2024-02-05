import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com/search/photos';
const YOUR_ACCESS_KEY = 'qU7VsaOKHMczQu4fKMDbtW3o9tNSoIc7Mq5sToQFCE4';

// axios.defaults.baseURL = `${BASE_URL}`;

export const fetchArticles = async (query, page) => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      client_id: YOUR_ACCESS_KEY,
      query,
      page,
      per_page: 12,
      orientation: 'landscape',
    },
  });

  return { images: data.results, totalPages: data.total_pages };
};
