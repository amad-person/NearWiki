import React, { Component } from "react";
import Map from "../components/Map";
import { Item } from "semantic-ui-react";
import LandmarkList from "../components/LandmarkList";
import "./NearWiki.css";

class NearWiki extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landmarks: {},
      landmarkMarkers: []
    };
  }

  componentDidMount() {
    this.getLandmarksNearUserLocation();
    this.getLandmarkMarkers();
  }

  getLandmarksNearUserLocation() {
    let url = "https://en.wikipedia.org/w/api.php";
    let coord = this.props.coords.latitude + "|" + this.props.coords.longitude;

    let params = {
      action: "query",
      generator: "geosearch",
      prop: "coordinates|pageimages|description|info",
      piprop: "original",
      ggscoord: coord,
      ggsradius: 2000,
      ggslimit: 20,
      format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key) {
      url += "&" + key + "=" + params[key];
    });

    let that = this;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response);
        let pages = response.query.pages;
        that.setState({
          landmarks: pages
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getLandmarkMarkers() {
    this.setState({
      landmarkMarkers: []
    });
  }

  render() {
    return (
      <div>
        <Map coords={this.props.coords} />
        <Item.Group className="landmarkList" divided unstackable>
          <LandmarkList
            landmarks={this.state.landmarks}
            userLocation={this.props.coords}
          />
        </Item.Group>
      </div>
    );
  }
}

export default NearWiki;
