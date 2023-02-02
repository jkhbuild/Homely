import React, { useEffect, useState, useMemo } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as LikeActions from "../../store/likes";
import * as PropertyActions from "../../store/listings";

function FavoritesListingCard({ listingId, likeId }) {
  const dispatch = useDispatch();
  const listing = useSelector(PropertyActions.getListing(listingId));
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(PropertyActions.fetchListings());
  }, [dispatch]);

  const handleDeleteFavorite = (e) => {
    e.preventDefault();

    dispatch(LikeActions.deleteLike(likeId)).catch(async (res) => {
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

  return (
    <>
      {listing && listing.photosUrl && (
        <div className="favorites-listing-card">
          <div className="favorites-photo-container">
            <button
              className="remove-favorite-button"
              onClick={handleDeleteFavorite}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
            <Link to={`/listings/${listing.id}/show`}>
              <img
                className="favorites-photo"
                src={listing.photosUrl[0]}
                alt="pic"
              ></img>
            </Link>
          </div>
          <Link to={`/listings/${listing.id}/show`}>
            <h4 className="favorites-listing-card-address">
              {listing.address}
            </h4>
          </Link>

          <p>
            {listing.rent} | {listing.bed} Beds
          </p>
          <button className="favorites-listing-card-contact">
            <i class="fa-regular fa-envelope"></i> Contact Property
          </button>
        </div>
      )}
    </>
  );
}

export default FavoritesListingCard;
