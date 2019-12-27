import React, { Fragment } from "react";
import LandmarkMarker from "./LandmarkMarker";

const LandmarkMarkerList = props => {
  const items = props.markers.map(markerInfo => (
    <LandmarkMarker
      key={markerInfo.key}
      position={markerInfo.position}
      content={markerInfo.content}
    />
  ));
  return <Fragment>{items}</Fragment>;
};

export default LandmarkMarkerList;
