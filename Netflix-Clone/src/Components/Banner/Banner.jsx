import React, { useEffect, useState } from "react";
import axios from "../../Utils/axios";
import requests from "../../Utils/requests";
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY; // Access the API key from the .env file

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Include API key in the request URL
        const response = await axios.get(requests.fetchNetflixOriginals, {
          params: {
            api_key: API_KEY,
          },
        });
        const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.log("Error fetching banner data: ", error);
      }
    };
    fetchData();
  }, [API_KEY]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  if (!movie) {
    return null;
  }

  return (
    <header className="banner" style={{
      backgroundSize: "cover",
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h2 className="banner_description">{truncate(movie?.overview, 150)}</h2>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
};

export default Banner;
