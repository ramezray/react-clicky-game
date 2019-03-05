import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="jumbotron text-center header">
      <h1 className="display-3 font-weight-bold">Clicky Game!</h1>
      <h2 className="my-2">
        Click on an image to earn points, but don't click on any more than once!
      </h2>
    </div>
  );
}

export default Header;
