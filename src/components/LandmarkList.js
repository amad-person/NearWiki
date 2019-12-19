import React, { Component } from "react";
import Landmark from "./Landmark";

class LandmarkList extends Component {
  render() {
    return this.props.landmarks.map((landmark, index) => {
      return (
        <Landmark
          key={index}
          landmarkImgUrl={landmark.imgUrl}
          landmarkName={landmark.landmarkName}
          location={landmark.location}
          routeUrl={landmark.routeUrl}
          wikiUrl={landmark.wikiUrl}
        />
      );
    });
  }
}

export default LandmarkList;
