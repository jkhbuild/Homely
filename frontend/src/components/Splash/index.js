import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Splash.css";
function Splash() {
  return (
    <div class="splash-container">
      <div class="search-bar-container">
        <h1 className="search-bar-header1">Discover Your New Home</h1>
      </div>
    </div>
  );
}
export default Splash;
