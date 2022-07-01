import { FaLongArrowAltRight } from "react-icons/fa";
import { useQuery } from "react-query";
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

  /* const blogsData = [
    {
      _id: 1,
      img: "http://nunforest.com/triptip-demo/upload/top3.jpg",
      date: "20 March 2021",
      title: "Best Ever Tour",
      desc: "Lorem ipsum dolor, sit amet consectetur adi Lorem ipsum dolor, sit amet consectetur adi",
    },
    {
      _id: 2,
      img: "http://nunforest.com/triptip-demo/upload/top3.jpg",
      date: "08 April 2018",
      title: "Wonderful Tour",
      desc: "Lorem ipsum dolor, sit amet consectetur adi Lorem ipsum dolor, sit amet consectetur adi",
    },
    {
      _id: 3,
      img: "http://nunforest.com/triptip-demo/upload/top3.jpg",
      date: "8 February 2021",
      title: "Best Ever Tour",
      desc: "Lorem ipsum dolor, sit amet consectetur adi Lorem ipsum dolor, sit amet consectetur adi",
    },
    {
      _id: 4,
      img: "http://nunforest.com/triptip-demo/upload/top3.jpg",
      date: "8 February 2021",
      title: "Happy Tour and Travel",
      desc: "Lorem ipsum dolor, sit amet consectetur adi Lorem ipsum dolor, sit amet consectetur adi",
    },
  ]; */

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
        <button className="section-footer-btn">
          See All Blogs <FaLongArrowAltRight />
        </button>
      </div>
    </section>
  );
};

export default Blogs;
