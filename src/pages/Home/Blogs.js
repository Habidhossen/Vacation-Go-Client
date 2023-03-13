import { FaLongArrowAltRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "../../assets/styles/style.css";
import Loader from "../Shared/Loader/Loader";
import Blog from "./Blog";

const Blogs = () => {
  // fetch data from database using react query
  const { data: blogs, isLoading } = useQuery("blogs", () =>
    fetch("http://localhost:5000/api/blog").then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="py-16 px-20">
      <div className="flex justify-center items-center gap-3 mb-16">
        <div className="section-title-bar"></div>
        <div>
          <h1 className="section-title">
            Top Trending <span>Blogs</span>
          </h1>
        </div>
        <div className="section-title-bar"></div>
      </div>

      <div className="grid grid-cols-1 gap-y-8">
        {blogs.data
          .map((blog) => <Blog key={blog._id} blog={blog} />)
          .reverse()}
      </div>

      <div className="flex justify-end mt-6">
        <Link to="/blog" className="section-footer-btn">
          See All Blogs <FaLongArrowAltRight />
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
