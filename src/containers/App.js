import React, { Component } from "react";
import Map from "../components/Map";
import SplashScreen from "../components/SplashScreen";
import LandmarkList from "../components/LandmarkList";
import { geolocated } from "react-geolocated";
import { Item } from "semantic-ui-react";
import location_support from "../assets/my_location.svg";
import location_access from "../assets/confirm.svg";
import location_search from "../assets/location_search.svg";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landmarks: [
        {
          imgUrl: "https://react.semantic-ui.com/images/wireframe/image.png",
          landmarkName: "Landmark 1",
          location: "10 blocks away",
          routeUrl: "",
          wikiUrl: ""
        },
        {
          imgUrl: "https://react.semantic-ui.com/images/wireframe/image.png",
          landmarkName: "Landmark 2",
          location: "10 blocks away",
          routeUrl: "",
          wikiUrl: ""
        },
        {
          imgUrl: "https://react.semantic-ui.com/images/wireframe/image.png",
          landmarkName: "Landmark 3",
          location: "10 blocks away",
          routeUrl: "",
          wikiUrl: ""
        }
      ]
    };
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
      let url = "https://en.wikipedia.org/w/api.php";
      let coord =
        this.props.coords.latitude + "|" + this.props.coords.longitude;

      let params = {
        action: "query",
        generator: "geosearch",
        prop: "coordinates|pageimages",
        ggscoord: coord,
        ggsradius: 1000,
        format: "json"
      };

      url = url + "?origin=*";
      Object.keys(params).forEach(function(key) {
        url += "&" + key + "=" + params[key];
      });

      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          let pages = response.query.pages;
          console.log(pages);
        })
        .catch(function(error) {
          console.log(error);
        });

      console.log(this.props.coords);
      return (
        <div>
          <Map coords={this.props.coords} />
          <Item.Group className="landmarkList" divided unstackable>
            <LandmarkList landmarks={this.state.landmarks} />
          </Item.Group>
        </div>
      );
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
