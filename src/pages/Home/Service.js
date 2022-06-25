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
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Service;
