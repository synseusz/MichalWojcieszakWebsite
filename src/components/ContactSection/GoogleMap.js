import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import gymData from "../ContactSection/places.json";

const GoogleMapElement = () => {
  const Map = () => {
    const [selectedGym, setSelectedGym] = useState(null);

    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 51.10115073500656, lng: 17.0080331831903 }}
      >
        {gymData.places.map((gym) => (
          <Marker
            key={gym.properties.GYM_ID}
            position={{ lat: gym.location.lat, lng: gym.location.lng }}
            onClick={() => {
              setSelectedGym(gym);
            }}
          ></Marker>
        ))}
        {selectedGym && (
          <InfoWindow
            position={{
              lat: selectedGym.location.lat,
              lng: selectedGym.location.lng,
            }}
            onCloseClick={() => {
              setSelectedGym(null);
            }}
          >
            <div>Gym Details</div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&callback=initMap&libraries=places,geometry&solution_channel=GMP_QB_locatorplus_v4_cA`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default GoogleMapElement;
