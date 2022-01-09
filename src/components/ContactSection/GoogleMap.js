import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import gymData from "../ContactSection/places.json";
import {
  InfoWindowTextWrapper,
  MapContainer,
  Name,
  Line,
  GoogleMapsLink,
} from "./ContactSectionElements";

const GoogleMapElement = () => {
  const Map = () => {
    const [selectedGym, setSelectedGym] = useState(null);

    return (
      <GoogleMap
        defaultZoom={11.7}
        defaultCenter={{ lat: 51.10453489693723, lng: 17.021943052643845 }}
      >
        {gymData.places.map((gym) => (
          <Marker
            key={gym.properties.GYM_ID}
            position={{ lat: gym.location.lat, lng: gym.location.lng }}
            onClick={() => {
              setSelectedGym(gym);
            }}
          />
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
            <InfoWindowTextWrapper>
              <Name>{selectedGym.properties.NAME}</Name>
              <Line>{selectedGym.properties.ADDRESS}</Line>
              <Line>{selectedGym.properties.POSTCODE}</Line>
              <Line>{selectedGym.properties.COUNTRY}</Line>
              <GoogleMapsLink
                href={selectedGym.properties.LINK}
                target="_blank"
                rel="noreferrer"
              >
                View on Google Maps
              </GoogleMapsLink>
            </InfoWindowTextWrapper>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <MapContainer>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&callback=initMap&libraries=places,geometry&solution_channel=GMP_QB_locatorplus_v4_cA`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </MapContainer>
  );
};

export default GoogleMapElement;
