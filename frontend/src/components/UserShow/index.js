import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./UserShow.css";

function UserShow() {
  return (
    <div className="user-show-container">
      <div className="user-show-sidebar">
        <p> test</p>
      </div>
      <div className="user-show-maincontent">
        <div className="user-show-toppage">
          <h4 className="properties-header">Properties</h4>
          <button className="add-property-button">Add a Property</button>
        </div>
      </div>
    </div>
  );
}

export default UserShow;
