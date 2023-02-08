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

// Banner Array
const bannerData = [
  {
    bgImg: banner1,
    titleSpan: "Let's Discover",
    title: "The World Together!",
    desc: "Life is short and the world is wide. Explore a new world with a friendly guide, who takes care of your adventure trip. So let's go",
  },
  {
    bgImg: banner2,
    titleSpan: "Your Perfect",
    title: "Adventure Experience.",
    desc: "Book unique experiences and explore top rated tours. Hopefully it will be your best ever tour. So let's go.",
  },
  {
    bgImg: banner3,
    titleSpan: "Hey! Confirm",
    title: "Your Travel Now.",
    desc: "Life is short and the world is wide. Explore a new world with a friendly guide, who takes care of your adventure trip. So let's go",
  },
];

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
        {bannerData.map((banner) => (
          <SwiperSlide
            className="min-h-screen flex items-center"
            style={{
              background: `linear-gradient(to right, black, transparent), url(${banner.bgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              minHeight: "600px",
            }}
          >
            <div className="flex flex-col justify-start items-start px-20">
              <h1 className="font-fredoka text-6xl leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#48c6ef] to-[#6f86d6]">
                {banner.titleSpan} <br />
                <span className="text-white">{banner.title}</span>{" "}
              </h1>
              <p className="mt-6 mb-8 w-1/2 text-white">{banner.desc}</p>
              <button className="custom-primary-btn">Book now</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
