import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import bannerImg1 from '../../../assets/BannerImg/education-banner-4.jpg'
import bannerImg2 from '../../../assets/BannerImg/education-banner-5.jpg'
import bannerImg3 from '../../../assets/BannerImg/education-banner-2.jpg'
import bannerImg4 from '../../../assets/BannerImg/education-banner-1.jpg'
import bannerImg5 from '../../../assets/BannerImg/education-banner-3.jpg'
import bannerImg6 from '../../../assets/BannerImg/education-banner-6.jpg'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Swiper
      spaceBetween={30}
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
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper max-h-screen"
    >
      <SwiperSlide>
        <img src={bannerImg1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerImg2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerImg3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerImg4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerImg5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerImg6} alt="" />
      </SwiperSlide>
      {/* <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
      <span ref={progressContent}></span>
      <div className="autoplay-progress hidden" slot="container-end">
        <svg ref={progressCircle}>
          <circle className='hidden' cx="24" cy="24" r="20"></circle>
        </svg>
      </div>
    </Swiper>


  );
};

export default Banner;

// <AwesomeSlider animation="cubeAnimation">
//   <div>
//     <img src={bannerImg1} alt="" />
//   </div>
//   <div>
//     <img src={bannerImg2} alt="" />
//   </div>
//   <div>
//     <img src={bannerImg3} alt="" />
//   </div>
//   <div>
//     <img src={bannerImg4} alt="" />
//   </div>
// </AwesomeSlider>
// <AwesomeSlider
//   media={[
//     {
//       source: '/path/to/image-0.png',
//     },
//     {
//       source: '/path/to/image-1.png',
//     },
//     {
//       source: '/path/to/image-2.png',
//     },
//   ]}
// />