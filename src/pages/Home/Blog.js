import "../../assets/styles/style.css";

const Blog = ({ blog }) => {
  const { imgURL, date, title, desc } = blog;

  return (
    <div className="blog-card">
      <img className="blog-card-img" src={imgURL} alt="" />
      <div>
        <p className="blog-card-date">{date}</p>
        <h1 className="blog-card-title">{title}</h1>
        <p className="blog-card-desc">{desc}</p>
        <button className="blog-card-btn">Read more...</button>
      </div>
    </div>
  );
};

export default Blog;
