import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
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
  const history = useHistory();

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
    sessionLinks = (
      <ProfileButton
        user={sessionUser}
        showSignin={(shown) => setSigninModal(shown)}
      />
    );
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

  const navigateAddProperty = () => {
    history.push("/add-property");
  };

  const handleLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/jhpond-45569272/";
  };
  const handleWellfound = () => {
    window.location.href = "https://angel.co/u/justin-hwang-6";
  };
  const handlePersonal = () => {
    window.location.href = "https://darling-mousse-6b92b4.netlify.app/";
  };
  const handleGithub = () => {
    window.location.href = "https://github.com/jkhbuild";
  };

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
                    <button className="menu-content" onClick={handleLinkedIn}>
                      Linkedin
                    </button>
                  </li>
                  <li>
                    <button className="menu-content" onClick={handleWellfound}>
                      Wellfound
                    </button>
                  </li>
                  <li>
                    <button className="menu-content" onClick={handlePersonal}>
                      Personal Site
                    </button>
                  </li>
                  <li>
                    <button className="menu-content" onClick={handleGithub}>
                      Github
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div id="mid-nav">
          <NavLink exact to="/">
            <img src={require("../../assets/Homely-Logo.png")} alt="logo"></img>
          </NavLink>
        </div>
        <div className="right-nav">
          <div className="signin-signup">
            <li>{sessionLinks}</li>
          </div>
          <button className="listing-button" onClick={navigateAddProperty}>
            <span>Add a Property</span>
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Navigation;
