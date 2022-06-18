// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination } from "swiper";

const Reviews = () => {
  return (
    <section className="my-16 px-20">
      <div className="flex justify-center items-center gap-3">
        <div className="section-title-bar"></div>
        <div>
          <h1 className="section-title">
            Happy <span>Traveler</span> Says
          </h1>
        </div>
        <div className="section-title-bar"></div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="reviewCard"></div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Reviews;
