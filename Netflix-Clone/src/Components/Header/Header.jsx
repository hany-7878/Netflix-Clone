import React, { useState } from "react";
import "./Header.css";
import Netflix from "../../assets/Images/Logonetflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function Header({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <button className="menu_icon" onClick={handleMenuToggle}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <img src={Netflix} alt="Netflix logo" className="logo" />
        </div>

        <div className={`header_center ${isMenuOpen ? "open" : ""}`}>
          <ul className={`nav_links ${isMenuOpen ? "open" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tvshows">TV Shows</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/latest">Latest</Link></li>
            <li><Link to="/mylist">My List</Link></li>
            <li><Link to="/languages">Browse by Languages</Link></li>
          </ul>
        </div>

        <div className="header_right">
          <ul>
           
            <li className="search_input_container">
              <input
                type="text"
                className="search_input"
                placeholder="Search movies..."
                value={searchInput}
                onChange={handleSearchChange}
              />
              
              <SearchIcon className="search_icon" />
            
            </li>
            
            <li><NotificationsIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;



