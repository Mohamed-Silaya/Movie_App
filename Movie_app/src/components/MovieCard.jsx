import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";
import "../assets/css/MovieCard.css";

export default function MovieCard({ movieItem }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);
  
  const isFavorite = favorites.some(fav => fav.id === movieItem.id);

  const reDirectToDetails = (movieID) => {
    navigate(`/MovieDetails/${movieID}`);
  }

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite({
      id: movieItem.id,
      title: movieItem.title,
      poster_path: movieItem.poster_path,
      release_date: movieItem.release_date,
      type: 'movie'
    }));
  }

  return (
    <div className="card mb-3" onClick={() => reDirectToDetails(movieItem.id)}>
      <div className="card-img">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`} 
          className="card-img-top movie-poster" 
          alt={movieItem.title}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{movieItem.title}</h5>
      </div>
      <div className="card-foot d-flex justify-content-between">  
        <h3 className="mt-2">{movieItem.release_date}</h3>
        <button onClick={handleFavoriteClick}>
          <i className={`fa-solid fa-heart ${isFavorite ? 'text-danger' : ''}`}></i>
        </button>
      </div>
    </div>
  );
}