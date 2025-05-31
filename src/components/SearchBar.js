import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className="w-full max-w-md p-2 rounded-l-md border border-gray-300 focus:outline-none"
      />
      <button type="submit" className="p-2 bg-blue-600 text-white rounded-r-md">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
