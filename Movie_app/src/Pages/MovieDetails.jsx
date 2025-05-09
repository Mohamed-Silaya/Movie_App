import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { axiosInstance, axiosImages } from "../apis/config.js";
import "../assets/css/MovieDetails.css";
export default function MovieDetails() {
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const [] = useSearchParams();

  console.log(params);

  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [params.id]);


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
          <div className="movie-backdrop" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
              url(${axiosImages.defaults.baseURL}${movie?.backdrop_path || ''})`
          }}>
            <div className="movie-content animate-fade-in">
              <div className="poster-section">
                <img
                  className="movie-poster animate-slide-in"
                  src={`${axiosImages.defaults.baseURL}${movie?.poster_path}`}
                  alt={movie.title}
              
                  
                />
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

                {movie.overview && (
                  <p className="overview">{movie.overview}</p>
                )}

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