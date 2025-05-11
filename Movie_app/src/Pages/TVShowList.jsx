import React, { useEffect, useState } from "react";
import axios from "axios";
import TVShowCard from "../components/TVShowCard";
import "../assets/css/TVShowsList.css";
import SearchBar from "../components/SearchBar";

const API_KEY = "7770c7457a5d7ebb34d378549071963f";

const TVShowList = () => {
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchTVShows = async (pageNum) => {
      setLoading(true);     
      try {
        const res = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${pageNum}`
        );
        setTvShows(res.data.results);
        setError(null);
      } catch (err) {
        setError("Error fetching TV shows.");
      } finally {
        setLoading(false);
      }
  };

  useEffect(() => {
     fetchTVShows(page);
  }, [page]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    
  };

  const goToNextPage = () => setPage((prev) => prev + 1);
  const goToPrevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  if (loading) return <p>Loading TV shows...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="tv-show-list">
      <SearchBar onSearch={handleSearch} /> 
      <h2>TV Shows</h2>
      <div className="tv-show-grid">
        {tvShows
          .filter((show) =>
            show.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((show) => (
            <TVShowCard key={show.id} show={show} />
          ))}
      </div>
      <div className="pagination">
        <button onClick={goToPrevPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={goToNextPage}>Next</button>
      </div>
    </div>
  );
};

export default TVShowList;
