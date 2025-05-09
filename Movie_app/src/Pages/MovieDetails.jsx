import React from "react";
import { useParams } from "react-router";

export default function MovieDetails() {
  const params = useParams();
  console.log(params);
  return <div>MovieDetails</div>;
}
