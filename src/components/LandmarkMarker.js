import React from "react";
import { Marker, Popup } from "react-leaflet";

const LandmarkMarker = props => {
  return (
    <Marker position={props.position}>
      <Popup>{props.content}</Popup>
    </Marker>
  );
};

export default LandmarkMarker;
