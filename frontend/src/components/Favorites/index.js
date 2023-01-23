import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import UserShowSidebar from "../UserShow/UserShowSidebar";
import "./Favorites.css";

function Favorites() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();
  console.log(userId);

  return (
    <>
      <div className="favorites-container">
        <div className="user-show-sidebar">
          <UserShowSidebar />
        </div>
        <div className="favorites-main-content-wrapper">
          <h4 className="favorites-header">My Favorites</h4>
        </div>
      </div>
    </>
  );
}

export default Favorites;
