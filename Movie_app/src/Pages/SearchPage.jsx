// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import MovieCard from "../components/MovieCard";

// const SearchPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [results, setResults] = useState([]);
//   const query = new URLSearchParams(location.search).get("query");

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!query) return;
//       try {
        
//         const moviesRes = await axios.get("https://api.themoviedb.org/3/search/movie", {
//           params: {
//             api_key: "7770c7457a5d7ebb34d378549071963f",
//             query,
//           },
//         });

    
//         const tvRes = await axios.get("https://api.themoviedb.org/3/search/tv", {
//           params: {
//             api_key: "7770c7457a5d7ebb34d378549071963f",
//             query,
//           },
//         });


//         const combinedResults = [
//           ...moviesRes.data.results.map((item) => ({ ...item, type: "movie" })),
//           ...tvRes.data.results.map((item) => ({ ...item, type: "tv" })),
//         ];
//         setResults(combinedResults);
//       } catch (error) {
//         console.error("Error while searching:", error);
//       }
//     };

//     fetchData();
//   }, [query]);

//   const handleBack = () => {
//     navigate("/");
//   };

//   return (
//     <div className="p-4">
//       <h2 className="mb-3">Search results for: <strong>{query}</strong></h2>
//       <div className="mb-4 d-flex gap-2">
//         <button onClick={handleBack} className="btn btn-secondary">🏠 Home</button>
//       </div>
//       <div className="row">
//         {results.length > 0 ? (
//           results.map((item) => (
//             <div className="col-md-3 mb-4" key={`${item.id}-${item.type}`}>
//               <MovieCard movieItem={item} />
//             </div>
//           ))
//         ) : (
//           <p>No results found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchPage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useLanguage } from "../context/LanguageContext";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(location.search).get("query");
  const { language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;
      try {
        const moviesRes = await axios.get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "7770c7457a5d7ebb34d378549071963f",
            query,
            language,
          },
        });

        const tvRes = await axios.get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: "7770c7457a5d7ebb34d378549071963f",
            query,
            language,
          },
        });

        const combinedResults = [
          ...moviesRes.data.results.map((item) => ({ ...item, type: "movie" })),
          ...tvRes.data.results.map((item) => ({ ...item, type: "tv" })),
        ];
        setResults(combinedResults);
      } catch (error) {
        console.error("Error while searching:", error);
      }
    };

    fetchData();
  }, [query, language]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="p-4">
      <h2 className="mb-3">Search results for: <strong>{query}</strong></h2>
      <div className="mb-4 d-flex gap-2">
        <button onClick={handleBack} className="btn btn-secondary">🏠 Home</button>
      </div>
      <div className="row">
        {results.length > 0 ? (
          results.map((item) => (
            <div className="col-md-3 mb-4" key={`${item.id}-${item.type}`}>
              <MovieCard movieItem={item} />
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
