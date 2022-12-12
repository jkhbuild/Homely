import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Splash.css";
function Splash() {
  return (
    <section>
      <div class="splash-container">
        <div className="splash-main-container-overlay"></div>
        <div class="splash-main-container">
          <div class="header-container">
            <h1 className="search-bar-header1">Discover Your New Home</h1>
            <h2 className="search-bar-header2">
              Helping appacademy graduates finding the perfect fit
            </h2>
          </div>
          <div className="search-bar-container">
            <input
              type="text"
              className="splash-search-bar"
              placeholder="Search by city, state, or zipcode"
            ></input>
            <button type="submit" className="splash-search-button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Splash;
