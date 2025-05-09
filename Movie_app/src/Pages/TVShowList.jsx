import React, { useEffect, useState } from "react";
import axios from "axios";
import TVShowCard from "../components/TVShowCard" ;
import "../assets/css/TVShowsList.css";

const API_KEY = "7770c7457a5d7ebb34d378549071963f";

const TVShowList = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
        );
        setTvShows(res.data.results);
      } catch (err) {
        setError("Error fetching TV shows.");
      } finally {
        setLoading(false);
      }
    };

    fetchTVShows();
  }, []);

  if (loading) return <p>Loading TV shows...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="tv-show-list">
      <h2>TV Shows</h2>
      <div className="tv-show-grid">
        {tvShows.map((show) => (
          <TVShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default TVShowList;
