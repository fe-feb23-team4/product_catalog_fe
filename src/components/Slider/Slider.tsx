import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './Slider.scss';
import {
  A11y, EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper';

export const Slider = () => {
  return (
    <div className="main-banner">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        <SwiperSlide>
          <img
            src="/product_catalog_fe/carousel/carousel_1.png"
            alt="carousel"
            className="carousel-img"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/product_catalog_fe/carousel/carousel_007.png"
            alt="carousel"
            className="carousel-img"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/product_catalog_fe/carousel/carousel_008.png"
            alt="carousel"
            className="carousel-img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
