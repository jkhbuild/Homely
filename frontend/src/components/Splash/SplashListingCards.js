import React, { useEffect, useState, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as propertyActions from "../../store/listings";

function SplashListingCards({ listings }) {
  // const dispatch = useDispatch;
  // useEffect(() => {
  //   dispatch(propertyActions.fetchListing(listingId));
  // }, [dispatch]);
  // const listing = useSelector(propertyActions.getListing(listingId));
  const history = useHistory();
  const randomCities = [];
  if (listings && listings.length > 1) {
    while (randomCities.length < 4) {
      const randomNum = Math.floor(Math.random() * listings.length);
      if (!randomCities.includes(listings[randomNum])) {
        randomCities.push(listings[randomNum]);
      }
    }
  }

  const handleListingCardClick = (e, listing) => {
    e.preventDefault();
    history.push(`/listings/${listing.id}/show`);
  };

  return (
    <>
      {listings[0] &&
        listings[0].photosUrl &&
        randomCities.map((listing) => {
          return (
            <button
              className="splash-listing-card-button"
              onClick={(e) => handleListingCardClick(e, listing)}
            >
              <div className="splash-listing-card">
                <img src={listing.photosUrl[0]} alt="logo"></img>
                <h4>
                  {listing.address}
                  <br></br>
                  {listing.city}, {listing.state} {listing.zipcode}
                </h4>
                <p>
                  {listing.beds} Beds | ${listing.rent}
                </p>
              </div>
            </button>
          );
        })}
    </>
  );
}
export default SplashListingCards;
