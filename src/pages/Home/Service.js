import "../../assets/styles/style.css";

const Service = ({ service }) => {
  const { _id, title, price, desc, img } = service;

  return (
    <div className="service-card">
      <img className="service-card-img" src={img} alt="" />
      <div>
        <p className="service-card-price">${price}</p>
        <h1 className="service-card-title">{title}</h1>
        <p className="service-card-text">{desc}</p>
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Service;
