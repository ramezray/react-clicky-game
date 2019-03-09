import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="jumbotron text-center header">
      <h2 className="display-5 font-weight-bold">Clicky Game!</h2>
      <h5 className="my-2">
        Click on an image to earn points, but don't click on any more than once!
      </h5>
    </div>
  );
}

export default Header;
