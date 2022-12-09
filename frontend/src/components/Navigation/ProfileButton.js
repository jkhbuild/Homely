import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";

function ProfileButton({ user, showSignin }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const navigateAddProperty = {
    if(sessionUser) {
      history.push("/add-property");
    },
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div
      className="profile-button-container"
      onMouseEnter={(e) => {
        openMenu();
      }}
      onMouseLeave={(e) => {
        hideMenu();
      }}
    >
      <button
        className="profile-button"
        onClick={(event) => {
          openMenu();
          showSignin(false);
        }}
      >
        <span className="user-firstname">{user.firstName}</span>
        <i className="fa-solid fa-angle-down"></i>
      </button>
      {showMenu && (
        <div className="user-menu-dropdown">
          <ul className="dropdown">
            <li className="user-menu-dropdown-item" id="my-account">
              <button className="user-menu-button"> My Account </button>
            </li>
            <li className="user-menu-dropdown-item" id="logout">
              <button className="user-menu-button" onClick={logout}>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
