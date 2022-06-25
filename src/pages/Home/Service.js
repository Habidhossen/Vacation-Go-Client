import { Link } from "react-router-dom";
import "../../assets/styles/style.css";

const Service = ({ service }) => {
  const { _id, name, price, desc, imgURL } = service;

  return (
    <div className="service-card">
      <img className="service-card-img" src={imgURL} alt="" />
      <div>
        <p className="service-card-price">${price}</p>
        <h1 className="service-card-title">{name}</h1>
        <p className="service-card-text">{desc}</p>
      </div>
      <Link to={`service/${_id}`} className="checkout-btn">
        Checkout
      </Link>
    </div>
  );
};

export default Service;
