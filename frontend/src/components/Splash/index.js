import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Splash.css";
function Splash() {
  return (
    <>
      <SearchBar />
    </>
  );
}
export default Splash;
