import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilterBar from "./FilterBar";
import Map from "./Map";
import * as propertyActions from "../../store/listings";
import "./SearchResults.css";

function SearchResults() {
  const dispatch = useDispatch();
  const history = useHistory();
  const listings = useSelector(propertyActions.getListings);

  useEffect(() => {
    dispatch(propertyActions.fetchListings());
  }, [dispatch]);

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
