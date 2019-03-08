import React, { Component } from "react";
import "./body.css";
import bill from "./images/bill.jpg";
import obama from "./images/obama.jpg";
import reagan from "./images/reagan.jpg";
import trump from "./images/trump.jpg";

class Body extends Component {
  state = {
    clickedImageId: "",
    images: [bill, obama, reagan, trump]
  };

  render() {
    return (
      <div className="container row body">
        {this.state.images.map(image => (
          <div className="card col-2 click-image">
            <img
              src={image}
              key={image.indexOf}
              alt={image}
              id={image.indexOf}
              onClick={this.props.handleClick}
              width={"100%"}
              height={"100%"}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Body;
