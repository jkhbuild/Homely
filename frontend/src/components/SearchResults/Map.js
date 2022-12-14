import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { useHistory } from "react-router-dom";

function Map({
  latitude,
  longitutde,
  setLatitutde,
  setLongitude,
  highlightedListing,
  listings,
  mapOptions = {},
  mapEventHandlers = {},
  markerEventHandlers = {},
}) {
  const history = useHistory();
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  const markers = useRef({});

  useEffect(() => {
    if (!map) {
      setMap(
        new window.__googleMapsCallback.maps.Map(mapRef.current, {
          center: {
            lat: 37.773972,
            lng: -122.431297,
          },
          zoom: 13,
          clickableIcons: false,
          ...mapOptions,
        })
      );
    }
  }, [mapRef, map, mapOptions]);

  useEffect(() => {
    if (map) {
      const listeners = Object.entries(mapEventHandlers).map(
        ([event, handler]) =>
          window.google.maps.event.addListener(map, event, (...args) =>
            handler(...args, map)
          )
      );

      return () => listeners.forEach(window.google.maps.event.removeListener);
    }
  }, [map, mapEventHandlers]);

  useEffect(() => {
    if (map) {
      // Add markers for new listings
      listings.forEach((listing) => {
        if (markers.current[listing.id]) return;

        const marker = new window.google.maps.Marker({
          map,
          position: new window.google.maps.LatLng(listing.lat, listing.lng),
          label: {
            text: `$${listing.price.toString()}`,
            fontWeight: "bold",
            color: "black",
          },
          icon: {
            path: `
              M 1,0 
              L 2,0 
              A 1 1 0 0 1 3,1
              A 1 1 0 0 1 2,2
              L 1,2 
              A 1 1 0 0 1 0,1
              A 1 1 0 0 1 1,0
              z
            `,
            fillOpacity: 1,
            fillColor: "white",
            strokeColor: "black",
            strokeWeight: 1,
            scale: 15,
            labelOrigin: new window.google.maps.Point(1.5, 1),
            anchor: new window.google.maps.Point(1.5, 1),
          },
        });

        Object.entries(markerEventHandlers).forEach(([event, handler]) => {
          marker.addListener(event, () => handler(listing));
        });
        markers.current[listing.id] = marker;
      });

      // Remove markers for old listings
      Object.entries(markers.current).forEach(([listingId, marker]) => {
        if (listings.some((listing) => listing.id.toString() === listingId))
          return;

        marker.setMap(null);
        delete markers.current[listingId];
      });
    }
  }, [listings, history, map, markerEventHandlers]);

  useEffect(() => {
    Object.entries(markers.current).forEach(([listingId, marker]) => {
      const label = marker.getLabel();
      const icon = marker.getIcon();

      if (parseInt(listingId) === highlightedListing) {
        marker.setLabel({ ...label, color: "white" });
        marker.setIcon({ ...icon, fillColor: "black" });
      } else {
        marker.setLabel({ ...label, color: "black" });
        marker.setIcon({ ...icon, fillColor: "white" });
      }
    });
  }, [markers, highlightedListing]);

  return (
    <div ref={mapRef} className="searchMap">
      Map
    </div>
  );
}

function ListingMapWrapper(props) {
  return (
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <Map {...props} />
    </Wrapper>
  );
}

export default ListingMapWrapper;
