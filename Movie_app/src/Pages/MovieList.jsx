import React, { useEffect, useState } from "react";
import { axiosInstance } from "../apis/config";
import "../assets/css/MovieList.css";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";  

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/movie/popular")
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container">
      <SearchBar /> {/* ✅ Show search bar at top */}

      <div className="heading text-center mt-4">
        <h2>Popular Movies</h2>
      </div>
      <hr />

      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <MovieCard movieItem={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
