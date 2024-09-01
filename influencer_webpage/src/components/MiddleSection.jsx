import MiddleImage from "./images/disk.jpg";

function MiddleSection() {
  let joinNow = {
    backgroundColor: "rgb(224, 44, 109)",
  };
  return (
    <>
      <div className="container d-flex flex-column-reverse flex-lg-row gap-5 mb-4 mt-5">
        <div>
          <img src={MiddleImage} className="px-4" alt="Middle section image" />
        </div>
        <div className="px-5 m-5">
          <h2 className="fw-bold">Featured products at one Place</h2>
          <p className="fs-4">
            Lorem ipsum dolor, sit amet consectetur
            <br />
            adipisicing elit. Architecto eaque , <br />
            provident distinc culpa,eaque
          </p>
          <button className="btn text-white fw-bold my-4" style={joinNow}>
            Join Now
          </button>
        </div>
      </div>
    </>
  );
}

export default MiddleSection;
