// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import ImageBanner from './ImageBanner';


export const SliderImage = () => {

    {

        SwiperCore.use([Autoplay])

        return (
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                    delay: 2000
                }}
            >
                <SwiperSlide>{<ImageBanner src='/images/sliders/interior.jpg' />} </SwiperSlide>
                <SwiperSlide>{<ImageBanner src='/images/sliders/interior2.jpg' />}</SwiperSlide>
                <SwiperSlide>{<ImageBanner src='/images/sliders/interior3.jpg' />}</SwiperSlide>
                
            </Swiper>
        );
    };
}