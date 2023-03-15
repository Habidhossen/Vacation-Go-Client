// Import images

// Import React-Icon
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SpecialPart = () => {
  return (
    <section
      className="min-h-screen flex justify-center"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://cdn.shopify.com/s/files/1/0626/5543/0870/files/img_06_004551d2-23c5-42b5-9aad-e26700b46fd5_1512x.png?v=1642492852`,
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "600px",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-6">
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
        <h3 className="font-fredoka text-6xl text-white ">
          Holiday Special 25% Off!
        </h3>
        <Link
          to="/service"
          className="bg-secondary text-white font-semibold hover:bg-transparent hover:text-secondary py-4 px-8 border border-secondary hover:border-secondary rounded-full"
        >
          Booking now
        </Link>
      </div>
    </section>
  );
};

export default SpecialPart;
