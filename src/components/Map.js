import React from "react";
import "./Map.css";

const map = props => {
  return (
    <div className="map">
      Latitude: {props.coords.latitude}
      <br />
      Longitude: {props.coords.longitude}
    </div>
  );
};

export default map;
