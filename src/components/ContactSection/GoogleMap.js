import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import gymData from "./places.json";
import {
  InfoWindowTextWrapper,
  MapContainer,
  Name,
  Line,
  GoogleMapsLink,
} from "./ContactSectionElements";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 51.10453489693723,
  lng: 17.021943052643845,
};

const GoogleMapElement = () => {
  const [selectedGym, setSelectedGym] = useState(null);
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <MapContainer>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11.7}
        >
          {/* Child components, such as markers, info windows, etc. */}
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
      </MapContainer>
    </LoadScript>
  );
};

export default GoogleMapElement;
