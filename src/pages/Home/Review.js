import "../../assets/styles/style.css";

const Review = ({ review }) => {
  const { img, name, rating, msg } = review;

  const reviewIcon = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="#fdb819"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </>
  );

  return (
    <div className="flex flex-col items-center text-center px-7 py-6 rounded-lg shadow-sm bg-white">
      <img className="w-14 h-14 rounded-full" src={img} alt="" />
      <div className="flex justify-between w-full py-4 px-6">
        <div>
          {rating === 1 && <span className="flex">{reviewIcon}</span>}
          {rating === 2 && (
            <span className="flex">
              {reviewIcon} {reviewIcon}
            </span>
          )}
          {rating === 3 && (
            <span className="flex">
              {reviewIcon} {reviewIcon} {reviewIcon}
            </span>
          )}
          {rating === 4 && (
            <span className="flex">
              {reviewIcon} {reviewIcon} {reviewIcon} {reviewIcon}
            </span>
          )}
          {rating === 5 && (
            <span className="flex">
              {reviewIcon} {reviewIcon} {reviewIcon} {reviewIcon} {reviewIcon}
            </span>
          )}
        </div>
        <div>
          <p>{rating} star</p>
        </div>
      </div>
      <p className="text-sm text-text mb-3">&#8220; {msg} &#8221;</p>
      <h1 className="font-bold text-sm text-heading">&#8212; {name}</h1>
    </div>
  );
};

export default Review;
