import { FaLongArrowAltRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "../../assets/styles/style.css";
import Loader from "../Shared/Loader/Loader";
import Blog from "./Blog";

const Blogs = () => {
  // fetch data from database using react query
  const { data: blogs, isLoading } = useQuery("blogs", () =>
    fetch("http://localhost:5000/blog").then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="my-16 px-20">
      <div className="flex justify-center items-center gap-3 mb-10">
        <div className="section-title-bar"></div>
        <div>
          <h1 className="section-title">
            Top Trending <span>Blogs</span>
          </h1>
        </div>
        <div className="section-title-bar"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <Link to="/blogs" className="section-footer-btn">
          See All Blogs <FaLongArrowAltRight />
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
