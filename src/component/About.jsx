import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";

// Import Swiper styles
import 'swiper/css';

function About(){
    return(
        <div className="App p-4 mt-5 mb-5 border border-4">
          <h3>This is About Us Page.</h3>
          <p className="mb-4"><b>Disclamer:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{  }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><img style={{width:"100%"}} src={img1} alt="img1"></img></SwiperSlide>
            <SwiperSlide><img style={{width:"100%"}} src={img2} alt="img1"></img></SwiperSlide>
          </Swiper>
        </div>
    )
}

export default About;