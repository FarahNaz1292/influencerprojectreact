import Camera from "./images/camera.png";

const Banner = () => {
  let styles = {
    backgroundColor: "rgb(224, 44, 109)",
  };
  return (
    <>
      <div className="container d-flex flex-column-reverse flex-lg-row justify-content-between mt-4">
        <div className="text-center text-lg-start">
          <h1 className="mt-5 py-4">
            Start your Journey as <br />
            influencer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            ipsam accusantium!
            <br /> Perferendis, mollitia nam. Expedita fuga modi <br />
            eum facere quas excepturi.
          </p>
          <div>
            <button
              className="btn rounded-pill w-25 text-white fw-bold"
              style={styles}
            >
              PreBook now
            </button>
          </div>
        </div>

        <div>
          <img className="container-fluid" src={Camera} alt="Image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
