import React, { useEffect, useState, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GoogleStaticMap from "react-google-static";
import * as propertyActions from "../../store/listings";

function UserShowListingCard({ listing }) {
  const history = useHistory();

  const handleUserShowListingClick = (e) => {
    e.preventDefault();
    history.push(`/listings/${listing.id}`);
  };

  return (
    <button
      className="user-show-listing-card-button"
      onClick={handleUserShowListingClick}
    >
      <div className="user-show-listing-card">
        <GoogleStaticMap
          apiKey={process.env.REACT_APP_STATIC_MAPS_API_KEY}
          latitude={listing.latitude}
          longitude={listing.longitude}
          size={{ width: 250, height: 250 }}
          style={{ width: 300, height: 150 }}
          zoom={15}
          iconUrl="https://icons8.com/icon/dPzhTqM4Ay0T/map-marker.png"
        />
        <div className="user-show-listingcard-address">
          {listing.address}, {listing.city}, {listing.state.toUpperCase()}{" "}
          {listing.zipCode}
        </div>
      </div>
    </button>
  );
}

export default UserShowListingCard;
