import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const carrouselBiography = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="/images/marks/mark1.png" /></SwiperSlide>
                <SwiperSlide><img src="/images/marks/mark2.png" /></SwiperSlide>
                <SwiperSlide><img src="/images/marks/mark3.png" /></SwiperSlide>
                <SwiperSlide><img src="/images/marks/mark4.png" /></SwiperSlide>
                <SwiperSlide><img src="/images/marks/mark5.png" /></SwiperSlide>
                <SwiperSlide><img src="/images/marks/mark6.png" /></SwiperSlide>
            </Swiper>
        </>
    );
}



export default carrouselBiography