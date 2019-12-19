import React, { Component } from "react";
import Landmark from "./Landmark";

class LandmarkList extends Component {
  render() {
    return this.props.landmarks.map((landmark, index) => {
      return (
        <Landmark
          key={index}
          landmarkName={landmark.landmarkName}
          routeURL={landmark.routeURL}
          wikiURL={landmark.wikiURL}
        />
      );
    });
  }
}

export default LandmarkList;
