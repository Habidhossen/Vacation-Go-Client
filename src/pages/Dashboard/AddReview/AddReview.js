import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // submit button
  const onSubmit = (data) => {
    const img = user?.photoURL
      ? user?.photoURL
      : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
    const name = data.name;
    const rating = data.rating;
    const msg = data.msg;
    const reviewData = { img, name, rating, msg };

    // send data to the server
    fetch("https://vacation-go-server.onrender.com/api/review", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((response) => response.json())
      .then((data) => data);
    toast.success("Review added successfully", {
      theme: "colored",
      autoClose: 2000,
    });
    reset();
  };

  return (
    <section className="mt-16">
      <div className="card w-96 mx-auto shadow-sm bg-base-100">
        <div className="card-body">
          <h1 className="text-center text-xl font-bold mb-4">Add a Review</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  Name is Required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <select
                {...register("rating")}
                className="select select-bordered font-normal"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option selected>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Reviews</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Write here"
                {...register("msg", { required: true })}
              ></textarea>
              {errors.msg && (
                <span className="label-text-alt text-red-500 mt-2">
                  Review is Required
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddReview;
