import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddService = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // submit button
  const onSubmit = (serviceData) => {
    console.log(serviceData);
    // send data to the server
    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
      .then((response) => response.json())
      .then((data) => data);
    toast.success("Service added successfully", {
      theme: "colored",
      autoClose: 2000,
    });
    reset();
  };

  return (
    <section className="mt-16">
      <div className="card w-96 mx-auto shadow-sm bg-base-100">
        <div className="card-body">
          <h1 className="text-center text-xl font-bold mb-4">Add Service</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Service Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="label-text-alt text-red-500 mt-2">
                  Service Name is Required!
                </span>
              )}
            </div>
            <div className="form-control mt-3">
              <input
                type="number"
                placeholder="$ Price"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="label-text-alt text-red-500 mt-2">
                  Price is Required!
                </span>
              )}
            </div>
            <div className="form-control mt-3">
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
                {...register("imgURL", { required: true })}
              />
              {errors.imgURL && (
                <span className="label-text-alt text-red-500 mt-2">
                  Image URL is Required!
                </span>
              )}
            </div>
            <div className="form-control mt-3">
              <textarea
                className="textarea textarea-bordered"
                placeholder="Description here"
                {...register("desc", { required: true })}
              ></textarea>
              {errors.desc && (
                <span className="label-text-alt text-red-500 mt-2">
                  Description is Required
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Add</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddService;
