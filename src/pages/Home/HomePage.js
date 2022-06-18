import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner";
import SpecialPart from "./SpecialPart";
import Summary from "./Summary";

const HomePage = () => {
  return (
    <div>
      <Banner />
      {/* <Services /> */}
      <SpecialPart />
      {/* <Reviews /> */}
      <Summary />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
