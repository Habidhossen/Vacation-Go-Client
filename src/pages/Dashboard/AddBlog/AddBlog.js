import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddBlog = () => {
  // get current date and formatted too
  const date = new Date().toDateString().split(" ");
  const currentDate = date[2] + " " + date[1] + " " + date[3];
  console.log(currentDate);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // submit button
  const onSubmit = (data) => {
    const img = data.img;
    const title = data.title;
    const desc = data.desc;
    const date = currentDate;
    const blogData = { img, title, desc, date };

    // send data to the server
    fetch("https://vacation-go-server.onrender.com/api/blog", {
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
                {...register("img", { required: true })}
              />
              {errors.img && (
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
