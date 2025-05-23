import React, { useEffect, useState } from "react";
import { axiosInstance } from "../apis/config";
import "../assets/css/MovieList.css";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { useLanguage } from "../context/LanguageContext";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const { language } = useLanguage();

  const fetchMovies = (page = 1, query = "") => {
    setIsLoading(true);
    const endpoint = query
      ? `/search/movie?query=${query}&page=${page}&language=${language}`
      : `/movie/now_playing?page=${page}&language=${language}`;

    axiosInstance
      .get(endpoint)
      .then((res) => {
        setMovies(res.data.results);
        setPages(res.data.total_pages);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchMovies(currentPage, searchQuery);
  }, [currentPage, language]);

  const handlePageClick = (newPage) => {
    if (newPage >= 1 && newPage <= pages) {
      setCurrentPage(newPage);
    }
  };

  const handleSearchClick = () => {
    setCurrentPage(1);
    fetchMovies(1, searchQuery);
  };

  const handlePageNum = () => {
    const pageNum = [];
    const maxShow = 5;
    const half = Math.floor(maxShow / 2);
    let start = Math.max(currentPage - half, 1);
    const end = Math.min(start + maxShow - 1, pages);
    if (end - start < maxShow - 1) {
      start = Math.max(end - maxShow + 1, 1);
    }
    for (let i = start; i <= end; i++) {
      pageNum.push(
        <li
          className={`page-item ${i === currentPage ? "active" : ""}`}
          key={i}
        >
          <button className="page-link" onClick={() => handlePageClick(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pageNum;
  };

  return (
    <div className="movie-list-container">
      <div className="container">
        <SearchBar />
        <div className="heading text-center">
          <h2>Movie List</h2>
        </div>
        <hr />
        {isLoading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="row">
            {movies && movies.length > 0 ? (
              movies.map((movie) => (
                <div className="col-md-4 col-sm-12 col-lg-3" key={movie.id}>
                  <MovieCard movieItem={movie} />
                </div>
              ))
            ) : (
              <p>No movies found.</p>
            )}
          </div>
        )}
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center mt-3">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageClick(currentPage - 1)}
              >
                &laquo;
              </button>
            </li>
            {handlePageNum()}
            <li
              className={`page-item ${currentPage === pages ? "disabled" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageClick(currentPage + 1)}
              >
                &raquo;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
