import React from "react";
import { useNavigate } from "react-router-dom";  
import "../assets/css/TVShowCard.css";

const TVShowCard = ({ show }) => {
  const navigate = useNavigate(); 
  
  const goToDetails = () => {
    navigate(`/tv/${show.id}`);
  };

  return (
    <div className="tv-show-card" onClick={goToDetails}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
        alt={show.name}
        className="tv-show-img"
      />
      <h3>{show.name}</h3>
      <p>{show.first_air_date}</p>
      <button className="like-button">add to favourite ♡</button>
    </div>
  );
};

export default TVShowCard;
