import {
  faDribbble,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  let footer = {
    backgroundColor: "rgb(10, 8, 38)",
    maxWidth: "100%",
    height: "17rem",
  };
  return (
    <>
      <div className="container-fluid" style={footer}>
        <div className="d-flex flex-column text-white text-center p-4">
          <h2>Influencer products</h2>
          <p>
            Copyright <FontAwesomeIcon icon={faCopyright} />
            {new Date().getFullYear()} influencer products <br /> All rights
            reserved
          </p>
        </div>
        <div className="d-flex flex-row gap-4 align-content-center justify-content-center">
          <FontAwesomeIcon
            className="fs-3 fw-bold text-white rounded-circle"
            icon={faInstagram}
            style={{
              backgroundColor: "rgb(69, 77, 155)",
              borderRadius: "60px",
            }}
          />
          <FontAwesomeIcon
            icon={faDribbble}
            className="fs-3 fw-bold text-white rounded-circle"
            style={{ backgroundColor: "rgb(69, 77, 155)" }}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="fs-3 fw-bold text-white rounded-circle"
            style={{ backgroundColor: "rgb(69, 77, 155)" }}
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className="fs-3 fw-bold text-white rounded-circle"
            style={{ backgroundColor: "rgb(69, 77, 155)" }}
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
