import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Splash.css";

function SearchBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("test", searchInput);
    console.log("test2", !searchInput);
    console.log("test3", !!searchInput);
    if (!searchInput) {
      history.push(`/search/`);
    } else {
      history.push(`/search/${searchInput}`);
    }
  };

  return (
    <section>
      <div className="splash-main-container">
        <div className="header-container">
          <h1 className="search-bar-header1">Discover Your New Home</h1>
          <h2 className="search-bar-header2">
            Helping appacademy graduates find affordable homes
          </h2>
        </div>
        <div className="search-bar-container">
          <input
            type="text"
            className="splash-search-bar"
            placeholder="Search by city, state, or zipcode"
            onChange={(e) => setSearchInput(e.target.value)}
          ></input>
          <button
            type="submit"
            className="splash-search-button"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
