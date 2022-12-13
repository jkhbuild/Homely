import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import FilterBar from "./FilterBar";
import Map from "./Map";
import "./SearchResults.css";

function SearchResults() {
  return (
    <>
      <div className="filter-container">
        <FilterBar />
      </div>
      <div className="search-results-main-content">
        <div className="map-container">
          <Map />
        </div>
        <div className="listing-cards-container"></div>
      </div>
    </>
  );
}

export default SearchResults;
