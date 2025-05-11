import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const API_KEY = "7770c7457a5d7ebb34d378549071963f";

export default function NowPlaying() {
  const [movies, setMovies] = useState([]);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=${language}`
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [language]);

  return (
    <div>
      <h2>Now Playing ({language.toUpperCase()})</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title || movie.name}</li>
        ))}
      </ul>
    </div>
  );
}