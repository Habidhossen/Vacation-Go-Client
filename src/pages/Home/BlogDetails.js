import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";

const BlogDetails = () => {
  const { blogID } = useParams(); // get blogID from params

  // fetch data from database using react query (Blog)
  const { data: blog, isLoading } = useQuery("blog", () =>
    fetch(`https://vacation-go-server.onrender.com/api/blog/${blogID}`).then(
      (res) => res.json()
    )
  );
  // loading
  if (isLoading) {
    return <Loader />;
  }

  // Destructuring blog data
  const { _id, title, img, desc, date } = blog.data;

  return (
    <section className="px-6 md:px-40 lg:px-40 py-10">
      <div>
        <img className="w-full rounded-md mb-8" src={img} alt="" />
        <div>
          <p className="flex items-center gap-2 text-sm text-text italic mb-1">
            <FaRegCalendar className="text-secondary" />
            {date}
          </p>
          <h1 className="font-fredoka text-heading text-3xl">{title}</h1>
          <p className="py-4 text-text">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
