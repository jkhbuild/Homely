import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";

function UserShowSidebar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();

  const SidebarData = [
    {
      title: "Properties",
      path: `/users/${userId}`,
      className: "user-show-sidebar-link",
    },
    {
      title: "Favorites",
      path: `/users/${userId}/favorites`,
      className: "user-show-sidebar-link",
    },
  ];

  return (
    <>
      <h4 className="user-show-sidebar-header">
        <i className="fa-regular fa-building"></i>
        Properties & Listings
      </h4>
      <li className="user-show-sidebar-list">
        {SidebarData.map((item, index) => {
          return (
            <ul className="user-show-sidebar-list-item" key={index}>
              <Link to={item.path}>
                <span className="user-show-sidebar-title">{item.title}</span>
              </Link>
            </ul>
          );
        })}
      </li>
    </>
  );
}

export default UserShowSidebar;
