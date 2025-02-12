// import React from 'react'
// import Header from '../../Components/Header/Header.jsx'
// import Banner from '../../Components/Banner/banner.jsx'
// import Footer from '../../Components/Footer/Footer'
// import RowList from '../../Components/Rows/RowsList/RowList.jsx'


// function Home() {
//   return (
//     <div>
//       <Header/>
//       <Banner/>
//       <RowList/>
//       <Footer/>
//     </div>
//   )
// }

// export default Home
import React, { useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Banner from "../../Components/Banner/banner.jsx";
import RowList from "../../Components/Rows/RowsList/RowList.jsx";
import Footer from "../../Components/Footer/Footer";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");  // State to store search term

  const handleSearch = (term) => {
    setSearchTerm(term);  // Update search term
  };

  return (
    <div>
      <Header onSearch={handleSearch} />  {/* Pass handleSearch to Header */}
      <Banner />
      <RowList searchTerm={searchTerm} />  {/* Pass searchTerm to RowList */}
      <Footer />
    </div>
  );
}

export default Home;
