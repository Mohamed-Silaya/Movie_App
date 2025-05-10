import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ setQuery }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setError("Please enter a movie or TV show name.");
    } else {
      setError("");
      setQuery(searchTerm);  // set the query state in the parent component
      navigate(`/search?query=${encodeURIComponent(searchTerm)}&type=movie`);
      setSearchTerm("");  
    }
  };

  return (
    <form onSubmit={handleSearch} className="d-flex justify-content-center gap-2 mt-4">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search for a movie or TV show"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control w-50"
      />
      <button type="submit" className="btn btn-primary">🔍 Search</button>
      {error && <p className="text-danger mt-2">{error}</p>}
    </form>
  );
};

export default SearchBar;
