import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import * as PropertyActions from "../../store/listings";
import UserShowListingCard from "./UserShowListingCard";
import "./UserShow.css";
import UserShowSidebar from "./UserShowSidebar";

function UserShow() {
  const dispatch = useDispatch();
  const history = useHistory();
  const usersListings = useSelector(PropertyActions.getListings);
  const handleAddProperty = (e) => {
    e.preventDefault();
    history.push(`/add-property`);
  };
  const { userId } = useParams();
  useEffect(() => {
    dispatch(PropertyActions.fetchUserListings(userId));
  }, [userId, dispatch]);

  return (
    <div className="user-show-container">
      <div className="user-show-sidebar">
        <UserShowSidebar />
        {/* <h4 className="user-show-sidebar-header">
          <i class="fa-regular fa-building"></i>
          Properties & Listings
        </h4>
        <li>
          <Link className="user-show-sidebar-li">Properties</Link>
        </li>
        <li>
          <Link className="user-show-sidebar-li">Favorites</Link>
        </li> */}
      </div>
      <div className="user-show-maincontent">
        <div className="user-show-toppage">
          <h4 className="properties-header">Properties</h4>
          <button
            className="user-show-add-property-button"
            onClick={handleAddProperty}
          >
            Add a Property
          </button>
        </div>
        <ul className="user-show-listing-cards">
          {usersListings &&
            usersListings.map((listing) => (
              <UserShowListingCard key={listing.id} listing={listing} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default UserShow;
