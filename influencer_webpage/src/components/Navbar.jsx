import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Navbar() {
  return (
    <>
      <div className="container bg-light d-flex flex-column flex-lg-row justify-content-between align-items-center p-2 mt-2">
        <div>
          <h1 className="dancing-script">Inflencer products</h1>
        </div>
        <div>
          <ul className="d-flex justify-content-between gap-4 list-unstyled">
            <li>Home</li>
            <li>Products</li>
            <li>Sign-up</li>
            <li>Log-In</li>
            <li>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </li>
            <li>
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
