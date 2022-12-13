import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function FilterBar() {
  return (
    <div className="filter-container">
      <input type="text" placeholder="Location or Point of Interest"></input>
      <select className="beds-type-filter">
        <option value="" selected disabled hidden>
          Beds
        </option>
        <option>studio</option>
        <option>1.0</option>
        <option>2.0</option>
        <option>3.0</option>
        <option>4.0</option>
        <option>5.0</option>
        <option>6.0</option>
      </select>
      <select className="baths-type-filter">
        <option value="" selected disabled hidden>
          Baths
        </option>
        <option>0.5</option>
        <option>1.0</option>
        <option>1.5</option>
        <option>2.0</option>
        <option>2.5</option>
        <option>3.0</option>
        <option>4.0</option>
        <option>4.5</option>
        <option>5.0</option>
        <option>5.5</option>
        <option>6.0</option>
        <option>6.5</option>
      </select>
      <select className="property-type-filter">
        <option value="" selected disabled hidden>
          Type
        </option>
        <option>Apartment</option>
        <option>Single Family House</option>
        <option>Condominum</option>
        <option>Townhouse</option>
        <option>Mobile Home/Manufactured Home</option>
      </select>
    </div>
  );
}

export default FilterBar;
