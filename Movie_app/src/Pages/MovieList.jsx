import React from "react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/config";
import "../assets/css/MovieList.css";
import MovieCard from "../components/MovieCard";
import { li } from "motion/react-client";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD

=======
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);
  // useEffect(() => {
  //   axiosInstance
  //     .get("/movie/now_playing")
  //     .then((res) => setMovies(res.data.results))
  //     .catch((err) => console.log(err))
  //     .finally(() => setIsLoading(false));
  // }, []);
>>>>>>> 14e8dcd233763015412a3ee917b3c79bb4d7c959
  useEffect(() => {
    axiosInstance
      .get(
        `/movie/now_playing?page=${currentPage}&api_key=7770c7457a5d7ebb34d378549071963f`
      )
      .then((res) => {
        setMovies(res.data.results);
        setPages(res.data.total_pages);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
<<<<<<< HEAD
  }, []);

=======
  }, [currentPage]);
  console.log(movies);
  console.log(pages);
  console.log(currentPage);
  const handlePageClick = (newPage)=>{
    if(newPage >= 1 && newPage <= pages){
      setCurrentPage(newPage);
    }
  }
  const handlePageNum = ()=>{
    const pageNum = [];
    const maxShow =5;
    const half =Math.floor(maxShow /2);
    let start = Math.max(currentPage-half,1)
    const end = Math.min(start+maxShow+1,pages)
    if (end - start < maxShow -1){
      start = Math.max(end - maxShow+1,1)
    }
    for (let i = start; i <= end; i++) {
      pageNum.push(
        <li className={`page-item ${i == currentPage ? "active" : ""}`} key={i}>
           <button className="page-link" onClick={() => handlePageClick(i)}>{i}</button>
        </li>
      )
    }
    return pageNum;
  }
>>>>>>> 14e8dcd233763015412a3ee917b3c79bb4d7c959
  return (
    <div className="movie-list-container">
      <div className="container">
        <div className="heading text-center">
          <h2>Movie List</h2>
        </div>
        <hr />
        {isLoading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <div className="row">
<<<<<<< HEAD
          {movies.map((movie) => (
            <div className="col-md-3" key={movie.id}>
              <MovieCard movieItem={movie} />
            </div>
          ))}
=======
          {movies.map((movie) => {
            return (
              <div className="col-md-3" key={movie.id}>
                <MovieCard movieItem={movie} />
              </div>
            );
          })}
>>>>>>> 14e8dcd233763015412a3ee917b3c79bb4d7c959
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center mt-3">
            <li class={`page-item ${currentPage == 1 ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => handlePageClick(currentPage - 1)}>&laquo;</button>
            </li>
            {handlePageNum()}
            <li class={`page-item ${currentPage == pages ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => handlePageClick(currentPage - 1)}>&raquo;</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}