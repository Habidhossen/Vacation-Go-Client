import { FiTrash2 } from "react-icons/fi";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loader from "../../Shared/Loader/Loader";

const ManageBlog = () => {
  // fetch data from database using react query
  const {
    data: blogs,
    isLoading,
    refetch,
  } = useQuery("blog", () =>
    fetch("http://localhost:5000/api/blog").then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  // handle service delete button
  const handleBlogDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to Delete?");

    if (confirm) {
      fetch(`http://localhost:5000/api/blog/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Blog deleted successfully", {
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
          All Blogs ({blogs.data.length})
        </h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Blog ID</th>
              <th>Title</th>
              <th>Post Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {blogs.data.map((blog) => (
              <tr key={blog._id}>
                <td>{blog._id}</td>
                <td>{blog.title}</td>
                <td>{blog.date}</td>
                <td>
                  <button onClick={() => handleBlogDelete(blog._id)}>
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

export default ManageBlog;
