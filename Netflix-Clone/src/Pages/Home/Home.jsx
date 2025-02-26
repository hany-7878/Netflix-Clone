
import React, { useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import RowList from "../../Components/Rows/RowsList/RowList.jsx";
import Footer from "../../Components/Footer/Footer";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");  

  const handleSearch = (term) => {
    setSearchTerm(term);  
  };

  return (
    <div>
      <Header onSearch={handleSearch} />  
      <Banner />
      <RowList searchTerm={searchTerm} />  
      <Footer />
    </div>
  );
}

export default Home;

