import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import cl from './ProductSlider.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

export function ProductSlider() {
  const images = [
    'https://via.placeholder.com/50x50',
    'https://via.placeholder.com/50x50',
    'https://via.placeholder.com/50x50',
    'https://via.placeholder.com/50x50',
    'https://via.placeholder.com/50x50',
  ];

  const pagination = {
    clickable: true,
    renderBullet(index: number, className: string) {
      return `
        <span class="${className} ${cl.paginationBullet}">
          <img src="${images[index]}" alt="Slider Image" class="${cl.paginationBulletImage}" />
        </span>
      `;
    },
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className={cl.slide}>Slide 1</SwiperSlide>
      <SwiperSlide className={cl.slide}>Slide 2</SwiperSlide>
      <SwiperSlide className={cl.slide}>Slide 3</SwiperSlide>
      <SwiperSlide className={cl.slide}>Slide 4</SwiperSlide>
      <SwiperSlide className={cl.slide}>Slide 5</SwiperSlide>
    </Swiper>
  );
}
