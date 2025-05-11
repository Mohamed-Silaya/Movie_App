import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const languages = ["en", "ar", "fr", "zh"];

  const handleChangeLanguage = (lang) => {
    setLanguage(lang); 
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#5367ff" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center px-4">
        <Link className="navbar-brand fw-bold" to="/" style={{ color: "#fff" }}>
          Movie App
        </Link>

        <div className="d-flex align-items-center gap-3">
          <div className="dropdown">
            <button
              className="btn btn-sm dropdown-toggle text-white"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              {language.toUpperCase()}
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
              {languages.map((lang) => (
                <li key={lang}>
                  <button
                    className="dropdown-item"
                    onClick={() => handleChangeLanguage(lang)}
                  >
                    {lang.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/TVShowList"
            className="text-white text-decoration-none d-flex align-items-center gap-1"
          >
            <span>TV-Shows</span>
          </Link>
          <Link
            to="/favorites"
            className="text-white text-decoration-none d-flex align-items-center gap-1"
          >
            <FaHeart />
            <span>Favorites</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
