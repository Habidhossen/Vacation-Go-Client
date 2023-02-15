import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";

const BlogDetails = () => {
  const { blogID } = useParams(); // get blogID from params

  // fetch data from database using react query (Blog)
  const { data: blog, isLoading } = useQuery("blog", () =>
    fetch(`http://localhost:5000/blog/${blogID}`).then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      <div className="flex gap-6 items-center px-16">
        <img className="w-96 rounded-md" src={blog.imgURL} alt="" />
        <div>
          <p className="flex items-center gap-2 text-sm text-text italic mb-1">
            <FaRegCalendar className="text-secondary" />
            {blog.date}
          </p>
          <h1 className="font-fredoka text-heading text-xl">{blog.title}</h1>
          <p className="py-4 text-text">{blog.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
