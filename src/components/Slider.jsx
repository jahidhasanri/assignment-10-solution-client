import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <Swiper
      className="w-full h-[400px] pt-[100px] lg:h-[650px] mx-auto  mt-20 "
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="w-full h-full bg-white mt-5">
          <img
            className="w-full h-full"
            src="https://i.ibb.co.com/8D4xNmG/freepik-upload-4417.jpg"
            alt="Slide 1"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full bg-white mt-5">
          <img
            className="w-full h-full"
            src="https://i.ibb.co.com/25pmjMy/freepik-upload-85916.jpg"
            alt="Slide 2"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full bg-white mt-5">
          <img
            className="w-full h-full"
            src="https://i.ibb.co.com/Jm6ZKyK/pngtree-most-used-sports-equipment-in-new-hampshire-image-13169643.png"
            alt="Slide 3"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[400px] lg:h-full bg-white mt-5">
          <img
            className="w-full h-[400px] bg-cover lg:h-full"
            src="https://i.ibb.co.com/rsp1rtf/top-view-composition-with-neatly-arranged-organized-sport-items.jpg"
            alt="Slide 4"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
