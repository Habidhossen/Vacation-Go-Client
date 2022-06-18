// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import React-Icon
import { FaLongArrowAltRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import Review from "./Review";

const Reviews = () => {
  const reviewsDate = [
    {
      _id: 1,
      name: "Flinn J.",
      msg: "It's really wonderful. I could probably go into sales for you. After using car my business skyrocketed! I love your system.",
      rating: "5.00",
      image:
        "https://media.creativemornings.com/uploads/user/avatar/268533/cv_self_portrait_b_w_square.jpg",
    },
    {
      _id: 2,
      name: "Lilias G.",
      msg: "It's incredible. Car is worth much more than I paid. I would like to personally thank you for your outstanding product.",
      rating: "4.00",
      image:
        "https://www.allgaeuherz.de/wp-content/uploads/2019/07/portrait-square-10.jpg",
    },
    {
      _id: 3,
      name: "Joel P.",
      msg: "I'm good to go. I could probably go into sales for you. It's the perfect solution for our business. It's the perfect solution for our business.",
      rating: "3.00",
      image:
        "https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
    },
    {
      _id: 4,
      name: "Berri L.",
      msg: "Products is the real deal! I would also like to say thank you to all your staff. I can't say enough about products. It fits our needs perfectly.",
      rating: "5.00",
      image:
        "https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
    },
    {
      _id: 5,
      name: "Welby J.",
      msg: "It's the perfect solution for our business. We're loving it. Man, this thing is getting better and better as I learn more about it.",
      rating: "4.00",
      image:
        "https://media.creativemornings.com/uploads/user/avatar/268533/cv_self_portrait_b_w_square.jpg",
    },
    {
      _id: 6,
      name: "Celestyna T.",
      msg: "Products is awesome! Your company is truly upstanding and is behind its product 100%. Thank You!",
      rating: "4.00",
      image:
        "http://www.tashschool.org/wp-content/uploads/2019/09/portrait-square-08.jpg",
    },
  ];

  return (
    <section className="my-16 px-20">
      <div className="flex justify-center items-center gap-3 mb-10">
        <div className="section-title-bar"></div>
        <div>
          <h1 className="section-title">
            Happy <span>Traveler</span> Says
          </h1>
        </div>
        <div className="section-title-bar"></div>
      </div>
      <Swiper
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
        slidesPerView={"3"}
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
        {reviewsDate.map((review) => (
          <SwiperSlide>
            <Review key={review._id} review={review} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-end mt-6">
        <button className="section-footer-btn">
          See All Reviews <FaLongArrowAltRight />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
