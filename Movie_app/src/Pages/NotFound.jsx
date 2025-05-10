import React from 'react'
import { Link } from "react-router-dom";
export default function NotFound() {
   return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="text-muted mb-4">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn px-4"
          style={{ backgroundColor: "#1c1c1c", borderColor: "red", color: "#fff" }} >
          Go Back to Home
      </Link>
    </div>
  );
}

