import React, { useEffect, useState, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as LikeActions from "../../store/likes";

function FavoritesListingCard({ listing }) {
  const history = useHistory();

  const handleUserShowListingClick = (e) => {
    e.preventDefault();
    history.push(`/listings/${listing.id}`);
  };

  return (
    <div className="favorites-listing-card-container">
      <div className="favorites-listing-card">
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
