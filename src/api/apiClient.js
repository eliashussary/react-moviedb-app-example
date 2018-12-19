import axios from "axios";

const { REACT_APP_TMDB_API_BASEURL, REACT_APP_TMDB_API_KEY } = process.env;

export default function getClient() {
  const client = axios.create({
    baseURL: REACT_APP_TMDB_API_BASEURL
  });

  client.interceptors.response.use(
    res => {
      if (res.status === 200) {
        return res.data;
      } else {
        return res;
      }
    },
    err => {
      return Promise.reject(err);
    }
  );

  return client;
}

export function getPopularMovies(page = 1, language = "", region = "") {
  return getClient().get("/movie/popular", {
    params: {
      page,
      language,
      region,
      api_key: REACT_APP_TMDB_API_KEY
    }
  });
}

export function getSingleMovie(movieId) {
  return getClient().get("/movie/" + movieId, {
    params: {
      api_key: REACT_APP_TMDB_API_KEY
    }
  });
}

export function getSingleMovieVideos(movieId) {
  return getClient().get("/movie/" + movieId + "/videos", {
    params: {
      api_key: REACT_APP_TMDB_API_KEY
    }
  });
}
