import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/styles/style.css";

const Service = ({ service }) => {
  const { _id, name, price, desc, img } = service;

  return (
    <div className="bg-white rounded-lg p-3">
      <img className="rounded-md" src={img} alt="" />
      <div className="flex items-center justify-between my-3">
        <h1 className="text-base text-heading font-bold">{name}</h1>
        <p className="font-fredoka text-xl text-primary mt-1">
          ${price}{" "}
          <span className="font-mulish font-semibold text-sm text-text">
            <del>${Number(price) + 9}</del>
          </span>
        </p>
      </div>
      <p className="text-text text-sm">{desc.slice(0, 50) + "..."}</p>
      <Link
        to={`/service/${_id}`}
        className="flex items-center justify-center gap-2 bg-slate-100 p-2 rounded-lg text-sm text-heading font-bold mt-6 hover:bg-orange-100 duration-300"
      >
        More Info <FaLongArrowAltRight />
      </Link>
    </div>
  );
};

export default Service;
