
import React from "react";
import Row from "../Row/Row.jsx";
import requests from "../../../Utils/requests.jsx";

const RowList = ({ searchTerm }) => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        searchTerm={searchTerm} 
      />
      <Row
        title="Trending now"
        fetchUrl={requests.fetchTrending}
        searchTerm={searchTerm} // Pass searchTerm to Row
      />
      <Row
        title="Top rated"
        fetchUrl={requests.fetchTopRated}
        searchTerm={searchTerm} // Pass searchTerm to Row
      />
      <Row
        title="Comedy"
        fetchUrl={requests.fetchComedyMovies}
        searchTerm={searchTerm} // Pass searchTerm to Row
      />
      <Row
        title="Action movies"
        fetchUrl={requests.fetchActionMovies}
        searchTerm={searchTerm} // Pass searchTerm to Row
      />
      <Row
        title="Horror movies"
        fetchUrl={requests.fetchHorrorMovies}
        searchTerm={searchTerm} // Pass searchTerm to Row
      />
      <Row
        title="Romance"
        fetchUrl={requests.fetchRomanceMovies}
        searchTerm={searchTerm} // Pass searchTerm to Row
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        searchTerm={searchTerm} // Pass searchTerm to Row
      />
      <Row
        title="Tv shows"
        fetchUrl={requests.fetchTvShow}
        searchTerm={searchTerm} // Pass searchTerm to Row
      />
    </>
  );
};

export default RowList;
