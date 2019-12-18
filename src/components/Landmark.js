import React from "react";
import "./Landmark.css"

const landmark = props => {
    return (
        <div className="landmark">
            {props.landmarkName}
        </div>
    );
};

export default landmark;