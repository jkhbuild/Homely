import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as propertyActions from "../../store/listings";
import "./Splash.css";
function SearchBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   dispatch(propertyActions.fetchListings());
  // }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    // if (searchInput !== "") history.push(`/search/${searchInput}`);
    history.push(`/search/${searchInput}`);
  };

  return (
    <section>
      {/* <div className="splash-container"> */}
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
      {/* </div> */}
    </section>
  );
}

export default SearchBar;
