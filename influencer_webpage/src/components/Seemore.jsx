import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Seemore() {
  let seeMoreBtn = {
    color: "rgb(224, 44, 109)",
    cursor: "pointer",
  };
  return (
    <div className="container">
      <p className="text-end" style={seeMoreBtn}>
        See More
        <FontAwesomeIcon icon={faArrowRight} />
      </p>
    </div>
  );
}

export default Seemore;
