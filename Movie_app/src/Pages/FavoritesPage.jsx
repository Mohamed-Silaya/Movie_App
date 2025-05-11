
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectFavorites, toggleFavorite } from '../store/favoritesSlice';
import { useLanguage } from "../context/LanguageContext";
import "../assets/css/MovieCard.css"; 

export default function FavoritesPage() {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('movie');
  const { language } = useLanguage();

  const filteredFavorites = favorites.filter(fav => fav.type === selectedType);
  const isFavorite = (id) => favorites.some(f => f.id === id);

  const goToDetails = (fav) => {
    navigate(`/${fav.type === 'movie' ? 'MovieDetails' : 'TVShowDetails'}/${fav.id}`);
  };

  const handleFavoriteClick = (e, fav) => {
    e.stopPropagation();
    dispatch(toggleFavorite(fav));
  };

  return (
    <div className="container min-vh-100 py-5">
      <div className="text-center mb-4">
        <h2 className="text-white">
          {language === 'ar' ? 'المفضلة' : 'Favorites'}
        </h2>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <button
            className={`btn btn-outline-success rounded-pill px-4 ${selectedType === 'movie' ? 'active' : ''}`}
            onClick={() => setSelectedType('movie')}
          >
            {language === 'ar' ? 'أفلام' : 'Movies'}
          </button>
          <button
            className={`btn btn-outline-success rounded-pill px-4 ${selectedType === 'tv' ? 'active' : ''}`}
            onClick={() => setSelectedType('tv')}
          >
            {language === 'ar' ? 'مسلسلات' : 'TV Shows'}
          </button>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {filteredFavorites.length > 0 ? (
          filteredFavorites.map((fav) => (
            <div
              className="card mb-3"
              style={{ width: '250px' }}
              key={fav.id}
              onClick={() => goToDetails(fav)}
            >
              <div className="card-img">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${fav.poster_path}`}
                  className="card-img-top movie-poster"
                  alt={fav.title || fav.name}
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">{fav.title || fav.name}</h5>
              </div>

              <div className="card-foot d-flex justify-content-between">
                <h3 className="mt-2">
                  {fav.release_date || fav.first_air_date}
                </h3>
                <button onClick={(e) => handleFavoriteClick(e, fav)}>
                  <i className={`fa-solid fa-heart ${isFavorite(fav.id) ? 'text-danger' : ''}`}></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-light text-center">
            {language === 'ar'
              ? 'لا توجد عناصر مفضلة في هذه الفئة.'
              : 'No favorites found in this category.'}
          </p>
        )}
      </div>
    </div>
  );
}
