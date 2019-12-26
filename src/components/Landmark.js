import React, { Component } from "react";
import { Button, Item } from "semantic-ui-react";
import { getDistance } from "geolib";
import "@gouch/to-title-case";
import "./Landmark.css";

class Landmark extends Component {
  getDistanceFromUserLocation(landmarkCoords) {
    let userLocation = {
      lat: this.props.userLocation.latitude,
      lon: this.props.userLocation.longitude
    };

    let landmarkLocation = {
      lat: landmarkCoords[0].lat,
      lon: landmarkCoords[0].lon
    };

    const distanceInMeters = getDistance(userLocation, landmarkLocation);
    return distanceInMeters + " metres away";
  }

  getStrWithDelimiter(str, delimiter) {
    return str.split(" ").join(delimiter);
  }

  getWikiUrl(landmark) {
    const searchQuery = this.getStrWithDelimiter(landmark.title, "_");
    return `https://www.wikipedia.org/wiki/${searchQuery}`;
  }

  getMapsUrl(landmark) {
    const searchQuery = this.getStrWithDelimiter(landmark.title, "+");
    return `https://www.google.com/maps/search/${searchQuery}`;
  }

  render() {
    let landmarkImgUrl =
      "https://react.semantic-ui.com/images/wireframe/image.png";
    if (this.props.landmark.original) {
      landmarkImgUrl = this.props.landmark.original.source;
    }

    let landmarkDistance = "";
    if (this.props.landmark.coordinates) {
      landmarkDistance = this.getDistanceFromUserLocation(
        this.props.landmark.coordinates
      );
    }

    let description = "";
    if (this.props.landmark.description) {
      description = this.props.landmark.description.toTitleCase();
    }

    let wikiUrl = this.getWikiUrl(this.props.landmark);
    let mapsUrl = this.getMapsUrl(this.props.landmark);

    return (
      <Item className="landmark">
        <Item.Image src={landmarkImgUrl} size="small" />
        <Item.Content verticalAlign="bottom">
          <Item.Header>{this.props.landmark.title.toTitleCase()}</Item.Header>
          <Item.Meta>
            <span className="location">{landmarkDistance}</span>
          </Item.Meta>
          <Item.Description>{description}</Item.Description>
          <Item.Extra>
            <Button
              icon="external alternate"
              content="Google Maps"
              labelPosition="right"
              floated="right"
              as="a"
              href={mapsUrl}
              target="_blank"
            />
            <Button
              icon="wikipedia w"
              floated="right"
              as="a"
              href={wikiUrl}
              target="_blank"
            />
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

export default Landmark;
