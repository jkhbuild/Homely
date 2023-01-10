import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilterBar from "./FilterBar";
import ListingCard from "./ListingCard";
import ListingsMap from "../ListingsMap/ListingsMap";
import * as propertyActions from "../../store/listings";
import "./SearchResults.css";

function SearchResults() {
  const dispatch = useDispatch();
  const listings = useSelector(propertyActions.getListings);
  const { query } = useParams();

  useEffect(() => {
    dispatch(propertyActions.fetchSearchedListings(query));
  }, [query, dispatch]);

  // DELETE LATER - test button
  // const handleOnClick = (e) => {
  //   e.preventDefault();
  //   console.log(listings);
  //   listings.map((listing) => {
  //     console.log(listing);
  //     console.log(listing.address);
  //   });
  // };

  return (
    <>
      <div className="filter-container">
        <FilterBar />
      </div>
      <div className="search-results-main-content">
        <div className="map-container">
          {listings && <ListingsMap listings={listings} />}
        </div>
        <div className="listing-card-container">
          <ul className="listing-card-list">
            {listings &&
              listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SearchResults;
