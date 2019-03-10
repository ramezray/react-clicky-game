import React, { Component } from "react";
import NavMessage from "../NavMsg";


class Navbar extends Component {
  
  render() {
    return (
      <nav className="navbar sticky-top navbar-dark bg-primary">
        <a className="navbar-brand" href="#!">
          Clicky Game
        </a>
        <NavMessage score={this.props.score} topScore={this.props.topScore} />
        <a className="navbar-brand" href="#!">
        Score: {this.props.score} | Top Score: {this.props.topScore}
        </a>
      </nav>
    );
  }
}

export default Navbar;
