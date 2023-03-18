import { useQuery } from "react-query";
import Service from "../Home/Service";
import Loader from "../Shared/Loader/Loader";

const AllServices = () => {
  // fetch data from database using react query
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://vacation-go-server.onrender.com/api/service").then((res) =>
      res.json()
    )
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="py-8 px-6 md:px-20 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {services.data
          .map((service) => <Service key={service._id} service={service} />)
          .reverse()}
      </div>
    </div>
  );
};

export default AllServices;
