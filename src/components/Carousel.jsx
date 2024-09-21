// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Slide from "./Slide";

export default function Carousel() {
  return (
    <div className="mb-6">
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={
              "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            text="Stay Ahead with the Latest Tech Trends"
            paragraph="Join a thriving community of developers sharing their best projects, tools, and insights. Find inspiration, collaborate, and grow together!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={
              "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            text="Stay Ahead with the Latest Tech Trends"
            paragraph="From AI innovations to cutting-edge frameworks, keep up with the most exciting advancements in technology. Learn, adapt, and build the future."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={
              "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            text="Spotlight Your Work to the World"
            paragraph="Submit your project, gain exposure, and receive feedback from the global developer community. Let your work shine in the spotlight."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
