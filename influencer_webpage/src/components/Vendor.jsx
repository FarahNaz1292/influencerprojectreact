import Alibaba from "./images/alibaba_logo.png";
import Amazon from "./images/Amazon-logo.png";
import Daraz from "./images/darazPK.png";
import Ebay from "./images/EBay_logo.png";
import Rakuten from "./images/rakuten.png";
import Walmart from "./images/Walmart_logo.png";
import Target from "./images/Target-Logo.png";

function Vendor() {
  let imageSize = {
    width: "100px",
    height: "50px",
  };
  return (
    <div className="container d-flex align-content-center justify-content-center gap-5 px-3 flex-wrap mt-5">
      <img src={Alibaba} alt="Alibaba logo" style={imageSize} />
      <img src={Amazon} alt="Amazon logo" style={imageSize} />
      <img src={Daraz} alt="Daraz logo" style={imageSize} />
      <img src={Ebay} alt="Ebay logo" style={imageSize} />
      <img src={Rakuten} alt="Rakuten logo" style={imageSize} />
      <img src={Walmart} alt="Walmart logo" style={imageSize} />
      <img src={Target} alt="Target logo" style={imageSize} />
    </div>
  );
}

export default Vendor;
