import React, { Component } from "react";
import "./body.css";

class Body extends Component {
  handleClick = () => {
    this.setState(console.log("click"));
  };
  render() {
    return (
      <div className="container row body">
        <div className="card col-2 click-image">
          <img
            src="https://picsum.photos/150"
            key="1"
            id="1"
            alt="ima"
            onClick={this.handleClick}
          />
        </div>
        <div className="card col-2 click-image">
          <img
            src="https://picsum.photos/150"
            key="2"
            id="2"
            alt="ima"
            onClick={this.handleClick}
          />
        </div>
        <div className="card col-2 click-image">
          <img
            src="https://picsum.photos/150"
            key="3"
            id="3"
            alt="ima"
            onClick={this.handleClick}
          />
        </div>
        <div className="card col-2 click-image">
          <img
            src="https://picsum.photos/150"
            key="4"
            id="4"
            alt="ima"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default Body;
