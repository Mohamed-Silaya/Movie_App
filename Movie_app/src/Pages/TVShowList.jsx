import React, { useEffect, useState } from "react";
import axios from "axios";
import TVShowCard from "../components/TVShowCard";
import "../assets/css/TVShowsList.css";
import SearchBar from "../components/SearchBar";

const API_KEY = "7770c7457a5d7ebb34d378549071963f";

const TVShowList = () => {
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchTVShows = async (pageNum) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${pageNum}`

      );
      setTvShows(res.data.results);
      setTotalPages(res.data.total_pages);
      setError(null);
    } catch (err) {
      setError("Error fetching TV shows.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTVShows(page);
  }, [page]);

  //Assign the new clicked Page
  const handlePageClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  const handleNumbers = () => {
    const pageNum = [];
    const maxShow = 5;
    const half = Math.floor(maxShow / 2);
    let start = Math.max(page - half, 1);
    const end = Math.min(start + maxShow-1, totalPages);
    //check for if current > 3 it only appear previous 2 pages and next to current
    if (end - start < maxShow - 1) {
      start = Math.max(end - maxShow + 1, 1);
    }
    //put pages numbers into Array of lists
    for (let i = start; i <= end; i++) {
      pageNum.push(
        <li
          className={`page-item ${i === page ? "active" : ""}`} key={i} >
          <button className="page-link" onClick={() => handlePageClick(i)}> {i} </button>
        </li>
      );
    }
    return pageNum;


  };

  useEffect(() => {
     fetchTVShows(page);
  }, [page]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    

  };


  if (loading) return <p>Loading TV shows...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="tv-show-list">
      <SearchBar onSearch={handleSearch} /> 
      <h2>TV Shows</h2>
      <div className="tv-show-grid">
        {tvShows
          .filter((show) =>
            show.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((show) => (
            <TVShowCard key={show.id} show={show} />
          ))}
      </div>
      <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center mt-3">
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => handlePageClick(page - 1)}>
                &laquo;
              </button>
            </li>
            {handleNumbers()}
            <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => handlePageClick(page + 1)}>
                &raquo;
              </button>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default TVShowList;
