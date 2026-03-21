import React from "react";
import { cards } from "./MiniProjectCard/Cards";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MinorProject() {
  return (
    <section
      className="w-full h-screen py-6 
                 bg-gradient-to-br from-white/80 to-blue-100 
                 dark:from-[#0d0221] dark:to-[#232526] 
                 text-gray-800 dark:text-white tracking-wide leading-relaxed"
    >
      <header>
        <h1 className="text-2xl md:text-3xl text-center font-bold py-3 pt-6">
          Experimental Projects
        </h1>
        <div className="w-10 h-1 bg-blue-500 hover:w-24 transition-all duration-200 rounded-2xl mx-auto mt-2" />
      </header>

      <main className="w-full h-full mt-8">
        <div className="slider-container max-w-[92rem] mx-auto">
          <Swiper
            slidesPerView={1}
            loop={true}
            keyboard={{ enabled: true, onlyInViewport: true, pageUpDown: true }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation, Keyboard]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 1,
              },
              720: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center px-10 py-10">
                  <div>{card}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </section>
  );
}
