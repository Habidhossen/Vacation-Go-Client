import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner";
import Blogs from "./Blogs";
import Reviews from "./Reviews";
import Services from "./Services";
import SpecialPart from "./SpecialPart";
import Summary from "./Summary";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <SpecialPart />
      <Reviews />
      <Summary />
      <Blogs />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
