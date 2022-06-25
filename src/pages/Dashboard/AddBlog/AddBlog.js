import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddBlog = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // submit button
  const onSubmit = (blogData) => {
    // send data to the server
    fetch("http://localhost:5000/blog", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then((response) => response.json())
      .then((data) => data);
    toast.success("Blog added successfully", {
      theme: "colored",
      autoClose: 2000,
    });
    reset();
  };

  return (
    <section className="mt-16">
      <div className="card w-96 mx-auto shadow-sm bg-base-100">
        <div className="card-body">
          <h1 className="text-center text-xl font-bold mb-4">Add Blog</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Blog Title"
                className="input input-bordered"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="label-text-alt text-red-500 mt-2">
                  Blog Title is Required!
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

export default AddBlog;
