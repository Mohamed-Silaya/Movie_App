import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { axiosInstance, axiosImages } from "../apis/config.js";
export default function MovieDetails() {
  const [movie, setMovie] = useState();
  const params = useParams();

  const [] = useSearchParams();

  console.log(params);

  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
  <h2>MovieDetails</h2>
  <hr />
  </div>
  );
}

