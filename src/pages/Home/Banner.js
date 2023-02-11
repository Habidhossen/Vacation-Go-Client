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
    desc: "Traveling is a way to expand your horizons and experience new cultures, landscapes, and ways of life. It provides an escape from the routine and offers opportunities for personal growth and discovery.",
  },
  {
    bgImg: banner2,
    titleSpan: "Your Perfect",
    title: "Adventure Experience.",
    desc: "Touring with a professional guide enhances your travel experience by providing insider knowledge and customized itineraries that maximize your time and enjoyment. From visiting iconic landmarks to exploring hidden gems, touring is a sure way to create lasting memories.",
  },
  {
    bgImg: banner3,
    titleSpan: "Hey! Confirm",
    title: "Your Travel Now.",
    desc: "Travel and tours offer something for everyone, from relaxed vacations to action-packed adventures. So, whether you're a seasoned traveler or just starting out, book your next trip today and embrace the wonders of the world.",
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
