import { React, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./ListingsMap.css";
const ListingsMap = ({ listings }) => {
  const [selected, setSelected] = useState({});

  const listingLocations = listings.map((listing) => {
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
  });

  const mapStyles = {
    height: "86vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.754735,
    lng: -73.84145,
  };

  const onSelect = (listing) => {
    setSelected(listing);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {listingLocations.map((listing) => {
          return (
            <Marker
              className="listings-map-pin"
              key={listing.name}
              position={listing.location}
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
            <>
              <a href={`/listings/` + selected.id + "/show"}>{selected.name}</a>
              <p>
                {selected.beds} Beds
                <br></br>${selected.rent}
              </p>
            </>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default ListingsMap;
