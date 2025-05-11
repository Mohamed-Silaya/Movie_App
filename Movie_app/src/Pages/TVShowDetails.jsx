import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, selectFavorites } from "../store/favoritesSlice";
import { FaHeart } from "react-icons/fa";
import { axiosInstance, axiosImages } from "../apis/config.js";
import "../assets/css/TVShowDetails.css";
//
export default function TvShowDetails() {
  const [tvshow, setTvShow] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some(
    (fav) => fav.id === tvshow?.id && fav.type === "tv"
  );

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    dispatch(
      toggleFavorite({
        id: tvshow.id,
        type: "tv",
        name: tvshow.name,
        poster_path: tvshow.poster_path,
        first_air_date: tvshow.first_air_date,
      })
    );
  };

  useEffect(() => {
    axiosInstance
      .get(`/tv/${params.id}`)
      .then((res) => setTvShow(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [params.id]);

  return (
    <div className="tvshow-details-container">
      {isLoading ? (
        <div className="loading-overlay">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        tvshow && (
          <div
            className="tvshow-backdrop"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                url(${axiosImages.defaults.baseURL}${tvshow.backdrop_path || ""})`,
            }}
          >
            <div className="tvshow-content animate-fade-in">
              <div className="poster-section">
                <img
                  className="tvshow-poster animate-slide-in"
                  src={`${axiosImages.defaults.baseURL}${tvshow.poster_path}`}
                  alt={tvshow.name}
                />

                <div className="favorite-heart-container">
                  <FaHeart
                    className={`heart-icon ${isFavorite ? "active" : ""}`}
                    onClick={handleFavoriteClick}
                  />
                </div>
              </div>

              <div className="details-section animate-slide-in-delayed">
                <h1 className="tvshow-title">{tvshow.name}</h1>

                <div className="metadata">
                  <span className="release-date">{tvshow.first_air_date}</span>
                  <span className="rating">⭐ {tvshow.vote_average}/10</span>
                </div>

                {tvshow.genres?.length > 0 && (
                  <div className="genres">
                    {tvshow.genres.map((genre) => (
                      <span key={genre.id} className="genre-tag">
                        {genre.name}
                      </span>
                    ))}
                  </div>
                )}

                {tvshow.overview && (
                  <p className="overview">{tvshow.overview}</p>
                )}

                <div className="additional-info">
                  <div className="info-group">
                    <h3>Original Language</h3>
                    <p>{tvshow.original_language?.toUpperCase()}</p>
                  </div>
                  <div className="info-group">
                    <h3>Status</h3>
                    <p>{tvshow.status}</p>
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
