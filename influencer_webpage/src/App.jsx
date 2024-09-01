import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Vendor from "./components/Vendor";
import CardLayerA from "./components/CardLayerA";
import CardLayerB from "./components/CardLayerB";
import CardLayerC from "./components/CardLayerC";
import Seemore from "./components/Seemore";
import MiddleSection from "./components/MiddleSection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Banner></Banner>
      <Vendor></Vendor>
      <CardLayerA></CardLayerA>
      <CardLayerB></CardLayerB>
      <CardLayerC></CardLayerC>
      <Seemore></Seemore>
      <MiddleSection></MiddleSection>
      <Footer></Footer>
    </>
  );
}

export default App;
