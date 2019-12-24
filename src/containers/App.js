import React, { Component } from "react";
import SplashScreen from "../components/SplashScreen";
import NearWiki from "./NearWiki";
import { geolocated } from "react-geolocated";
import location_support from "../assets/my_location.svg";
import location_access from "../assets/confirm.svg";
import location_search from "../assets/location_search.svg";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.isGeolocationAvailable) {
      return (
        <SplashScreen
          svg={location_support}
          message={"Your browser does not support the Geolocation API."}
        />
      );
    } else if (!this.props.isGeolocationEnabled) {
      return (
        <SplashScreen
          svg={location_access}
          message={"Please enable location access."}
        />
      );
    } else if (this.props.coords) {
      return <NearWiki coords={this.props.coords} />;
    } else {
      return (
        <SplashScreen
          svg={location_search}
          message={"Finding landmarks near you..."}
        />
      );
    }
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  watchPosition: true,
  userDecisionTimeout: 5000
})(App);
