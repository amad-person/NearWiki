import React from "react";
import "./SplashScreen.css"

const splashScreen = props => {
    return (
        <div className="splashScreen">
            {props.message}
        </div>
    );
};

export default splashScreen;