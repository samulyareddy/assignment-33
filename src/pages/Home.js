import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import TypeFilter from "../components/TypeFilter";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { searchMovies } from "../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      try {
        const data = await searchMovies(query, type, page);
        setMovies(data.movies);
        setTotalPages(Math.ceil(data.totalResults / 10));
        setError(null);
      } catch (err) {
        setError(err.message);
        setMovies([]);
      }
    };
    fetchMovies();
  }, [query, type, page]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center p-4">
        <SearchBar onSearch={setQuery} />
        <Link to="/favorites" className="text-blue-600 hover:underline">
          View Favorites
        </Link>
      </div>
      <TypeFilter onFilter={setType} />
      {error && <p className="text-red-600 text-center">{error}</p>}
      <MovieList movies={movies} />
      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}

export default Home;
