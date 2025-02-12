// import React, { useEffect, useState } from "react";
// import axios from "../../../Utils/axios";
// import "./row.css";
// import movieTrailer from "movie-trailer";
// import Youtube from "react-youtube";

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");
//   const [loading, setLoading] = useState(true); // New state for loading movies

//   const image_base_url = "https://image.tmdb.org/t/p/original/";

//   // Fetching movies data
//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         console.log("Fetching from URL:", fetchUrl);
//         const response = await axios.get(fetchUrl);
//         console.log("Full API Response:", response);
//         setMovies(response.data?.results || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false); // Set loading to false when data is fetched or error occurs
//       }
//     };

//     fetchMovies();

//     // Cleanup function to avoid memory leaks if the component unmounts
//     return () => {
//       setMovies([]); // Clear movie state if component unmounts
//       setTrailerUrl(""); // Clear trailer URL on unmount
//     };
//   }, [fetchUrl]);

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl(""); // If trailer is already open, close it
//     } else {
//       movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
//         .then((url) => {
//           if (url) {
//             const urlParams = new URLSearchParams(new URL(url).search);
//             setTrailerUrl(urlParams.get("v"));
//           } else {
//             console.log("No trailer found for", movie?.name);
//           }
//         })
//         .catch((error) => console.error("Error finding trailer:", error));
//     }
//   };

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className="row">
//       <h1>{title}</h1>

//       {loading ? (
//         <div>Loading movies...</div> // Display loading text while fetching movies
//       ) : (
//         <div className="row__posters">
//           {movies.length > 0 ? (
//             movies.map((movie, index) => (
//               <img
//                 key={movie.id || index}
//                 src={`${image_base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}` || ""}
//                 alt={movie?.name || "Movie"}
//                 className={`row__poster ${isLargeRow && "row__posterLarge"}`}
//                 onClick={() => handleClick(movie)}
//               />
//             ))
//           ) : (
//             <p>No movies available.</p> // If no movies are found
//           )}
//         </div>
//       )}

//       {trailerUrl && (
//         <div style={{ padding: "40px" }}>
//           <Youtube videoId={trailerUrl} opts={opts} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Row;

import React, { useEffect, useState } from "react";
import axios from "../../../Utils/axios";
import "./row.css";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow, searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const image_base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log("Fetching from URL:", fetchUrl);
        const response = await axios.get(fetchUrl);
        console.log("Full API Response:", response);
        setMovies(response.data?.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    return () => {
      setMovies([]);
      setTrailerUrl("");
    };
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            console.log("No trailer found for", movie?.name);
          }
        })
        .catch((error) => console.error("Error finding trailer:", error));
    }
  };

  // Filter movies based on the searchTerm
  const filteredMovies = movies.filter((movie) =>
    (movie.title || movie.name || movie.original_name)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>

      {loading ? (
        <div>Loading movies...</div>
      ) : (
        <div className="row__posters">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <img
                key={movie.id || index}
                src={`${image_base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}` || ""}
                alt={movie?.name || "Movie"}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                onClick={() => handleClick(movie)}
              />
            ))
          ) : (
            <p>No movies found for "{searchTerm}"</p>
          )}
        </div>
      )}

      {trailerUrl && (
        <div style={{ padding: "40px" }}>
          <Youtube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Row;
