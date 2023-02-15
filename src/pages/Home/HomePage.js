import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner";
import Blogs from "./Blogs";
import Reviews from "./Reviews";
import Services from "./Services";
import SpecialPart from "./SpecialPart";
import SubscribeNews from "./SubscribeNews";
import SummaryPart from "./SummaryPart";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <SpecialPart />
      <Blogs />
      <SummaryPart />
      <Reviews />
      <SubscribeNews />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
