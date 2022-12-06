import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
  const [menu, setMenu] = useState(false);

  // Burger Menu - move to seperate file later.
  function toggleMenu() {
    setMenu((shown) => !shown);
  }

  useEffect(() => {
    if (!menu) return;

    const closeMenu = () => {
      setMenu(false);
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [menu]);

  // Signin, Signup links
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignUpFormModal />
      </>
    );
  }

  return (
    <div class="header" id="nav-bar-header">
      <ul>
        <div id="left-nav">
          <button className="menu-button" onClick={toggleMenu}>
            <i class="fa-regular fa-bars"></i>
          </button>
          {menu && (
            <ul class="menu" id="main-menu-dropdown">
              <li>Renter Tools</li>
              <li>Apartments For Rent</li>
              <li>Homes For Rent</li>
              <li>Condos For Rent</li>
              <li>Townhomes For Rent</li>
            </ul>
          )}
        </div>
        <div id="mid-nav">
          <NavLink exact to="/">
            Homely.com
          </NavLink>
          <img src="../../assets/apartmentslogo.png" alt="logo"></img>
        </div>
        <div id="right-nav">
          <li>{sessionLinks}</li>
        </div>
      </ul>
    </div>
  );
}

export default Navigation;
