import { React, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
const ListingsMap = ({ listings }) => {
  const [selected, setSelected] = useState({});

  const listingLocations = listings.map((listing) => {
    return {
      name: listing.address,
      location: {
        lat: listing.latitude,
        lng: listing.longitude,
      },
    };
  });

  console.log(listingLocations);

  const mapStyles = {
    height: "86vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.754735,
    lng: -73.84145,
  };

  const onSelect = (item) => {
    setSelected(item);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {listingLocations.map((listing) => {
          return (
            <Marker
              key={listing.name}
              position={listing.location}
              onClick={() => onselect(listing)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <>
              <p>{selected.name}</p>
            </>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default ListingsMap;
