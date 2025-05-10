import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../store/favoritesSlice';
import MovieCard from '../components/MovieCard';
import { useNavigate } from "react-router-dom";
import SearchBar from '../components/SearchBar';  // إضافة الاستيراد هنا

export default function FavoritesPage() {
  const favorites = useSelector(selectFavorites);
  const [selectedType, setSelectedType] = useState('movie');
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredFavorites = favorites.filter(fav => fav.type === selectedType);

  const handleSearch = () => {
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <div className="container">
      <div className="heading text-center">
        <h2>Favorites</h2>
        <div className="btn-group my-3">
          <button
            className={`btn ${selectedType === 'movie' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setSelectedType('movie')}
          >
            Movies
          </button>
          <button
            className={`btn ${selectedType === 'tv' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setSelectedType('tv')}
          >
            TV Shows
          </button>
        </div>
      </div>
      <hr />
      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        handleSearch={handleSearch} 
      />
      <div className="row">
        {filteredFavorites.map((fav) => (
          <div className="col-md-3" key={`${fav.type}-${fav.id}`}>
            <MovieCard
              movieItem={{
                id: fav.id,
                title: fav.title,
                release_date: fav.type === 'movie' ? fav.date : undefined,
                name: fav.type === 'tv' ? fav.title : undefined,
                first_air_date: fav.type === 'tv' ? fav.date : undefined,
                poster_path: fav.poster_path
              }}
              type={fav.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
