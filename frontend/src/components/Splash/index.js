import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";
import SplashListingCards from "./SplashListingCards";
import * as propertyActions from "../../store/listings";
import "./Splash.css";

function Splash() {
  const dispatch = useDispatch();
  const listings = useSelector(propertyActions.getListings);
  const history = useHistory();

  useEffect(() => {
    dispatch(propertyActions.fetchListings());
  }, [dispatch]);

  const handleViewMoreClick = (e, listings) => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * listings.length);
    history.push(`/search/${listings[randomNum].city}`);
  };

  return (
    <div className="splash-container">
      <SearchBar />
      <div className="splash-listing-cards-container">
        <h1 className="splash-listing-cards-header">Explore Rentals</h1>
        <div className="splash-listing-cards">
          {listings && <SplashListingCards listings={listings} />}
        </div>

        <button
          className="view-more-button"
          onClick={(e) => handleViewMoreClick(e, listings)}
        >
          View More
        </button>
      </div>
    </div>
  );
}
export default Splash;
