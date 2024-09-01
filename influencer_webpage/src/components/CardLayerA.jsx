import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flextripod from "./images/tripod.jpg";
import Microphone from "./images/mic.jpg";
import Airbuds from "./images/earpods.jpg";

function CardLayerA() {
  return (
    <>
      <h1 className="d-flex align-content-center justify-content-center fw-bold mt-3">
        Our Products
      </h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className=" container card d-flex flex-column shadow-lg">
              <img src={Flextripod} alt="Tripod" className="mt-2" />
              <h2>Flex TriPod</h2>
              <p className="fs-5 fw-bold">$50.48</p>
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
              <img src={Microphone} alt="Tripod" className="mt-2" />
              <h2>Microphone</h2>
              <p className="fs-5 fw-bold">$120.25</p>
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
              <img src={Airbuds} alt="Tripod" className="mt-2" />
              <h2>Airbuds</h2>
              <p className="fs-5 fw-bold">$100.00</p>
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

export default CardLayerA;
