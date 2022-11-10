import { Box } from "@chakra-ui/react";
import React from "react";
import { Autoplay, Controller, Pagination, Scrollbar, Zoom } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSlider: React.FC<{}> = () => {
  return (
    <Box>
      <Swiper
        // install Swiper modules
        modules={[
          // Navigation,
          Pagination,
          Scrollbar,
          Autoplay,
          Controller,
          Zoom,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide
          style={{
            backgroundImage: `url('https://raw.githubusercontent.com/MHRafix/ASIA-ADVANTURE-CLIENT-SIDE/main/src/Images/Slider_images/winter_city.jpg')`,
            height: "550px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HomeSlider;
