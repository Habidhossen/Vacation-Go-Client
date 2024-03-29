// Import Swiper React components
import { FaLongArrowAltRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../Shared/Loader/Loader";
import Review from "./Review";

const Reviews = () => {
  // fetch data from database using react query
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("https://vacation-go-server.onrender.com/api/review").then((res) =>
      res.json()
    )
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="my-16 px-4 md:px-20 lg:px-20">
      <div className="flex justify-center items-center gap-3 mb-16">
        <div className="section-title-bar"></div>
        <div>
          <h1 className="section-title">
            Happy <span>Traveler</span> Says
          </h1>
        </div>
        <div className="section-title-bar"></div>
      </div>

      <Swiper
        breakpoints={{
          576: {
            slidesPerView: 1,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            // spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            // spaceBetween: 40,
          },
        }}
        effect={"coverflow"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper pb-16"
      >
        {reviews.data
          .map((review) => (
            <SwiperSlide key={review._id}>
              <Review review={review} />
            </SwiperSlide>
          ))
          .reverse()}
      </Swiper>

      <div className="flex justify-end mt-6">
        <Link to="/review" className="section-footer-btn">
          See All Reviews <FaLongArrowAltRight />
        </Link>
      </div>
    </section>
  );
};

export default Reviews;
