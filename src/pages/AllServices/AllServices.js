import { FaLongArrowAltRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";

const AllServices = () => {
  // fetch data from database using react query
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/api/service").then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="px-20 py-8">
      <div className="grid grid-cols-3 gap-6">
        {services.data
          .map((service) => (
            <div className="bg-white">
              <img className="" src={service.imgURL} alt="" />
              <div className="flex flex-col items-center p-4">
                <h1 className="text-lg font-semibold">{service.name}</h1>
                <p className="font-fredoka text-2xl text-primary mt-1">
                  ${service.price}{" "}
                  <span className="text-base text-gray-600">
                    <del>${Number(service.price) + 100}</del>
                  </span>
                </p>
                <Link
                  to={`${service._id}`}
                  className="flex items-center gap-2 mt-14 uppercase -tracking-tight text-sm font-bold text-secondary hover:text-primary duration-300"
                >
                  Checkout <FaLongArrowAltRight />
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
