import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Vloggingcamera from "./images/dslr.jpg";
import Greenscreen from "./images/greenscreen.jpg";
import Actioncamera from "./images/actioncamera.jpg";

function CardLayerC() {
  return (
    <>
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col">
            <div className=" container card d-flex flex-column shadow-lg">
              <img src={Vloggingcamera} alt="Drone" className="mt-2" />
              <h2>Vlogging Camera</h2>
              <p className="fs-5 fw-bold">$1800.80</p>
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
              <img src={Greenscreen} alt="Tripod" className="mt-2" />
              <h2>Green Screen</h2>
              <p className="fs-5 fw-bold">$25.48</p>
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
              <img src={Actioncamera} alt="Tripod" className="mt-2" />
              <h2>Action Camera</h2>
              <p className="fs-5 fw-bold">$380.00</p>
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

export default CardLayerC;
