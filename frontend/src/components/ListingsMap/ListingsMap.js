import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import mapStyleSheet from "./MapStyles";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./ListingsMap.css";

const ListingsMap = ({ listings }) => {
  const history = useHistory();
  const [selected, setSelected] = useState({});

  const options = {
    styles: mapStyleSheet,
    disableDefaultUI: true,
    clickableIcons: false,
  };

  const listingLocations = listings.map((listing) => {
    if (listing.photosUrl) {
      return {
        id: listing.id,
        name: listing.address,
        beds: listing.beds,
        rent: listing.rent,
        img: listing.photosUrl[0],
        location: {
          lat: listing.latitude,
          lng: listing.longitude,
        },
      };
    } else {
      return {
        id: listing.id,
        name: listing.address,
        beds: listing.beds,
        rent: listing.rent,
        location: {
          lat: listing.latitude,
          lng: listing.longitude,
        },
      };
    }
  });

  const mapStyles = {
    height: "86vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.72491,
    lng: -73.8466,
  };

  const onSelect = (listing) => {
    setSelected(listing);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (selected !== {}) {
      history.push(`/listings/` + selected.id + "/show");
    }
  };

  return (
    <>
      {listingLocations && listingLocations[0] && listingLocations[0].img && (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={{
              lat: listingLocations[0].location.lat,
              lng: listingLocations[0].location.lng,
            }}
            options={options}
          >
            {listingLocations.map((listing) => {
              return (
                <Marker
                  className="listings-map-pin"
                  key={listing.name}
                  position={listing.location}
                  icon={{
                    path: "M -2,0 0,-2 2,0 0,4 z",
                    fillOpacity: 1,
                    fillColor: " #427b01",
                    strokeColor: "white",
                    strokeWeight: 1,
                    scale: 6,
                    // labelOrigin: new window.google.maps.Point(1.5, 1),
                    // anchor: new window.google.maps.Point(1.5, 1),
                  }}
                  onClick={() => onSelect(listing)}
                />
              );
            })}
            {selected.location && (
              <InfoWindow
                className="listings-map-infowindow"
                position={selected.location}
                clickable={true}
                onCloseClick={() => setSelected({})}
              >
                <div>
                  {/* <a href={`/listings/` + selected.id + "/show"}>
                    {selected.name}
                  </a> */}
                  <button className="infowindow-url" onClick={handleClick}>
                    {selected.name}
                  </button>
                  <p>
                    {selected.beds} Beds
                    <br></br>${selected.rent}
                  </p>
                  <button onClick={handleClick}>
                    <img
                      className="infowindow-image"
                      src={selected.img}
                      alt="logo"
                      width="500px"
                      height="600px"
                    />
                  </button>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      )}
    </>
  );
};

export default ListingsMap;
