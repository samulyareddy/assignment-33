import { useState, useEffect } from "react";


function FavoritesList() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const removeFavorite = (imdbID) => {
    const updatedFavorites = [];
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].imdbID !== imdbID) {
        updatedFavorites.push(favorites[i]);
      }
    }
    setFavorites(updatedFavorites);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">No favorites added.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
                alt={movie.Title}
                className="w-full h-64 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold">{movie.Title}</h3>
              <p className="text-gray-600">{movie.Year}</p>
              <button
                onClick={() => removeFavorite(movie.imdbID)}
                className="mt-2 text-red-600 hover:underline"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesList;
