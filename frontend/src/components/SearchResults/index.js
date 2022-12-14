import React, { useEffect, useState, useMemo } from "react";
// import { useLoadScript } from "@googlemaps/react-wrapper";
// import { useLoadScript } from "@react-google-maps/api";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FilterBar from "./FilterBar";
import Map from "./Map";
import * as propertyActions from "../../store/listings";
import "./SearchResults.css";

function SearchResults() {
  const dispatch = useDispatch();
  const history = useHistory();
  const listings = useSelector(propertyActions.getListings);
  const [highlightedListing, setHighlightedListing] = useState(null);
  const [bounds, setBounds] = useState(null);
  // const query = useParams();

  // useEffect(() => {
  //   dispatch(propertyActions.fetchSearchedListings(query));
  // }, [query, dispatch]);

  useEffect(() => {
    dispatch(propertyActions.fetchListings());
  }, [dispatch]);

  // const mapEventHandlers = useMemo(
  //   () => ({
  //     click: (event) => {
  //       const search = new URLSearchParams(event.latLng.toJSON()).toString();
  //       history.push({ pathname: "/listings/new", search });
  //     },
  //     idle: (map) => setBounds(map.getBounds().toUrlValue()),
  //   }),
  //   [history]
  // );

  // DELETE - TUTORIAL WONT LET ME LOAD.
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  // });

  return (
    <>
      <div className="filter-container">
        <FilterBar />
      </div>
      <div className="search-results-main-content">
        <div className="map-container">
          {/* <Map
            listings={listings}
            // mapEventHandlers={mapEventHandlers}
            markerEventHandlers={{
              click: (listing) => history.push(`/listing/${listing.id}`),
              mouseover: (listing) => setHighlightedListing(listing.id),
              mouseout: () => setHighlightedListing(null),
            }}
            highlightedListing={highlightedListing}
          /> */}
        </div>
        <div className="listing-cards-container"></div>
      </div>
    </>
  );
}

export default SearchResults;
