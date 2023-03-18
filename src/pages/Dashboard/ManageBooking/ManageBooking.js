import { FiTrash2 } from "react-icons/fi";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loader from "../../Shared/Loader/Loader";

const ManageBooking = () => {
  // fetch data from database using react query
  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery("booking", () =>
    fetch("https://vacation-go-server.onrender.com/api/booking").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loader />;
  }

  // handle Booking delete button
  const handleBookingDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to Delete?");

    if (confirm) {
      fetch(`https://vacation-go-server.onrender.com/api/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Booking deleted successfully", {
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
          All Bookings ({bookings.data.length})
        </h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Booking Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {bookings.data.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.userName}</td>
                <td>{booking.userEmail}</td>
                <td>{booking.serviceName}</td>
                <td>${booking.price}</td>
                <td>{booking.bookingDate}</td>
                <td>
                  <button onClick={() => handleBookingDelete(booking._id)}>
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

export default ManageBooking;
