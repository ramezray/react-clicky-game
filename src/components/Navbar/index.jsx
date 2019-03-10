import React, { Component } from "react";
import NavMessage from "../NavMsg";
import NavMsg from "../NavMsg";


class Navbar extends Component {
  
  render() {
    return (
      <nav className="navbar sticky-top navbar-dark bg-primary col-sm-12">
        <li className="navbar-brand">
          Clicky Game
        </li>
        <NavMsg score={this.props.score} topScore={this.props.topScore} />
        <li className="navbar-brand">
        Score: {this.props.score} | Top Score: {this.props.topScore} 

        </li>
      </nav>
    );
  }
}

export default Navbar;
