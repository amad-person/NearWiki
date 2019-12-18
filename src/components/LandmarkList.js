import React, { Component } from "react";
import Landmark from "./Landmark";

class LandmarkList extends Component {
    render() {
        return this.props.landmarks.map((landmark, index) => {
            return (
                <Landmark
                    key={index}
                    landmarkName={landmark.landmarkName}
                />
            );
        });
    }
}

export default LandmarkList;