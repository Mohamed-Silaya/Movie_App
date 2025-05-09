import React from "react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/config";
import "../assets/css/MovieList.css";
import MovieCard from "../components/MovieCard";

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
  console.log(movies);

  return (
    <>
      <div className="container">
        <div className="heading text-center">
          <h2>Movie List</h2>
        </div>
        <hr />
        {isLoading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <div className="row">
          {movies.map((movie) => {
            return (
              <div className="col-md-3" key={movie.id}>
                <MovieCard
                  movieItem={movie}
                  // onDelete={(id) => handleDelete(id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
