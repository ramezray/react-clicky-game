import React, { Component } from "react";
import "./body.css";
import bill from "./images/bill.jpg";
import obama from "./images/obama.jpg";
import reagan from "./images/reagan.jpg";
import trump from "./images/trump.jpg";
import wa from "./images/wa.jpg";
import richard from "./images/richard.jpg";
import james from "./images/james.jpg";
import kennedy from "./images/kennedy.jpg";
import bushFather from "./images/bushFather.jpg";
import bushSon from "./images/bushSon.jpg";
let shuffle = require("shuffle-array");


class Body extends Component {
  state = {
    images: [
      bill,
      obama,
      reagan,
      trump,
      wa,
      richard,
      james,
      bushFather,
      kennedy,
      bushSon
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
                // this.setState(this.props.msg.correctPick);
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
