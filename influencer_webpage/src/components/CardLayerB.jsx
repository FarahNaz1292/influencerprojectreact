import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Drone from "./images/drone.jpg";
import Lightsetup from "./images/hdlights.jpg";
import Photoshootset from "./images/lightsdisplayimage.jpg";

function CardLayerB() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className=" container card d-flex flex-column shadow-lg">
              <img src={Drone} alt="Drone" className="mt-2" />
              <h2>Drone</h2>
              <p className="fs-5 fw-bold">$980.25</p>
              <div className="d-flex flex-row">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <p className="pb-3 px-3">4.99</p>
              </div>
              <p className="fw-bold fs-6">
                Worldwide Shipping <br />
                available <br />
                Buyers protection possible!
              </p>
            </div>
          </div>
          <div className="col">
            <div className=" container card d-flex flex-column shadow-lg">
              <img src={Lightsetup} alt="Tripod" className="mt-2" />
              <h2>Light Set Up</h2>
              <p className="fs-5 fw-bold">$1200.00</p>
              <div className="d-flex flex-row">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <p className="pb-3 px-3">4.99</p>
              </div>
              <p className="fw-bold fs-6">
                Worldwide Shipping <br />
                available <br />
                Buyers protection possible!
              </p>
            </div>
          </div>
          <div className="col">
            <div className=" container card d-flex flex-column shadow-lg">
              <img src={Photoshootset} alt="Tripod" className="mt-2" />
              <h2>Photoshoot set</h2>
              <p className="fs-5 fw-bold">$820.00</p>
              <div className="d-flex flex-row">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <p className="pb-3 px-3">4.99</p>
              </div>
              <p className="fw-bold fs-6">
                Worldwide Shipping <br />
                available <br />
                Buyers protection possible!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardLayerB;
