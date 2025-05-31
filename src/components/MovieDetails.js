import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";

function MovieDetails() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(imdbID);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchMovie();
  }, [imdbID]);

  const addToFavorites = (movie) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let exists = false;
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].imdbID === movie.imdbID) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  if (error) return <p className="text-red-600 text-center">{error}</p>;
  if (!movie) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
        alt={movie.Title}
        className="w-full max-w-md mx-auto rounded-md"
      />
      <h2 className="text-2xl font-bold mt-4">{movie.Title}</h2>
      <p>
        <strong>Year:</strong> {movie.Year}
      </p>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
      <p>
        <strong>Rated:</strong> {movie.Rated}
      </p>
      <p>
        <strong>Cast:</strong> {movie.Actors}
      </p>
      <p>
        <strong>IMDB Rating:</strong> {movie.imdbRating}
      </p>
      <button
        onClick={() => addToFavorites(movie)}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
      >
        Add to Favorites
      </button>
    </div>
  );
}

export default MovieDetails;
