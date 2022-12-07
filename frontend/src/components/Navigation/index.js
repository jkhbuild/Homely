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
  const [signupModal, setSignupModal] = useState(false);
  const [signinModal, setSigninModal] = useState(false);

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
        <SignUpFormModal
          showSignin={(shown) => setSigninModal(shown)}
          showSignup={(shown) => setSignupModal(shown)}
          signupModal={signupModal}
        />
        <span> / </span>
        <LoginFormModal
          showSignup={(shown) => setSignupModal(shown)}
          showSignin={(shown) => setSigninModal(shown)}
          signinModal={signinModal}
        />
      </>
    );
  }

  return (
    <div className="header" id="nav-bar-header">
      <ul id="header-container">
        <div className="left-nav">
          <div className="menu">
            <button className="menu-button" onClick={toggleMenu}>
              <i id="hamburger_icon" className="fa-solid fa-bars fa-2xl"></i>
              Menu
            </button>
            {menu && (
              <div className="open-menu-wrapper">
                <ul className="main-menu-list">
                  <li>
                    <button className="menu-content">Renter Tools</button>
                  </li>
                  <li>
                    <button className="menu-content">Apartments</button>
                  </li>
                  <li>
                    <button className="menu-content">Homes For Rent</button>
                  </li>
                  <li>
                    <button className="menu-content">Condos For Rent</button>
                  </li>
                  <li>
                    <button className="menu-content">Townhomes For Rent</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div id="mid-nav">
          <NavLink exact to="/">
            <img
              src={require("../../assets/apartmentslogo2.png")}
              alt="logo"
            ></img>
          </NavLink>
        </div>
        <div className="right-nav">
          <div className="signin-signup">
            <li>{sessionLinks}</li>
          </div>
          <button className="listing-button">
            <span>Add a Property</span>
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Navigation;
