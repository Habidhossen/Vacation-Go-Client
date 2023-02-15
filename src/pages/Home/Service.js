import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/styles/style.css";

const Service = ({ service }) => {
  const { _id, name, price, desc, imgURL } = service;

  return (
    <div className="bg-white">
      <img className="" src={imgURL} alt="" />
      <div className="flex flex-col items-center p-4">
        <h1 className="text-lg text-heading font-semibold">{name}</h1>
        <p className="font-fredoka text-2xl text-primary mt-1">
          ${price}{" "}
          <span className="text-base text-text">
            <del>${Number(price) + 100}</del>
          </span>
        </p>
        <Link
          to={`service/${_id}`}
          className="flex items-center gap-2 mt-14 uppercase -tracking-tight text-sm font-bold text-secondary hover:text-primary duration-300"
        >
          Checkout <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
};

export default Service;
