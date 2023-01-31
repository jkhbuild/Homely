import React, { useEffect, useRef, useState, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as LikeActions from "../../store/likes";
import LikeButton from "./LikeButton";

function ListingCard({ listing }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);
  // const usersLikes = useSelector(LikeActions.getLikes);

  // useEffect(() => {
  //   dispatch(LikeActions.fetchLikes(sessionUserId));
  // }, [sessionUserId, dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/listings/${listing.id}/show`);
  };

  const handleEmail = () => {
    window.location.href = "mailto:jkh.build@gmail.com";
  };

  let likeButtonShow;
  if (sessionUser) {
    likeButtonShow = <LikeButton listing={listing} sessionUser={sessionUser} />;
  }

  // const handleLike = (e, listingId) => {
  //   e.preventDefault();
  //   setErrors([]);

  //   let listingLike = usersLikes.filter((like) => like.listingId === listingId);

  //   if (listingLike.length === 0) {
  //     dispatch(
  //       LikeActions.createLike({
  //         listingId,
  //       })
  //     ).catch(async (res) => {
  //       let data;
  //       try {
  //         data = await res.clone().json();
  //       } catch {
  //         data = await res.text();
  //       }
  //       if (data?.errors) setErrors(data.errors);
  //       else if (data) setErrors([data]);
  //       else setErrors([res.statusText]);
  //     });
  //   } else {
  //     dispatch(LikeActions.deleteLike(listingLike[0].id)).catch(async (res) => {
  //       let data;
  //       try {
  //         data = await res.clone().json();
  //       } catch {
  //         data = await res.text();
  //       }
  //       if (data?.errors) setErrors(data.errors);
  //       else if (data) setErrors([data]);
  //       else setErrors([res.statusText]);
  //     });
  //   }
  // };

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
              <div>{likeButtonShow}</div>
              {/* <button
                className="listing-card-favorite"
                onClick={(e) => handleLike(e, listing.id)}
              >
                <i className="fa-regular fa-heart"></i>
              </button> */}
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
              <button className="listing-card-button" onClick={handleEmail}>
                Email
              </button>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default ListingCard;
