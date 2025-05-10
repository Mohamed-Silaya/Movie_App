import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      setError("Please enter a movie or TV show name."); 
    } else {
      setError("");
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setQuery("");  
    }
  };

  return (
    <form onSubmit={handleSearch} className="d-flex justify-content-center gap-2 mt-4">
      <input
        type="text"
        value={query}
        placeholder="Search for a movie or TV show"
        onChange={(e) => setQuery(e.target.value)}
        className="form-control w-50"
      />
      <button type="submit" className="btn btn-primary">🔍 Search</button>
      {error && <p className="text-danger mt-2">{error}</p>} 
    </form>
  );
};

export default SearchBar;
