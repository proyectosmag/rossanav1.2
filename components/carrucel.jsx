import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Carousel = (item) => (
    <AliceCarousel className="xxx"
        autoPlay
        autoPlayInterval={2000}
        animationDuration={2000}
        animationType="fadeout"
        disableButtonsControls
        autoWidth
        autoHeight
        infinite
        mouseTracking
        items={item.item}
    />
);
export default Carousel