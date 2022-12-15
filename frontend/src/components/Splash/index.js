import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import SearchBar from "./SearchBar";
import SplashListingCards from "./SplashListingCards";
import "./Splash.css";
function Splash() {
  return (
    <div className="splash-container">
      <SearchBar />
      <div className="splash-listing-cards-container">
        <h1 className="splash-listing-cards-header">
          Explore Rentals in Forest Hills, NY
        </h1>
        <div className="splash-listing-cards">
          <SplashListingCards />
          <div className="listing-card1">
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Splash;
