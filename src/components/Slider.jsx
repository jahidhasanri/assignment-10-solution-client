import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <Swiper 
            className='w-[300px] h-[400px] pt-[100px] md:w-11/12  xl:w-[1400px] lg:h-[700px] mx-auto border'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className='w-full h-full'>
                    <img 
                        className='w-full h-full ' 
                        src="https://i.ibb.co.com/BZFbD2S/istockphoto-175683115-612x612.jpg" 
                        alt="Slide 1" 
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-full'>
                    <img 
                        className='w-full h-full ' 
                        src="https://i.ibb.co.com/Jm6ZKyK/pngtree-most-used-sports-equipment-in-new-hampshire-image-13169643.png" 
                        alt="Slide 2" 
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-[400px]  lg:h-full'>
                    <img 
                        className='w-full h-[400px] bg-cover lg: lg:h-full ' 
                        src="https://i.ibb.co.com/RCX611G/variety-sport-balls-equipment-front-260nw-1376249879.webp" 
                        alt="Slide 3" 
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;