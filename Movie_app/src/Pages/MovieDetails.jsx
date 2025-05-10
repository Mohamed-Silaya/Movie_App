import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, selectFavorites } from "../store/favoritesSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { axiosInstance, axiosImages } from "../apis/config.js";
import "../assets/css/MovieDetails.css";

export default function MovieDetails() {
  const [movie, setMovie] = useState();
  const [recommendedMovies, setRecommendedMovies] = useState([]); // Add state for recommendations

  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  // ===========================================================
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(
    (fav) => fav.id === movie?.id && fav.type === "movie"
  );

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    dispatch(
      toggleFavorite({
        id: movie.id,
        type: "movie",
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
      })
    );
  };
  // ===========================================================
  const { id } = useParams();
  const movieId = Number(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [movieResponse, recommendationsResponse] = await Promise.all([
          axiosInstance.get(`/movie/${id}`),
          axiosInstance.get(`/movie/${id}/recommendations`),
        ]);

        setMovie(movieResponse.data);
        setRecommendedMovies(recommendationsResponse.data.results || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div className="movie-details-container">
      {isLoading ? (
        <div className="loading-overlay">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        movie && (
          <div
            className="movie-backdrop"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                url(${axiosImages.defaults.baseURL}${
                movie?.backdrop_path || ""
              })`,
            }}
          >
            <div className="movie-content animate-fade-in">
              <div className="poster-section">
                <img
                  className="movie-poster animate-slide-in"
                  src={`${axiosImages.defaults.baseURL}${movie?.poster_path}`}
                  alt={movie.title}
                />

                <div className="favorite-heart-container">
                  <FaHeart
                    className={`heart-icon ${isFavorite ? "active" : ""}`}
                    onClick={handleFavoriteClick}
                  />
                </div>
              </div>

              <div className="details-section animate-slide-in-delayed">
                <h1 className="movie-title">{movie.title}</h1>

                <div className="metadata">
                  <span className="release-date">{movie.release_date}</span>
                  <span className="runtime">{movie.runtime} mins</span>
                  <span className="rating">⭐ {movie.vote_average}/10</span>
                </div>

                {movie.genres?.length > 0 && (
                  <div className="genres">
                    {movie.genres.map((genre) => (
                      <span key={genre.id} className="genre-tag">
                        {genre.name}
                      </span>
                    ))}
                  </div>
                )}

                {movie.overview && <p className="overview">{movie.overview}</p>}

                <div className="additional-info">
                  <div className="info-group">
                    <h3>Original Language</h3>
                    <p>{movie.original_language?.toUpperCase()}</p>
                  </div>
                  <div className="info-group">
                    <h3>Status</h3>
                    <p>{movie.status}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
