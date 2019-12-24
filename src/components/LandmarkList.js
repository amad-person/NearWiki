import React, { Component } from "react";
import Landmark from "./Landmark";

class LandmarkList extends Component {
  render() {
    return Object.keys(this.props.landmarks).map(landmarkKey => {
      return (
        <Landmark
          key={this.props.landmarks[landmarkKey].pageid}
          landmark={this.props.landmarks[landmarkKey]}
          userLocation={this.props.userLocation}
        />
      );
    });
  }
}

export default LandmarkList;
