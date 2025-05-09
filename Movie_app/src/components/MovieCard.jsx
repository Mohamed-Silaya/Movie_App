import React from "react";
import { Link, useNavigate } from "react-router";
import { axiosImages } from "../apis/config";
import { useState,useEffect } from "react";
import "../assets/css/MovieCard.css"
export default function MovieCard(props) {
  const navigate = useNavigate();
const reDirectToDetails = (movieID)=>{
  navigate(`/MovieDetails/${movieID}`)
}
const {movieItem} = props;
  return (
    <div className="card mb-3" onClick={() => reDirectToDetails(movieItem.id)}>
      <div className="card-img">
        <img src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`} className="card-img-top movie-poster" alt={movieItem.title}/>
      </div>
    <div className="card-body">
        <h5 className="card-title">{movieItem.title}</h5>
    </div>
    <div className="card-foot d-flex justify-content-between">  
        <h3 className="mt-2">{movieItem.release_date}</h3>
        <button><i className="fa-solid fa-heart"></i></button>
    </div>
  </div>
  );
}
