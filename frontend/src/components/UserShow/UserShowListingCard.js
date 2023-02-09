import React from "react";
import { useHistory } from "react-router-dom";
import GoogleStaticMap from "react-google-static";

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
        <div className="user-show-static-map-container">
          <GoogleStaticMap
            apiKey={process.env.REACT_APP_STATIC_MAPS_API_KEY}
            latitude={listing.latitude}
            longitude={listing.longitude}
            size={{ width: 325, height: 150 }}
            style={{ width: 325, height: 150 }}
            zoom={15}
            iconUrl="https://icons8.com/icon/dPzhTqM4Ay0T/map-marker.png"
          />
        </div>
        <h4 className="user-show-listing-card-address">
          {listing.address}, {listing.city}, {listing.state.toUpperCase()}{" "}
          {listing.zipCode}
        </h4>
        <h4 className="user-show-listing-card-address-hidden">
          {listing.address}, {listing.city}, {listing.state.toUpperCase()}{" "}
          {listing.zipCode}
        </h4>
        <div className="user-show-listing-card-units"></div>
      </div>
    </button>
  );
}

export default UserShowListingCard;
