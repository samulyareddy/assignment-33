import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  // Add movie to favorites without using array.filter()
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

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{movie.Title}</h3>
      <p className="text-gray-600">{movie.Year}</p>
      <div className="flex justify-between mt-2">
        <Link
          to={`/movie/${movie.imdbID}`}
          className="text-blue-600 hover:underline"
        >
          View Details
        </Link>
        <button
          onClick={() => addToFavorites(movie)}
          className="text-green-600 hover:underline"
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
