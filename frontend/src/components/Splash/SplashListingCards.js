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
  // const randomCities = [];
  // if (listings) {
  //   for (let i = 0; randomCities < 4; i++) {
  //     const randomNum = Math.floor(Math.random() * listings.length);
  //     if (randomCities.includes(listings[randomNum])) {
  //       console.log(listings[randomNum]);
  //       randomCities.push(listings[randomNum]);
  //     }
  //   }
  // }

  // console.log(listing);
  return (
    <>
      <div className="listing-card-container">
        <img src={listings[0].photosUrl[0]} alt="logo"></img>
        <h4>{listings[0].address}</h4>
        <p>
          {listings[0].beds} | {listings[0].rent}
        </p>
      </div>
    </>
  );
}
export default SplashListingCards;
