import { useQuery } from "react-query";
import Review from "../Home/Review";
import Loader from "../Shared/Loader/Loader";

const AllReviews = () => {
  // fetch data from database using react query
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("http://localhost:5000/api/review").then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="px-20 py-8">
      <div className="grid grid-cols-3 gap-6">
        {reviews.data
          .map((review) => <Review key={review._id} review={review} />)
          .reverse()}
      </div>
    </div>
  );
};

export default AllReviews;
