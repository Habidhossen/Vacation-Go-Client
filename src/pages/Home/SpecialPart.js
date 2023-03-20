// Import React-Icon
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import beachBg from "../../assets/images/beach.jpg";

const SpecialPart = () => {
  return (
    <section
      className="min-h-screen flex justify-center"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${beachBg})`,
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "600px",
      }}
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="flex flex-col items-center justify-center gap-6"
      >
        <h1 className="text-2xl text-white font-medium uppercase">
          Holiday Package Offer
        </h1>
        <div className="flex gap-3 text-2xl text-secondary">
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
        </div>
        <h3 className="font-fredoka text-6xl text-white text-center">
          Holiday Special 25% Off!
        </h3>
        <Link
          to="/service"
          className="bg-secondary text-white font-semibold hover:bg-transparent hover:text-white py-3 px-8 border border-secondary hover:border-white rounded-full duration-300"
        >
          Booking now
        </Link>
      </div>
    </section>
  );
};

export default SpecialPart;
