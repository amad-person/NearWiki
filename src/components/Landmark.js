import React, { Component } from "react";
import { Button, Item } from "semantic-ui-react";
import "./Landmark.css";

class Landmark extends Component {
  render() {
    return (
      <Item className="landmark">
        <Item.Image src={this.props.landmarkImgUrl} />
        <Item.Content verticalAlign="bottom">
          <Item.Header>{this.props.landmarkName}</Item.Header>
          <Item.Meta>
            <span className="location">{this.props.location}</span>
          </Item.Meta>
          <Item.Extra>
            <Button
              icon="external alternate"
              content="Open in Maps"
              labelPosition="right"
              floated="right"
            />
            <Button icon="wikipedia w" floated="right" />
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

export default Landmark;
