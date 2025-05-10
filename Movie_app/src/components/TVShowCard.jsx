import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";
import { useNavigate } from "react-router-dom";
import "../assets/css/TVShowCard.css";

const TVShowCard = ({ show }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  // Check if the show is already in the favorites list
  const isFavorite = favorites.some((item) => item.id === show.id);

  // Redirect to the details page of the selected TV show
  const goToDetails = () => {
    navigate(`/TVShowDetails/${show.id}`);
  };

  // Toggle the favorite status of the show
  const handleFavoriteToggle = (e) => {
    e.stopPropagation(); // Prevent card click when clicking the heart icon
    dispatch(
      toggleFavorite({
        id: show.id,
        name: show.name,
        poster_path: show.poster_path,
        first_air_date: show.first_air_date,
        type: "tv", // type 'tv' for TV shows
      })
    );
  };

  return (
    <div className="tv-show-card" onClick={goToDetails}>
      <div className="card-img">
        <img
          src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
          alt={show.name}
          className="tv-show-img"
        />
      </div>
      <div className="card-body">
        <h3>{show.name}</h3>
        <p>{show.first_air_date}</p>
      </div>
      <div className="card-foot d-flex justify-content-between">
        <button className="like-button" onClick={handleFavoriteToggle}>
          <i
            className={`fa-solid fa-heart ${isFavorite ? "text-danger" : ""}`}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default TVShowCard;
