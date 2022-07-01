import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";

const AllServices = () => {
  // fetch data from database using react query
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-20 py-8">
      <div className="grid grid-cols-3 gap-6">
        {services
          .map((service) => (
            <div>
              <div className="service-card">
                <img className="service-card-img" src={service.imgURL} alt="" />
                <div>
                  <p className="service-card-price">${service.price}</p>
                  <h1 className="service-card-title">{service.name}</h1>
                  <p className="service-card-text">{service.desc}</p>
                </div>
                <Link to={`../service/${service._id}`} className="checkout-btn">
                  Checkout
                </Link>
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default AllServices;
