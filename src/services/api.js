import axios from "axios";

const API_KEY = "d565136f";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, type = "", page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
        type: type || undefined,
        page,
      },
    });
    if (response.data.Response === "True") {
      return {
        movies: response.data.Search,
        totalResults: parseInt(response.data.totalResults, 10),
      };
    } else {
      throw new Error(response.data.Error);
    }
  } catch (error) {
    throw new Error(error.message || "Failed to fetch movies");
  }
};

export const getMovieDetails = async (imdbID) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: imdbID,
        plot: "full",
      },
    });
    if (response.data.Response === "True") {
      return response.data;
    } else {
      throw new Error(response.data.Error);
    }
  } catch (error) {
    throw new Error(error.message || "Failed to fetch movie details");
  }
};
