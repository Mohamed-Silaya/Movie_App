import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import TVShowCard from "../components/TVShowCard";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(location.search).get("query");
  const type = new URLSearchParams(location.search).get("type");

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;
      try {
        let moviesRes = [], tvRes = [];

        if (type === "movie" || !type) {
          moviesRes = await axios.get("https://api.themoviedb.org/3/search/movie", {
            params: {
              api_key: "7770c7457a5d7ebb34d378549071963f",
              query,
            },
          });
        }

        if (type === "tv" || !type) {
          tvRes = await axios.get("https://api.themoviedb.org/3/search/tv", {
            params: {
              api_key: "7770c7457a5d7ebb34d378549071963f",
              query,
            },
          });
        }

        const combinedResults = [
          ...moviesRes.data.results.map((item) => ({ ...item, type: "movie" })),
          ...tvRes.data.results.map((item) => ({ ...item, type: "tv" })),
        ];
        setResults(combinedResults);
      } catch (error) {
        console.error("Error while searching:", error);
      }
    };

    fetchData();
  }, [query, type]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="p-4">
      <h2 className="mb-3">Search results for: <strong>{query}</strong></h2>
      <div className="mb-4 d-flex gap-2">
        <button onClick={handleBack} className="btn btn-secondary">🏠 Home</button>
      </div>
      <div className="row">
        {results.length > 0 ? (
          results.map((item) => (
            <div className="col-md-3 mb-4" key={`${item.id}-${item.type}`}>
              {item.type === "movie" ? (
                <MovieCard movieItem={item} />
              ) : (
                <TVShowCard show={item} />
              )}
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
