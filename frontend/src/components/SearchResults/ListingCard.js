import React, { useEffect, useRef, useState, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as LikeActions from "../../store/likes";

function ListingCard({ listing }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [listingId, setListingId] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/listings/${listing.id}/show`);
  };

  const handleLike = (e) => {
    e.preventDefault();
    setErrors([]);
    setListingId(listing.id);

    dispatch(
      LikeActions.createLike({
        listingId,
      })
    ).catch(async (res) => {
      let data;
      try {
        data = await res.clone().json();
      } catch {
        data = await res.text();
      }
      if (data?.errors) setErrors(data.errors);
      else if (data) setErrors([data]);
      else setErrors([res.statusText]);
    });
  };

  if (!listing) {
    return null;
  }

  return (
    <>
      {listing.photosUrl && (
        <article className="listing-card">
          <div className="listing-card-header">
            <div className="listing-card-header-left">
              <button className="header-showpage-button" onClick={handleClick}>
                <div className="listing-card-header-left-subcontainer">
                  <h2 className="listing-card-address">{listing.address}</h2>
                  <h4 className="listing-card-csz">
                    {listing.city}, {listing.state} {listing.zipCode}
                  </h4>
                </div>
              </button>
            </div>
            <div className="listing-card-header-right">
              <button className="listing-card-favorite" onClick={handleLike}>
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
          <div className="listing-card-body">
            <div className="listing-card-body-left">
              <img
                className="listing-card-image"
                src={listing.photosUrl[0]}
                alt="logo"
              />
            </div>
            <div className="listing-card-body-right">
              <h3 className="listing-card-rent">${listing.rent} </h3>
              <h3 className="listing-card-bb">{listing.beds} Beds</h3>
              <h4 className="listing-card-pt">
                {" "}
                {listing.propertyType} for Rent{" "}
              </h4>
              {/* <p>{listing.beds} Beds</p>
          <p>{listing.propertyType} for Rent</p> */}
              <button className="listing-card-button">Email</button>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default ListingCard;
