import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import UserShowSidebar from "../UserShow/UserShowSidebar";

function Favorites() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
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
      <div>test</div>
    </>
  );
}

export default Favorites;
