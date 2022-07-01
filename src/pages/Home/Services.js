import { FaLongArrowAltRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "../../assets/styles/style.css";
import Loader from "../Shared/Loader/Loader";
import Service from "./Service";

const Services = () => {
  // fetch data from database using react query
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="my-16 px-20">
      <div className="flex justify-center items-center gap-3 mb-10">
        <div className="section-title-bar"></div>
        <div>
          <h1 className="section-title">
            Find Your <span>Services</span>
          </h1>
        </div>
        <div className="section-title-bar"></div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {services
          .map((service) => <Service key={service._id} service={service} />)
          .reverse()}
      </div>

      <div className="flex justify-end mt-6">
        <Link to="/services" className="section-footer-btn">
          See All Services <FaLongArrowAltRight />
        </Link>
      </div>
    </section>
  );
};

export default Services;
