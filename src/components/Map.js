import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import LandmarkMarkerList from "./LandmarkMarkerList";

class Map extends React.Component {
  getMarkerData(landmarks) {
    let markers = [];

    Object.keys(landmarks).map(landmarkKey => {
      const currLandmark = landmarks[landmarkKey];

      let currLandmarkInfo = {
        key: currLandmark.pageid,
        content: currLandmark.title
      };

      if (currLandmark.coordinates) {
        currLandmarkInfo = {
          ...currLandmarkInfo,
          position: [
            currLandmark.coordinates[0].lat,
            currLandmark.coordinates[0].lon
          ]
        };
      }

      markers.push(currLandmarkInfo);
      return null;
    });

    return markers;
  }

  render() {
    const userLocation = [
      this.props.coords.latitude,
      this.props.coords.longitude
    ];

    const markers = this.getMarkerData(this.props.landmarks);

    return (
      <LeafletMap
        center={userLocation}
        zoom={15}
        maxZoom={25}
        attributionControl={false}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={false}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={userLocation}>
          <Popup>You are here.</Popup>
        </Marker>
        {markers.length > 0 ? <LandmarkMarkerList markers={markers} /> : null}
      </LeafletMap>
    );
  }
}

export default Map;
