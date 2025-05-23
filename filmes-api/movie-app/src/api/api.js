const API_URL = 'http://localhost:3000/movies';

export const getMovies = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const createMovie = async (movie) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie),
  });
  return await res.json();
};