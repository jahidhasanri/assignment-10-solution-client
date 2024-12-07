import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <Swiper
      className="w-[300px] h-[400px] pt-[100px] md:w-11/12 xl:w-[1400px] lg:h-[700px] mx-auto border mt-20 "
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="w-full h-full bg-white">
          <img
            className="w-full h-full"
            src="https://i.ibb.co.com/S7Vp3N9/sports-equipment-assorted-including-basketball-soccer-ball-tennis-ball-baseball-tennis-racket-footba.webp"
            alt="Slide 1"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full bg-white">
          <img
            className="w-full h-full"
            src="https://i.ibb.co.com/bFDVBF4/istockphoto-499130315-612x612.jpg"
            alt="Slide 2"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full bg-white">
          <img
            className="w-full h-full"
            src="https://i.ibb.co.com/Jm6ZKyK/pngtree-most-used-sports-equipment-in-new-hampshire-image-13169643.png"
            alt="Slide 3"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[400px] lg:h-full bg-white">
          <img
            className="w-full h-[400px] bg-cover lg:h-full"
            src="https://i.ibb.co.com/TkgcZVG/Gym-Slider.jpg"
            alt="Slide 4"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
