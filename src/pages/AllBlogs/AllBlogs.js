import { useQuery } from "react-query";
import Blog from "../Home/Blog";
import Loader from "../Shared/Loader/Loader";

const AllBlogs = () => {
  // fetch data from database using react query
  const { data: blogs, isLoading } = useQuery("blogs", () =>
    fetch("https://vacation-go-server.onrender.com/api/blog").then((res) =>
      res.json()
    )
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="py-8 px-6 md:px-20 lg:px-20">
      <div className="grid grid-cols-1 gap-y-8">
        {blogs.data.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
