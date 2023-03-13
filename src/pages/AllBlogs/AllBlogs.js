import { useQuery } from "react-query";
import Blog from "../Home/Blog";
import Loader from "../Shared/Loader/Loader";

const AllBlogs = () => {
  // fetch data from database using react query
  const { data: blogs, isLoading } = useQuery("blogs", () =>
    fetch("http://localhost:5000/api/blog").then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="px-20 py-8">
      <div className="grid grid-cols-1 gap-y-8">
        {blogs.data.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
