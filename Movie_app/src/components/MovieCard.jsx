import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/MovieCard.css";

export default function MovieCard(props) {
  const navigate = useNavigate();
  const { movieItem } = props;

  const reDirectToDetails = (movieID) => {
    navigate(`/MovieDetails/${movieID}`); 
  };

  return (
    <div className="card mb-3" onClick={() => reDirectToDetails(movieItem.id)}>
      <div className="card-img">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`}
          className="card-img-top movie-poster"
          alt={movieItem.title || movieItem.name} 
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{movieItem.title || movieItem.name}</h5>
      </div>
      <div className="card-foot d-flex justify-content-between">
        <h3 className="mt-2">{movieItem.release_date || movieItem.first_air_date}</h3>
        <button>
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>
    </div>
  );
}
