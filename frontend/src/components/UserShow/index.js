import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./UserShow.css";

function UserShow() {
  return (
    <div>
      <div className="user-show-toppage">
        <h4>Properties</h4>
        <button>Add a Property</button>
      </div>
    </div>
  );
}

export default UserShow;
