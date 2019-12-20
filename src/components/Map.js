import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

class Map extends React.Component {
  render() {
    const userLocation = [
      this.props.coords.latitude,
      this.props.coords.longitude
    ];
    return (
      <LeafletMap
        center={userLocation}
        zoom={15}
        maxZoom={25}
        attributionControl={false}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={userLocation}>
          <Popup>You are here.</Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map;
