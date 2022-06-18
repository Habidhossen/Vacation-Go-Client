// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/styles/style.css";

// Import Swiper styles
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// Import images
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
          className="min-h-screen flex items-center"
          style={{
            background: `linear-gradient(to right, white, transparent), url(${banner1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: "600px",
          }}
        >
          <div className="flex flex-col justify-start items-start px-20">
            <h1 className="text-6xl font-bold leading-snug uppercase">
              Let's <span className="text-[#fc5b62]">Discover</span> <br />
              The World Together!
            </h1>
            <p className="mt-6 mb-8 w-1/2">
              Life is short and the world is wide. Explore a new world with a
              friendly guide, who takes care of your adventure trip. So let's
              go.
            </p>
            <button className="btn btn-primary">Explore now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="min-h-screen flex items-center"
          style={{
            background: `linear-gradient(to right, white, transparent), url(${banner2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: "600px",
          }}
        >
          <div className="flex flex-col justify-start items-start px-20">
            <h1 className="text-6xl font-bold leading-snug uppercase">
              Your Perfect <br />
              <span className="text-[#fc5b62]">Adventure</span> Experience!
            </h1>
            <p className="mt-6 mb-8 w-1/2">
              Life is short and the world is wide. Explore a new world with a
              friendly guide, who takes care of your adventure trip. So let's
              go.
            </p>
            <button className="btn btn-primary">Explore now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="min-h-screen flex items-center"
          style={{
            background: `linear-gradient(to right, white, transparent), url(${banner3})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: "600px",
          }}
        >
          <div className="flex flex-col justify-start items-start px-20">
            <h1 className="text-6xl font-bold leading-snug uppercase">
              Book Your <br />
              <span className="text-[#fc5b62]">Travel</span> Now!
            </h1>
            <p className="mt-6 mb-8 w-1/2">
              Book unique experiences and explore top rated tours. Hopefully it
              will be your best ever tour. So let's go.
            </p>
            <button className="btn btn-primary">Explore now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
