import { useState } from "react";

function TypeFilter({ onFilter }) {
  const [type, setType] = useState("");

  const handleChange = (e) => {
    setType(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="p-4">
      <select
        value={type}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="">All Types</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
    </div>
  );
}

export default TypeFilter;
