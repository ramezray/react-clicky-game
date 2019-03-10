import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="jumbotron pt-1 pb-1 text-center header">
      <h2 className="display-5 font-weight-bold">Clicky Game!</h2>
      <h5 className="">
        Use your memory to click on the image that you didn't click on yet to earn a point!
      </h5>
    </div>
  );
}

export default Header;
