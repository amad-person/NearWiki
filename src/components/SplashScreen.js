import React from "react";
import "./SplashScreen.css";

const splashScreen = props => {
  return (
    <div className="splashScreen">
      <header className="splashScreen-header">
        <img src={props.svg} className="splashScreen-svg" alt={props.message} />
        <p className="splashScreen-text">{props.message}</p>
      </header>
    </div>
  );
};

export default splashScreen;
