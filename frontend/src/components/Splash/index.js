import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import SearchBar from "./SearchBar";
import SplashListingCards from "./SplashListingCards";
import * as propertyActions from "../../store/listings";
import "./Splash.css";

function Splash() {
  const dispatch = useDispatch();
  const listings = useSelector(propertyActions.getListings);

  useEffect(() => {
    dispatch(propertyActions.fetchListings());
  }, [dispatch]);

  return (
    <div className="splash-container">
      <SearchBar />
      <div className="splash-listing-cards-container">
        <h1 className="splash-listing-cards-header">
          Explore Rentals in Queens, NY
        </h1>
        <div className="splash-listing-cards">
          <SplashListingCards listings={listings} />
        </div>
      </div>
    </div>
  );
}
export default Splash;
