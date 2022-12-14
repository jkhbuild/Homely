import React, { useEffect, useRef, useState, useMemo } from "react";

function ListingCard({ listing }) {
  //   const handleOnClick = (e) => {
  //   e.preventDefault();
  //   console.log(listings);
  //   listings.map((listing) => {
  //     console.log(listing);
  //     console.log(listing.address);
  //   });
  // };
  return (
    <article className="listing-card">
      <div className="listing-card-header">
        <div>
          <h2 className="listing-card-address">{listing.address}</h2>
          <p className="listing-card-csz">
            {listing.city}, {listing.state} {listing.zip}
          </p>
        </div>
        <div>
          <button>
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
      <div>
        <img></img>
        <p>${listing.rent}</p>
        <p>{listing.beds} Beds</p>
        <p>{listing.propertyType} for Rent</p>

        <button>Email</button>
      </div>
    </article>
  );
}

export default ListingCard;
