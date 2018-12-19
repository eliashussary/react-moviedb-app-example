const { REACT_APP_TMDB_IMAGE_BASEURL } = process.env;

// "w92", "w154", "w185", "w342", "w500", "w780", or "original".
export function getPosterUrl(movie, size = "original") {
  const poster_path = movie.poster_path.slice(1);
  return `${REACT_APP_TMDB_IMAGE_BASEURL}/${size}//${poster_path}`;
}
