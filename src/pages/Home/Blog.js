import { FaLongArrowAltRight, FaRegCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/styles/style.css";

const Blog = ({ blog }) => {
  const { _id, img, date, title, desc } = blog;

  return (
    <div className="flex gap-6 items-center px-16">
      <img className="w-96 rounded-md" src={img} alt="" />
      <div>
        <p className="flex items-center gap-2 text-sm text-text mb-1">
          <FaRegCalendar className="text-secondary" />
          {date}
        </p>
        <h1 className="font-fredoka text-heading text-xl">{title}</h1>
        <p className="py-4 text-text text-base">{desc.slice(0, 200) + "..."}</p>
        <Link
          to={`/blog/${_id}`}
          className="flex items-center gap-2 uppercase -tracking-tight text-sm font-bold text-secondary hover:text-primary duration-300"
        >
          Read more <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
