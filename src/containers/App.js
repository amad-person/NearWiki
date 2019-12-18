import React, {Component} from "react";
import Map from "../components/Map";
import SplashScreen from "../components/SplashScreen";
import LandmarkList from "../components/LandmarkList";
import {geolocated} from "react-geolocated";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            landmarkLocations: []
        };
    }

    render() {
        return !this.props.isGeolocationAvailable ? (
            <SplashScreen message={"Your browser does not support the Geolocation API."}/>
        ) : !this.props.isGeolocationEnabled ? (
            <SplashScreen message={"Geolocation is not enabled."}/>
        ) : this.props.coords ? (
            <div>
                <Map coords={this.props.coords}/>
                <LandmarkList landmarks={[{landmarkName: 'landmark 1'}, {landmarkName: 'landmark 2'}]}/>
            </div>
        ) : (
            <SplashScreen message={"Getting location data..."}/>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    watchPosition: true,
    userDecisionTimeout: 5000,
})(App);