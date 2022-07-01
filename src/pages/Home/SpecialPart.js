// Import images
import specialBannerBg from "../../assets/images/special-banner-bg.png";

// Import React-Icon
import { BsFillStarFill } from "react-icons/bs";

const SpecialPart = () => {
  return (
    <section
      className="min-h-screen flex justify-center"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${specialBannerBg}`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "600px",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl text-white font-medium uppercase">
          Holiday Package Offer
        </h1>
        <div className="flex gap-3 text-2xl text-amber-500">
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
        </div>
        <h3 className="text-5xl text-white font-semibold uppercase">
          HOLIDAY SPECIAL 25% OFF !
        </h3>
      </div>
    </section>
  );
};

export default SpecialPart;
