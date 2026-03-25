import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55162461-6dc934a4c197e0b77d4d693df';

export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });

  return response.data;
}
