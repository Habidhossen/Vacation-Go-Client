import Banner from "./Banner";
import Contact from "./Contact";
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
      <Contact />
    </div>
  );
};

export default HomePage;
