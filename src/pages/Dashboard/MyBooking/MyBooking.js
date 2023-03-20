import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import Loader from "../../Shared/Loader/Loader";

const MyBooking = () => {
  // get user info from useAuthState
  const [user] = useAuthState(auth);
  const email = user?.email;

  // fetch booking data from database by checking user email
  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery("bookings", () =>
    fetch(
      `https://vacation-go-server.onrender.com/api/booking?email=${email}`
    ).then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  // handle Booking delete button
  const handleBookingDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to Cancel?");

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
          My Bookings ({bookings.data.length})
        </h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Service</th>
              <th>Price</th>
              <th>Booking Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {bookings.data.map((booking) => (
              <tr key={booking._id}>
                <td>{booking._id}</td>
                <td>{booking.serviceName}</td>
                <td>${booking.price}</td>
                <td>{booking.bookingDate}</td>

                <td>
                  <button
                    className="bg-red-600 text-white text-xs font-medium rounded-md px-2 py-1"
                    onClick={() => handleBookingDelete(booking._id)}
                  >
                    Cancel Booking
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

export default MyBooking;
