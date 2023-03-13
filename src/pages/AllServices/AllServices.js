import { useQuery } from "react-query";
import Service from "../Home/Service";
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
          .map((service) => <Service key={service._id} service={service} />)
          .reverse()}
      </div>
    </div>
  );
};

export default AllServices;
