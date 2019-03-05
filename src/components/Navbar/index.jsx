import React, { Component } from "react";

  class Navbar extends Component {
    state = {
      score: 6,
      topScore: 5
    };

    render(){
      return (
        <nav className="navbar sticky-top navbar-dark bg-primary">
          <a className="navbar-brand" href="#!">
            Clicky Game
          </a>
          <a className="navbar-brand" href="#!">
            Click an Image to Begin!
          </a>
          <a className="navbar-brand" href="#!">
            Score: {this.state.score} | Top Score: {this.state.topScore}
          </a>
        </nav>
      );
    }
  }

export default Navbar;
