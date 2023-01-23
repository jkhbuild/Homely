import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import UserShowSidebar from "../UserShow/UserShowSidebar";
import FavoritesListingCard from "./FavoritesListingCard.js";
import * as LikeActions from "../../store/likes";
import "./Favorites.css";

function Favorites() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUserId = useSelector((state) => state.session.user.id);
  const usersLikes = useSelector(LikeActions.getLikes);

  useEffect(() => {
    dispatch(LikeActions.fetchLikes(sessionUserId));
  }, [sessionUserId, dispatch]);

  return (
    <>
      <div className="favorites-container">
        <div className="user-show-sidebar">
          <UserShowSidebar />
        </div>
        <div className="favorites-main-content-wrapper">
          <h4 className="favorites-header">
            My Favorites ({usersLikes.length})
          </h4>
          <div className="favorites-listing-card-container">
            {usersLikes &&
              usersLikes.map((like) => (
                <FavoritesListingCard
                  key={like.id}
                  listingId={like.listingId}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorites;
