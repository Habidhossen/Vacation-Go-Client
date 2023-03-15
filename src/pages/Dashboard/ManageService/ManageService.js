import { FiTrash2 } from "react-icons/fi";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loader from "../../Shared/Loader/Loader";

const ManageService = () => {
  // fetch data from database using react query
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery("services", () =>
    fetch("http://localhost:5000/api/service").then((res) => res.json())
  );

  if (isLoading) {
    return <Loader />;
  }

  // handle service delete button
  const handleServiceDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to Delete?");

    if (confirm) {
      fetch(`http://localhost:5000/api/service/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Product deleted successfully", {
              theme: "colored",
              autoClose: 2000,
            });
            refetch();
          }
        });
    }
  };

  return (
    <div>
      <div className="overflow-x-auto p-4">
        <h1 className="text-xl text-primary font-semibold mb-4">
          All Services ({services.data.length})
        </h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {services.data.map((service) => (
              <tr key={service._id}>
                <td>{service._id}</td>
                <td>{service.name}</td>
                <td>${service.price}</td>
                <td>
                  <button onClick={() => handleServiceDelete(service._id)}>
                    <FiTrash2 className="text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageService;
