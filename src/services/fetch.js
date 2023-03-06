export const fetchImages = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const TOKEN = '32968388-b31919f1c04eebb6402c46dda';

  const response = await fetch(
    `${BASE_URL}/?q=${query}&page=${page}&key=${TOKEN}&image_type=photo&orientation=horizontal&per_page=12`
  );

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(response.status);
  }
};
