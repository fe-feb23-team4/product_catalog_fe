import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './Slider.scss';
import {
  A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar,
} from 'swiper';

export const Slider = () => {
  return (
    <div className="main-banner">
      <Swiper
        // eslint-disable-next-line max-len
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        <SwiperSlide>
          <img
            src="/product_catalog_fe/carousel/carousel_1.jpg"
            alt="carousel"
            className="carousel-img"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/product_catalog_fe/carousel/carousel_2.jpg"
            alt="carousel"
            className="carousel-img"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/product_catalog_fe/carousel/carousel_3.jpg"
            alt="carousel"
            className="carousel-img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
