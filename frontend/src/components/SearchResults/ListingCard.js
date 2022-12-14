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
        <div className="listing-card-header-left">
          <div className="listing-card-header-left-subcontainer">
            <h2 className="listing-card-address">{listing.address}</h2>
            <h4 className="listing-card-csz">
              {listing.city}, {listing.state} {listing.zip}
            </h4>
          </div>
        </div>
        <div className="listing-card-header-right">
          <button className="listing-card-favorite">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
      <div className="listing-card-body">
        <div className="listing-card-body-left">
          <img
            src={require("../../assets/listing-card-placeholder.jpg")}
            alt=""
          ></img>
        </div>
        <div className="listing-card-body-right">
          <h3 className="listing-card-rent">${listing.rent} </h3>
          <h3 className="listing-card-bb">{listing.beds} Beds</h3>
          <h4 className="listing-card-pt"> {listing.propertyType} for Rent </h4>
          {/* <p>{listing.beds} Beds</p>
          <p>{listing.propertyType} for Rent</p> */}
          <button className="listing-card-button">Email</button>
        </div>
      </div>
    </article>
  );
}

export default ListingCard;
