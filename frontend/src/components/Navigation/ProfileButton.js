import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
    console.log(user);
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
    <div className="profile-button-container">
      <button className="profile-button" onClick={openMenu}>
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
