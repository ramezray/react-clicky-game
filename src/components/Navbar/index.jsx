import React, { Component } from "react";


class Navbar extends Component {
  
  render() {
    return (
      <nav className="navbar sticky-top navbar-dark bg-primary">
        <a className="navbar-brand" href="#!">
          Clicky Game
        </a>
        <a className="navbar-brand" href="#!">
          Click an Image to Begin!
        </a>
        <a className="navbar-brand" href="#!">
        Score: {this.props.score} | Top Score: {this.props.topScore}
        </a>
      </nav>
    );
  }
}

export default Navbar;
