import React, { useEffect, useState, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as LikeActions from "../../store/likes";

function FavoritesListingCard() {
  const history = useHistory();
  const dispatch = useDispatch();

  // const handleFavoritesListingClick = (e) => {
  //   e.preventDefault();

  //   dispatch(LikeActions.deleteLike(listingLike[0].id)).catch(async (res) => {
  //     let data;
  //     try {
  //       data = await res.clone().json();
  //     } catch {
  //       data = await res.text();
  //     }
  //     if (data?.errors) setErrors(data.errors);
  //     else if (data) setErrors([data]);
  //     else setErrors([res.statusText]);
  //   });
  // };

  return (
    <div className="favorites-listing-card-container">
      <div className="favorites-listing-card">
        <button className="remove-favorite-button"></button>
        <div className="favorites-static-map-container"></div>
        <h4 className="favorites-listing-card-address">
          {listing.address}, {listing.city}, {listing.state.toUpperCase()}{" "}
          {listing.zipCode}
        </h4>
        \<div className="favorites-listing-card-units"></div>
      </div>
    </div>
  );
}

export default FavoritesListingCard;
