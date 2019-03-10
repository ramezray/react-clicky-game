import React, { Component } from "react";
import "./body.css";
import greenApple from "./images/greenApple.jpg";
import pomegranate from "./images/pomegranate.jpg";
import grape from "./images/grape.jpg";
import watermelon from "./images/watermelon.jpg";
import kaiwi from "./images/kaiwi.jpg";
import orange from "./images/orange.jpg";
import banana from "./images/banana.jpg";
import pear from "./images/pear.jpg";
import strawbarry from "./images/strawbarry.jpg";
import apple from "./images/apple.jpg";
import pineapple from "./images/pineapple.jpg"
let shuffle = require("shuffle-array");


class Body extends Component {
  state = {
    images: [
      greenApple,
      pomegranate,
      grape,
      watermelon,
      kaiwi,
      orange,
      banana,
      strawbarry,
      pear,
      apple,
      pineapple
    ],
    pickedImageArray: []
  };
  render() {
    return (
      <div className="container row body">
        {this.state.images.map((image, index) => (
          <div className="card click-image " key={index} id={image}>
            <img
              src={image}
              alt={"should be a foto"}
              onClick={() => {
                this.setState(shuffle(this.state.images));

                if (this.state.pickedImageArray.includes(image)) {
                  this.setState(this.props.restScore);
                  this.setState({ pickedImageArray: [] });
                } else this.setState(this.props.increamentScore);
                this.setState(() => {
                  this.state.pickedImageArray.push(image);
                });
              }}
              width={"100%"}
              height={"100%"}
            />
            {console.log(this.state.pickedImageArray)}
          </div>
        ))}
      </div>
    );
  }
}

export default Body;
