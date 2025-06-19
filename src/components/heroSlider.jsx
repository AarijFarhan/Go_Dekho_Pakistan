import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const slides = [
    { img: '/banner1.jpg', text: 'Go Dekho Pakistan Where you Grow with your Society.', para: 'Go Dekho Pakistan focuses on marketing of local brands and their branding at a minimal budget, through our Application all over the Pakistan.' },
    { img: '/banner-2.jpg', text: 'Whe are Trusted By Over a Thousand of Costomers', para: 'With this opportunity you get your products visible to our millions of customers' },
    { img: '/banner-3.jpg', text: 'Create your Own Market on Go Dekho', para: 'Go Dekho Pakistan provides a platform, where you get a chance to learn &amp; earn at the same time.'}
  ];

  return (
    <div className="relative w-full h-[85vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                {activeIndex === idx ? (
                  <motion.div
                    key={slide.text + activeIndex} // forces remount
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="text-white px-4 py-2 rounded drop-shadow-lg text-center"
                  >
                    <div className='flex flex-col gap-5'>
                      <div className=' text-4xl font-bold'>{slide.text}</div>
                      <div className='text-xl'>{slide.para}</div>
                      
                      
                    </div>

                    
                  </motion.div>

                ) : (
                  <div className="text-white  px-4 py-2 rounded drop-shadow-lg text-center opacity-0 ">
                    <div className='text-4xl font-bold'>
                      {slide.text}
                    </div>
                    <div className='text-2xl'>
                      {slide.para}
                    </div>
                  </div>

                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
