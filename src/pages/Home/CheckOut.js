import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../Firebase/firebase.init";
import Loader from "../Shared/Loader/Loader";

const CheckOut = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState
  const { serviceID } = useParams(); // get productId from params

  // booking service data send to the server
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // submit button
  const onSubmit = (bookingService) => {
    console.log(bookingService);

    // send data to the server
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookingService),
    })
      .then((response) => response.json())
      .then((data) => data);
    toast.success("Booking is Successful. Go to Dashboard.", {
      theme: "colored",
      autoClose: 2000,
    });
    reset();
  };

  // fetch data from database using react query (Service)
  const { data: service, isLoading } = useQuery("service", () =>
    fetch(`http://localhost:5000/service/${serviceID}`).then((res) =>
      res.json()
    )
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 gap-y-8 mt-10 px-36">
      <div className="grid grid-cols-2 items-center bg-white rounded-md">
        <div className="">
          <img className="w-full rounded-md" src={service.imgURL} alt="" />
        </div>
        <div className="mx-4 flex flex-col gap-y-3">
          <p className="">ID: {service._id}</p>
          <p className="">
            Service: <b className="text-secondary">{service.name}</b>
          </p>
          <p>
            Price: <b className="text-secondary">${service.price}</b>
          </p>
          <p>Description: {service.desc}</p>
        </div>
      </div>
      <div className="card shadow-sm bg-white">
        <div className="card-body">
          <h1 className="text-center text-xl font-bold mb-4">
            Confirm Your Booking
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                value={service.name}
                className="input input-bordered"
                {...register("serviceName", { required: true })}
              />
              {errors.serviceName && (
                <span className="label-text-alt text-red-500 mt-2">
                  Service Name is Required!
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">$Price</span>
              </label>
              <input
                value={service.price}
                className="input input-bordered"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="label-text-alt text-red-500 mt-2">
                  Price is Required!
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="label-text-alt text-red-500 mt-2">
                  Name is Required!
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                value={user?.email}
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="label-text-alt text-red-500 mt-2">
                  Email is Required!
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Booking Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <span className="label-text-alt text-red-500 mt-2">
                  Booking date is Required!
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="custom-primary-btn">Confirm Booking</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CheckOut;
