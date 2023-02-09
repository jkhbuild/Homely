import React from "react";
import { useHistory } from "react-router-dom";

function SplashListingCards({ listings }) {
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
      {listings &&
        listings[0] &&
        listings[0].photosUrl &&
        randomCities.map((listing) => {
          return (
            <button
              className="splash-listing-card-button"
              key={listing.id}
              onClick={(e) => handleListingCardClick(e, listing)}
            >
              <div className="splash-listing-card">
                {listing.photosUrl && listing.photosUrl[0] && (
                  <img src={listing.photosUrl[0]} alt="logo"></img>
                )}
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
