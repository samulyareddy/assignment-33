export const addToFavorites = (movie) => {
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

export const removeFromFavorites = (imdbID) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const updatedFavorites = [];
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].imdbID !== imdbID) {
      updatedFavorites.push(favorites[i]);
    }
  }
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  return updatedFavorites;
};

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};
