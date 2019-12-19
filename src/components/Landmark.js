import React from "react";
import "./Landmark.css"

const landmark = props => {
    // noinspection PointlessBooleanExpressionJS
    return (
        <div className="landmark">
            {props.landmarkName}
            <div className="routeURL">
                {
                    props.routeURL !== null && props.routeURL !== undefined ?
                        props.routeURL :
                        "No route found."
                }
            </div>
            <div className="wikiURL">
                {
                    props.wikiURL !== null && props.wikiURL !== undefined ?
                        props.wikiURL :
                        "No Wikipedia entry found. You can ask to create one."
                }
            </div>
        </div>
    );
};

export default landmark;